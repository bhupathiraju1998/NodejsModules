//close event listenenrs goes to close event

const fs = require("node:fs");

const readableStream = fs.createReadStream(__filename);
readableStream.close();

readableStream.on("close", () => {
  console.log("this is the readablestream close event callback");
});

setImmediate(() => {
  console.log("setimmidate");
});
setTimeout(() => console.log("settimeout"), 0);

console.log("first");
Promise.resolve().then(() => console.log("this is promise 1"));
console.log("second");
process.nextTick(() => console.log("this is process.nexttick1"));
