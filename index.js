const fs = require('fs');
const http = require('http');
const url = require('url');

const replaceTemplate = require('./modules/replaceTemplate')


const data = fs.readFileSync(`${__dirname}/dev-data/data.json`, 'utf-8');

const tempOverview = fs.readFileSync(`${__dirname}/templates/template-overview.html`, 'utf-8');

const tempCard = fs.readFileSync(`${__dirname}/templates/template-card.html`, 'utf-8');

const tempProduct = fs.readFileSync(`${__dirname}//templates/template-product.html`, 'utf-8');

const jsonData = JSON.parse(data);

const server = http.createServer((req, res) => {

  const { query, pathname } = url.parse(req.url, true);

  // Overview page
  if (pathname === "/" || pathname === "/overview") {
    res.writeHead(200, {
      "Content-type": "text/html"
    });

    const cardHtml = jsonData.map(element => replaceTemplate(tempCard, element)).join("");
    const output = tempOverview.replace('{%PRODUCT_CARDS%}', cardHtml)

    res.end(output)

    // Product Page
  } else if (pathname === "/product") {
    const product = jsonData[query.id];
    const output = replaceTemplate(tempProduct, product);
    res.writeHead(200, {
      "Content-type": "text/html",
    });

    res.end(output);

    // Error page
  } else {
    res.writeHead(404, {
      "Content-type": "text/html"
    });
    res.end("<h1> Sorry\nPage Not Found </h1>")
  }

})

server.listen(8088, console.log("Server started"))