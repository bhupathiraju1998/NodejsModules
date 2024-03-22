const fs = require("node:fs");

console.log("first");

fs.readFile("./file.txt", "utf-8", (err, data) => {
  console.log("file contents");
});

console.log("last");
//crypto module uses libuv thredpool

//increasing threadpoolsize default is 4
process.env.UV_THREADPOOL_SIZE = 5;
//but if we increase it more than our cpu cores it takes more time to execute
//

//networkIO(https) async handled differently dono use thredpool
