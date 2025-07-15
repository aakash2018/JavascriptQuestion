function findShortestWord(str1) {
    return (str1.split(' ').sort((a, b) => a.length - b.length)[0]);
}
console.log(findShortestWord("This is a test string"));
//-------------------------using reduce method---------------------------------------
function findShortestWordReduce(str1) {
    return str1.split(' ').reduce((acc, cur) => acc.length < cur.length ? acc : cur);
}
console.log(findShortestWordReduce("This is a test string"));
//----------------------normal function-----------------------------------------------
function forLoopShorting() {

}
forLoopShorting("This is a test string");