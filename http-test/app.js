const { createServer } = require("node:http");

function createApp() {
  return createServer((request, response) => {
    console.log("request received");

    response.statusCode = 200;

    response.setHeader("Content-Type" , "text/html")

    const jsonResponseBody = JSON.stringify({ location : "Mars" });
    response.write("<h1>Ciao mamma</h1>");
    response.end();
  }).listen(8080);
}


module.exports = createApp;