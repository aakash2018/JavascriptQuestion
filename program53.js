function calculateMod(a, b, m) {

    const sum = a + b;

    const result = sum % m;
    
   
    return result >= 0 ? result : result + m;
}


const a = 1000000;
const b = -1000000;
const m = 10000;


const output = calculateMod(a, b, m);
console.log(output); // 0