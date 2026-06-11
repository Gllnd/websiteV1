import { pages } from "./content.js";
import { gastenboekEntries } from "./gastenboek-data.js";

const SITE_NAAM = "Huize Oude Willem";
const SITE_BESCHRIJVING =
  "Genieten van rust, stilte en weids uitzicht op de mooie natuur, daarvoor bent u bij Huize Oude Willem in Appelscha aan het juiste adres.";

// Structured data voor zoekmachines (vakantiehuis-gegevens)
const JSON_LD = {
  "@context": "https://schema.org",
  "@type": "LodgingBusiness",
  name: SITE_NAAM,
  description: SITE_BESCHRIJVING,
  telephone: "+31613099504",
  email: "info@huizeoudewillem.nl",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Oude Willem 10",
    postalCode: "8426 SM",
    addressLocality: "Appelscha",
    addressCountry: "NL",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 52.922692,
    longitude: 6.353892,
  },
  sameAs: ["https://www.facebook.com/HuizeOudeWillem"],
};

const MENU = [
  { titel: "Home", href: "/" },
  {
    titel: "Vakantiehuis",
    sub: [
      { titel: "Beschrijving", href: "/vakantiehuis/" },
      { titel: "Foto's binnen", href: "/vakantiehuis/fotos-binnen/" },
      { titel: "Foto's buiten", href: "/vakantiehuis/fotos-buiten/" },
      { titel: "Dieren", href: "/vakantiehuis/dieren/" },
      { titel: "Tarieven", href: "/vakantiehuis/tarieven/" },
      { titel: "Voorwaarden & huisregels", href: "/vakantiehuis/voorwaarden/" },
    ],
  },
  { titel: "Vergaderen", href: "/vergaderen/" },
  {
    titel: "Omgeving en activiteiten",
    sub: [
      { titel: "Omgeving", href: "/omgeving/" },
      { titel: "Tips", href: "/omgeving/activiteiten/" },
      { titel: "Praktische tips", href: "/praktische-tips/" },
    ],
  },
  { titel: "Gastenboek", href: "/gastenboek/" },
  { titel: "Contact", href: "/contact/" },
];

