// ── Tab switching ─────────────────────────────────────
function switchTab(cat, btn) {
  document.querySelectorAll('.menu-cat').forEach(c => c.classList.remove('active'));
  document.querySelectorAll('.menu-tab').forEach(b => {
    b.classList.remove('active');
    b.setAttribute('aria-selected','false');
  });
  document.getElementById('cat-' + cat).classList.add('active');
  btn.classList.add('active');
  btn.setAttribute('aria-selected','true');
}

// ── Mobile menu ───────────────────────────────────────
function toggleMenu() {
  const m = document.getElementById('mobileMenu');
  m.classList.toggle('open');
  document.getElementById('hbg').setAttribute('aria-expanded', m.classList.contains('open'));
}

// ── Nav scroll class ──────────────────────────────────
window.addEventListener('scroll', () => {
  document.getElementById('mainNav').classList.toggle('scrolled', window.scrollY > 20);
}, { passive: true });

// ── Scroll reveal ─────────────────────────────────────
const revealObs = new IntersectionObserver(entries => {
  entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); });
}, { threshold: 0.12 });
document.querySelectorAll('.reveal').forEach(el => revealObs.observe(el));

// ── Helpers ───────────────────────────────────────────
function parsePriceNum(str) {
  return parseFloat(str.replace(/[€\s]/g,'').replace(',','.')) || 0;
}
function fmtPrice(n) {
  return n.toFixed(2).replace('.', ',') + ' €';
}

// ── Extras per category ───────────────────────────────
const EXTRAS = {
  smash: [
    { name: 'extra Rindfleisch Patty (100g)', price: 3.00 },
    { name: 'Bacon',                           price: 2.00 },
    { name: 'Cheddar',                         price: 1.50 },
    { name: 'Spiegelei',                       price: 1.50 },
    { name: 'Jalapeños',                       price: 0.50 },
  ],
  'smash-menu': [
    { name: 'extra Rindfleisch Patty (100g)', price: 3.00 },
    { name: 'Bacon',                           price: 2.00 },
    { name: 'Cheddar',                         price: 1.50 },
    { name: 'Spiegelei',                       price: 1.50 },
    { name: 'Jalapeños',                       price: 0.50 },
  ],
  chicken: [
    { name: 'Bacon',     price: 2.00 },
    { name: 'Cheddar',   price: 1.50 },
    { name: 'Jalapeños', price: 0.50 },
  ],
  taco: [
    { name: 'extra Fleisch',  price: 3.00 },
    { name: 'Bacon',          price: 2.00 },
    { name: 'Cheddar',        price: 1.50 },
    { name: 'Jalapeños',      price: 0.50 },
  ],
  mac: [
    { name: 'Bacon',     price: 2.00 },
    { name: 'Cheddar',   price: 1.50 },
    { name: 'Spiegelei', price: 1.50 },
  ],
  snacks: [],
};

// ══════════════════════════════════════════════════════
//  ORDER MODAL (single item configurator)
// ══════════════════════════════════════════════════════
let ORDER = { name:'', basePrice:0, qty:1, extras:[], cat:'' };

function recalcTotal() {
  const extSum = ORDER.extras.reduce((s, e) => s + e.price, 0);
  document.getElementById('omodalTotal').textContent = fmtPrice((ORDER.basePrice + extSum) * ORDER.qty);
}

function changeQty(d) {
  ORDER.qty = Math.max(1, Math.min(10, ORDER.qty + d));
  document.getElementById('omodalQty').textContent = ORDER.qty;
  recalcTotal();
}

