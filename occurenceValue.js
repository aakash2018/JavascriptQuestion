// occurence of value 

function getOcurrences(params) {
	let occur = {};
	for (let i = 0; i < params.length; i++) {
		occur[params[i]] = occur[params[i]] + 1 || 1;
	}
	console.log(occur); // output { '1': 2, '2': 3, '3': 3, '4': 5, '5': 1, '6': 1, '7': 1 }
}

getOcurrences([1, 1, 2, 3, 4, 5, 2, 2, 3, 4, 4, 4, 4, 3, 7, 6]); //input