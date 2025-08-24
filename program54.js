function binarySearchTargetValue(arrValue, targetValue) {
	let left = 0;
	let right = arrValue?.length - 1;
	let result = -1;
	while (left <= right) {
		let mid = Math.floor((left + right) / 2);
		if (arrValue[mid] === targetValue) {
			result = mid;
			return mid;
		} else if (arrValue[mid] < targetValue) {
			left = mid + 1;
		} else {
			right = mid - 1;
		}
	}
	return result;
}
let numArray = [1, 3, 5, 7, 9, 11, 13, 15, 17]
console.log(binarySearchTargetValue(numArray, 11));
console.log(binarySearchTargetValue(numArray, 8));