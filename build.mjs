// Static site generator for the Writeandfly website.
//   node build.mjs            -> dist/     clean URLs (/product/), for deployment (S3 + CloudFront, Amplify, Netlify...)
//   node build.mjs --preview  -> preview/  flat files (product.html) with relative links, for the hosted preview
import { mkdirSync, writeFileSync, copyFileSync, rmSync, readdirSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';
import { SITE } from './src/site.config.mjs';
import { PAGES } from './src/pages.mjs';

const ROOT = dirname(fileURLToPath(import.meta.url));
const PREVIEW = process.argv.includes('--preview');
const OUT = join(ROOT, PREVIEW ? 'preview' : 'dist');
const BASE = SITE.domain ? `https://www.${SITE.domain}` : '';

// route helpers -------------------------------------------------------
export const url = (route, hash = '') => {
  const h = hash ? '#' + hash : '';
  if (PREVIEW) return (route === '/' ? 'index.html' : route.slice(1) + '.html') + h;
  return (route === '/' ? '/' : route + '/') + h;
};
const asset = p => (PREVIEW ? 'assets/' : '/assets/') + p;
const esc = s => String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');

export const LOGO_MARK = `<svg viewBox="0 0 32 32" aria-hidden="true"><rect width="32" height="32" rx="8" fill="#0f5462"/><path d="M5.5 15.2 26.5 6.5 20 25l-4.6-6.6z" fill="#fff"/><path d="M15.4 18.4 26.5 6.5" stroke="#0f5462" stroke-width="1.5"/><path d="M5.5 23.5h7.5M5.5 27h4.5" stroke="#ff7a57" stroke-width="2" stroke-linecap="round"/></svg>`;
const brand = `<a class="brand" href="${url('/')}" aria-label="${SITE.name} home">${LOGO_MARK}<span>Write<b>and</b>fly</span></a>`;

const NAV = [['/product', 'Product'], ['/how-it-works', 'How it works'], ['/solutions', 'Solutions'], ['/technology', 'Technology'], ['/security', 'Security'], ['/pricing', 'Pricing'], ['/about', 'About']];

const header = route => `<a class="skip" href="#main">Skip to content</a>
<header class="site-head"><div class="wrap head-row">${brand}
<button class="menu-btn" type="button" aria-expanded="false" aria-controls="site-nav">Menu</button>
<nav class="nav" id="site-nav" aria-label="Main">
${NAV.map(([r, l]) => `<a href="${url(r)}"${r === route ? ' aria-current="page"' : ''}>${l}</a>`).join('')}
<a class="demo-link" href="${url('/demo')}"${route === '/demo' ? ' aria-current="page"' : ''}>Live demo</a>
<a class="btn primary small" href="${url('/contact')}">Request early access</a>
</nav></div></header>`;

const footer = () => `<footer class="site-foot"><div class="wrap">
<div class="foot-grid">
<div>${brand}<p>${SITE.name}: ${SITE.positioning} ${SITE.stage}, founded ${SITE.founded}.</p></div>
<div><h4>Product</h4><ul><li><a href="${url('/product')}">Platform overview</a></li><li><a href="${url('/how-it-works')}">How it works</a></li><li><a href="${url('/demo')}">Live demo</a></li><li><a href="${url('/pricing')}">Pricing</a></li></ul></div>
<div><h4>Company</h4><ul><li><a href="${url('/about')}">About</a></li><li><a href="${url('/about', 'team')}">Team</a></li><li><a href="${url('/technology')}">Technology</a></li><li><a href="${url('/security')}">Security</a></li></ul></div>
<div><h4>Get in touch</h4><ul><li><a href="${url('/contact')}">Request early access</a></li><li><a href="${url('/solutions')}">Who it's for</a></li>${SITE.email ? `<li><a href="mailto:${SITE.email}">${SITE.email}</a></li>` : ''}<li><a href="${SITE.founders[0].linkedin}" rel="noopener">Founder on LinkedIn</a></li></ul></div>
</div>
<div class="legal-row"><span>© ${SITE.founded} ${SITE.legalName || SITE.name}. All rights reserved.</span><span><a href="${url('/privacy')}" style="color:inherit">Privacy Policy</a> · <a href="${url('/terms')}" style="color:inherit">Terms of Service</a></span></div>
</div></footer>`;

const orgLd = () => {
  const o = {
    '@context': 'https://schema.org', '@type': 'Organization', name: SITE.name, slogan: SITE.tagline,
    description: SITE.statement, foundingDate: String(SITE.founded),
    founder: SITE.founders.map(f => ({ '@type': 'Person', name: f.name, jobTitle: f.title, sameAs: [f.linkedin] }))
  };
  if (SITE.legalName) o.legalName = SITE.legalName;
  if (BASE) { o.url = BASE; o.logo = BASE + '/assets/logo.svg'; }
  if (SITE.email) o.email = SITE.email;
  if (SITE.linkedin) o.sameAs = [SITE.linkedin];
  return JSON.stringify(o).replace(/</g, '\\u003c');
};

const layout = p => `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover">
<meta name="claude:viewport-fit-sides" content="cover">
<title>${esc(p.title)}</title>
<meta name="description" content="${esc(p.desc)}">
${BASE ? `<link rel="canonical" href="${BASE}${p.route === '/' ? '/' : p.route + '/'}">` : ''}
<meta property="og:type" content="website">
<meta property="og:site_name" content="${SITE.name}">
<meta property="og:title" content="${esc(p.title)}">
<meta property="og:description" content="${esc(p.desc)}">
${BASE ? `<meta property="og:url" content="${BASE}${p.route === '/' ? '/' : p.route + '/'}">` : ''}
<meta name="twitter:card" content="summary">
<meta name="theme-color" content="#0f5462">
${p.noindex ? '<meta name="robots" content="noindex">' : ''}
<link rel="icon" href="${PREVIEW ? '' : '/'}favicon.svg" type="image/svg+xml">
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Atkinson+Hyperlegible:wght@400;700&family=Familjen+Grotesk:wght@500;700&family=IBM+Plex+Mono:wght@500&display=swap">
<link rel="stylesheet" href="${asset('site.css')}">
<script type="application/ld+json">${orgLd()}</script>
</head>
<body>
${header(p.route)}
<main id="main" tabindex="-1">
${p.body}
</main>
${footer()}
<script>window.WF_CONFIG=${JSON.stringify({ formEndpoint: SITE.formEndpoint })};</script>
<script src="${asset('site.js')}"></script>
${(p.scripts || []).map(s => `<script src="${asset(s)}"></script>`).join('\n')}
</body>
</html>
`;

// write ---------------------------------------------------------------
rmSync(OUT, { recursive: true, force: true });
mkdirSync(join(OUT, 'assets'), { recursive: true });
for (const f of readdirSync(join(ROOT, 'src', 'assets'))) copyFileSync(join(ROOT, 'src', 'assets', f), join(OUT, 'assets', f));
const favicon = LOGO_MARK.replace('<svg ', '<svg xmlns="http://www.w3.org/2000/svg" ');
writeFileSync(join(OUT, 'favicon.svg'), favicon);
writeFileSync(join(OUT, 'assets', 'logo.svg'), favicon);

const ctx = { url, SITE, LOGO_MARK };
for (const def of PAGES) {
  const p = def(ctx);
  const html = layout(p);
  let file;
  if (p.route === '/404') file = '404.html';
  else if (PREVIEW) file = p.route === '/' ? 'index.html' : p.route.slice(1) + '.html';
  else file = p.route === '/' ? 'index.html' : join(p.route.slice(1), 'index.html');
  mkdirSync(dirname(join(OUT, file)), { recursive: true });
  writeFileSync(join(OUT, file), html);
}
const routes = PAGES.map(d => d(ctx)).filter(p => !p.noindex).map(p => p.route);
writeFileSync(join(OUT, 'robots.txt'), `User-agent: *\nAllow: /\n${BASE ? `Sitemap: ${BASE}/sitemap.xml\n` : ''}`);
if (BASE) writeFileSync(join(OUT, 'sitemap.xml'), `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${routes.map(r => `  <url><loc>${BASE}${r === '/' ? '/' : r + '/'}</loc></url>`).join('\n')}\n</urlset>\n`);
console.log(`Built ${PAGES.length} pages into ${OUT}`);
