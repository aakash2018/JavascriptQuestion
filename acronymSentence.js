function acronymSentence(str) {
	return str.split(' ').map((element, index) => {
		let acronym = element.at(0).toUpperCase();
		return acronym;
	});
}
console.log(acronymSentence("Line Of Control").join(''));
//--------------using regex-----------------------------
function acronymSentenceRegex(str) {
	return str.match(/\b\w/g).join('').toUpperCase()
}
console.log(acronymSentenceRegex("Line Of Control"));
//-------------toAcronym------------------------------
function toAcronym(str){
	return str.split('-').map((ele)=>ele[0].toUpperCase()).join('');
}

console.log(toAcronym("state-of-the-art"));