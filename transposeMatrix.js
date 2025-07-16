const matrix = [
	[1, 2, 3, 13],
	[4, 5, 6, 14],
	[7, 8, 9, 15],
	[10, 11, 12, 16]
];

function transposeMatrix(arg) {
	let transposeArray1 = [];
	for (let i = 0; i < arg[0].length; i++) {
		let transposeArray = [];
		for (let j = 0; j < arg.length; j++) {
			transposeArray.push(arg[j][i]);
		}
		transposeArray1.push(transposeArray);
	}
	console.log(transposeArray1);
}

transposeMatrix(matrix);
//----------------------usingMap-------------------------------------

function transposeMatrixUsingMap(matrix) {
	// matrix[0].map((ele,index)=>console.log(ele,index));
	// matrix.map((row)=>console.log(row[0]));
	return matrix[0].map((_, colIndex) => matrix.map(row => row[colIndex]));
}

console.log(transposeMatrixUsingMap(matrix));