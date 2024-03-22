const http = require("http");
const { Worker } = require("node:worker_therads");
//pm2 start filename.js -i 0
//to stop :- pm2 stop filename.js
const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.writeHead(200, { "Content-Type": "text/plain" });
    res.end("Home Page");
  } else if (req.url === "/slow-page") {
    const worker = new Worker("./worker-thread.js");
    worker.on("message", (j) => {
      res.writeHead(200, { "Content-Type": "text/plain" });
      res.end(`slow Page${j}`);
    });
    //now as this is slow performanvce  we migrate the for loop code in this route to wotker-thread.js\
    //useful in resize img or videos or encrypt files
    // let j = 0;
    // for (let i = 0; i < 60000000000; i++) {
    //   j++;
    // }
  }
});

server.listen(8000, () => console.log("server running on prt 8000"));
