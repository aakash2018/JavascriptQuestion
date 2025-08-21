//Check if a String is a Rotation of Another String
const isRotation = (a, b) => a.length === b.length && (a + a).includes(b);
console.log(isRotation("abcd", "cdab"));  // true
console.log(isRotation("hello", "olleh")); // false

function isRotations(a, b) {
    // 1. लंबाई समान नहीं तो false
    if (a.length !== b.length) return false;
    
    // 2. a को खुद से जोड़ें (a+a)
    const doubleA = a + a;
    
    // 3. क्या b, doubleA में है?
    return doubleA.includes(b);
}

console.log(isRotations("abcd", "cdab"));  // true
console.log(isRotations("hello", "olleh")); // false