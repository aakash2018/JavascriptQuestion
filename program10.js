function compressString(stringValue) {
	let compressString = ''; // Final compressed result store करने के लिए
	let count = 1;  // उसकी count 1 से शुरू करें
	let arrayValue = stringValue.split('');
	if (arrayValue.length === 0) return "";
	let currentString = arrayValue[0]; // पहला character लें

	for (let i = 1; i < arrayValue.length; i++) {
		if (arrayValue[i] === currentString) {
			count++; // अगर वही character मिले, तो count बढ़ाओ
		} else {
			compressString += currentString + count; // नया character मिलने पर पुराने को store करो
			currentString = arrayValue[i]; // नए character पर शिफ्ट हो जाओ
			count = 1; // count फिर से 1 से शुरू
		}
	}
	compressString += currentString + count; // last character को भी जोड़ो
	return compressString;
}

console.log(compressString("aaabbbccaa"));  // "a3b3c2a2"
console.log(compressString("abc"));         // "abc" (कंप्रेशन नहीं होगा)
console.log(compressString("aabbb"));      // "a2b3"
console.log(compressString("")); 