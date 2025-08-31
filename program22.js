function countWords(strArg) {
    return strArg.trim().split(' ').length;
}
console.log(countWords("  This is a sample string.  "));
//------------------------------------------------------
function countWordsregex(str) {
    if (!str.trim()) return 0; // empty or spaces only
    return str.trim().split(/\s+/).length;
}
console.log(countWords("  This is a sample string.  "));