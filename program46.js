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