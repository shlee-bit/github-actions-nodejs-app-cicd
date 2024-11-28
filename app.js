// app.js
const http = require('http');

const hostname = '0.0.0.0';
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('nodeJs application practice\n');
});

server.listen(port, hostname, () => {
  console.log(`Node JS is running at http://${hostname}:${port}/`);
});

module.exports = server;
