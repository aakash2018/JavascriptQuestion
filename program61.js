function fibonacci(number) {
	let result = [];
	let start = 0;
	let end = 1;
	for (let i = 0; i < number; i++) {
		if (i == 0) {
			result.push(0)
		} else {
			const value = start + end;
			[start, end] = [end, value];
			result.push(start);
		}
	}
	console.log(result);
}
fibonacci(6);

//---------using single varibale-----------
function fibonacciSingle(n) {
	if (n <= 0) return [];
	if (n === 1) return [0];
	if (n === 2) return [0, 1];
	let result = [0, 1];
	for (let i = 2; i < n; i++) {
		result.push(result[i - 1] + result[i - 2]);
	}
	return result;
}

console.log(fibonacciSingle(7));
//----- using recursive function --------------------
function recursiveFibonacci(num) {
	if (num <= 0) return [];
	if (num === 1) return [0];
	if (num === 2) return [0, 1];
	let result = recursiveFibonacci(num - 1);
	return [...result, result[result.length - 1] + result[result.length - 2]];

}
console.log(recursiveFibonacci(10));