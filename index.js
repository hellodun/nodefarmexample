const fs = require('fs');
const http = require('http');
const url = require('url');


const data = fs.readFileSync(`${__dirname}/dev-data/data.json`, 'utf-8');

const tempOverview = fs.readFileSync(`${__dirname}/templates/template-overview.html`, 'utf-8');

const tempCard = fs.readFileSync(`${__dirname}/templates/template-card.html`, 'utf-8');

const tempProduct = fs.readFileSync(`${__dirname}//templates/template-product.html`, 'utf-8');

const jsonData = JSON.parse(data);

const server = http.createServer((req, res) => {
  res.end("Response from server")
})

server.listen(8080, console.log("Server started"))