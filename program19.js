//using regular expresiion replace method
function replaceWhiteSpace(strs) {
	console.log(strs.replace(/ /g, "%20"));
}
replaceWhiteSpace("i love programming");
//using traddition method
function addstring(strs) {
	let arValue = Array.from(strs);
	const newAr = arValue.map((ele) => {
		if (ele === " ") {
			ele = "%20";
		}
		return ele;
	});
	console.log(newAr.join(''));
	// console.log(newAr.join(' ')); i %20 l o v e %20 p r o g r a m m i n g
	// console.log(newAr.join()) i,%20,l,o,v,e,%20,p,r,o,g,r,a,m,m,i,n,g;
	// console.log(arValue.join('%20')); if i were selected  
}
addstring("i love programming");