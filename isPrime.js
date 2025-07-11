//isprime number
function primeNumberSeries(number) {
	if (number <= 1) return false;
	if (number === 2) return true;
	if (number % 2 === 0) return false;

	for (let i = 3; i <= Math.sqrt(number); i += 2) {
		if (number % i === 0) {
			return false;
		}
	}
	return true;

}

console.log(primeNumberSeries(2), "is prime number");