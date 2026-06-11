// Pagina-inhoud van Huize Oude Willem (overgenomen van vakantieoudewillem.nl)
// Afbeeldingen worden geserveerd uit de R2 bucket via /images/<key>

const galleries = {
  binnen: [
    "gallery/huize-oude-willem/AnEv2014aug16-2145-LR.jpg",
    "gallery/huize-oude-willem/AnEv2014aug16-2185-LR.jpg",
    "gallery/huize-oude-willem/AnEv2014aug16-2164-LR.jpg",
    "gallery/huize-oude-willem/AnEv2014aug16-2180-LR.jpg",
    "gallery/huize-oude-willem/AnEv2014aug16-2188-LR.jpg",
    "gallery/huize-oude-willem/AnEv2014aug16-2148-LRb.jpg",
    "gallery/huize-oude-willem/AnEv2014aug16-2151-LR.jpg",
    "gallery/huize-oude-willem/DSC_1232.jpg",
    "gallery/huize-oude-willem/AnEv2014aug16-2192-LR.jpg",
    "gallery/huize-oude-willem/AnEv2014aug16-2193-LR.jpg",
    "gallery/huize-oude-willem/AnEv2014aug16-2209-LR.jpg",
    "gallery/huize-oude-willem/AnEv2014aug16-2212-LR.jpg",
    "gallery/huize-oude-willem/AnEv2014aug16-2218-LR.jpg",
    "gallery/huize-oude-willem/AnEv2014aug16-2224-LR.jpg",
    "gallery/huize-oude-willem/AnEv2014aug16-2229-LR.jpg",
    "gallery/huize-oude-willem/AnEv2014aug16-2232-LR.jpg",
    "gallery/huize-oude-willem/AnEv2014aug16-2235-LR.jpg",
    "gallery/huize-oude-willem/AnEv2014aug16-2238-LR.jpg",
    "gallery/huize-oude-willem/AnEv2014aug16-2197-LR.jpg",
    "gallery/huize-oude-willem/AnEv2014aug16-2247-LR.jpg",
  ],
  buiten: [
    "gallery/huize-oude-willem-buiten/DSC_0689.JPG",
    "gallery/huize-oude-willem-buiten/DSC_0064.jpg",
    "gallery/huize-oude-willem-buiten/DSC_0696.jpg",
    "gallery/huize-oude-willem-buiten/DSC_0018.jpg",
    "gallery/huize-oude-willem-buiten/DSC_0022.jpg",
    "gallery/huize-oude-willem-buiten/DSC_0020.jpg",
    "gallery/huize-oude-willem-buiten/DSC_0710.jpg",
    "gallery/huize-oude-willem-buiten/DSC_0649.jpg",
    "gallery/huize-oude-willem-buiten/DSC_0636.jpg",
    "gallery/huize-oude-willem-buiten/DSC_1214.jpg",
    "gallery/huize-oude-willem-buiten/DSC_0646.jpg",
    "gallery/huize-oude-willem-buiten/DSC_0554.jpg",
    "gallery/huize-oude-willem-buiten/DSC_0850.jpg",
    "gallery/huize-oude-willem-buiten/DSC_0821.jpg",
    "gallery/huize-oude-willem-buiten/DSC_0799.jpg",
    "gallery/huize-oude-willem-buiten/DSC_0801.jpg",
    "gallery/huize-oude-willem-buiten/DSC_0814.jpg",
    "gallery/huize-oude-willem-buiten/DSC_0819.jpg",
    "gallery/huize-oude-willem-buiten/DSC_0812.jpg",
    "gallery/huize-oude-willem-buiten/DSC_0077.jpg",
  ],
  dieren: [
    "gallery/dieren/AnEv2014aug16-1946-LR-kopie.jpg",
    "gallery/dieren/AnEv2014aug16-1927-LR1.jpg",
    "gallery/dieren/AnEv2014aug16-1843-LR.jpg",
    "gallery/dieren/AnEv2014aug16-2083-LR.jpg",
    "gallery/dieren/AnEv2014aug16-2131-LR.jpg",
    "gallery/dieren/DSC_08121.jpg",
    "gallery/dieren/DSC_0554.jpg",
    "gallery/dieren/DSC_0850.jpg",
    "gallery/dieren/DSC_0087.jpg",
  ],
  omgeving: [
    { key: "gallery/omgeving/Kale-Duinen-Appelscha.jpg", titel: "Kale Duinen - Appelscha" },
    { key: "gallery/omgeving/Wandelen-Appelscha.jpg", titel: "Wandelen - Appelscha" },
    { key: "gallery/omgeving/klimbos-appelscha.jpg", titel: "Klimbos - Appelscha" },
    { key: "gallery/omgeving/Mountainbiken-Appelscha-1.jpg", titel: "Mountainbiken - Appelscha" },
    { key: "gallery/omgeving/Klimpark-Appelscha.jpg", titel: "Klimpark - Appelscha" },
    { key: "gallery/omgeving/Paardrijden-Appelscha.jpg", titel: "Paardrijden - Appelscha" },
  ],
};