function buildExtras(cat) {
  const list  = document.getElementById('omodalExtras');
  const wrap  = document.getElementById('omodalExtrasWrap');
  const items = EXTRAS[cat] || [];
  list.innerHTML = '';
  wrap.style.display = items.length ? '' : 'none';
  items.forEach(ex => {
    const row = document.createElement('div');
    row.className = 'extra-row';
    // Safe: ex.name comes from hardcoded EXTRAS object
    const chk = document.createElement('div');
    chk.className = 'extra-chk';
    chk.innerHTML = '<svg viewBox="0 0 12 12" fill="none"><path d="M2 6l3 3 5-5" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>';
    const nameSpan = document.createElement('span');
    nameSpan.className = 'extra-name';
    nameSpan.textContent = 'mit ' + ex.name;
    const priceSpan = document.createElement('span');
    priceSpan.className = 'extra-price-tag';
    priceSpan.textContent = '+' + fmtPrice(ex.price);
    row.appendChild(chk);
    row.appendChild(nameSpan);
    row.appendChild(priceSpan);
    row.addEventListener('click', () => {
      row.classList.toggle('checked');
      if (row.classList.contains('checked')) {
        ORDER.extras.push(ex);
      } else {
        ORDER.extras = ORDER.extras.filter(x => x !== ex);
      }
      recalcTotal();
    });
    list.appendChild(row);
  });
}

function openOrder(name, price, cat) {
  ORDER = { name, basePrice: parsePriceNum(price), qty: 1, extras: [], cat };
  document.getElementById('omodalName').textContent  = name;
  document.getElementById('omodalPrice').textContent = price;
  document.getElementById('omodalQty').textContent   = '1';
  buildExtras(cat);
  recalcTotal();
  document.getElementById('omodal').classList.add('open');
  document.body.style.overflow = 'hidden';
  lucide.createIcons({ nodes: [document.getElementById('omodal')] });
}

function closeOrder() {
  document.getElementById('omodal').classList.remove('open');
  document.body.style.overflow = '';
}

// ── Add current ORDER to CART ─────────────────────────
function addToCart() {
  CART.push({
    id: ++cartIdCounter,
    name:      ORDER.name,
    basePrice: ORDER.basePrice,
    qty:       ORDER.qty,
    extras:    [...ORDER.extras],
    cat:       ORDER.cat,
  });
  updateCartUI();
  closeOrder();
  showToast(ORDER.name + ' hinzugefügt');
}

// ══════════════════════════════════════════════════════
//  WARENKORB STATE
// ══════════════════════════════════════════════════════
let CART          = [];
let cartIdCounter = 0;
let cartOrderType = 'abholung';
let cartSelAddr   = '';
let addrTimer     = null;
let addrAbort     = null;
const addrCache   = new Map();

function cartTotal() {
  return CART.reduce((sum, item) => {
    const extSum = item.extras.reduce((s, e) => s + e.price, 0);
    return sum + (item.basePrice + extSum) * item.qty;
  }, 0);
}

function updateCartUI() {
  const count = CART.reduce((n, i) => n + i.qty, 0);
  const badge    = document.getElementById('cartBadge');
  const mobBadge = document.getElementById('mobCartBadge');
  if (badge)    { badge.textContent    = count; badge.classList.toggle('has-items', count > 0); }
  if (mobBadge) { mobBadge.textContent = count; mobBadge.classList.toggle('has-items', count > 0); }
  renderCartItems();
  document.getElementById('cartTotal').textContent = fmtPrice(cartTotal());
}

