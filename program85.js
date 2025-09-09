function selectionSorts(arrValue) {
	for (let i = 0; i < arrValue.length; i++) {
		let minIndex = i;
		for (let j = i+1; j < arrValue.length; j++) {
			if (arrValue[minIndex] > arrValue[j]) {
				minIndex = j;
			}
		}
		[arrValue[i], arrValue[minIndex]] = [arrValue[minIndex], arrValue[i]];
	}
	console.log(arrValue);
}
selectionSorts([5, 3, 8, 4, 2]);