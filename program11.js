function mostFrequentChar(stringValue) {
	let frequencyCount = {};
	let maxChar = '';
	let maxCount = 1;
	let arrayValue = stringValue.split('');

	for (let i = 0; i < arrayValue.length; i++) {
		frequencyCount[arrayValue[i]] = frequencyCount[arrayValue[i]] + 1 || 1;
	}

	Object.entries((frequencyCount)).map(([key, value]) => {
		if (maxCount < value) {
			maxCount = value;
			maxChar = key;
		}
	});

	return maxChar;
	// console.log(frequencyCount,maxCount,maxChar);
}
console.log(mostFrequentChar("hello")); // "l"
console.log(mostFrequentChar("aabbbcc")); // "b"
