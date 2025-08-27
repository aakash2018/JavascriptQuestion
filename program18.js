function stringToChar(strs) {
	//---using split method -----
	console.log(strs.split(''));
	//---using spread destructing -----
	console.log([...strs]);
	//----- using array from --------
	console.log(Array.from(strs));
}

stringToChar('hello');