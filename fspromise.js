///we also have a promise based veriosn fs here we can instead of call back we write then and catch

const fs = require("node:fs/promises");

fs.readFile("./file.txt", "utf-8")
  .then((data) => console.log(data))
  .catch((error) => console.log(error));

fs.writeFile("./greet.txt", "halo venu")
  .then((data) => console.log("data success"))
  .catch((error) => console.log("error"));
