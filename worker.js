import { pages } from "./content.js";
import { gastenboekEntries } from "./gastenboek-data.js";

const SITE_NAAM = "Huize Oude Willem";

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

function layout({ pad, title, metaDescription, featured, body }) {
  const featuredHtml = featured
    ? `<div class="featured-image" style="background-image:url('/images/${featured}')"></div>`
    : "";
  return `<!DOCTYPE html>
<html lang="nl">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>${title} - ${SITE_NAAM}</title>
${metaDescription ? `<meta name="description" content="${metaDescription}">` : ""}
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
    <a href="mailto:info@huizeoudewillem.nl">E-mail</a>
  </div>
  <p>Copyright &copy; ${SITE_NAAM}</p>
</footer>
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

export default {
  async fetch(request, env) {
    const url = new URL(request.url);
    let pad = url.pathname;

    // Afbeeldingen uit R2
    if (pad.startsWith("/images/")) {
      return serveImage(env, decodeURIComponent(pad.slice("/images/".length)));
    }

    // Paden normaliseren: altijd met slash op het eind
    if (!pad.endsWith("/")) {
      return Response.redirect(url.origin + pad + "/", 301);
    }

    // Gastenboek wordt apart opgebouwd uit de berichten-data
    if (pad === "/gastenboek/") {
      return htmlResponse(
        layout({ pad, title: "Gastenboek", featured: null, body: gastenboekBody() })
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
        })
      );
    }

    return htmlResponse(
      layout({
        pad,
        title: "Pagina niet gevonden",
        featured: null,
        body: `<p>Deze pagina bestaat niet (meer). Ga terug naar de <a href="/">homepagina</a>.</p>`,
      }),
      404
    );
  },
};
