const cluster = require("node:cluster");
const http = require("http");
const OS = require("node:os");

console.log(OS.cpus().length); //gives no of  cores

// now we need to differentiatte snippets code for master or worker
if (cluster.isMaster) {
  console.log(`master process${process.pid} is running`);
  //as a master by default we need to create a 2 new workers minimum  using fork of cluster
  //only create an amny workers as there are CPU cores on the machine the app is running and
  //there is an package that decides conversts no cluster file to cluster and  gives output of how many worker are good for that system that is pm2 use that to nocluster.js file
  //cmd for converting is run the no cluster file with pm2 start filename.js -i 0 here zero repressenets the decision to make optimal cluster by package or we can specify the number like for example 2
  cluster.fork();
  cluster.fork();
} else {
  console.log(`worker process${process.pid} is running`);
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
}
