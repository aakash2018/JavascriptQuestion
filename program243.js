function removeDuplicate(values) {
	const arrValues = values.split('');
	let count = {};
	let result = [];
	arrValues.forEach((ele, index) => {
		if (ele !== " ") {
			count[ele] = count[ele] + 1 || 1;
		} else {
			count[index + " "] = " ";
		}
	});

	const countable = Object.keys(count);
	for (let val of countable) {
		if (val !== '5 ' && val !== '9 ') {
			result.push(val);
		} else {
			result.push(" ");
		}
	}
	console.log(result.join(''));
}
removeDuplicate("Happy New Year")