function galleryHtml(items) {
  const cells = items.map((it) => {
    const key = typeof it === "string" ? it : it.key;
    const titel = typeof it === "string" ? "" : it.titel;
    return `<a class="foto" href="/images/${key}" target="_blank" title="${titel}"><img src="/images/${key}" alt="${titel || "Huize Oude Willem"}" loading="lazy"></a>`;
  });
  return `<div class="fotogrid">${cells.join("\n")}</div>`;
}

export const pages = {
  "/": {
    title: "Home",
    metaDescription:
      "Genieten van rust, stilte en weids uitzicht op de mooie natuur, daarvoor bent u bij Huize Oude Willem in Appelscha aan het juiste adres.",
    featured: "uploads/2015/10/DSC_0064.jpg",
    body: `
<p>We verwelkomen u graag in Huize Oude Willem. Het voorhuis van onze boerderij is sinds 2004 verbouwd tot wat het nu is: een groot (ruim 275m2) en zeer comfortabel 12-14 persoons vakantiehuis dat al snel voelt als een thuis.</p>
<p>Genieten van rust, stilte en weids uitzicht op de mooie natuur, daarvoor bent u bij Huize Oude Willem aan het juiste adres. Het huis is ruim en knus en daardoor zowel voor grote als kleinere gezelschappen prettig en comfortabel.</p>
<p>Huize Oude Willem is als vakantiehuis (4 - 14 personen) te huur voor een midweek, weekend of week. Het is ook mogelijk om het huis te huren voor trainingen, vergaderingen of (meerdaagse) heisessies.</p>
<p>We verwelkomen u graag!</p>
<p>Gelland (v) en Michel</p>
<p><img class="alignleft" src="/images/uploads/2015/10/Trekkerfoto-website.jpg" alt="Trekkerfoto Huize Oude Willem" width="311" height="207" loading="lazy"></p>
<div class="quotes-blok">
  <h2>Uit ons gastenboek</h2>
  <ul>
    <li>Wat een fantastisch huis!! Al bij binnenkomst viel het iedereen inclusief kinderen direct in de smaak.</li>
    <li>Zeer de moeite waard om hier nog eens terug te komen!!</li>
  </ul>
</div>`,
  },

  "/vakantiehuis/": {
    title: "Beschrijving",
    metaDescription:
      "Groot comfortabel vakantiehuis (275 m2, tot 14 personen) met 6 slaapkamers en 2 badkamers, aan de rand van Nationaal Park het Drents-Friese Wold bij Appelscha.",
    featured: "uploads/2013/06/DSC_0696.jpg",
    body: `
<p>Groot comfortabel vakantiehuis (helft van boerderij, +/- 275 m2) aan de rand van nationaal park het Drents-Friese Wold. De boerderij is van net na de tweede wereldoorlog. Het voorhuis is in de afgelopen 10 jaar verbouwd en geschikt gemaakt als vakantiehuis tot 14 personen. Huize Oude Willem ligt in het Friese Oude Willem aan de rand van Appelscha. De boerderij is gelegen aan een stil weggetje (fietspad) met weinig autoverkeer, je loopt of fietst zo het bos (Drents Friese Wold) in.</p>
<div class="twee-kolommen">
<div>
<h3>Algemeen</h3>
<ul class="vinkjes">
<li>Gelegen in natuurgebied</li>
<li>Oppervlakte huis: ruim 275 m2!</li>
<li>tot 14 personen</li>
<li>6 slaapkamers</li>
<li>2 badkamers</li>
<li>Schuur met meerdere stroompunten voor opladen elektrische fietsen</li>
<li>Rolstoelvriendelijk</li>
<li>Huisdieren in overleg toegestaan</li>
<li>Vloerverwarming</li>
<li>Aparte thermostaat op slaapkamers en badkamers</li>
</ul>
</div>
<div>
<h3>Overig aanwezig</h3>
<ul class="vinkjes">
<li>Wifi / internet</li>
<li>Kinderledikantjes, niet verhoogd (2)</li>
<li>Kinderstoeltjes (2)</li>
<li>Junior stoelen (2)</li>
<li>Box, niet verhoogd. Zelf kussen meenemen</li>
<li>Box, verhoogd met kussen. Zelf kleed (verplicht) meenemen</li>
<li>Rollator</li>
<li>Toiletverhoger (vrijstaand)</li>
<li>Tafelvoetbalspel</li>
<li>Sjoelbak</li>
<li>Twee grote honden benches, zelf kussen meenemen</li>
<li>Voer- en drinkbakken voor hond</li>
</ul>
</div>
<div>
<h3>Grote leefkeuken</h3>
<ul class="vinkjes">
<li>Grote bar/werkeiland in midden met vier krukken</li>
<li>12-persoons eettafel</li>
<li>Groot koffiezet apparaat met filters (2 liter)</li>
<li>Senseo</li>
<li>Kleine Nespresso</li>
<li>Waterkoker</li>
<li>Zes pits fornuis met oven van Smeg</li>
<li>Combi-oven</li>
<li>Afwasmachine</li>
<li>IJskast</li>
<li>Mixer</li>
<li>Keukenweegschaal</li>
<li>Sinaasappelpers</li>
<li>Keukenlinnen</li>
<li>Afwasblokjes en -middel, vuilniszakken, bakpapier</li>
<li>Grote bijkeuken met garderobe, wasmachine, dubbele spoelbak en grote ijskast met drie vrieslades</li>
</ul>
</div>
<div>
<h3>Woonkamer</h3>
<ul class="vinkjes">
<li>Eén driezitsbank</li>
<li>Eén vierzitsbank</li>
<li>Eén tweezitsbank</li>
<li>Vier fauteuils</li>
<li>Houtkachel met emmer hout</li>
<li>42 inch plasma TV</li>
<li>DVD speler</li>
<li>Kast vol spelletjes</li>
<li>Boeken en stripboeken</li>
</ul>
</div>
<div>
<h3>Slaapkamers en sanitair</h3>
<ul class="vinkjes">
<li>Slaapkamer 1 (grote kamer beneden): dubbele boxspring, extra bed en optioneel ledikant of junior bed</li>
<li>Slaapkamer 2 (iets kleinere kamer beneden): dubbele boxspring</li>
<li>Slaapkamer 3 (grote kamer boven): dubbele boxspring en optioneel kinderledikant</li>
<li>Slaapkamer 4 (grote kamer boven): dubbele boxspring en extra bed</li>
<li>Slaapkamer 5 (klein knus kamertje boven): tweepersoonsbed (1.40 breed)</li>
<li>Slaapkamer 6 (grote kamer boven): dubbele boxspring (2.10 lang)</li>
<li>Kledingkast op alle slaapkamers</li>
<li>Gezellige zithoek (boven)</li>
<li>Apart toilet beneden</li>
<li>Badkamer 1 (beneden): dubbele wastafel, douche, toilet en groot bad</li>
<li>Badkamer 2 (boven): wastafel, douche en toilet</li>
</ul>
</div>
<div>
<h3>Tuin en terras</h3>
<ul class="vinkjes">
<li>Eigen tuin van +/- 1200 m2</li>
<li>Terras op het zuid/zuidwesten</li>
<li>Terras op het oosten</li>
<li>Schuur (met stroompunten) voor fietsen etc.</li>
<li>Buitenspellen (badminton, kubb)</li>
<li>Ruim grasveld met diverse borders</li>
<li>Grote tuintafel met 12 luxe stoelen met kussens</li>
<li>Grote houten tafel met twee banken</li>
<li>Zes tuinstoelen met kussens</li>
<li>Twee ligbedden</li>
<li>Twee parasols en twee parasolvoeten</li>
<li>BBQ en vuurschaal met deksel</li>
</ul>
</div>
</div>`,
  },

  "/vakantiehuis/fotos-binnen/": {
    title: "Foto's binnen",
    metaDescription:
      "Bekijk foto's van het interieur van vakantiehuis Huize Oude Willem: de grote leefkeuken, woonkamer, slaapkamers en badkamers.",
    featured: "uploads/2015/02/AnEv2014aug16-2209-LR1.jpg",
    body: galleryHtml(galleries.binnen),
  },

  "/vakantiehuis/fotos-buiten/": {
    title: "Foto's buiten",
    metaDescription:
      "Bekijk foto's van de tuin, terrassen en omgeving van vakantiehuis Huize Oude Willem in Appelscha.",
    featured: "uploads/2013/06/DSC_0710.jpg",
    body: galleryHtml(galleries.buiten),
  },

  "/vakantiehuis/dieren/": {
    title: "Dieren",
    metaDescription:
      "Op het erf van Huize Oude Willem wonen Shetlanders, katten en honden. Paardencoaching is mogelijk en huisdieren zijn in overleg welkom.",
    featured: "uploads/2015/07/DSC_08121.jpg",
    body: `
<h3>Op het erf van Huize Oude Willem wonen ook dieren:</h3>
<p>Drie Shetlanders verblijven bij ons aan de achterzijde van de boerderij. 's Zomers lopen ze af en toe in het weitje dat aan de tuin van het vakantiehuis grenst. Onze twee katten Rosa (klein rood/wit katje) en Lelo (zwarte kat) houden huis en erf zoveel mogelijk muis vrij. De bewaking laten we over aan onze twee lieve honden Borre en Sara (Engelse Mastiffs). Alle dieren verblijven buiten het erf en tuin van het vakantiehuis, maar Rosa wil nog wel eens buurten.</p>
<h3>Paardencoaching:</h3>
<p>Met de pony's is het mogelijk een coaching te ervaren. Paarden spiegelen wat zich innerlijk in ons afspeelt, niet in ons hoofd, maar in ons (vaak onbewuste) gevoel. Ze brengen je letterlijk (terug) naar je gevoel, een bijzondere ervaring!</p>
<h3>Huisdieren meenemen:</h3>
<p>In overleg is het toegestaan om uw huisdier(en) mee te nemen naar Huize Oude Willem, zie hiervoor onze <a href="/vakantiehuis/voorwaarden/">voorwaarden</a>.</p>
${galleryHtml(galleries.dieren)}`,
  },

  "/vakantiehuis/tarieven/": {
    title: "Tarieven",
    metaDescription:
      "Tarieven van vakantiehuis Huize Oude Willem voor een weekend, midweek of week. Inclusief overzicht van wat wel en niet bij de huurprijs zit.",
    featured: "uploads/2015/02/DSC_0808.jpg",
    body: `
<p><strong>Neemt u <a href="/contact/">contact</a> met ons op voor het tarief.</strong></p>
<p><strong>Afhankelijk van het seizoen en tot en met 10 personen:</strong></p>
<h3>2026</h3>
<ul>
<li>Weekend Lang (vrijdag 16:00 uur t/m maandag 10:30 uur): &euro; 1.375 &ndash; &euro; 1.550</li>
<li>Weekend Kort (vrijdag 16:00 uur t/m zondag 17:00 uur): &euro; 1.275 &ndash; &euro; 1.450</li>
<li>Midweek (maandag 16:00 uur t/m vrijdag 10:30 uur): &euro; 1.375 &ndash; &euro; 1.550</li>
<li>Week (maandag/vrijdag 16:00 uur t/m maandag/vrijdag 10:30 uur): &euro; 2.150 &ndash; &euro; 2.550</li>
</ul>
<h3>2027</h3>
<ul>
<li>Weekend Lang (vrijdag 16:00 uur t/m maandag 10:30 uur): &euro; 1.475 &ndash; &euro; 1.650</li>
<li>Weekend Kort (vrijdag 16:00 uur t/m zondag 17:00 uur): &euro; 1.375 &ndash; &euro; 1.550</li>
<li>Midweek (maandag 16:00 uur t/m vrijdag 10:30 uur): &euro; 1.475 &ndash; &euro; 1.650</li>
<li>Week (maandag/vrijdag 16:00 uur t/m maandag/vrijdag 10:30 uur): &euro; 2.250 &ndash; &euro; 2.650</li>
</ul>
<p><em>Tarieven zijn inclusief 21% BTW.</em></p>
<p>Tijdens feestdagen gelden andere tarieven.</p>
<p>In overleg zijn andere aankomst- en vertrekdagen mogelijk.</p>
<p><strong>Inclusief:</strong></p>
<ul>
<li>Keukenlinnen</li>
<li>Afwasblokjes/middel</li>
<li>Vuilniszakken, biozakken en bakpapier</li>
<li>Basis keukenkruiden</li>
<li>Koffiefilters (speciaal formaat)</li>
<li>Kachelhout (2 grote emmers), aanmaakblokjes/houtjes</li>
<li>Gebruik kinderbedjes/stoeltjes/box etc.</li>
<li>Wifi</li>
</ul>
<p><strong>Exclusief:</strong></p>
<ul>
<li>Bedlinnen (verplicht, bedden zijn bij aankomst opgemaakt): &euro; 13,75 per persoon, &euro; 8,50 per kinderledikant</li>
<li>Schoonmaakkosten (verplicht): &euro; 195,-</li>
<li>Toeristenbelasting (vanaf 12 jaar): &euro; 1,65 pppn (onder voorbehoud van wijzigingen)</li>
<li>Toeslag &gt; 10 personen:
  <ul>
  <li>&euro; 35,- pp (weekend/midweek)</li>
  <li>&euro; 65,- pp (week)</li>
  </ul>
</li>
<li>Toeslag gasverbruik: &euro; 1,29 per kuub (verrekening achteraf)</li>
</ul>
<p><strong>Optioneel:</strong></p>
<ul>
<li>Toeslag huisdier (max 2), meenemen in overleg: &euro; 7,50 per hond per dag</li>
<li>Badlinnen (grote en kleine handdoek): &euro; 6,75 per persoon</li>
<li>Extra kachelhout: &euro; 7,50 per kuip-emmer</li>
</ul>`,
  },

  "/vakantiehuis/voorwaarden/": {
    title: "Voorwaarden & huisregels",
    metaDescription:
      "Voorwaarden en huisregels van Huize Oude Willem: reservering, betaling, huisdieren, waarborgsom, annulering en schoonmaak.",
    featured: "uploads/2015/07/DSC_0065-e1437338063836.jpg",
    body: `
<h2>Reservering en betaling</h2>
<p>Na ontvangst van de offici&euml;le bevestiging vragen wij u binnen 1 week 30% van het kale huurbedrag als aanbetaling over te maken. De reservering is definitief na aanbetaling. We vragen u het resterende bedrag uiterlijk 2 maanden voor aankomst te voldoen.</p>
<h2>Huisregels</h2>
<ul>
<li>Aankomsttijd: 16.00 uur, vertrektijd: 10.30 uur, tenzij anders afgesproken. Op zondag kunt u tot 17:00 uur vertrekken;</li>
<li>U dient het huis op goede en nette wijze te bewonen;</li>
<li>Gourmetten, steengrillen, frituren etc. is binnen niet toegestaan;</li>
<li>Het huis mag niet door meer mensen worden bewoond dan is overeengekomen;</li>
<li>Dagbezoek tot 4 personen is toegestaan, daarboven alleen in overleg.</li>
<li>Het is niet toegestaan in een camper of tent te verblijven op het terrein. Daarvoor verwijzen wij u naar de Boscamping op Oude Willem 3</li>
<li>Het is niet toegestaan uw auto via een stopcontact in het vakantiehuis op te laden. Bij de boscamping op Oude Willem 3 staan laadpalen;</li>
<li>Feesten/evenementen etc. zijn niet toegestaan;</li>
<li>Het is niet toegestaan (grote) meubels/bedden te verplaatsen.</li>
<li>Het vakantiehuis is rookvrij. Buiten op het terras mag wel gerookt worden.</li>
</ul>
<h2>Huisdieren</h2>
<p>Het meenemen van huisdieren is alleen toegestaan indien hiervoor vooraf toestemming is verleend:</p>
<ul>
<li>maximaal 2 honden, mits goed opgevoed;</li>
<li>Het is niet toegestaan uw hond(en) op banken, stoelen of bedden te laten liggen;</li>
<li>Het is niet toegestaan uw hond(en) alleen thuis te laten, tenzij in een bench (er zijn twee XL benches aanwezig);</li>
<li>Uw hond(en) kan/kunnen onder toezicht los in de tuin, die is goed omheind (drie planken boven elkaar). Let op: hele kleine hondjes kunnen evt. onder het hek door;</li>
<li>De tuin is geen uitlaatplaats, wij verzoeken u uw hond(en) buiten de tuin uit te laten. Uitwerpselen in de tuin graag direct verwijderen.</li>
</ul>
<h2>Waarborgsom en aansprakelijkheid</h2>
<p>Voor het gebruik van het vakantiehuis vragen wij een borgsom van &euro;400,-. Deze kunt u tot 2 dagen voor de huurperiode overmaken of op de dag van aankomst contant betalen. De huurder dient het vakantiehuis en perceel op een goede en nette wijze te bewonen. De huurder is aansprakelijk voor alle schade of vermissing aan het vakantiehuis, perceel, inventaris en/of meubilair, die tijdens de huurperiode zijn ontstaan door hem of zijn medehuurder(s). Dit wordt middels borg en/of de WA-verzekering van de huurder voor rekening van de huurder hersteld.</p>
<p>Binnen 14 dagen na uw vertrek ontvangt u de waarborgsom terug door storting op uw rekening, na verrekening met het gasverbruik en evt. aftrek van kosten door bijvoorbeeld beschadigingen, ontbreken van inventaris of niet netjes achterlaten van de woning. Wij vragen u evt. beschadigingen of verlies aan ons te melden.</p>
<p>De verhuurder is niet aansprakelijk voor lichamelijk letsel of diefstal en de gevolgen van extreme weersinvloeden of andere overmacht gedurende de huurperiode. De verhuurder is ook niet aansprakelijk voor schade aan auto('s) of andere spullen van de huurder(s) die is of zijn ontstaan tijdens de huurperiode.</p>
<h2>Annulering</h2>
<ul>
<li>Bij annulering tot de 42ste dag voor aanvang van uw verblijf, bedragen de annuleringskosten 30% van de kale huursom;</li>
<li>Bij annulering vanaf de 42ste tot de 28ste dag voor aanvang van uw verblijf, bedragen de annuleringskosten 60% van de kale huursom;</li>
<li>Bij annulering vanaf de 28ste tot en met &eacute;&eacute;n dag voor aanvang van uw verblijf, bedragen annuleringskosten 90% van de kale huursom;</li>
<li>Bij annulering op de dag van aankomst of later, bedragen de annuleringskosten 100% van de totale huursom (excl. toeristenbelasting).</li>
</ul>
<p>Wanneer uw verblijf i.v.m. door de overheid opgelegde (Corona) maatregelen moet worden verzet naar een andere periode, worden annuleringskosten niet gerekend en verhuist de betaling mee. Dit geldt niet bij een besmetting van &eacute;&eacute;n of meerdere personen van het reisgezelschap.</p>
<h2>Schoonmaak</h2>
<p>De eindschoonmaak wordt gedaan. We vragen u de woning netjes en met respect voor de schoonmaakdienst achter te laten:</p>
<ul>
<li>Bezemschoon;</li>
<li>Alle vuilnis/sanitair/bio zakken en oud papier in de container, lege flessen kunt u kwijt in de glasbak bij de supermarkt.</li>
<li>Alle eten- en drinkwaren verwijderd;</li>
<li>Ovens, fornuis en BBQ leeg en schoon;</li>
<li>Spullen op hun plek;</li>
<li>Beddengoed (onderlaken, dekbedovertrek en kussensloop) afgehaald;</li>
<li>Laatste vaat mag in de afwasmachine, wij ruimen hem weer uit.</li>
</ul>`,
  },

  "/vergaderen/": {
    title: "Vergaderen",
    metaDescription:
      "Huur Huize Oude Willem voor een training, vergadering of heisessie. Lichte groepsruimte van 50 m2 midden in de natuur, catering op verzoek.",
    featured: "uploads/2015/07/Oude-Willem-Vibrant1.jpg",
    body: `
<p>Het is in overleg mogelijk om Huize Oude Willem te huren voor een (meerdaagse) training, vergadering of (meerdaagse) heisessie.</p>
<p>Naast het huis beschikken we over een fijne lichte groepsruimte van 50 m2 met pantry en 2 toiletten. Deze ruimte is geschikt voor vergaderingen tot 8 personen, het geven van trainingen of bijvoorbeeld yoga/meditatie. Alle faciliteiten zijn hiervoor aanwezig.</p>
<p>Huize Oude Willem kan hierbij op verzoek de catering verzorgen. Vergaderen of een heisessie kan gecombineerd worden met teamactiviteiten of breaks zoals ATB, steppen, een boswandeling of bosbad, een flinke klim in het Klimbos, kookworkshop, BBQ, een leiderschaps-, team of coachsessie met paarden, een team- of organisatieopstelling, vuurceremonie etc. De omgeving van Huize Oude Willem biedt vele mogelijkheden om u te inspireren.</p>
<h2>Ondersteunen</h2>
<p><a href="https://nl.linkedin.com/in/gellandkingma" target="_blank" rel="noopener noreferrer">Gelland Kingma</a> is een ervaren coach en facilitator bij team- en strategiesessies en kan hierin desgewenst ondersteunen. Neem gerust <a href="/contact/">contact</a> op voor de mogelijkheden.</p>
<h2>Vergaderen of trainen in rust en stilte? Laat je inspireren door de natuur en het weidse uitzicht!</h2>`,
  },

  "/omgeving/": {
    title: "Omgeving en activiteiten",
    metaDescription:
      "Huize Oude Willem ligt in Nationaal Park Drents-Friese Wold: 6000 hectare bos, heide en stuifzand voor wandelaars, fietsers, mountainbikers en ruiters.",
    featured: "uploads/2013/09/Kale-Duinen-Appelscha.jpg",
    body: `
<p>Oude Willem ligt in het Nationaal Park Drents-Friese Wold, tussen Appelscha en Diever. Het Nationaal Park Drents-Friese Wold bestaat uit 6000 hectare bos, heide, stuifzand en beekdalgraslanden en biedt vele mogelijkheden voor wandelaars, fietsers, mountainbikers en ruiters. In de omgeving van Oude Willem liggen de authentieke dorpjes Diever, Vledder (museums Vledder), Dwingelo (Nationaal Park Dwingelderveld), Oldeberkoop (met haar beschermde dorpsgezicht), Fochteloo (natuurgebied Fochtelo&euml;rveen), Veenhuizen (gevangenismuseum), Westerbork, Norg, Orvelte (museumdorp), Havelte etc. en deze zijn de moeite waard om te bezoeken. Naast Nationaal Park Drents-Friese Wold liggen nog vijf Nationale Parken binnen een straal van 30 autominuten t.o.v. Huize Oude Willem. Zo zijn Nationaal Park Drents Friese Woud, Nationaal Park de Alde Feanen, Nationaal Park Dwingelderveld, Nationaal Beek en Esdorpen landschap Drentse Aa en Nationaal Park de Weerribben-Wieden ook echte aanraders qua natuur.</p>
<h2>Winkelen en cultuur in de omgeving</h2>
<p>Maar ook Groningen (35 autominuten), Leeuwarden (35 autominuten) en Assen (20 autominuten) zijn goed bereikbaar voor een dagje winkelen of cultuur. Daarnaast zijn er een aantal attractieparken in de buurt, waaronder: Duinen Zathe in Appelscha, Klimbos Appelscha, Wildlands Emmen, Plopsaland, Kabouterland in Exloo, Speel- en Ijsboerderij De Drentse Koe in Ruinerwold, etc.</p>
<p><a href="/omgeving/activiteiten/">Bekijk hier meer tips rondom Huize Oude Willem.</a></p>
${galleryHtml(galleries.omgeving)}`,
  },

  "/omgeving/activiteiten/": {
    title: "Tips en activiteiten",
    metaDescription:
      "Tips voor activiteiten rondom Huize Oude Willem: van de Boscamping Appelscha en Herberg het Volle Leven tot musea, attractieparken en natuurgebieden.",
    featured: "uploads/2013/09/Wandelen-Appelscha.jpg",
    body: `
<p>Rondom Huize Oude Willem is genoeg te doen. Op ongeveer 1,5 km lopen zit de <strong><a href="http://www.boscampingappelscha.nl" target="_blank" rel="noopener noreferrer">Boscamping Appelscha</a></strong> (Oude Willem 3). Je kunt hier terecht voor een ijsje, een hapje en een drankje. Er is een grote speeltuin en je kunt er fietsen en mountainbikes huren of bijvoorbeeld een MTB GPS tocht of step-arrangement boeken.</p>
<p>Tegenover de boscamping ligt <strong><a href="https://www.hetvolleleven.com/" target="_blank" rel="noopener noreferrer">Herberg het Volle Leven</a></strong> (Oude Willem 5) dat wordt gerund door &eacute;&eacute;n van Nederlands beste vegetarisch biologische koks, Yt van der Ploeg. De sfeer is gemoedelijk en ontspannen en het vegetarisch driegangen menu inclusief amuse is van ongekende sterrenkwaliteit. Zelfs notoire vleeseters worden verrast, een echte aanrader! Tijdig reserveren is nodig.</p>
<p>Voor informatie over activiteiten in en rondom Appelscha kun je terecht bij <strong><a href="http://www.appelscha.nl" target="_blank" rel="noopener noreferrer">Toeristen informatie Appelscha</a></strong>. Toe aan een actief dagje? Kijk voor leuke en spannende outdoor activiteiten eens bij <strong><a href="http://www.dejongensvanoutdoor.nl" target="_blank" rel="noopener noreferrer">De Jongens van Outdoor</a></strong>.</p>
<p>Verder in de omgeving van Huize Oude Willem:</p>
<ul>
<li><a href="http://www.gevangenismuseum.nl" target="_blank" rel="noopener noreferrer">Gevangenis museum Veenhuizen</a></li>
<li><a href="https://www.kolonienvanweldadigheid.nl/nl/bezoek-de-kolonien-van-weldadigheid" target="_blank" rel="noopener noreferrer">Koloni&euml;n van Weldadigheid</a></li>
<li><a href="https://drentsmuseum.nl/" target="_blank" rel="noopener noreferrer">Drents museum in Assen</a></li>
<li><a href="http://www.orvelte.net" target="_blank" rel="noopener noreferrer">Museum dorp Orvelte</a></li>
<li><a href="https://www.wildlands.nl" target="_blank" rel="noopener noreferrer">Wildlands Emmen</a></li>
<li><a href="http://www.duinenzathe.nl" target="_blank" rel="noopener noreferrer">Attractiepark Duinenzathe Appelscha</a></li>
</ul>
<h2>Natuurtips</h2>
<ul>
<li>Huize Oude Willem ligt aan het <a href="http://www.fietsroutenetwerk.nl" target="_blank" rel="noopener noreferrer">fietsroutenetwerk</a>, vlakbij knooppunt 63</li>
<li>Nederland kent 20 Nationaal Parken. Vijf daarvan liggen binnen een straal van 30 autominuten t.o.v. Huize Oude Willem.</li>
<li><a href="https://www.nationaalpark-drents-friese-wold.nl/" target="_blank" rel="noopener noreferrer">Nationaal Park Drents Friese Woud</a> (voor de deur)</li>
<li><a href="http://www.np-aldefeanen.nl" target="_blank" rel="noopener noreferrer">Nationaal Park de Alde Feanen</a></li>
<li><a href="http://www.nationaalpark-dwingelderveld.nl" target="_blank" rel="noopener noreferrer">Nationaal Park Dwingelderveld</a></li>
<li><a href="http://www.drentscheaa.nl" target="_blank" rel="noopener noreferrer">Nationaal Beek en Esdorpen landschap Drentse Aa</a></li>
<li><a href="https://npweerribbenwieden.nl/" target="_blank" rel="noopener noreferrer">Nationaal Park de Weerribben-Wieden</a></li>
</ul>`,
  },

  "/praktische-tips/": {
    title: "Praktische tips",
    metaDescription:
      "Praktische informatie voor uw verblijf bij Huize Oude Willem: huisarts, apotheek, dierenarts, supermarkten en winkels in en rond Appelscha.",
    featured: null,
    body: `
<p><strong>Medische hulp:</strong></p>
<ul>
<li><a href="http://www.appelscha.praktijkinfo.nl" target="_blank" rel="noopener noreferrer">Huisartsenpraktijk Appelscha</a>: Alle Wijtzesweg 23 Appelscha, 0516-431355</li>
<li><a href="http://www.alphega-apotheek.nl/web/apotheekappelscha" target="_blank" rel="noopener noreferrer">Alphega Apotheek De Drie Stellingen</a>: Vaart Zuidzijde 60 Appelscha, 0516-432722</li>
<li><a href="http://www.wza.nl" target="_blank" rel="noopener noreferrer">Wilhelmina Ziekenhuis Assen (eerste hulp)</a>: Europaweg-Zuid 1 Assen, 0592-325555</li>
</ul>
<p><strong>Dieren:</strong></p>
<ul>
<li><a href="https://www.dapdwingeloo-appelscha.nl" target="_blank" rel="noopener noreferrer">Dierenartsenpraktijk Appelscha</a>: Vaart Zuidzijde 48b Appelscha, 0521-591210</li>
<li><a href="https://dierenartsencentrum.nl" target="_blank" rel="noopener noreferrer">Dierenartsencentrum de Stellingwerven</a>: Venekoterweg 40, 0516-512742</li>
<li><a href="http://www.mulder-dier-tuin.nl" target="_blank" rel="noopener noreferrer">A.J. Mulder Dier &amp; Tuin</a> (diervoer en -benodigdheden): Vaart Noordzijde 13 Appelscha, 06-20138159</li>
</ul>
<p><strong>Supermarkten:</strong></p>
<ul>
<li><a href="https://www.poiesz-supermarkten.nl" target="_blank" rel="noopener noreferrer">Poiesz Appelscha</a>: Vaart Zuidzijde 41 Appelscha (5km)</li>
<li><a href="https://www.aldi.nl" target="_blank" rel="noopener noreferrer">Aldi</a>: Vaart Zuidzijde 55 Appelscha (5km)</li>
<li><a href="https://www.ah.nl" target="_blank" rel="noopener noreferrer">Albert Heijn</a>: Stipeplein 14 Oosterwolde (10 km)</li>
<li><a href="https://www.lidl.nl" target="_blank" rel="noopener noreferrer">Lidl</a>: Trambaan 9 Oosterwolde (10 km)</li>
<li><a href="http://www.coop.nl/supermarkten/diever/coop-slager" target="_blank" rel="noopener noreferrer">Coop in Diever</a>: Hoofdstraat 82 Diever (10 km)</li>
</ul>
<p><strong>Pinautomaat:</strong></p>
<ul>
<li>Rabobank Appelscha</li>
</ul>
<p><strong>Slager/groenteboer/bakker:</strong></p>
<ul>
<li><a href="https://jannicolai.keurslager.nl/home/" target="_blank" rel="noopener noreferrer">Keurslager Nicolai</a> (BBQ kun je hier bestellen): verscentrum, Vaart Zuidzijde 66 Appelscha</li>
<li>Echte bakker De Vent: verscentrum, Vaart Zuidzijde 66 Appelscha</li>
<li>Woltinge Groente en fruit (en kaas) van Emstweg 6 Appelscha</li>
</ul>`,
  },

  "/contact/": {
    title: "Contact",
    metaDescription:
      "Neem contact op met Huize Oude Willem in Appelscha voor informatie of een reservering: telefonisch, per e-mail of via Facebook.",
    featured: "uploads/2015/02/DSC_0808.jpg",
    body: `
<p>Heeft u vragen en wilt u meer informatie? Dan kunt u contact met ons opnemen per telefoon of e-mail via onderstaande contactgegevens. We staan u graag te woord.<br>
Ook het reserveren van Huize Oude Willem voor een vakantie, weekend, vergadersessie/training of andere gelegenheid kan via onderstaande contactgegevens.</p>
<p><strong>Huize Oude Willem</strong><br>
Gelland en Michel<br>
Oude Willem 10<br>
8426 SM Appelscha<br>
&#9742; 06-13099504<br>
&#9993; <a href="mailto:info@huizeoudewillem.nl">info@huizeoudewillem.nl</a></p>
<p><a href="https://www.facebook.com/HuizeOudeWillem" target="_blank" rel="noopener noreferrer"><img src="/images/uploads/2013/06/unnamed.png" alt="Facebook Huize Oude Willem" width="75" height="75" style="border-radius:8px"></a><br>
Huize Oude Willem heeft een eigen Facebookpagina. Wilt u op de hoogte blijven? <a href="https://www.facebook.com/HuizeOudeWillem" target="_blank" rel="noopener noreferrer">Like dan hier onze Facebookpagina</a>.</p>
<div class="kaart">
<iframe title="Kaart Huize Oude Willem" src="https://www.openstreetmap.org/export/embed.html?bbox=6.3389%2C52.9152%2C6.3689%2C52.9302&amp;layer=mapnik&amp;marker=52.922692%2C6.353892" loading="lazy"></iframe>
<p><a href="https://www.openstreetmap.org/?mlat=52.922692&amp;mlon=6.353892#map=15/52.9227/6.3539" target="_blank" rel="noopener noreferrer">Bekijk grotere kaart</a></p>
</div>`,
  },
};
