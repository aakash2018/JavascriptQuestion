function firstNonRepeatingChar(str1) {
	const str = str1.toLowerCase().split('');
	let stringCount = {};
	for (let i = 0; i < str.length; i++) {
		stringCount[str[i]] = stringCount[str[i]] + 1 || 1;
	}
	for (let count of str) {
		if (stringCount[count] === 1) {
			return count
		}
	}
}
console.log(firstNonRepeatingChar("swiss"));
//----------------using indexof and lastindexof--------------
function nonRepeatingCharIndex(str) {
	for (let i = 0; i < str.length; i++) {
		if (str.indexOf(str[i]) === str.lastIndexOf(str[i])) {
			return str[i];
		}
	}
	return null;
}
console.log(nonRepeatingCharIndex("swiss"));