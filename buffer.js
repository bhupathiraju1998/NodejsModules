const buffer = new Buffer.from("Venu", "utf-8"); //no need to be inported,and utf-8 is default no need to mention

buffer.write("code evoultion");
console.log(buffer.toString());
console.log(buffer.toJSON());
console.log(buffer); //gives binary number of character code hexadecimal or base16 notation