const CSS = `
:root {
  --donker: #222;
  --tekst: #4d4d4d;
  --accent: #1a1a2e;
  --wit: #fff;
}
* { box-sizing: border-box; }
html, body { margin: 0; padding: 0; }
body {
  font-family: "Raleway", sans-serif;
  line-height: 1.6;
  color: var(--tekst);
  background: var(--donker);
  -webkit-font-smoothing: antialiased;
  word-wrap: break-word;
}
a { color: #2a6f97; text-decoration: none; }
a:hover { text-decoration: underline; }

/* Header */
.site-header {
  padding: 0.75em 5.55%;
  background: var(--donker);
}
.site-header .container { max-width: 1280px; margin: 0 auto; display: flex; flex-wrap: wrap; align-items: center; justify-content: space-between; }
.site-title { font-size: 1.625em; text-transform: uppercase; letter-spacing: 0.08em; font-weight: 700; }
.site-title a { color: var(--wit); opacity: 0.85; transition: opacity 0.2s ease; }
.site-title a:hover { opacity: 1; text-decoration: none; }

/* Menu */
.nav-toggle { display: none; }
.nav-toggle-label { display: none; color: var(--wit); font-size: 1.6em; cursor: pointer; padding: 0.2em 0.5em; user-select: none; }
nav.menu ul { list-style: none; margin: 0; padding: 0; display: flex; flex-wrap: wrap; }
nav.menu > ul > li { position: relative; }
nav.menu a {
  display: block;
  padding: 0.9em 1em;
  color: var(--wit);
  text-transform: uppercase;
  letter-spacing: 0.08em;
  font-weight: 700;
  font-size: 0.78em;
  opacity: 0.85;
}
nav.menu a:hover { opacity: 1; text-decoration: none; }
nav.menu li.actief > a { opacity: 1; border-bottom: 2px solid var(--wit); }
nav.menu .sub-menu {
  display: none;
  position: absolute;
  top: 100%;
  left: 0;
  background: var(--donker);
  min-width: 230px;
  z-index: 10;
  flex-direction: column;
  box-shadow: 0 4px 14px rgba(0,0,0,0.35);
}
nav.menu li:hover > .sub-menu, nav.menu li:focus-within > .sub-menu { display: flex; }
nav.menu .sub-menu a { font-size: 0.74em; padding: 0.8em 1.1em; }

/* Main */
.main { padding: 1.5em 5.55% 3em; }
.entry {
  max-width: 1100px;
  margin: 0 auto;
  background: var(--wit);
  box-shadow: 0 2px 18px rgba(0,0,0,0.3);
}
.featured-image {
  height: 0;
  padding-bottom: 42%;
  background-position: 50%;
  background-size: cover;
}
.entry-header { padding: 1.6em 2.2em 0; }
.entry-title {
  margin: 0;
  text-transform: uppercase;
  letter-spacing: 0.04em;
  font-size: 1.45em;
  color: var(--tekst);
}
.entry-content { padding: 0.8em 2.2em 2.4em; }
.entry-content img { max-width: 100%; height: auto; }
.entry-content img.alignleft { float: left; margin: 0.3em 1.2em 0.8em 0; }
.entry-content h2, .entry-content h3 { color: var(--accent); text-transform: uppercase; letter-spacing: 0.04em; font-size: 1.05em; margin-top: 1.6em; }
.entry-content::after { content: ""; display: block; clear: both; }

/* Vinkjeslijsten en kolommen */
.twee-kolommen { display: grid; grid-template-columns: 1fr 1fr; gap: 0 2.5em; margin-top: 1.5em; }
ul.vinkjes { list-style: none; padding: 0; margin: 0 0 1.5em; }
ul.vinkjes li { padding-left: 1.4em; position: relative; margin-bottom: 0.35em; }
ul.vinkjes li::before { content: "\\2713"; position: absolute; left: 0; color: #4a7c59; font-weight: 700; }

/* Fotogrid */
.fotogrid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 10px; margin-top: 1em; }
.fotogrid .foto { display: block; aspect-ratio: 3 / 2; overflow: hidden; background: #eee; }
.fotogrid img { width: 100%; height: 100%; object-fit: cover; transition: transform 0.3s ease; }
.fotogrid .foto:hover img { transform: scale(1.05); }

/* Gastenboek */
.gb-bericht { border-bottom: 1px solid #e5e5e5; padding: 1.2em 0; }
.gb-bericht:last-child { border-bottom: none; }
.gb-kop { font-weight: 700; color: var(--accent); margin-bottom: 0.4em; font-size: 0.92em; }
.gb-kop .gb-datum { font-weight: 400; color: #999; }
.quotes-blok { background: #f4f6f8; border-left: 4px solid var(--donker); padding: 1em 1.5em; margin-top: 2em; }
.quotes-blok h2 { margin-top: 0 !important; }
.quotes-blok ul { list-style: none; padding: 0; }
.quotes-blok li { font-style: italic; margin-bottom: 0.8em; }
.quotes-blok li::before { content: "\\201C"; font-size: 1.4em; color: #999; margin-right: 0.2em; }

/* Kaart */
.kaart iframe { width: 100%; height: 400px; border: 0; }
.kaart-placeholder {
  background: #f4f6f8;
  border: 1px dashed #c5ccd3;
  padding: 2.5em 1.5em;
  text-align: center;
}
.kaart-placeholder p { margin-top: 0; }

/* Knoppen */
.knop {
  font-family: inherit;
  font-size: 0.82em;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.06em;
  padding: 0.8em 1.6em;
  border: 0;
  cursor: pointer;
  background: var(--donker);
  color: var(--wit);
}
.knop:hover { opacity: 0.85; }
.knop.knop-licht { background: #e2e6ea; color: var(--tekst); }

/* Cookie-banner */
.cookie-banner {
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 100;
  background: var(--wit);
  color: var(--tekst);
  box-shadow: 0 -4px 18px rgba(0,0,0,0.35);
  padding: 1em 5.55%;
}
.cookie-banner .inhoud {
  max-width: 1100px;
  margin: 0 auto;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 0.8em 1.5em;
}
.cookie-banner p { margin: 0; flex: 1 1 320px; font-size: 0.9em; }
.cookie-banner .keuzes { display: flex; gap: 0.6em; }

/* Footer */
.site-footer { padding: 2.5em 5.55%; text-align: center; color: rgba(255,255,255,0.65); }
.site-footer .site-title { font-size: 1.1em; margin-bottom: 0.6em; }
.site-footer a { color: rgba(255,255,255,0.85); }
.site-footer .sociaal { margin: 0.6em 0; }
.site-footer .sociaal a { margin: 0 0.5em; font-size: 0.9em; }
.site-footer p { font-size: 0.8em; }

/* Mobiel */
@media (max-width: 880px) {
  .nav-toggle-label { display: block; }
  nav.menu { display: none; width: 100%; }
  .nav-toggle:checked ~ nav.menu { display: block; }
  nav.menu ul { flex-direction: column; }
  nav.menu .sub-menu { display: flex; position: static; box-shadow: none; padding-left: 1em; }
  .twee-kolommen { grid-template-columns: 1fr; }
  .fotogrid { grid-template-columns: repeat(2, 1fr); }
  .entry-header, .entry-content { padding-left: 1.2em; padding-right: 1.2em; }
}
`;

