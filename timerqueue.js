setTimeout(() => console.log("settimeout"), 0);
console.log("first");
Promise.resolve().then(() => console.log("this is promise 1"));
console.log("second");
process.nextTick(() => console.log("this is process.nexttick1"));
//o/p: - first,second,nexttick,promise,settimeout
//when both next and promise is cleared out then only we enter other queue like timerqueue
