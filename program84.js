function bubbleSorts(arrValue) {
	for (let i = 0; i < arrValue.length; i++) {
		// console.log(arrValue[i], i, arrValue,"outer");
		for (let j = 0; j < arrValue.length - i - 1; j++) {
			// console.log(arrValue[j], j, arrValue,"inner");
			if (arrValue[j] > arrValue[j + 1]) {
				[arrValue[j], arrValue[j + 1]] = [arrValue[j + 1], arrValue[j]]
			}
		}
	}
	console.log(arrValue);
}
bubbleSorts([64, 34, 25, 12, 22, 11, 90]);