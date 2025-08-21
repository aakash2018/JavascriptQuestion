function atoiConverter(stringValue) {
	// 1. पहले स्पेस हटाओ
	let extractWhiteSpace = stringValue.trim();

	let sign = ''

	// 2. +/- चेक करो
	if (extractWhiteSpace[0] === '-' || extractWhiteSpace[0] === '+') {
		sign = extractWhiteSpace[0] === '-' ? -1 : 1;
		extractWhiteSpace = extractWhiteSpace.slice(1);
	}

	// 3. सिर्फ नंबर वाला पार्ट लो
	let num = '';
	for (let char of extractWhiteSpace) {
		if (!isNaN(char) && char !== '') {
			num += char;
		} else {
			break;
		}
	}

	// 4. नंबर में बदलो और साइन लगाओ
	num = num === '' ? 0 : +num * sign;

	// 5. 32-bit इंटीजर की लिमिट में लाओ
	const INT_MAX = Math.pow(2, 31) - 1;
	const INT_MIN = -Math.pow(2, 31);

	if (num > INT_MAX) return INT_MAX;
	if (num < INT_MIN) return INT_MIN;

	return num;
}

console.log(atoiConverter("42"));           // 42
console.log(atoiConverter("   -42"));       // -42
console.log(atoiConverter("4193 with"));    // 4193
console.log(atoiConverter("words and 987")); // 0
console.log(atoiConverter("-91283472332")); // -2147483648atoiConverter()