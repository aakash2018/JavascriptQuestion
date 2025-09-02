function stringsDigit(stringValue) {
	return !/[^0-9]/.test(stringValue);
}
console.log(stringsDigit('a2kash'));
//--------------------------------------
function stringsDigitregex(stringValue) {
	return /^\d+$/.test(stringValue);
}
console.log(stringsDigitregex('a2kash'));
//----------------------------------------
function isOnlyDigits(arg) {
	if (arg.length === 0) return false;
	for (let i = 0; i < arg.length; i++) {
		console.log(arg[i]);
		if (arg[i] < '0' || arg[i] > '9') {
			return false;
		}
	}
	return true;
}
console.log(isOnlyDigits("12345")); // true
console.log(isOnlyDigits("12a45")); // false
console.log(isOnlyDigits(""));