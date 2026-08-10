// Servidor estático mínimo para probar la app en la computadora.
// En el celular no hace falta: se abre directamente la URL publicada.
//   node serve.js   →   http://localhost:4177
const http = require('http');
const fs = require('fs');
const path = require('path');

const root = __dirname;
const TIPOS = {
  '.html': 'text/html; charset=utf-8',
  '.json': 'application/manifest+json; charset=utf-8',
  '.svg': 'image/svg+xml',
  '.png': 'image/png',
  '.js': 'text/javascript; charset=utf-8'
};

http.createServer((req, res) => {
  let f = decodeURIComponent(req.url.split('?')[0]);
  if (f === '/' || f === '') f = '/index.html';
  const p = path.join(root, path.normalize(f).replace(/^(\.\.[/\\])+/, ''));
  fs.readFile(p, (err, data) => {
    if (err) { res.writeHead(404, { 'Content-Type': 'text/plain; charset=utf-8' }); return res.end('No encontrado'); }
    res.writeHead(200, { 'Content-Type': TIPOS[path.extname(p)] || 'text/plain; charset=utf-8' });
    res.end(data);
  });
}).listen(4177, () => console.log('Abre http://localhost:4177'));
