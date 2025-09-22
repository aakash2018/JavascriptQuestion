function checkAnagrams(str1, str2) {

    let str1count = {};
    let str2count = {};
    for (let i = str1.split('').length - 1; i >= 0; i--) {
        str1count[str1[i]] = str1count[str1[i]] + 1 || 1;
    }
    for (let j = str2.split('').length - 1; j >= 0; j--) {
        str2count[str2[j]] = str2count[str2[j]] + 1 || 1;
    }
    for (let freq in str2count) {
        if (str1count[freq] !== str2count[freq]) {
            return false;
        }
    }
    return true;

}

console.log(checkAnagrams('listennn', 'silentnn'));

//version 2
function checkAnagrams2(str1, str2) {
    let sortedStr1 = str1.split('').sort().join('');
    let sortedStr2 = str2.split('').sort().join('');
    return sortedStr1 === sortedStr2;
}

console.log(checkAnagrams2('listennn', 'silentnn'));
//version 3
function checkAnagrams3(str1, str2) {
    if (str1.length !== str2.length) return false;
    let count = new Array(26).fill(0);
    for (let i = 0; i < str1.length; i++) {
        count[str1.charCodeAt(i) - 97]++;
        count[str2.charCodeAt(i) - 97]--;
    }
    for (let i = 0; i < 26; i++) {
        if (count[i] !== 0) return false;
    }
    return true;
}

console.log(checkAnagrams3('listennn', 'silentnn'));