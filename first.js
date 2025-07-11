// prime number series
function isPrime(number) {
	if (number === 2) return true;
	for (let i = 3; i <= Math.sqrt(number); i += 2) {
		if (number % i === 0) {
			return false;
		}
	}
	return true;
}

function primeNumber(number) {
	for (let i = 2; i < number; i++) {
		if (isPrime(i)) {
			console.log(i);
		}
	}
}


primeNumber(30);

//remove duplicates array

function removeDupicates(params) {
	let unique = [];
	for (let i = 1; i < params.length; i++) {
		if (!unique.includes(params[i])) {
			unique.push(params[i]);
		}
	}
	console.log(unique);
}
removeDupicates([1, 1, 2, 3, 4, 5, 2, 2, 3, 4, 4, 4, 4, 3, 7, 6]);

//1. Reverse a String 
function reverseString(name) {
	const nameArray = name.split('');
	const reverseString = [];
	for (let i = nameArray.length - 1; i >= 0; i--) {
		reverseString.push(nameArray[i]);
	}
	console.log(reverseString.join(''));
}

reverseString("aakash");

//2. Check if a String is a Palindrome 
function reverseString(name) {
	const nameArray = name.split('');
	const reverseString = [];
	for (let i = nameArray.length - 1; i >= 0; i--) {
		reverseString.push(nameArray[i]);
	}
	console.log(reverseString.join(''));
}

reverseString("aakash");

//flatten Array
function isFlattenArray(inputValue) {
	let result = [];  
  for (let i = 0; i < inputValue.length; i++) {
    if (Array.isArray(inputValue[i])) {
      // If element is array, recursively flatten it
      result = result.concat(isFlattenArray(inputValue[i]));
    } else {
      // If element is not array, add to result
      result.push(inputValue[i]);
    }
  }
  
  return result;
}

console.log(isFlattenArray([1, 2, [[[4, 5, 6]]], 8, 7, [3, 9], [[11, 12]]]));

//Get Unique Characters from a string 

//3. Remove Duplicates from a String 
//4. Find the First Non-Repeating Character 
//5. Count the Occurrences of Each Character 
//6. Reverse Words in a Sentence 
//7. Check if Two Strings are Anagrams 
//8. Find the Longest Substring Without Repeating Characters 
//9. Convert a String to an Integer (atoi Implementation) 
//10. Compress a String (Run-Length Encoding) 
//11. Find the Most Frequent Character 
//12. Find All Substrings of a Given String 
//13. Check if a String is a Rotation of Another String 
//14. Remove All White Spaces from a String 
//15. Check if a String is a Valid Shuffle of Two Strings 
//16. Convert a String to Title Case 
//17. Find the Longest Common Prefix 
//18. Convert a String to a Character Array 
//19. Replace Spaces with %20 (URL Encoding) 
//20. Convert a Sentence into an Acronym 
//21. Check if a String Contains Only Digits 
//22. Find the Number of Words in a String 
//23. Remove a Given Character from a String 
//24. Find the Shortest Word in a String 
//25. Find the Longest Palindromic Substring