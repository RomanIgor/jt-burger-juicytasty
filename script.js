const CHEMNITZ_STREETS = ["Abbestraße","Abendleite","Abraham-Werner-Straße","Abteiberg","Abteiblick","Abteisiedlung","Abteistraße","Abteiweg","Abtstraße","Achatstraße","Achatweg","Ackermanns Weg","Ackerweg","Adalbert-Stifter-Weg","Adam-Ries-Straße","Adelsberger Höhe","Adelsbergstraße","Adelsbergweg","Adolf-Damaschke-Straße","Adolf-Weinhold-Straße","Adolfstraße","Adorfer Hauptstraße","Adorfer Straße","Agnes-Smedley-Straße","Agnesstraße","Agricolastraße","Ahnataler Platz","Ahnertstraße","Ahornstraße","Ahornweg","Akazienweg","Akeleiweg","Aktienstraße","Albert-Einstein-Straße","Albert-Jentzsch-Straße","Albert-Junghans-Straße","Albert-Köhler-Straße","Albert-Schenk-Straße","Albert-Schweitzer-Straße","Albert-Viertel-Straße","Alberta-Loop","Albertpark","Albertstraße","Albin-Schönfeld-Straße","Albrecht-Thaer-Straße","Albrecht-Thaer-Weg","Albrechtstraße","Alexanderweg","Alfons-Pech-Straße","Alfred-Brehm-Straße","Alfred-Neubert-Straße","Alfred-Schreiber-Straße","Altchemnitz","Altchemnitzer Straße","Alte Bierstraße","Alte Chemnitzer Straße","Alte Dorfstraße","Alte Festwiese","Alte Flockenstraße","Alte Gasse","Alte Gärtnerei","Alte Harth","Alte Herrenhaider Straße","Alte Kolonie","Alte Marienberger Straße","Alte Mühle","Alte Poststraße","Alte Sandgrube","Alte Schmiedegasse","Alte Siedlung","Alte Straße","Alte Waldstraße","Alte Wittgendsdorfer Straße","Altendorfer Straße","Altenhainer Allee","Altenhainer Dorfstraße","Altenhainer Straße","Altenhainer Weg","Alter Böhmischer Steig","Alter Flügelweg","Alter Kirchweg","Alter Schachtweg","Alter Steinweg","Altmarkt","Alwin-May-Straße","Am Adelsbergturm","Am Alten Kirchsteig","Am Alten Sägewerk","Am Anger","Am Angerbach","Am Auenblick","Am Außenring","Am Bach","Am Bad","Am Bahndamm","Am Bahnhof","Am Bahnsteig","Am Bahrebach","Am Bahrehang","Am Bauhof","Am Berg","Am Bernsdorfer Hang","Am Beutenberg","Am Biotop","Am Birkenwald","Am Blumenberg","Am Brauereiwald","Am Bretteich","Am Busch","Am Bärengarten","Am Böttcherstück","Am Damm","Am Dorfbach","Am Dorfteich","Am Eck","Am Ehrenmal","Am Eibsee","Am Eichenhof","Am Eichenwald","Am Einkaufszentrum","Am Einsiedler Bahnhof","Am Erfenschlager Bad","Am Erlbach","Am Erlenwald","Am Feld","Am Feldrain","Am Feldrand","Am Feldschlößchen","Am Fichtelberg","Am Finsterbuschgut","Am Flughafen","Am Frenzelberg","Am Fritzschgut","Am Frohnbach","Am Försterhäuschen","Am Gablenzer Bad","Am Gartenheim","Am Gartenhof","Am Gartenwinkel","Am Gasthof","Am Gehege","Am Geiersberg","Am Gemeindewald","Am Golfplatz","Am Graben","Am Grund","Am Gräbel","Am Gründel","Am Grünen Hang","Am Grützteich","Am Gutsberg","Am Güterbahnhof","Am Hahnberg","Am Hammerberg","Am Hang","Am Harthauer Bahnhof","Am Harthwald","Am Heidelberg","Am Heim","Am Heiteren Blick","Am Heizhaus","Am Herrenhaus","Am Hexenberg","Am Hirschgrund","Am Hirschsteig","Am Hochfeld","Am Hohen Hain","Am Holzboden","Am Hopfenberg","Am Hutholz","Am Hübel","Am Hügel","Am Jahnhaus","Am Kaiserhof","Am Kalkwiesenteich","Am Karbel","Am Kirchberg","Am Kirchhügel","Am Kirschberg","Am Knie","Am Knochen","Am Knorrberg","Am Kornfeld","Am Krehergrund","Am Kreyßighof","Am Kupfergrund","Am Körnerplatz","Am Küchwald","Am Künzelholz","Am Landwarenhaus","Am Laubengang","Am Ledigenheim","Am Lehmberg","Am Lehngut","Am Lehrpfad","Am Limbacher Teichgebiet","Am Lindengarten","Am Lochberg","Am Logenberg","Am Ludwigshof","Am Lämmelstück","Am Lützelbach","Am Mahlteich","Am Markt","Am Marktplatz","Am Mohsbach","Am Mühlbachtal","Am Mühlberg","Am Mühlgraben","Am Naturbad","Am Naturgarten","Am Naturtheater","Am Neukirchener Wald","Am Neuteich","Am Oesterholz","Am Pappelhain","Am Park","Am Personenbahnhof","Am Pfarrbach","Am Pfarrsteig","Am Pfarrstück","Am Pfarrwald","Am Pilz","Am Plan","Am Pleißenbach","Am Poltermühlenteich","Am Quirlbusch","Am Rathaus","Am Ried","Am Rittergut","Am Rosenhag","Am Rosenhof","Am Rotdorn","Am Rotheplatz","Am Rummel","Am Sachsenkeller","Am Sachsenpark","Am Sand","Am Schindlerberg","Am Schlossblick","Am Schnellen Markt","Am Schweizerhaus","Am Schweizerhof","Am Schösserholz","Am Schützteich","Am Siegmarer Bahnhof","Am Silberbach","Am Sonnenberg","Am Sonnenhang","Am Sportplatz","Am Spritzenhaus","Am Stadion","Am Stadtbad","Am Stadtgut","Am Stadtpark","Am Stausee","Am Steegen","Am Steegenwald","Am Steinberg","Am Steinbruch","Am Stollen","Am Strauchhof","Am Südhang","Am Taurastein","Am Technologie-Campus","Am Tor","Am Tännigt","Am Umspannwerk","Am Viadukt","Am Vogelherd","Am Volkshaus","Am Vorwerk","Am Wald","Am Waldessaum","Am Waldrand","Am Waldsportplatz","Am Walkgraben","Am Wall","Am Wartburghof","Am Wasserturm","Am Wasserwerk","Am Wiesenbach","Am Wiesengrund","Am Winkel","Am Wäldchen","Am Zapfenbach","Am Zaun","Am Ziegeleiweg","Am Zschopenberg","Am Zwönitzufer","Am alten Bad","Am alten Teich","Am alten Turnplatz","Am alten Weinberg","Am gruuna Campus","Am ruhigen Winkel","Am weißen Stein","Amalie-Dietrich-Straße","Amalienstraße","Amalienweg","Ammernsteig","Ammernstraße","Ammonstraße","Amselgrund","Amselsteig","Amselweg","Amtmannstraße","An den Anlagen","An den Eichen","An den Gärten","An den Gütern","An den Heroldteichen","An den Linden","An den Pfarrfichten","An den Teichen","An den Weiden","An den alten Lehden","An der Alten Färberei","An der Alten Post","An der Alten Ziegelei","An der Antenne","An der Aue","An der Autobahn","An der Bahnstrecke","An der Biberfarm","An der Bleiche","An der Dittersdorfer Höhe","An der Dresdner Bahnlinie","An der Eiche","An der Erle","An der Feuerwache","An der Fuchsdelle","An der Gemeindewiese","An der Großsporthalle","An der Gärtnerei","An der Halde","An der Hammerbleiche","An der Heideschänke","An der Hochspannung","An der Hofewiese","An der Hofwiese","An der Hole","An der Hopfendarre","An der Kinderwaldstätte","An der Kirche","An der Klausmühle","An der Kohlung","An der Kolonie","An der Koppel","An der Kuppe","An der Landstraße","An der Linde","An der Lugauer Straße","An der Luthereiche","An der Markthalle","An der Quelle","An der Reichelbleiche","An der Riesaer Bahnlinie","An der Rotbuche","An der Schmiede","An der Schule","An der Schäferei","An der Siedlung","An der Simmühle","An der Stadtkirche","An der Walzenmühle","An der Wasserleitung","An der Wende","An der Wiesenmühle","An der Zschopau","An der alten Gärtnerei","An der alten Mühle","An der alten Salzstraße","An der neuen Siedlung","An der Ölmühle","Andersenweg","Andreasstraße","Andréstraße","Anemonenweg","Anger","Anna-Esche-Gäßchen","Anna-Esche-Straße","Annaberger Straße","Annenplatz","Annenstraße","Anstieg","Antennenweg","Anton-Erhardt-Straße","Anton-Günther-Platz","Anton-Günther-Straße","Anton-Günther-Weg","Anton-Herrmann-Straße","Anton-Ohorn-Steig","Anton-Ohorn-Weg","Antonstraße","Apensener Straße","Apfelweg","Apollostraße","Arkadenstück","Arndtplatz","Arndtstraße","Arno-Holz-Straße","Arno-Schreiter-Straße","Arthur-Beil-Straße","Arthur-Bretschneider-Straße","Arthur-Emmerlich-Straße","Arthur-Lange-Straße","Arthur-Oehme-Straße","Arthur-Strobel-Straße","Arthur-Weiner-Platz","Asternweg","Auberg","Auberggrund","Aue","Auenblick","Auenstegbrücke","Auenstraße","Auental","Auenweg","Auerswalder Blick Nord","Auerswalder Blick Süd","Auerswalder Hauptstraße","Auerswalder Höhe","Auerswalder Straße","Auf dem Ahorn","Auf dem Wind","Auf der Kirchwiese","Auf der Kuppe","Augsburger Straße","August-Bebel-Platz","August-Bebel-Straße","Augustusburger Straße","Außenweg Nord","Außenweg Süd","BC-Loop","Bachgasse","Bachstraße","Bachweg","Baderberg","Badergasse","Badstraße","Bahnhof Reichenhain","Bahnhofstraße","Bahnstraße","Bahnstrecke Limbach–Wüstenbrand","Bahnweg","Bahrstraße","Balzacweg","Barbarossastraße","Barbussestraße","Baronenallee","Barthelstraße","Bauernweg","Bauhofstraße","Baumeister-Uhlig-Straße","Baumgartenhof","Baumgartenstraße","Baumgartenweg","Baustellenzufahrt TUC Chemie","Bauvereinsstraße","Bayernring","Bayreuther Straße","Beckerstraße","Beethovenstraße","Beethovenweg","Behringstraße","Berbisdorfer Kirchweg","Berbisdorfer Straße","Berganger","Bergeshöh","Bergfrieden","Berggasse","Berghang","Bergmannsteig","Bergmannstraße","Bergschlößchenweg","Bergstraße","Bergweg","Bernhard-Kuhnt-Weg","Bernhardstraße","Bernsbachplatz","Bernsdorfer Plan","Bernsdorfer Straße","Bersarinstraße","Bertha-von-Suttner-Straße","Bertolt-Brecht-Straße","Bessemerstraße","Bestwiger Straße","Bettelmannsweg","Beutenbergstraße","Beyerstraße","Biederstraße","Biensdorfer Straße","Bierbrücke","Bierstraße","Birkenhof","Birkensteig","Birkenweg","Birkenwäldchen","Blankenauer Straße","Blankenburgstraße","Blaue Welle","Blechbrücke","Bleicherstraße","Bleichweg","Blumengasse","Blumensteig","Blumenweg","Blücherstraße","Bodelschwinghstraße","Bodemersiedlung","Boettcherstraße","Bonhoefferstraße","Bornaer Hang","Bornaer Straße","Borngasse","Borngraben","Borssenanger","Borssendorfstraße","Brauereistraße","Brauhausstraße","Braunsdorfer Straße","Brausebachweg","Breitenlehn","Bretgasse","Briefträgerweg","Brotsteig","Brunnengasse","Brunnenstraße","Brunnenweg","Bruno-Granz-Straße","Bruno-Salzer-Straße","Bruno-Wünsch-Straße","Bräuteichweg","Brücke Lohrstraße","Brückenplatz","Brückenstraße","Brückenweg","Brüder-Grimm-Straße","Brüdergasse","Brühl","Buchenwaldstraße","Buchenweg","Buchholzer Straße","Burgstraße","Burgstädter Straße","Burkersdorfer Straße","Burkersdorfer Weg","Burkhardtsdorfer Straße","Busbahnhof","Buschsiedlung","Bussardweg","Buttermilchsteig","Buttermilchstraße","Bäckerstraße","Börnichsgasse","Böttchergasse","Böttchers Weg","Böttcherweg","Bürgelstraße","Bürgerstraße","C.-A.-Fischer-Straße","Canzlerstraße","Carl-Bobach-Straße","Carl-Hamel-Straße","Carl-Hertel-Straße","Carl-Kirchhof-Straße","Carl-von-Bach-Straße","Carl-von-Ossietzky-Straße","Carlowitzweg","Carolastraße","Casparistraße","Cervantesstraße","Charlottenstraße","Chemnitz, Fernbusterminal","Chemnitzer Gasse","Chemnitzer Landstraße","Chemnitzer Straße","Chemnitzer Straße (Wittgensdorf)","Chemnitztalradweg","Chemnitztalstraße","Chemnitztalweg","Chopinstraße","Christian-Wehner-Straße","Christophstraße","Chursdorfer Straße","Chursdorfer Weg","Clara-Zetkin-Straße","Clausengasse","Clausewitzstraße","Clausstraße","Claußnitzer Straße","Claußstraße","Clematisweg","Clemens-Winkler-Straße","Comeniusstraße","Conradweg","Corinthstraße","Cottaschneise","Cottaweg","Cranachstraße","Crusiusstraße","Curiestraße","Cäcilienstraße","Dachsberg","Dahlienweg","Damaschkestraße","Damaschkeweg","Dammgasse","Dammplatz","Dammstraße","Dammweg","Dantestraße","Darwinstraße","Darwinweg","Deichverteidigungsweg","Der Pfand","Der Tiefe Graben","Der alte Steinbruchweg","Der grüne Weg","Deubners Weg","Deulichstraße","Dickensstraße","Die Schlange","Diebsteig","Dieselstraße","Dietrich-Bonhoeffer-Platz","Dittersbacher Straße","Dittersdorf, Bahnhof","Dittersdorf-Eibenberger Weg","Dittersdorfer Straße","Dittersdorfer Weg","Dittesstraße","Dittmannsdorfer Straße","Dittmannsdorfer Weg","Doktor-Bruno-Kochmann-Straße","Doktor-Goerdeler-Straße","Doktor-Kurt-Fischer-Straße","Doktor-Lothar-Kreyssig-Straße","Doktor-Salvador-Allende-Straße","Doktor-Wilhelm-Külz-Straße","Donauwörther Straße","Dorfbachgasse","Dorfblick","Dorfplatz","Dorfstraße","Dornröschenweg","Dorotheenstraße","Dr.-Charlotte-Krenzer-Straße","Dr.-Frieda-Freise-Straße","Dr.-Hauschild-Weg","Dr.-Heinrich-Hahn-Straße","Dr.-Karl-Wolff-Straße","Dr.-Neideck-Straße","Dr.-Pohl-Straße","Dr.-Robert-Koch-Straße","Dr.-Roth-Straße","Dr.-Schreber-Weg","Dr.-Theodor-Neubauer-Straße","Dr.-Wilhelm-Külz-Straße","Drachenweg","Draisdorfer Straße","Draisdorfer Weg","Dreibrüderweg","Dreiserstraße","Dresdner Platz","Dresdner Straße","Drosselring","Drosselsteig","Drosselstraße","Drosselweg","Durchgangsweg","Dürerplatz","Dürerstraße","Düsseldorfer Platz","Eberhardtsteig","Ebersdorfer Höhe","Ebersdorfer Straße","Ebersdorfer Weg","Ebertstraße","Eckertgasse","Eckstraße","Edisonstraße","Edwin-Hoernle-Straße","Ehrenhain der Sozialisten","Ehrlichstraße","Eibenberger Allee","Eibenberger Straße","Eibenring","Eibenstraße","Eichelbergstraße","Eichelbergweg","Eichendorffstraße","Eichenweg","Eichhörnchensteig","Eichlerstraße","Eigene Scholle","Eigenhufe","Einsiedler Hauptstraße","Einsiedler Neue Straße","Einsiedler Straße","Einsiedler Weg","Einsteinstraße","Eisenstraße","Eisenstuckstraße","Eisenweg","Eislebener Straße","Elfenweg","Elisabeth-Reichelt-Weg","Elisenstraße","Ellenbogen","Elsasser Straße","Elsternweg","Elsternwinkel","Emil-Rosenow-Straße","Emile-Zola-Straße","Emilienstraße","Enge Gasse","Entdeckerpfad Damhirsche","Enzianweg","Enzmannstraße","Erdbeersiedlung","Erdbeerweg","Erdmannsdorfer Straße","Erfenschlager Straße","Erich-Mühsam-Straße","Erich-Parthey-Straße","Erich-Schmidt-Straße","Erich-Steinfurth-Straße","Erich-Weinert-Straße","Erkerweg","Erlbach-Kirchberg, Gasth Gansauge","Erlbacher Straße","Erlengrund","Erlengrundweg","Erlenweg","Ernst-Enge-Straße","Ernst-Heilmann-Straße","Ernst-Lässig-Straße","Ernst-Moritz-Arndt-Straße","Ernst-Schneller-Straße","Ernst-Thälmann-Straße","Ernst-Wabra-Straße","Ernst-Wilkens-Weg","Ersatzfuß & Rad Brücke Falkeplatz","Erzbergerstraße","Erzgebirgsblick","Eschenweg","Eubaer Hang","Eubaer Straße","Eubaer Weg","Eulenweg","Eulitzstraße","F.-O.-Schimmel-Straße","Fabriciusstraße","Fabrikstraße","Fabrikweg","Faleska-Meinig-Straße","Falkenstraße","Falkenweg","Falkeplatz","Falkestraße","Falschbornweg","Fasanenweg","Feenweg","Feld- und Waldweg alte B174","Feldgasse","Feldsteig","Feldstraße","Feldweg","Felsensteig","Ferdinandstraße","Feudelstraße","Fichtenweg","Fichtestraße","Filialweg","Finkenrain","Finkenweg","Fischweg","Fischzuchtgrund","Fleischergasse","Flemmingstraße","Fliederweg","Florastraße","Florian-Geyer-Straße","Florianweg","Flügel E","Flügel H","Flügelweg","Folgenweg","Fontanestraße","Forstgrundweg","Forststraße","Fortunaweg","Frankenberg/Eder-Straße","Frankenberger Straße","Franz-Bräunig-Straße","Franz-Liszt-Straße","Franz-Mehring-Straße","Franz-Schubert-Straße","Franz-Werfel-Straße","Franz-Wiesner-Straße","Franz-Wolf-Weg","Frauenstraße","Fraunhoferstraße","Fraunhoferstraße Nord","Freiberger Straße","Freigutweg","Freilandstraße","Freiligrathstraße","Friedensplatz","Friedensweg","Friedhofstraße","Friedhofsweg","Friedrich-Hähnel-Straße","Friedrich-Ludwig-Jahn-Straße","Friedrich-Marschner-Straße","Friedrich-Naumann-Straße","Friedrich-Oskar-Schimmel-Straße","Friedrich-Schlöffel-Straße","Friedrich-Viertel-Straße","Friedrich-Wagner-Straße","Friedrich-Wolf-Straße","Friedrichstraße","Friesenweg","Frischbornweg","Frischer Wind","Fritz-Fritzsche-Straße","Fritz-Heckert-Str.","Fritz-Heckert-Straße","Fritz-Matschke-Straße","Fritz-Reuter-Straße","Fritz-Wagner-Siedlung","Frohnbachstraße","Froschweg","Fröbelstraße","Fröbelweg","Frühlichtweg","Fuchssteig","Fuchsweg","Funkstraße","Further Höhe","Further Str.","Further Straße","Further Trift","Färbergasse","Färberstraße","Färberweg","Förstersteig","Försterwinkel","Fünferbrücke","Fürstenstraße","Fürstenweg","Gabelsbergerstraße","Gablenzer Straße","Galerie Roter Turm","Galileistraße","Gang 1","Gang 10","Gang 2","Gang 3","Gang 4","Gang 5","Gang 6","Gang 7","Gang 8","Gang 9","Garnsdorfer Hauptstraße","Garnsdorfer Straße","Garnsdorfer Weg","Gartenkolonie","Gartenstadt","Gartenstadtstraße","Gartensteig","Gartenstraße","Gartenweg","Gasgasse","Gasse","Gaußstraße","Gebrüder-Bernhard-Brücke","Geibelstraße","Gelenauer Straße","Gellertstraße","Genossenschaftsplatz","Genossenschaftsstraße","Genossenschaftsweg","Georg-Hager-Straße","Georg-Landgraf-Straße","Georg-Weerth-Straße","Georgbrücke","Georgenhof","Georgenkirchweg","Georgistraße","Georgstraße","Gerbergasse","Gerhard-Fritsche-Weg","Gerhart-Hauptmann-Platz","Gerichtsstraße","Gerichtsweg","Gerstenbergerstraße","Gert-Hofmann-Straße","Geschwister-Scholl-Straße","Geschwister-Scholl-Weg","Getreidemarkt","Gewerbeallee","Gewerbegebiet","Gewerbering","Gewerbering Süd","Gießereiweg","Gießerstraße","Gießerweg","Gimpelweg","Gladiolenweg","Glasergasse","Glauchauer Straße","Gleisstraße","Glockenstraße","Glockenturmweg","Gluckstraße","Glösaer Straße","Glösaer Weg","Glücksberg","Gnauckstraße","Gneisenaustraße","Gobschweg","Goetheplatz","Goethering","Goethestraße","Goetheweg","Goldammerweg","Golfplatz","Gornauer Straße","Gottfried-Keller-Straße","Gottfried-Schenker-Straße","Grabners Weg","Graefestraße","Granz-Weg","Grenzgraben","Grenzrode","Grenzsteig","Grenzstraße","Grenzweg","Greßlerweg","Große Teichstraße","Grundstraße","Grundweg","Grunerweg","Gräfinsteig","Grünaer Straße","Grünband","Gründerweg","Grüne Aue","Grüner Weg","Grüner Winkel","Grünlandweg","Grünrain","Grützmühlenweg","Gr��ne Aue","Guerickestraße","Gunnersdorfer Straße","Gunnersdorfer Weg","Gustav-Adolf-Straße","Gustav-Freytag-Straße","Gustav-Wolf-Straße","Gustav-Wünsch-Straße","Gutenbergstraße","Gutssteig","Gutsweg","Gutswiese","Gärtnereiweg","Gärtnergasse","Gärtnerweg","Göbelstraße","Göppersdorfer Straße","Göppersdorfer Weg","Görnergasse","Görresstraße","Gückelsbergstraße","Gückelsbergweg","Günnelsweg","Gürtelstraße","H-Flügelweg","Haardt","Haeckelstraße","Hahngasse","Hahnschrei","Hainichener Straße","Hainstraße","Hainweg","Haldenweg","Hambacher Straße","Hammerstraße","Hammertal","Hammertalweg","Hamstersteig","Hangblick","Hangweg","Hannawaldweg","Hans-Benz-Straße","Hans-Link-Straße","Hans-Sachs-Straße","Hans-Witten-Straße","Hans-Ziegler-Straße","Hardenbergstraße","Harrasallee","Harrasstraße","Harthauer Straße","Harthauer Weg","Harthauer-Hang","Harthweg","Hartmannsdorf, Anton-Günther-Platz","Hartmannsdorfer Straße","Hartmannstraße","Hasenweg","Hasenwinkel","Hauboldstraße","Hauptallee","Hauptbahnhof, Bahnhofstraße","Hauptflügel","Hauptstraße","Hauptweg","Hauschildweg","Hausdorfer Straße","Haydnstraße","Hechinger Straße","Hechlerstraße","Hedwighof","Hedwigstraße","Hegelstraße","Heidberg","Heidelberger Straße","Heidering","Heidesiedlung","Heideweg","Heidewinkel","Heiersdorfer Straße","Heimgarten","Heimgartenweg","Heimpromenade","Heimsteig","Heimstätte","Heimstättenstraße","Heinersdorfer Straße","Heinestraße","Heinrich-Beck-Straße","Heinrich-Bretschneider-Straße","Heinrich-Heine-Straße","Heinrich-Heine-Weg","Heinrich-Lorenz-Straße","Heinrich-Mauersberger-Ring","Heinrich-Schütz-Straße","Heinrich-Sturm-Weg","Heinrich-Zille-Straße","Heinrich-Zille-Weg","Heinrichstraße","Heiterer Blick","Helbersdorfer Straße","Helbigwiese","Helenenstraße","Helmholtzstraße","Hennersdorfer Straße","Henriettenstraße","Herbertstraße","Herderstraße","Herderweg","Hermann-Fischer-Straße","Hermann-Fürstenheim-Straße","Hermann-Löns-Straße","Hermann-Löns-Weg","Hermann-Pöge-Straße","Hermann-Schubert-Straße","Hermann-Weber-Platz","Hermannstraße","Hermersdorfer Straße","Herrenhaider Straße","Herrenstraße","Hertzstraße","Herweghstraße","Herzogshöhe","Heusteig","Heuweg","Hilbersdorfer Straße","Hinterer Weg","Hirschgrund","Hirschweg","Hochrain","Hochwarte","Hofer Straße","Hoffeld","Hoffmannstraße","Hofstatt","Hofweg","Hohe Straße","Hohe Warte","Hohe-Hain-Straße","Hohensteiner Straße","Hoher Weg","Hohlweg","Holbeinstraße","Holunderweg","Holzbrücke Hennersdorf","Holzfällerweg","Horst-Fischer-Straße","Horst-Menzel-Straße","Horst-Strohbach-Straße","Horst-Vieth-Weg","Horststraße","Hospitalstraße","Hst. Ernst-Wabra-Straße","Hst. Goetheplatz","Hufenweg","Hugo-Fuchs-Straße","Hugo-Pöschmann-Straße","Humboldtplatz","Humboldtstraße","Humboldtweg","Hutholz","Huttenstraße","Händelstraße","Hänflingsberg","Hätteweg","Höhensteig","Höhenweg","Hölderlinstraße","Hölzels Weg","Höppnerweg","Hübnerweg","Hübschmannstraße","Hüttenberg","Illings Weg","Illmhöhe","Im Grund","Im Grünen Winkel","Im Neefepark","Im Schloßwald","Im Wiesengrund","Im Zeisigwald","In der Delle","In der Senke","Industriestraße","Ingelheimer Straße","Innere Klosterstraße","Inselsteig","Inselstraße","Inseltreppe","Irisweg","Irkutsker Straße","Irmtraud-Morgner-Straße","Irrbornweg","Jack-London-Straße","Jacquardstraße","Jaenickestraße","Jagdschänkenstraße","Jagdweg","Jahnsdorf, Adorfer Straße/Gartensparte","Jahnsdorf, Feuerwehr","Jahnsdorf, Kirche","Jahnsdorf, Schule","Jahnsdorf, Ärtzehaus","Jahnsdorfer Straße","Jahnsdorfer Weg","Jahnshorn","Jahnstraße","Jahnweg","Jakobikirchplatz","Jakobstraße","Joachim-Kändler-Straße","Jochen-Köhler-Straße","Johann-Esche-Straße","Johann-Gottlob-Pfaff-Straße","Johann-Richter-Straße","Johann-von-Zimmermann-Straße","Johannes-Dick-Straße","Johannes-Ebert-Straße","Johannes-Reitz-Straße","Johannispassage","Johannisplatz","Johannisstraße","Johannstraße","Josephinenplatz","Josephinenstraße","Jugendweg","Julius-Schwartze-Straße","Juri-Gagarin-Straße","Jägergasse","Jägerschlößchenstraße","Jägerstraße","K-Flügel","Kalkofen","Kalkstraße","Kalkweg","Kalter-Bach-Weg","Kammweg","Kanalstraße","Kantor-Geißler-Straße","Kantor-Meister-Straße","Kantstraße","Kanzlerstraße","Kapellenberg","Kappelbachgasse","Kappler Drehe","Karl-August-Georgi-Straße","Karl-Böchel-Straße","Karl-Drais-Straße","Karl-Hartig-Straße","Karl-Immermann-Straße","Karl-Jähnig-Straße","Karl-Liebknecht-Straße","Karl-Marx-Straße","Karl-Seibt-Straße","Karlstraße","Kasernenweg","Kastanienhof","Kastanienstraße","Kastanienweg","Katharina-von-Bora-Straße","Katharinenstraße","Kauffahrtei","Kaufmannstraße","Kaulbachstraße","Kaßbergauffahrt","Kaßbergstraße","Kaßbergtreppe","Kellerberg","Kellerwiese","Kemtauer Straße","Keplerstraße","Kesselgarten","Kiefernweg","Kieselhausenstraße","Kirchberg","Kirche","Kircheck","Kirchfeld","Kirchgasse","Kirchgäßchen","Kirchhoffstraße","Kirchnerstraße","Kirchplatz","Kirchsteig","Kirchstraße","Kirchweg","Kirchwinkel","Kirschenweg","Kirschweg","Klaffenbacher Hauptstraße","Klaffenbacher Straße","Klaffenbacher Weg","Klantgasse","Klarastraße","Klausstraße","Klein-Tirol-Süd","Kleine Teichstraße","Kleiner Weg","Kleines Dörfchen","Kleingartenweg","Kleinhofweg","Kleinolbersdorfer Straße","Kleinolbersdorfer Weg","Kleiststraße","Klingbach","Klingerstraße","Klinikum Flemmingstraße","Klopstockstraße","Klosterhang","Klosterpassage","Knappenweg","Knaumühlenweg","Knieweg","Knothgasse","Knüppeldamm","Kochstraße","Kohlebahnradweg","Kohlenstraße","Kohlstraße","Komsa-Allee","Konrad-Zuse-Straße","Konradstraße","Kopernikusstraße","Kornblumenweg","Kornweg","Kreherstraße","Kreisigstraße","Kreisverkehr am Südbahnhof","Krenkelstraße","Kreuzeiche","Kreuzeichenweg","Kreuzstraße","Kreßnerstraße","Krokusweg","Krumme Zeile","Krummer Weg","Krämerberg","Kräuterweg","Krügerstraße","Kuckucksdelle","Kunersdorfer Straße","Kunnersdorfer Straße","Kunnersdorfer Weg","Kunnersteinweg","Kunzgutstraße","Kurt-Franke-Straße","Kurt-Mauersberger-Straße","Kurt-Schneider-Straße","Kurze Gasse","Kurze Straße","Kurzer Weg","Kutusowstraße","Käthe-Kollwitz-Straße","Köbkestraße","Köpeltal","Körnerplatz","Körnerstraße","Köthensdorfer Hauptstraße","Köthensdorfer Straße","Küchwaldring","Küchwaldstraße","Kühler Morgen","Küntzelmannstraße","Landgraben","Landgutweg","Landwirtschaftsstraße","Lange Straße","Langenbeckstraße","Langenberger Straße","Langer Weg Höllmühle","Langestraße","Langsberg","Lassallestraße","Laubengang","Lauenhainer Straße","Launer Ring","Lehmgrubenweg","Leibnizstraße","Leichenweg","Leipziger Straße","Leisnerweg","Lengefelder Straße","Lennéstraße","Leonhardtstr.","Leonhardtstraße","Leopoldstraße","Lerchenstraße","Lerchenweg","Lessingplatz","Lessingring","Lessingstraße","Lessingweg","Leukersdorfer Straße","Lichtenauer Straße","Lichtenauer Weg","Lichtenwalder Höhe","Lichtenwalder Straße","Lichtenwalder Weg","Lichter Weg","Liddy-Ebersberger-Straße","Liebermannstraße","Liebesweg","Liebigstraße","Ligusterweg","Liliencronstraße","Lilienstraße","Lilienweg","Limbacher Straße","Lindenaustraße","Lindenhain","Lindenhofsiedlung","Lindenhofweg","Lindenring","Lindenstraße","Lindenweg","Lippersdorfer Straße","Lise-Meitner-Straße","Liselotte-Herrmann-Straße","Lisztstraße","Lohrstraße","Lohstraße","Lorenzstraße","Lortzingstraße","Lotharstraße","Lothringer Straße","Louis-Braille-Straße","Louis-Otto-Straße","Louis-Schreiter-Straße","Louis-Wilsdorf-Straße","Ludwig-Böttger-Straße","Ludwig-Jahn-Straße","Ludwig-Kirsch-Straße","Ludwig-Kühn-Straße","Ludwig-Richter-Straße","Ludwig-Würkert-Straße","Ludwigsburgstraße","Ludwigsplatz","Ludwigstraße","Lug Ins Land","Lugau Chemnitzer Straße","Lugau Sportplatz","Lugau, Paletti Park/Baumarkt","Lugau-Paletti Park","Lugauer Straße","Luisenplatz","Luisenstraße","Luthereichenhöhe","Lutherplatz","Lutherstraße","Lärchenallee","Lärchenstraße","Lärchental","Lärchenweg","Löbelgässchen","Löbenhainer Straße","Lützowstraße","Maiers Weg","Maiglöckchenweg","Majakowskistraße","Malvenweg","Manfred-Starke-Weg","Mansfelder Straße","Marburger Weg","Margaretenstraße","Margaretenweg","Margeritenstraße","Margeritenweg","Marianne-Brandt-Straße","Marie-Curie-Straße","Marie-Tilch-Straße","Marienberg","Marienberger Straße","Marienplatz","Marienstraße","Mark-Twain-Weg","Markersdorfer Straße","Markt","Marktgäßchen","Marktplatz Arkaden","Marktsteig","Marktstraße","Markusstraße","Marschnerstraße","Martha-Schrag-Straße","Martin-Unger-Weg","Martinstraße","Matthesstraße","Mauergasse","Mauersbergerstraße","Mauerstraße","Maulbeerweg","Max-Albert-Weg","Max-Brand-Straße","Max-Jensch-Straße","Max-Kästner-Straße","Max-Lange-Straße","Max-Müller-Straße","Max-Opitz-Straße","Max-Pezold-Straße","Max-Planck-Straße","Max-Saupe-Straße","Max-Schumann-Straße","Max-Schäller-Straße","Max-Türpe-Straße","Max-Weigelt-Straße","Max-Wenzel-Straße","Maxim-Gorki-Straße","Meinersdorfer Straße","Meinsdorfer Straße","Meisenweg","Meisterstraße","Melanchthonstraße","Meltzerstraße","Mendelejewstraße","Menzelstraße","Merzdorfer Straße","Messeplatz","Metznergasse","Meyerstraße","Michaelstraße","Michelsweg","Mickiewiczstraße","Minna-Simon-Straße","Mitschurinstraße","Mittagleite","Mittelbacher Dorfstraße","Mittelbacher Feldstraße","Mittelbacher Straße","Mittelgasse","Mittelstraße","Mittelweg","Mittlerer Weg","Mittweidaer Straße","Mohnweg","Mohsdorfer Straße","Morgenleite","Morgentauweg","Moritz-Nietzel-Straße","Moritzhof","Moritzstraße","Mosenstraße","Mozartstraße","Mozartweg","Murschnitz","Mühlauer Straße","Mühlauer Weg","Mühlbacher Straße","Mühlbauerweg","Mühlberg","Mühlbergring","Mühlenstraße","Mühlenweg","Mühlflügel","Mühlgasse","Mühlgraben","Mühlgrabenweg","Mühlweg","Müllergasse","Müllerstraße","Münchner Straße","Nach den Steegen","Nansenstraße","Narzissenweg","Naturlehrpfad","Nauwerckstraße","Neckarsulmer Ring","Neefepark Nord","Neefestraße","Nelkentor","Nelkenweg","Nestlerstraße","Neubauernweg","Neue Gasse","Neue Heimat","Neue Herrenhaider Straße","Neue Marienberger Straße","Neue Straße","Neuer Weg","Neugasse","Neukirchen, Forststraße","Neukirchen, Grundschule","Neukirchen, Mitte","Neukirchen, Saulheimer Straße","Neukirchen, Schönauer Straße","Neukirchner Straße","Neumarkt","Neunzehnhainer Straße","Neustädter Straße","Nevoigtstraße","Nickelmühlenweg","Nicolaimühlgäßchen","Niederfrohnaer Weg","Niederhermersdorfer Weg","Niederwaldstraße","Niederwiesaer Straße","Niederwiesaer Weg","Nikolaipassage","Nixenweg","Nordplatz","Nordsteig","Nordstraße","Nordweg","Nutzung","Nutzunger Straße","Nürnberger Straße","Obere Bachgasse","Obere Bergstraße","Obere Beutenberghäuser","Obere Güterbahnhofstraße","Obere Hauptstraße","Obere Mühlstraße","Obere Ufergasse","Oberer Grenzweg","Oberer Gutsweg","Oberer Gutsweg Pfad","Oberer Hangweg","Oberer Hauptweg","Oberer Marktsteig","Oberer Weg","Oberfrohnaer Straße","Oberförster Baumgarten Schneise","Obergasse","Oberlungwitzer Straße","Obermühlenweg","Oberrabensteiner Straße","Obstweg","Oesterheltbücke","Olbernhauer Straße","Olbersdorfer Straße","Omnibusbahnhof","Omnibusbahnhof, Steig 1","Omnibusbahnhof, Steig 2","Omnibusbahnhof, Steig 3","Omnibusbahnhof, Steig 4","Omnibusbahnhof, Steig 5","Omnibusbahnhof, Steig 6","Omnibusbahnhof, Steig 7","Omnibusbahnhof, Steig 8","Omnibusbahnhof, Steig 9","Orchideengarten","Ortelsdorfer Straße","Orthstraße","Ostheim","Ostheimsiedlung","Ostring","Ostrowskiweg","Oststraße","Ostwaldweg","Ostweg","Ottendorfer Straße","Otto-Beyer-Weg","Otto-Dorsch-Weg","Otto-Hofmann-Straße","Otto-Kirchhof-Straße","Otto-Müller-Straße","Otto-Planer-Straße","Otto-Schmerbach-Straße","Otto-Thörner-Straße","Ottostraße","Ottwin-Saupe-Weg","Palmstraße","Panoramaweg","Pappelallee","Pappelstraße","Pappelweg","Paracelsusstraße","Park der Opfer des Faschismus","Parkallee","Parkstraße","Parsevalstraße","Pasteurstraße","Paul-Arnold-Straße","Paul-Bertz-Straße","Paul-Claußner-Straße","Paul-Fischer-Weg","Paul-Franke-Straße","Paul-Fritzsching-Straße","Paul-Gerhardt-Straße","Paul-Gruner-Straße","Paul-Hochmuth-Weg","Paul-Jäkel-Straße","Paul-Seydel-Straße","Paul-Spiegel-Straße","Pawlowstraße","Pelzmühlenstraße","Peniger Straße","Permoserstraße","Pestalozzistraße","Pestalozziweg","Peter-Mitterhofer-Straße","Petermannweg","Peterstraße","Pettenkoferstraße","Petunienweg","Pfaffenhain, Bahnhof","Pfaffenhainer Straße","Pfaffensteig","Pfarrgäßchen","Pfarrhübel","Pfarrhübelweg","Pfarrlehn","Pfarrstraße","Pfarrweg","Pfauweg","Pflockenstraße","Pfortensteg","Philippstraße","Planitzwiese","Plankenweg","Plantagenstraße","Plantagenweg","Platnerstraße","Plattenweg","Platz der Ermahnung","Platz der Jugend","Plauer Straße","Pleißaer Straße","Pleißbachstraße","Pleißenbachstraße","Pleißengrundstraße","Pleißeweg","Pockauer Straße","Poetenweg","Popowstraße","Pornitzstraße","Postgässchen","Poststraße","Postweg","Premiumradweg","Primelweg","Privatweg","Probenannahme","Professor-Willkomm-Straße","Promenade","Promenadenstraße","Promenadenweg","Promilleweg","Pufendorfstraße","Pumpschänkenweg","Puschkinstraße","Pyramidenplatz","Quarantäne Trail","Quellweg","Quersteg","Querstraße","Querweg","Querweg 2","RabensteinCenter","Rabensteiner Mühlweg","Rabensteiner Straße","Rabensteiner Viadukt","Rabensteiner Wald","Rabenweg","Radweg Schönau-Siegmar","Randweg","Rasmussenstraße","Rathausgasse","Rathausplatz","Rathausstraße","Rathenaustraße","Rauensteiner Straße","Regensburger Straße","Rehabilitationszentrum für Blinde","Rehgartenweg","Rehweg","Rehwiesenstraße","Reicheltweg","Reichenbrander Straße","Reichenhainer Mühlberg","Reichenhainer Straße","Reichsstraße","Reineckerstraße","Reinhard-Schmidt-Straße","Reinhard-Uhlig-Straße","Reinhardtstraße","Reinhold-Timme-Straße","Reinholdstraße","Reitbahnstraße","Reiterweg","Reitweg","Reitzenhainer Straße","Rembrandtstraße","Rennsteig","Rewitzerstraße","Rhenaniaweg","Ricarda-Huch-Straße","Richard-Hartmann-Platz","Richard-Meinig-Straße","Richard-Möbius-Straße","Richard-Tauber-Straße","Richard-Wagner-Straße","Richardstraße","Richterstraße","Richterweg","Riedbachweg","Riedstraße","Riemannweg","Riemenschneiderstraße","Riesenweg","Rietschelstraße","Rilkestraße","Ringelrosenweg","Ringstraße","Ringstraße 51","Rittergasse","Rittergutsweg","Ritterstraße","Robert-Blum-Straße","Robert-Gärtner-Straße","Robert-Koch-Straße","Robert-Nestler-Straße","Robert-Schramm-Straße","Robert-Schumann-Straße","Robert-Siewert-Straße","Robert-Straube-Hof","Rochlitzer Straße","Rodelbahn","Rollandstraße","Rosa-Luxemburg-Straße","Rosarium Hauptweg","Rosenbergstraße","Rosengasse","Rosenhof","Rosenowweg","Rosenplatz","Rosenstraße","Rosentor","Rosenweg","Rosmarinstraße","Rotdorn","Rotdornstraße","Roteichenweg","Roter Turm","Rotheplatz","Rotkehlchenweg","Rottluffer Straße","Rubensstraße","Rudolf-Breitscheid-Straße","Rudolf-Drechsel-Straße","Rudolf-Harlaß-Straße","Rudolf-Krahl-Straße","Rudolf-Liebold-Straße","Rudolf-Marek-Straße","Rudolf-Renner-Straße","Rudolfstraße","Rue de Ploërmel","Rund um den Höllteich","Rundweg","Rungestraße","Rußdorfer Straße","Rödelwaldstraße","Rödenteichstraße","Röhrenweg","Röhrsdorfer Allee","Röhrsdorfer Allee/Siemens","Röhrsdorfer Straße","Röhrweg","Röllingshainer Weg","Röntgenstraße","Rößlerstraße","Rückertstraße","Saarstraße","Sachsenburger Weg","Sachsenring","Sachsenstraße","Saidenbachstraße","Sallauminer Straße","Salzstraße","Sandgrubenweg","Sandsteig","Sandstraße","Sandweg","Sankt-Arno-Weg","Saugasse","Saulheimer Straße","Saurand","Saydaer Straße","Schachtweg","Schadestraße","Schafgasse","Schaftreibe","Schaftreiberweg","Schaftreibeweg","Scharfensteiner Straße","Scharnhorststraße","Scheerenweg","Scheffelstraße","Schenkenberg","Schenkenstraße","Schenkgasse","Scherfstraße","Scheunengäßchen","Schiersandstraße","Schießgasse","Schillergasse","Schillerplatz","Schillersiedlung","Schillerstraße","Schillerweg","Schillstraße","Schindelbornweg","Schindlerweg","Schlachthofbrücke","Schlachthofstraße","Schlossblick","Schlosserberg","Schloßallee","Schloßberg","Schloßplatz","Schloßschänkenweg","Schloßstraße","Schloßteichstraße","Schmidt-Rottluff-Straße","Schmiedegasse","Schmiedeweg","Schmiedgasse","Schmuckplatz","Schneeberger Straße","Schneise 2","Schollstraße","Schrebergartenweg","Schreberstraße","Schreberweg","Schröderstraße","Schubertstraße","Schuhmachergasse","Schulberg","Schulgasse","Schulgelände","Schulstraße","Schulweg","Schumannstraße","Schustergasse","Schwabenweg","Schwalbenweg","Schwanauer Straße","Schwarzenberger Straße","Schwarzer Weg","Schweizertal-Brücke","Schweizerthaler Straße","Schönaicher Straße","Schönau","Schönauer Straße","Schönauer Weg","Schöne Aussicht","Schönherrs Weg","Schönherrstraße","Schönthalweg","Schösserholz","Schösserholzweg","Schüffnerstraße","Schüßlers Weg","Sebastian-Bach-Gasse","Sebastian-Bach-Straße","Sechserweg","Sechsruthenweg","Seeberplatz","Seeberstraße","Seegasse","Seidemannstraße","Seidlerweg","Seifersdorfer Straße","Seilergasse","Seilerstraße","Seminarstraße","Semmelweisstraße","Semperstraße","Senefelderstraße","Seumestraße","Seydelstraße","Shakespearestraße","Siedlerhöhe","Siedlerstraße","Siedlerweg","Siedlung","Siedlung Alte Schmiedegasse","Siedlung Lützelhöhe","Siedlung Ruhebank","Siedlung am Friedhof","Siedlung am Grund","Siedlung am Viehweg","Siedlung des Friedens","Siedlungsstraße","Siedlungsweg","Silberberg","Silcherstraße","Slevogtstraße","Solbrigstraße","Soldatenweg 1909","Sommerleite","Sonnenblick","Sonneneck","Sonnenhang","Sonnenhof","Sonnenhügel","Sonnenleite","Sonnenstraße","Sonnenweg","Sophienstraße","Sorgestraße","Spechtweg","Sperlingsweg","Sperlingweg","Spielergasse","Spielstraße","Spinnereistraße","Spinnereiweg","Sportlerweg","Sprungschanze","Spürweg","St.-Anna-Weg","Stadlerplatz","Stadlerstraße","Stadtblick","Stadtgut","Stadthalle","Starweg","Staudenweg","Stauweg","Steegenwaldstraße","Stefan-Heym-Platz","Stegbrücke","Steiler Weg","Steinbachs Weg","Steinberg","Steinbergsiedlung","Steinbergstraße","Steinbogenbrücke","Steinbrecherweg","Steinbruchsweg","Steinbruchweg","Steingasse","Steinsberg","Steinstraße","Steinweg","Steinwiese","Stellweg","Stelzendorfer Aue","Stelzendorfer Gutsweg","Stelzendorfer Straße","Stephanplatz","Stephensonstraße","Sterlstraße","Sterzelstraße","Stiefmütterchenweg","Stieglitzweg","Stiftsgasse","Stiftsstraße","Stiftsweg","Stiller Weg","Stiller Winkel","Stollberger Straße","Storchengasse","Storchenweg","Straubeweg","Straßburger Straße","Straße Usti nad Labem","Straße der Deutschen Einheit","Straße der Einheit","Straße der Jugend","Straße der Nationen","Straße des Friedens","Strenge-Furth-Flügel","Struthweg","Stöcklstraße","Süd-West-Abgang","Südbahnhof","Südbahnstraße","Südbauernweg","Südblick","Südhang","Südlehne","Südring","Südstraße","Südweg","Südwinkel","TU Campus","Talanger","Talsperrengrund","Talsperrenrundweg","Talsperrenstraße","Talstraße","Talweg","Tannenstraße","Tannenweg","Tauraer Straße","Taurasteinstraße","Tauschaer Straße","Technologie-Campus","Technopark","Teichstraße","Teichweg","Terrassensiedlung","Terrassenstraße","Teufelsschlucht","Thalheimer Straße","Theaterplatz","Theaterstraße","Theodor-Fontane-Straße","Theodor-Gampe-Straße","Theodor-Körner-Platz","Theodor-Körner-Straße","Theodor-Lessing-Straße","Theresenstraße","Theunertstraße","Thomas-Mann-Platz","Thomas-Müntzer-Höhe","Thomas-Müntzer-Siedlung","Thomas-Müntzer-Straße","Thomas-Müntzer-Weg","Thomas-Rockard-Straße","Thumer Straße","Thüringer Weg","Tieckstraße","Tiergartenweg","Tierparkstraße","Tierparkweg","Tolstoistraße","Torweg","Totensteinstraße","Treffurthstraße","Trinitatisstraße","Trützschlerstraße","Tschaikowskistraße","Tuchschererstraße","Tulpenweg","Tunnelstraße","Turgenjewstraße","Turnerstraße","Turnerweg","Turnstraße","Tännichtleite","Töpferstraße","Uferstraße","Uferweg","Uhdestraße","Uhlandstraße","Uhlegäßchen","Uhlestraße","Uhlichs Weg","Uhlichstraße","Ulbrichtstraße","Ulmenhof","Ulmenstraße","Ulmenstra��e","Umgehungsstraße","Unritzstraße","Unser Handtuch","Untere Aktienstraße","Untere Bachgasse","Untere Bergstraße","Untere Dorfstraße","Untere Hauptstraße","Untere Mühlstraße","Untere Ufergasse","Unterer Gutsweg","Unterer Hangweg","Unterer Hauptweg","Ursprunger Straße","Vater-Jahn-Straße","Veilchenweg","Veit-Stoß-Straße","Vergissmeinnichtweg","Vertrauenschachtstraße","Vettersstraße","Viehgasse","Viehweg","Viehweg Mittelfrohna","Viktoriastraße","Virchowstraße","Vogelherdstraße","Vogelweid","Voigtstraße","Von-Stauffenberg-Straße","W.-Schumann-Weg","Waisenstraße","Waldblick","Waldenburger Straße","Waldesrauschen","Waldkirchener Straße","Waldkirchener Weg","Waldleite","Waldrand","Waldschlößchenstraße","Waldsiedlung","Waldstraße","Waldweg","Waldwinkel","Walter-Janka-Straße","Walter-Klippel-Straße","Walter-Meusel-Straße","Walter-Oertel-Straße","Walter-Ranft-Straße","Walter-Rathenau-Straße","Walthergasse","Wandererstraße","Wanderweg grün markiert","Waplerstraße","Wartburgstraße","Wassergasse","Wasserscheide","Wasserschloßweg","Wasserschänkenstraße","Wasserstraße","Wasserweg","Wasserwerkstraße","Wattstraße","Webergasse","Wechselburger Straße","Weg am Volkshaus","Weg nach dem Kalkwerk","Weg zu den Feen","Weg zum Reitplatz","Weg zum Sportplatz","Wehrgasse","Wehrstraße","Wehrweg","Weidenweg","Weideweg","Weigandstraße","Weigeltweg","Weißbacher Straße","Weißer Weg","Welckstraße","Wendegang","Wenzel-Verner-Straße","Werkgasse","Werkstraße","Werner-Seelenbinder-Straße","Westring","Weststraße","Wettin Trail","Weydemeyerstraße","Wichtelweg","Wielandstraße","Wiesaer Flügel","Wieseneck","Wiesengrund","Wiesenrain","Wiesenstraße","Wiesenufer","Wiesenweg","Wiesenwinkel","Wildenbruchstraße","Wildparkgasse","Wildparkstraße","Wilhelm-Busch-Straße","Wilhelm-Firl-Straße","Wilhelm-Hauff-Weg","Wilhelm-Külz-Platz","Wilhelm-Raabe-Straße","Wilhelm-Weber-Straße","Wilhelm-Wolff-Straße","Wilhelmstraße","Wilhermsdorfer Straße","Willy-Böhme-Straße","Willy-Reinl-Straße","Wind","Windbergstraße","Windmühlenstraße","Windweg","Winklerstraße","Winklhoferstraße","Wirtschaftsweg","Wittenberger Straße","Wittgensdorfer Höhe","Wittgensdorfer Straße","Wittgensdorfer Weg","Witzschdorfer Hauptstraße","Witzschdorfer Straße","Wladimir-Sagorski-Straße","Wolgograder Allee","Wolkenburger Straße","Wolkensteiner Straße","Wormser Straße","Wurzelweg","Wöhlerstraße","Würschnitzaue","Würschnitzstraße","Würschnitztalstraße","Würschnitzweg","Württemberger Straße","Würzburger Straße","Wüstenbrander Schulstraße","Wüstenbrander Straße","Wüstenrotstraße","Wüster Weg","Yorckgebiet","Yorckstraße","Yukon-Loop","Zapfenberg","Zauberweg","Zaungasse","Zechenstraße","Zeisiggasse","Zeisigstraße","Zeisigwaldstraße","Zeisigweg","Zeißstraße","Zentralhaltestelle","Zeppelinstraße","Zeunerstraße","Ziegeleistraße","Ziegelstraße","Ziegelweg","Ziegenweg","Zieschestraße","Zietenstraße","Zinnienweg","Zinzendorfstraße","Zliner Straße","Zolastraße","Zschockeweg","Zschopauer Platz","Zschopauer Straße","Zschopauweg","Zu Parzellem 60.-73.","Zu Parzellen 1.-3.","Zu Parzellen 10.-16.","Zu Parzellen 22.-32.","Zu Parzellen 33.-44.","Zu Parzellen 45.-49.","Zu Parzellen 53.-59.","Zu Parzellen 7.-9.","Zu Parzellen 82.-88.","Zu den Pappeln","Zufahrt Frohnbachstraße 57 A","Zum Adelsberg","Zum Alten Badeplatz","Zum Bahnhof","Zum Hammerberg","Zum Harrasfelsen","Zum Heim","Zum Kapellenberg","Zum Kapellenberg 20c","Zum Kapellenberg 22b","Zum Kornweg","Zum Lindenhof","Zum Luisengut","Zum Naturbad","Zum Rosenheim","Zum Sandbach","Zum Schusterberg","Zum Sonnenlandpark","Zum Spitzberg","Zum Steinbruch","Zum Tännicht","Zum Wiesengrund","Zur Alten Gärtnerei","Zur Alten Mühle","Zur Aussicht","Zur Baumwolle","Zur Finkenmühle","Zur Frohen Zukunft","Zur Höllmühle","Zur Jahnhöhe","Zur Mühle","Zur Rußbutte","Zur Tannmühle","Zur alten Gärtnerei","Zwergenweg","Zwickauer Straße","Zwönitzstraße","Zwönitztalstraße","Zwönitztalweg","Zöblitzer Straße","Zöllnerplatz","Zöllnerstraße","Züchterweg","ehem. Bahnstrecke Küchwald–Obergrüna","oberer Weg","unterer Weg","Äppelallee","Äußere Altenhainer Straße","Äußere Chemnitzer Straße","Äußere Freiberger Straße","Äußere Hainichener Straße","Äußere Kirchberger Straße","Über der Mühle"];

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
  addrTimer = setTimeout(() => searchAddrLocal(q), 50);
}

