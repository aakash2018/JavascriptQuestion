
let count = 0;
function printNumber() {
	count =count+1;
	console.log(count);
	if (count >= 10) {
		clearInterval(printInterval);
	}

}
let printInterval = setInterval(printNumber, 1000);



