function flattenArray(arrVal) {
	let result = [];
	for (let i = 0; i < arrVal.length; i++) {
		if (Array.isArray(arrVal[i])) {
			result = result.concat(flattenArray(arrVal[i]));
		} else {
			result.push(arrVal[i]);
		}
	}
	return result;
}

console.log(flattenArray([1, [2, [3, [4, 5]]], 6]));
console.log(flattenArray([1, 2, [[[4, 5, 6]]], 8, 7, [3, 9], [[11, 12]]]));

//-------------using flatten array protottype ------------

Array.prototype.myFlattenArray = function () {
	let result = [];
	let arrValue = this;
	const flat = (arrValue) => {
		for (let i = 0; i < arrValue.length; i++) {
			if (Array.isArray(arrValue[i])) {
				flat(arrValue[i]);
			} else {
				result.push(arrValue[i]);
			}
		}
	}
	flat(arrValue);
	return result;
}
let arr = [1, [2, [3, [4, 5]]], 6];
console.log(arr.myFlattenArray());

