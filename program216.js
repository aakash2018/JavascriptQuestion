function infinitCurry(a) {
	let total = a || 0;
	function inner(b) {
		if (b !== undefined) {
			total += b;
			return inner;
		} else {
			return total;
		}
	}
	return inner;
}
console.log(infinitCurry(10)(20)(30)());
// Output: 60
console.log(infinitCurry(10)(20)(30)(40)(50)(60)());