function renderCartItems() {
  const container = document.getElementById('cartItems');
  const empty     = document.getElementById('cartEmpty');
  const footer    = document.getElementById('cartFooter');
  container.innerHTML = '';

  if (CART.length === 0) {
    empty.style.display  = 'flex';
    footer.style.display = 'none';
    return;
  }
  empty.style.display  = 'none';
  footer.style.display = '';

  CART.forEach(item => {
    const extSum   = item.extras.reduce((s, e) => s + e.price, 0);
    const itemTotal = (item.basePrice + extSum) * item.qty;

    const div = document.createElement('div');
    div.className = 'cart-item';

    // Info column
    const info = document.createElement('div');
    info.className = 'cart-item-info';

    const nameEl = document.createElement('div');
    nameEl.className = 'cart-item-name';
    nameEl.textContent = item.name;           // textContent – XSS safe
    info.appendChild(nameEl);

    if (item.extras.length) {
      const extEl = document.createElement('div');
      extEl.className = 'cart-item-extras';
      extEl.textContent = item.extras.map(e => 'mit ' + e.name).join(', ');
      info.appendChild(extEl);
    }

    // Qty controls
    const qtyRow = document.createElement('div');
    qtyRow.className = 'cart-item-qty-row';

    const minusBtn = document.createElement('button');
    minusBtn.className = 'cart-qty-btn';
    minusBtn.textContent = '−';
    minusBtn.setAttribute('aria-label', 'Menge verringern');
    minusBtn.onclick = () => { changeCartItemQty(item.id, -1); };

    const qtyNum = document.createElement('span');
    qtyNum.className = 'cart-qty-num';
    qtyNum.textContent = item.qty;

    const plusBtn = document.createElement('button');
    plusBtn.className = 'cart-qty-btn';
    plusBtn.textContent = '+';
    plusBtn.setAttribute('aria-label', 'Menge erhöhen');
    plusBtn.onclick = () => { changeCartItemQty(item.id, 1); };

    qtyRow.appendChild(minusBtn);
    qtyRow.appendChild(qtyNum);
    qtyRow.appendChild(plusBtn);
    info.appendChild(qtyRow);

    // Price
    const priceEl = document.createElement('div');
    priceEl.className = 'cart-item-price';
    priceEl.textContent = fmtPrice(itemTotal);

    // Remove button
    const removeBtn = document.createElement('button');
    removeBtn.className = 'cart-item-remove';
    removeBtn.setAttribute('aria-label', 'Artikel entfernen');
    removeBtn.innerHTML = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" width="16" height="16"><polyline points="3 6 5 6 21 6"/><path d="M19 6v14a2 2 0 01-2 2H7a2 2 0 01-2-2V6m3 0V4a1 1 0 011-1h4a1 1 0 011 1v2"/></svg>';
    removeBtn.onclick = () => { removeFromCart(item.id); };

    div.appendChild(info);
    div.appendChild(priceEl);
    div.appendChild(removeBtn);
    container.appendChild(div);
  });
}

function changeCartItemQty(id, delta) {
  const item = CART.find(i => i.id === id);
  if (!item) return;
  item.qty = Math.max(1, Math.min(10, item.qty + delta));
  updateCartUI();
}

function removeFromCart(id) {
  CART = CART.filter(i => i.id !== id);
  updateCartUI();
}

// ── Cart Drawer open/close ────────────────────────────
function openCart() {
  renderCartItems();
  document.getElementById('cartTotal').textContent = fmtPrice(cartTotal());
  document.getElementById('cartOverlay').classList.add('open');
  document.getElementById('cartDrawer').classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeCart() {
  document.getElementById('cartOverlay').classList.remove('open');
  document.getElementById('cartDrawer').classList.remove('open');
  document.body.style.overflow = '';
}

// ── Cart delivery type ────────────────────────────────
function setCartOrderType(type) {
  cartOrderType = type;
  document.querySelectorAll('#cartDrawer .type-btn').forEach(b =>
    b.classList.toggle('active', b.dataset.type === type)
  );
  const wrap = document.getElementById('cartAddrWrap');
  wrap.style.display = type === 'lieferung' ? '' : 'none';
  if (type !== 'lieferung') { cartSelAddr = ''; clearCartAddr(); }
}

function clearCartAddr() {
  const inp = document.getElementById('cartAddrInput');
  if (inp) inp.value = '';
  cartSelAddr = '';
  hideSugg();
}

// ── Send cart via WhatsApp ────────────────────────────
function sendCartWhatsApp() {
  if (CART.length === 0) return;
  if (cartOrderType === 'lieferung' && !cartSelAddr) {
    const inp = document.getElementById('cartAddrInput');
    inp.focus();
    inp.style.borderColor = 'rgba(255,90,31,.8)';
    setTimeout(() => { inp.style.borderColor = ''; }, 1800);
    return;
  }
  let msg = 'Hallo, ich möchte bestellen:\n\n';
  CART.forEach((item, i) => {
    const extSum    = item.extras.reduce((s, e) => s + e.price, 0);
    const itemTotal = (item.basePrice + extSum) * item.qty;
    if (i > 0) msg += '\n';
    msg += '🍔 ' + item.qty + '× ' + item.name + ' – ' + fmtPrice(item.basePrice);
    if (item.extras.length) {
      item.extras.forEach(e => { msg += '\n  ✓ mit ' + e.name + ' (+' + fmtPrice(e.price) + ')'; });
    }
    msg += '\n  Zwischensumme: ' + fmtPrice(itemTotal);
  });
  msg += '\n\n💰 Gesamt: ' + fmtPrice(cartTotal());
  if (cartOrderType === 'lieferung') {
    msg += '\n\n📍 Lieferung an: ' + cartSelAddr;
  } else {
    msg += '\n\n🏪 Abholung vor Ort (Zwickauer Straße 278)';
  }
  msg += '\n\nBitte um Bestätigung. Danke!';
  window.open('https://wa.me/491774499487?text=' + encodeURIComponent(msg), '_blank');
  closeCart();
}

// ── Toast ─────────────────────────────────────────────
let toastTimer = null;
function showToast(text) {
  const toast = document.getElementById('cartToast');
  document.getElementById('cartToastText').textContent = text;
  toast.classList.add('show');
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => toast.classList.remove('show'), 2200);
}

