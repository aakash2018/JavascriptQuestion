//factorial program 

function factorial(number) {
	let fact = 1;
	for (let i = number; i >= 1; i--) {
		fact = fact * i;
	}
	console.log(fact);
}

factorial(5);