function menuHtml(huidigPad) {
  const items = MENU.map((item) => {
    if (item.sub) {
      const actief = item.sub.some((s) => s.href === huidigPad);
      const subItems = item.sub
        .map((s) => `<li${s.href === huidigPad ? ' class="actief"' : ""}><a href="${s.href}">${s.titel}</a></li>`)
        .join("");
      return `<li${actief ? ' class="actief"' : ""}><a href="${item.sub[0].href}">${item.titel} &#9662;</a><ul class="sub-menu">${subItems}</ul></li>`;
    }
    return `<li${item.href === huidigPad ? ' class="actief"' : ""}><a href="${item.href}">${item.titel}</a></li>`;
  });
  return `<ul>${items.join("")}</ul>`;
}

function layout({ pad, title, metaDescription, featured, body, origin }) {
  const featuredHtml = featured
    ? `<div class="featured-image" style="background-image:url('/images/${featured}')"></div>`
    : "";
  const canonical = origin ? `${origin}${pad}` : "";
  const ogImage = featured && origin ? `${origin}/images/${featured}` : "";
  const beschrijving = metaDescription || SITE_BESCHRIJVING;
  return `<!DOCTYPE html>
<html lang="nl">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>${title} - ${SITE_NAAM}</title>
<meta name="description" content="${beschrijving}">
${canonical ? `<link rel="canonical" href="${canonical}">` : ""}
<meta property="og:locale" content="nl_NL">
<meta property="og:type" content="website">
<meta property="og:site_name" content="${SITE_NAAM}">
<meta property="og:title" content="${title} - ${SITE_NAAM}">
<meta property="og:description" content="${beschrijving}">
${canonical ? `<meta property="og:url" content="${canonical}">` : ""}
${ogImage ? `<meta property="og:image" content="${ogImage}">` : ""}
<meta name="twitter:card" content="${ogImage ? "summary_large_image" : "summary"}">
<link rel="icon" href="/favicon.svg" type="image/svg+xml">
${pad === "/" ? `<script type="application/ld+json">${JSON.stringify(JSON_LD)}</script>` : ""}
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Raleway:wght@400;700&display=swap" rel="stylesheet">
<style>${CSS}</style>
</head>
<body>
<header class="site-header">
  <div class="container">
    <div class="site-title"><a href="/">${SITE_NAAM}</a></div>
    <input type="checkbox" id="nav-toggle" class="nav-toggle">
    <label for="nav-toggle" class="nav-toggle-label">&#9776;</label>
    <nav class="menu">${menuHtml(pad)}</nav>
  </div>
</header>
<div class="main">
  <div class="entry">
    ${featuredHtml}
    <div class="entry-header"><h1 class="entry-title">${title}</h1></div>
    <div class="entry-content">${body}</div>
  </div>
</div>
<footer class="site-footer">
  <div class="site-title"><a href="/">${SITE_NAAM}</a></div>
  <div class="sociaal">
    <a href="https://www.facebook.com/HuizeOudeWillem" target="_blank" rel="noopener noreferrer">Facebook</a> &middot;
    <a href="mailto:info@huizeoudewillem.nl">E-mail</a> &middot;
    <a href="#" data-cookie-reset>Cookievoorkeuren</a>
  </div>
  <p>Copyright &copy; ${SITE_NAAM}</p>
</footer>
<div class="cookie-banner" id="cookie-banner" hidden>
  <div class="inhoud">
    <p>Deze website gebruikt geen tracking-cookies. Alleen de kaart op de contactpagina komt van een externe partij (OpenStreetMap). Gaat u daarmee akkoord?</p>
    <div class="keuzes">
      <button type="button" class="knop" data-cookie-keuze="ja">Akkoord</button>
      <button type="button" class="knop knop-licht" data-cookie-keuze="nee">Liever niet</button>
    </div>
  </div>
</div>
<script>
(function () {
  var banner = document.getElementById("cookie-banner");

  function laadKaart() {
    var kaart = document.getElementById("osm-kaart");
    if (!kaart || kaart.querySelector("iframe")) return;
    var frame = document.createElement("iframe");
    frame.title = "Kaart ${SITE_NAAM}";
    frame.loading = "lazy";
    frame.src = kaart.getAttribute("data-src");
    kaart.insertBefore(frame, kaart.firstChild);
    var ph = kaart.querySelector(".kaart-placeholder");
    if (ph) ph.remove();
  }

  function kies(waarde) {
    try { localStorage.setItem("cookie-keuze", waarde); } catch (e) {}
    if (banner) banner.hidden = true;
    if (waarde === "ja") laadKaart();
  }

  var keuze = null;
  try { keuze = localStorage.getItem("cookie-keuze"); } catch (e) {}

  if (keuze === "ja") laadKaart();
  else if (!keuze && banner) banner.hidden = false;

  document.querySelectorAll("[data-cookie-keuze]").forEach(function (knop) {
    knop.addEventListener("click", function () { kies(knop.getAttribute("data-cookie-keuze")); });
  });

  // Kaart tonen op verzoek geldt als toestemming voor de kaart
  document.querySelectorAll("[data-kaart-laden]").forEach(function (knop) {
    knop.addEventListener("click", function () { kies("ja"); });
  });

  // Voorkeuren opnieuw instellen via de footer
  document.querySelectorAll("[data-cookie-reset]").forEach(function (link) {
    link.addEventListener("click", function (e) {
      e.preventDefault();
      try { localStorage.removeItem("cookie-keuze"); } catch (err) {}
      if (banner) banner.hidden = false;
    });
  });
})();
</script>
</body>
</html>`;
}