// ── Address autocomplete (for cart drawer) ────────────
function getSugg() { return document.getElementById('omodalSugg'); }

function positionSugg() {
  const inp  = document.getElementById('cartAddrInput');
  const sugg = getSugg();
  if (!inp || !sugg) return;
  const r = inp.getBoundingClientRect();
  sugg.style.top   = (r.bottom + 6) + 'px';
  sugg.style.left  = r.left + 'px';
  sugg.style.width = r.width + 'px';
}

function hideSugg() { const s = getSugg(); if (s) s.style.display = 'none'; }

function onCartAddrInput(e) {
  cartSelAddr = '';
  const q = e.target.value.trim();
  clearTimeout(addrTimer);
  if (q.length < 2) { hideSugg(); return; }
  addrTimer = setTimeout(() => fetchAddr(q), 300);
}

async function fetchAddr(q) {
  if (addrAbort) addrAbort.abort();
  addrAbort = new AbortController();
  const sugg = getSugg();
  positionSugg();
  sugg.style.display = 'block';

  // Show cached results immediately if available
  if (addrCache.has(q)) {
    renderAddr(addrCache.get(q));
    return;
  }

  // Check if a prefix is cached — filter locally while fetching
  for (const [key, val] of addrCache) {
    if (q.startsWith(key) && key.length >= 3) {
      const filtered = val.filter(f => {
        const p = f.properties || {};
        const name = ((p.street || p.name || '') + ' ' + (p.housenumber || '')).toLowerCase();
        return name.includes(q.toLowerCase());
      });
      if (filtered.length) renderAddr(filtered);
      else sugg.innerHTML = '<div class="sugg-loading">Suche…</div>';
      break;
    }
  }

  if (!sugg.querySelector('.sugg-row')) {
    sugg.innerHTML = '<div class="sugg-loading">Suche…</div>';
  }

  try {
    const url = 'https://photon.komoot.io/api/?q=' + encodeURIComponent(q)
      + '&lang=de&limit=6&lat=50.8357&lon=12.9241';
    const resp = await fetch(url, { signal: addrAbort.signal });
    const data = await resp.json();
    const features = data.features || [];
    addrCache.set(q, features);
    renderAddr(features);
  } catch (err) {
    if (err.name === 'AbortError') return;
    sugg.innerHTML = '<div class="sugg-loading">Fehler – bitte erneut versuchen</div>';
  }
}

