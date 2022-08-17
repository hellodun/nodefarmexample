const fs = require('fs');
const http = require('http');
const url = require('url');

const server = http.createServer((req, res) => {
  res.end("Response from server")
})

server.listen(8080, console.log("Server started"))