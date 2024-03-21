//http,fs are part I/O queue
const fs = require("node:fs");
setTimeout(() => console.log("settimeout"), 0);
setTimeout(() => console.log("settimeout"), 3);
fs.readFile(__filename, () => {
  console.log("this is read file1");
});
console.log("first");
Promise.resolve().then(() => console.log("this is promise 1"));
console.log("second");
process.nextTick(() => console.log("this is process.nexttick1"));
