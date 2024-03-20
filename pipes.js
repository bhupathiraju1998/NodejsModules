//streams extend from event emitter class
const fs = require("node:fs");
const zlib = require("node:zlib"); //it compress files like zip files,it has abuilt in transform stream
const gzip = zlib.createGzip();
const readableStream = fs.createReadStream("./file1.txt", {
  encoding: "utf-8",
  highWaterMark: 2,
});

const writeableStream = fs.createWriteStream("./file2.txt");

readableStream.pipe(writeableStream);
//pipe returns a destination stream(readable,duplex,transform) which enables chaining, but in above line we used writable stream so we cannot chain instad we make use of another module zlib
readableStream.pipe(gzip).pipe(fs.WriteStream("./file2.txt.gz"));
