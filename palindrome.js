//2. Check if a String is a Palindrome 
function palindrome(name) {
	const nameArray = name.split('');
	const reverseString = [];
	for (let i = nameArray.length - 1; i >= 0; i--) {
		reverseString.push(nameArray[i]);
	}
	return (reverseString.join('') === name);
}

console.log(palindrome("madam"));

//using reduceRight
function palindromeUsingReduce(name) {
	const nameArray = name.split('');
	const reverseString = (nameArray.reduceRight((acc, cur) => acc + cur));
	console.log(reverseString === name);
}
palindromeUsingReduce("pop");