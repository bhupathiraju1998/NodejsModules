console.log("first");
Promise.resolve().then(() => console.log("this is promise 1"));
console.log("second");
process.nextTick(() => console.log("this is process.nexttick1"));
//o/p: - first,second,nexttick,promise
