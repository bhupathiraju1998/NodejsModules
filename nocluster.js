const http = require("http");
//pm2 start filename.js -i 0
//to stop :- pm2 stop filename.js
const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.writeHead(200, { "Content-Type": "text/plain" });
    res.end("Home Page");
  } else if (req.url === "/slow-page") {
    for (let i = 0; i < 60000000000; i++) {}
    res.writeHead(200, { "Content-Type": "text/plain" });
    res.end("slow Page");
  }
});

server.listen(8000, () => console.log("server running on prt 8000"));
