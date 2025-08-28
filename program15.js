function shuffleTwoString(str1, str2, shuffleStr) {

	const s1 = str1.length;
	const s2 = str2.length;
	const sStr = shuffleStr.length;

	if (sStr !== s1 + s2) {
		return false
	};

	const freq = new Map();

	for (let i = 0; i < s1; i++) {
		freq.set(str1[i], (freq.get(str1[i]) || 0) + 1);
	}

	for (let j = 0; j < s2; j++) {
		freq.set(str2[j], (freq.get(str2[j]) || 0) + 1);
	}

	for (let k = 0; k < sStr; k++) {
		if (freq.has(shuffleStr[k]))
			freq.set(shuffleStr[k], freq.get(shuffleStr[k]) - 1);
		else
			return false;
	}

	for (let [key, value] of freq) {
		if (value !== 0) {
			return false;
		}
	}

	return true;
}
console.log(shuffleTwoString('BA', 'XY', 'XYAB') ? 'Yes' : 'No');
console.log(shuffleTwoString('BA', 'XY', 'XUMB') ? 'Yes' : 'No');
console.log(shuffleTwoString('ABC', 'ZYS', 'YBAZSC') ? 'Yes' : 'No');

// let employee = {
// 	ename: 'Aakash',
// 	age: '31'
// }

// let { ename: name } = employee;
// ename = "ram";
// console.log(ename);//ram
// console.log(employee.ename); //Aakash


// let employeed = {
//   ename :'Aakash',
//   age:'31'
// }
// let employeedOne = employeed;
// employeed.ename ="ram";
// console.log(employeedOne.ename); //ram
// console.log(employeed.ename); //ram