function gastenboekBody() {
  const berichten = gastenboekEntries
    .map((e) => {
      const plaats = e.plaats ? ` uit ${e.plaats}` : "";
      return `<div class="gb-bericht">
<div class="gb-kop">${e.naam}${plaats} <span class="gb-datum">schreef op ${e.datum}</span></div>
<div>${e.tekst}</div>
</div>`;
    })
    .join("\n");
  return `<p><strong>${gastenboekEntries.length} berichten.</strong></p>\n${berichten}`;
}

const IMAGE_TYPES = {
  jpg: "image/jpeg",
  jpeg: "image/jpeg",
  png: "image/png",
  gif: "image/gif",
  webp: "image/webp",
};

async function serveImage(env, key) {
  const object = await env.IMAGES.get(key);
  if (!object) {
    return new Response("Afbeelding niet gevonden", { status: 404 });
  }
  const headers = new Headers();
  object.writeHttpMetadata(headers);
  headers.set("etag", object.httpEtag);
  if (!headers.get("content-type")) {
    const ext = key.split(".").pop().toLowerCase();
    headers.set("content-type", IMAGE_TYPES[ext] || "application/octet-stream");
  }
  headers.set("cache-control", "public, max-age=86400");
  return new Response(object.body, { headers });
}

function htmlResponse(html, status = 200) {
  return new Response(html, {
    status,
    headers: { "content-type": "text/html;charset=UTF-8" },
  });
}

const FAVICON_SVG = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><rect width="32" height="32" rx="4" fill="#222"/><path d="M16 6 L27 15 H24 V25 H19 V19 H13 V25 H8 V15 H5 Z" fill="#fff"/></svg>`;

function sitemapXml(origin) {
  const urls = Object.keys(pages)
    .concat(["/gastenboek/"])
    .map((pad) => `<url><loc>${origin}${pad}</loc></url>`)
    .join("\n");
  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
</urlset>`;
}

export default {
  async fetch(request, env) {
    const url = new URL(request.url);
    let pad = url.pathname;

    // Afbeeldingen uit R2
    if (pad.startsWith("/images/")) {
      return serveImage(env, decodeURIComponent(pad.slice("/images/".length)));
    }

    if (pad === "/favicon.svg" || pad === "/favicon.ico") {
      return new Response(FAVICON_SVG, {
        headers: { "content-type": "image/svg+xml", "cache-control": "public, max-age=604800" },
      });
    }

    if (pad === "/robots.txt") {
      return new Response(`User-agent: *\nAllow: /\n\nSitemap: ${url.origin}/sitemap.xml\n`, {
        headers: { "content-type": "text/plain" },
      });
    }

    if (pad === "/sitemap.xml") {
      return new Response(sitemapXml(url.origin), {
        headers: { "content-type": "application/xml" },
      });
    }

    // Paden normaliseren: altijd met slash op het eind
    if (!pad.endsWith("/")) {
      return Response.redirect(url.origin + pad + "/", 301);
    }

    // Gastenboek wordt apart opgebouwd uit de berichten-data
    if (pad === "/gastenboek/") {
      return htmlResponse(
        layout({
          pad,
          title: "Gastenboek",
          metaDescription:
            "Lees wat eerdere gasten schreven over hun verblijf in vakantiehuis Huize Oude Willem in Appelscha.",
          featured: null,
          body: gastenboekBody(),
          origin: url.origin,
        })
      );
    }

    const page = pages[pad];
    if (page) {
      return htmlResponse(
        layout({
          pad,
          title: page.title,
          metaDescription: page.metaDescription,
          featured: page.featured,
          body: page.body,
          origin: url.origin,
        })
      );
    }

    return htmlResponse(
      layout({
        pad,
        title: "Pagina niet gevonden",
        featured: null,
        body: `<p>Deze pagina bestaat niet (meer). Ga terug naar de <a href="/">homepagina</a>.</p>`,
        origin: url.origin,
      }),
      404
    );
  },
};
