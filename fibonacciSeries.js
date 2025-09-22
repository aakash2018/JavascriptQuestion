function fibonacci(number) {
	let a = 0;
	let b = 1;
	let fibo = [];
	for (let i = 0; i <= number; i++) {
		if (i === 0) {
			fibo.push(0);
		} else {
			const value = a + b;
			[a, b] = [b, value];
			fibo.push(a);
		}
	}
	console.log(fibo);
}

fibonacci(9);

///---------------------fibonnacci series with find number----------------------------------

function fibonacciSeries(number) {
	const arr = [0, 1];
	for (let i = 2; i <= number; i++) {
		arr[i] = arr[i - 1] + arr[i - 2];
	}
	// console.log(arr[number]);
	return arr;
}
console.log(fibonacciSeries(5));

///-------------------------------------fibonnacci series with recursion----------------------------------

function fibonacciRecursion(number) {
	if(number<=1) return number;
	return fibonacciRecursion(number - 1) + fibonacciRecursion(number - 2);
}
console.log(fibonacciRecursion(3));
//------------one line fibonnacci series with recursion-------------------
const fibonacciRecursion1 = (n) => (n <= 1 ? n : fibonacciRecursion1(n - 1) + fibonacciRecursion1(n - 2));
console.log(fibonacciRecursion1(5));
				