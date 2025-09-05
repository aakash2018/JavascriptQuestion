function firstRepeatingChar(value) {
    let count = {};
    for (let char of value) {
        count[char] = count[char] + 1 || 1;
        if (count[char] > 1) {
            return char;
        }
    }
}
console.log(firstRepeatingChar("success"));