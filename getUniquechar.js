function getUniqueCharacter(str) {
    return [...new Set(str)].join('');
}
console.log(getUniqueCharacter("aabbbccdeeff")); //abcdef
//-------------using filter ------------------
function getUniqueUsingFilter(str) {
    return str.split('').filter((ele, index, self) => self.indexOf(ele) === index).join('');
}
console.log(getUniqueUsingFilter("aabbbccdeeff"));
//-------------------using reduce method---------
function getUniqueCharacterReduce(str) {
    return str.split('').reduce((acc, cur) => acc.includes(cur) ? acc : acc + cur);
}
console.log(getUniqueCharacterReduce("aabbbccdeeff"));
//Difference between indexOf and index.
//indexof pahli baar index return karta hai phir ager wahi element aata hai to nahi karta hai.
//index har baar index return karta hai.