function searchAddrLocal(q) {
  const lower = q.toLowerCase();
  const matches = CHEMNITZ_STREETS
    .filter(s => s.toLowerCase().includes(lower))
    .slice(0, 6);
  renderAddr(matches);
}

// XSS-SAFE: all address data rendered via textContent, never innerHTML
function renderAddr(streets) {
  const sugg = getSugg();
  positionSugg();
  sugg.style.display = 'block';
  if (!streets.length) {
    sugg.innerHTML = '<div class="sugg-loading">Keine Ergebnisse gefunden</div>';
    return;
  }
  sugg.innerHTML = '';
  streets.forEach(street => {
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
    mainEl.textContent = street;   // textContent – XSS safe
    const subEl = document.createElement('div');
    subEl.className = 'sugg-sub';
    subEl.textContent = 'Chemnitz, Deutschland';
    textWrap.appendChild(mainEl);
    textWrap.appendChild(subEl);

    row.appendChild(pin);
    row.appendChild(textWrap);
    row.addEventListener('mouseenter', () => { row.style.background = 'rgba(255,90,31,.1)'; });
    row.addEventListener('mouseleave', () => { row.style.background = ''; });
    row.addEventListener('click', () => selectAddr(street + ' '));
    sugg.appendChild(row);
  });

  const credit = document.createElement('div');
  credit.className = 'sugg-credit';
  credit.textContent = '© OpenStreetMap contributors';
  sugg.appendChild(credit);
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
