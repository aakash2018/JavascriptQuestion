function longestCommonPreffix(arrValue) {
	if (arrValue.length === 0) return "";
	let firstString = arrValue[0];
	let smallestStringCount;
	for (let i = 0; i < arrValue.length; i++) {
		smallestStringCount = Math.min(firstString.length, arrValue[i].length);
		let secondString = arrValue[i];
		let temp = "";
		for (j = 0; j < smallestStringCount; j++) {
			if (firstString[j] === secondString[j]) {
				temp += secondString[j];
			} else {
				break;
			}
		}
		firstString = temp;
		if (firstString === "") return "";
	}
	console.log(firstString);
}

longestCommonPreffix(
	["flower", "flow", "flight"]
);
longestCommonPreffix(
	["dog", "racecar", "car"]
);

//------------------another method---------------
function commonPreffix(strs) {
	if (!strs || strs.length === 0) return "";
	let preffix = strs[0];
	for (let i = 1; i < strs?.length; i++) {
		//-1 ho per 0 na ho 
		while(strs[i].indexOf(preffix) !== 0) {
			preffix = preffix.slice(0, -1);
			if (preffix === "") return "";
		}
	}
	console.log(preffix);
}

commonPreffix(
	["flower", "flow", "flight"]
);
commonPreffix(
	["dog", "racecar", "car"]
);