// XSS-SAFE: all address data rendered via textContent, never innerHTML
function renderAddr(features) {
  const sugg = getSugg();
  if (!features.length) {
    sugg.innerHTML = '<div class="sugg-loading">Keine Ergebnisse gefunden</div>';
    return;
  }
  sugg.innerHTML = '';
  features.forEach(f => {
    const p     = f.properties || {};
    const road  = p.street || p.name || '';
    const num   = p.housenumber || '';
    const zip   = p.postcode || '';
    const city  = p.city || p.town || p.village || p.county || '';
    const line1 = road + (num ? ' ' + num : '');
    const line2 = [zip, city, 'Deutschland'].filter(Boolean).join(', ');
    const full  = [line1, zip ? zip + ' ' + city : city].filter(Boolean).join(', ');

    const row = document.createElement('div');
    row.className = 'sugg-row';
    row.style.cssText = 'display:flex;align-items:flex-start;gap:10px;padding:12px 14px;cursor:pointer;border-bottom:1px solid rgba(255,255,255,.06);transition:background .15s;';

    const pin = document.createElement('svg');
    pin.setAttribute('viewBox','0 0 24 24');
    pin.setAttribute('fill','none');
    pin.setAttribute('stroke','currentColor');
    pin.setAttribute('stroke-width','2');
    pin.setAttribute('stroke-linecap','round');
    pin.style.cssText = 'width:14px;height:14px;flex-shrink:0;color:#FF5A1F;margin-top:2px;';
    pin.innerHTML = '<circle cx="12" cy="10" r="3"/><path d="M12 21.7C8.1 17.7 4 14.2 4 10a8 8 0 0116 0c0 4.2-4.1 7.7-8 11.7z"/>';

    const textWrap = document.createElement('div');
    const mainEl   = document.createElement('div');
    mainEl.className = 'sugg-main';
    mainEl.textContent = line1 || city;   // textContent – XSS safe
    const subEl = document.createElement('div');
    subEl.className = 'sugg-sub';
    subEl.textContent = line2;             // textContent – XSS safe
    textWrap.appendChild(mainEl);
    textWrap.appendChild(subEl);

    row.appendChild(pin);
    row.appendChild(textWrap);
    row.addEventListener('mouseenter', () => { row.style.background = 'rgba(255,90,31,.1)'; });
    row.addEventListener('mouseleave', () => { row.style.background = ''; });
    row.addEventListener('click', () => selectAddr(full));
    sugg.appendChild(row);
  });

  const credit = document.createElement('div');
  credit.className = 'sugg-credit';
  credit.textContent = '© OpenStreetMap';
  sugg.appendChild(credit);
  positionSugg();
  sugg.style.display = 'block';
}

function selectAddr(addr) {
  cartSelAddr = addr;
  document.getElementById('cartAddrInput').value = addr;
  hideSugg();
}

// Hide suggestions on outside click
document.addEventListener('click', e => {
  if (!e.target.closest('#cartAddrInput') && !e.target.closest('#omodalSugg')) hideSugg();
});
window.addEventListener('scroll', positionSugg, true);
window.addEventListener('resize', positionSugg);

// ── Keyboard: Escape closes modals ────────────────────
document.addEventListener('keydown', e => {
  if (e.key !== 'Escape') return;
  closeOrder();
  closeCart();
});

// ── Intercept menu card "Bestellen" clicks ────────────
document.addEventListener('click', function(e) {
  const btn = e.target.closest('.menu-card-btn');
  if (!btn) return;
  e.preventDefault();
  const card  = btn.closest('.menu-card');
  const catEl = card.closest('.menu-cat');
  const cat   = catEl ? catEl.id.replace('cat-','') : 'other';
  const name  = card.querySelector('.menu-card-name').textContent.trim();
  const price = card.querySelector('.menu-card-price').textContent.trim();
  openOrder(name, price, cat);
});

// ── Lucide icons ──────────────────────────────────────
lucide.createIcons();

// ── Image fallback ────────────────────────────────────
document.querySelectorAll('.menu-card-img').forEach(img => {
  img.addEventListener('error', function() {
    this.style.opacity = '0';
    const wrap = this.closest('.menu-card-img-wrap');
    if (wrap) {
      wrap.style.background = 'linear-gradient(135deg,#221A0E 0%,#1A1208 100%)';
      if (!wrap.querySelector('.img-fallback-icon')) {
        const icon = document.createElement('div');
        icon.className = 'img-fallback-icon';
        icon.setAttribute('aria-hidden', 'true');
        icon.innerHTML = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" style="width:40px;height:40px;color:rgba(255,90,31,.35)"><path d="M3 11h18M3 13h18M5 11V7a7 7 0 0114 0v4M5 13v4a7 7 0 0014 0v-4"/></svg>';
        icon.style.cssText = 'position:absolute;inset:0;display:flex;align-items:center;justify-content:center;';
        wrap.appendChild(icon);
      }
    }
  }, { once: true });
});
