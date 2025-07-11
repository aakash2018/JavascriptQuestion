//factorial program recussion 
function factorialRecurssion(number) {
	if (number === 0) {
		return 1;
	}
	return factorialRecurssion(number - 1) * number;
}

console.log(factorialRecurssion(5));
