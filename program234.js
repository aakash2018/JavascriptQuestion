function outer() {
	let count = 0;
	//  const message = `Final count is ${count}`;  //stale capture here 
	function getCount() {
		count = count + 1;
	}

	function inner() {
		// console.log(message); //show old count
		
		//Resolve this
		const message = `Final count is ${count}`;
		console.log(message);
	}
	// inner();
	return { inner, getCount };
}
const { getCount, inner } = outer();
getCount();
inner();
getCount();
inner();
// let functionCall = outer();
// functionCall();
// console.log(outer());
