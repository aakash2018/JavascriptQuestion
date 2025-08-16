function getSubstringsByLength(stringValue) {
	let arrayValue = stringValue.split('');
	const result = [];
	for (let i = 0; i < arrayValue.length; i++) {
		for (let j = i+1; j <= arrayValue.length; j++) {
			result.push(stringValue.slice(i, j));
		}
	}
	return result;
}
console.log(getSubstringsByLength("abc"));

//recursive

// "abc" के लिए एक्जेक्यूशन फ्लो
// पहली कॉल: start=0, end=1 → "a" जोड़ा

// दूसरी कॉल: start=0, end=2 → "ab" जोड़ा

// तीसरी कॉल: start=0, end=3 → "abc" जोड़ा

// चौथी कॉल: start=0, end=4 → end > length → start=1, end=3

// पांचवी कॉल: start=1, end=2 → "b" जोड़ा

// छठी कॉल: start=1, end=3 → "bc" जोड़ा

// सातवीं कॉल: start=1, end=4 → end > length → start=2, end=4

// आठवीं कॉल: start=2, end=3 → "c" जोड़ा

// नौवीं कॉल: start=2, end=4 → end > length → start=3 → start >= length → रिजल्ट रिटर्न
function getSubstringsRecursive(str, start = 0, end = 1, result = []) {
  if (start >= str.length) return result;
  if (end > str.length) return getSubstringsRecursive(str, start + 1, start + 2, result);
  
  result.push(str.slice(start, end));
  return getSubstringsRecursive(str, start, end + 1, result);
}

console.log(getSubstringsRecursive("abc"));
// Output: ["a", "ab", "abc", "b", "bc", "c"]