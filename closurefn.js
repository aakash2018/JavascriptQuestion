// closure
function outer() {
	let x = 10;
	function inner() {
		return x = x + 1;
	}
	return inner;
}

const outerScope = new outer();
const innerValue = outerScope();
console.log(innerValue);