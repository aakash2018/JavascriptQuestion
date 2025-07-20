//Objects -> helps to handle binary data (image processing), fixed length create then size not change
// file system operations,cryptography,image processing

const buff1 = Buffer.alloc(10); //allocate a buffer of 10 bytes -> zero
console.log(buff1);

const bufferFromString = Buffer.from("hello");
console.log(bufferFromString);

const bufferFromArrayOfintegers = Buffer.from([1, 2, 3, 4, 5, 0]);
console.log(bufferFromArrayOfintegers);

buff1.write("Node js");
console.log('After write Node js buff1',buff1.toString());

console.log(bufferFromString[0]);

console.log(bufferFromString.slice(0,3));

const concatBuffs = Buffer.concat([buff1,bufferFromString]);
console.log(concatBuffs);
console.log(concatBuffs.toJSON());
