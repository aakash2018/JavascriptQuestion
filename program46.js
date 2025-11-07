function repeatChar(string, number) {
    let stringConcat = '';
    for (i = 0; i < number; i++) {
        stringConcat += string;
    }
    return stringConcat;
}

console.log(repeatChar('abc', 5));

//-----------using repeat and iife function ----
console.log(((string, num) =>
    string.repeat(num)
)('abc', 5));

//-----------using array and join method ----
function repeatCharUsingArray(string, number) {
    return Array(number).fill(string).join('');
}
console.log(repeatCharUsingArray('abc', 5));    