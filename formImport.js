const http = require("http");
const fs = require("fs");
http.createServer((req, res) => {
    fs.readFile("html/form.html", "utf-8", (err, data) => {
      if (err) {
        res.writeHead("500", { "Content-Type": "text/plain" });
        res.write(err);
        res.end();
      }
      res.writeHead("200", { "Content-Type": "text/html" });
      if (req.url == "/") {
        res.write(data);
        res.end();
      } 
      else if (req.url == "/submit") {
        res.write("<h1>Form is submitted</h1>");
        res.end();
      }
    });
  }).listen(3002);
