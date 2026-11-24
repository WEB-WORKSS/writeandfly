// Local preview server for the clean-URL build: node serve.mjs  ->  http://localhost:4173
import { createServer } from 'node:http';
import { readFile, stat } from 'node:fs/promises';
import { join, extname, normalize } from 'node:path';
const ROOT = join(import.meta.dirname, 'dist');
const TYPES = { '.html': 'text/html; charset=utf-8', '.css': 'text/css', '.js': 'text/javascript', '.svg': 'image/svg+xml', '.txt': 'text/plain', '.xml': 'application/xml' };
createServer(async (req, res) => {
  let p = normalize(decodeURIComponent(new URL(req.url, 'http://x').pathname)).replace(/^(\.\.[\\/])+/, '');
  let file = join(ROOT, p);
  try { if ((await stat(file)).isDirectory()) file = join(file, 'index.html'); } catch { }
  try { const body = await readFile(file); res.writeHead(200, { 'Content-Type': TYPES[extname(file)] || 'application/octet-stream' }); res.end(body); }
  catch { res.writeHead(404, { 'Content-Type': TYPES['.html'] }); res.end(await readFile(join(ROOT, '404.html'))); }
}).listen(4173, () => console.log('http://localhost:4173'));
