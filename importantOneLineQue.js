console.log(+"meow"); // NaN → string not number 
console.log("1" + -1); // "1-1" → string concatenation 
console.log("5" - 2); // 3 → string converts number 
console.log("5" + 2); // "52" → string concatenation 
console.log(2 * "3"); // 6 → string coerces number 
console.log("6" / "2"); // 3 → both strings coerced 
console.log(null + 1); // 1 → null becomes 0 
console.log(undefined + 1); // NaN → undefined invalid number 
console.log([] + []); // "" → both empty strings 
console.log([] + {}); // "[object Object]" → coercion 
console.log({} + []); // 0 → {} as block 
console.log([1] + [1,2]); // "11,2" → arrays to string 
console.log([1,2] * 2); // NaN → "1,2" not number 
console.log(false - true); // -1 → false=0, true=1 
console.log("10" - "4"); // 6 → numeric subtraction 
console.log("10" + "4"); // "104" → string concat 
console.log(1 < 2 < 3); // true → left true=1 
console.log(3 > 2 > 1); // false → true > 1 → false 
console.log(0 == ""); // true → coercion rules 
console.log(0 === ""); // false → strict type check 
console.log(false == "0"); // true → both coerced 
console.log(false === "0"); // false → strict mismatch 
console.log(null == undefined); // true → abstract equality 
console.log(null === undefined); // false → strict check 
console.log(NaN == NaN); // false → NaN never equal 
console.log(Object.is(NaN, NaN)); // true → Object.is special 
console.log("b" + "a" + + "a" + "a"); // "baNaNa" → + "a" NaN 
console.log([] == 0); // true → [] → "" → 0 
console.log([] === 0); // false → type mismatch 
console.log([0] == 0); // true → "0" → 0 
console.log([0] === 0); // false → type mismatch 
console.log([null] == 0); // true → "" → 0 
console.log([undefined] == 0); // true → "" → 0 
console.log([1,2] == "1,2"); // true → toString match 
console.log({} == {}); // false → different references 
console.log([] == ![]); // true → []→0, ![]→false→0 
console.log("2" > "12"); // true → string comparison 
console.log("2" - "12"); // -10 → numeric subtraction 
console.log(+""); // 0 → empty string coerces 
console.log(+[]); // 0 → [] coerces number 
console.log(+{}); // NaN → object not number 
console.log(parseInt("08")); // 8 → decimal parsed 
console.log(parseInt("08", 8)); // 0 → octal parse 
console.log(!!"false"); // true → non-empty string 
console.log(!!undefined); // false → falsy value 
console.log(typeof NaN); // "number" → JS quirk 
console.log(typeof null); // "object" → legacy bug 
console.log(typeof []); // "object" → array object 