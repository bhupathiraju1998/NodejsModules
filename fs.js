//how to read with sync and async
const fs = require("node:fs");
console.log("first");

const fileContents = fs.readFileSync("./file.txt"); //fs module internally uses a buffer by using utf-8 as below e can see the actual characters
//console.log(fileContents);
console.log("second");

const fileContentss = fs.readFileSync("./file.txt", "utf-8");
//we have used sync to wait for reponse of reacdfiesync but for node js it is handled asynchrolnlosy without blocking main thread as we have event pool i think so, fo that reason we have another method that is fs.readFile(path,function to be called after reading of file is done)
fs.readFile("./file.txt", (error, data) => {
  //error first callback pattern, if no error error is set to null and data holds the value of file
  if (error) {
    console.log(error);
  } else {
    console.log(data);
    //data has bianry values
    //if we utf-8 beside path and (eeror,data) with comma seperated we can see encoded text of buffer
  }
});

console.log("third");

//how to write with async and sync
fs.writeFileSync("./greet.txt", "hello world"); //this will create new file called getDefaultResultOrder.txt and add the data

fs.writeFile("./greet.txt", "heelow venu", (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log("success");
  }
});
//first wr get hello world next it changes to heelow world if we want not replace and just add to preiovus we need to add after content give a "space" in data ( " hellow world",{flag:"a"},(err)=>{})
