const http = require('http');
const fs = require('fs');
const path = require('path');

const root = __dirname;
http.createServer((req, res) => {
  let f = decodeURIComponent(req.url.split('?')[0]);
  if (f === '/') f = '/lialpesca.html';
  const p = path.join(root, f);
  fs.readFile(p, (err, data) => {
    if (err) { res.writeHead(404); return res.end('not found'); }
    const ext = path.extname(p);
    const type = ext === '.html' ? 'text/html; charset=utf-8'
               : ext === '.json' ? 'application/json' : 'text/plain; charset=utf-8';
    res.writeHead(200, { 'Content-Type': type });
    res.end(data);
  });
}).listen(4177, () => console.log('serving on http://localhost:4177'));
