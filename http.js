//http is inherited of eventemitter calss
const http = require("node:http");
const fs = require("node:fs");

const server = http.createServer((req, res) => {
  const superHero = {
    firstname: "venu",
    lastname: "gopal",
  };
  const name = "bhupathiraju";
  const html = fs.readFileSync("./index.html", "utf-8"); //
  const html2 = fs.createReadStream("./index.html").pipe(res); //use __dirname+"./index.html" instead of relative path
  res.writeHead(200, { "Content-Type": "text/plain" }); //these are executed when ever there is req to server
  res.end("hello world");
  //1)suppose if we want to send json wee need to change text/plain to application/json and res.send(JSOn.Stringify(superHero));
  //2)suppose if we want to send static HTML as response we need to change to text/html and res.send(html) this will help for small html file what if there is big file buffer will be big so use stream and pipe to res
  //3)suppose if we want to use dynaic HTML we use string replacement
  let htmlFIle = fs.readFileSync("./index2.html", "utf-8");
  htmlFIle.replace("{{name}}", name);
  res.end(html2);
});

server.listen(3000, () => {
  console.log("server running on port 3000");
});
