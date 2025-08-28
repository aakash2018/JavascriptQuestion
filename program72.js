// 👉 Definition

// map() हर element पर एक callback चलाता है और नया array return करता है (original array change नहीं होता)।

// 👉 Polyfill Code
Array.prototype.myMap = function (callback) {
	let result = []; // नया array store करने के लिए

	for (let i = 0; i < this.length; i++) {
		// callback(currentValue, index, array)
		result.push(callback(this[i], i, this));
	}

	return result; // नया array return
};

// 👉 Example
let arr = [1, 2, 3, 4];

let newArr = arr.myMap((num, index) => {
	return num * 2;
});

console.log(newArr);  // [2, 4, 6, 8]
console.log(arr);     // [1, 2, 3, 4]  (original same hai)

// 👉 Key Points

// Original array modify नहीं होता ✅

// हर element पर callback चलता है ✅

// Return value हमेशा new array होती है ✅