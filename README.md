# JavaScript Programs Collection

This repository contains a collection of JavaScript programs that solve various algorithmic and coding problems. The main entry point is `first.js`, which serves as an index and lists all the problems/topics covered in this collection.

---

## Index File

### first.js
**Description:** The index file. It contains a list of all the problems and topics covered in this repository, serving as a reference for the other program files.

```js
//1.Get Unique Characters from a string
//2. Check if a String is a Palindrome
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

//26. closure function
//27. factorial program 
//28. isPrime Number program
//29  Prime Number series program
//30. Occurence Number program
//31. factorial resurcive program
//32. union array program
//33. intersection program 
//34. fibonacci series
//35. currying function
//36. transpose matrix 
//37. input-change-output-question1
//38. Longest word in string
//39. i/p let str = "this tage hash tag"; - o/p #ThisTageHashTag
//40. let str = 'mississippi' find count of i
//41. find the char is upper case or not,
//42. string start with arg: checks("hello worlds",'hello') / a.startsWith(b)
//43. reverse string without using pre defined method
//44. find mean of given array = [1,2,3,4,5] : o/p 3
//45. fine mean madian from give array = [1,2,3,4,5,6] : means add/length , madian middle number
//46. repeate('abc',5) : o/p 'abcabcabcabcabc sol : str.repeat(num)
//47. create random color : console.log(Math.random(16).toString(16).substring(2,8))
//48. let arr = [43,12,43,55,78,99,09,88,55,78,43,21,56,21]; :  remove duplicate
//49: range of number rec(start = 1 , end = 6) / o/p : 1,2,3,4,5,6
//50: sliding window k = 3 ;  [1,2,4,5,2,5,6,7]
//51. print 1 to 10 every 1 sec. 
```

---

## Program Files

### fibonacciSeries.js
**Description:** Generates and prints the Fibonacci series up to a given number.
```js
function fibonacci(number) {
	let a = 0;
	let b = 1;
	let fibo = [];
	for (let i = 0; i <= number; i++) {
		if (i === 0) {
			fibo.push(0);
		} else {
			const value = a + b;
			[a, b] = [b, value];
			fibo.push(a);
		}
	}
	console.log(fibo);
}

fibonacci(9);
```

### shortestWordString.js
**Description:** Finds the shortest word in a string using both sort and reduce methods.
```js
function findShortestWord(str1) {
    return (str1.split(' ').sort((a, b) => a.length - b.length)[0]);
}
console.log(findShortestWord("This is a test string"));
//-------------------------using reduce method---------------------------------------
function findShortestWordReduce(str1) {
    return str1.split(' ').reduce((acc, cur) => acc.length < cur.length ? acc : cur);
}
console.log(findShortestWordReduce("This is a test string"));
```

### curryingfn.js
**Description:** Demonstrates a simple currying function for addition.
```js
function add(a) {
    return function (b) {
        return function (c) {
            return a + b + c;
        }
    }
}

console.log(add(2)(3)(4));
```

### flattenwithoutflat.js
**Description:** Flattens a nested array without using the built-in `flat()` method, and shows alternative flattening techniques.
```js
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
//--------------------online flatten array-------------------------

console.log([].concat.apply([],[1, 2, [[[4, 5, 6]]], 8, 7, [3, 9], [[11, 12]]]));
//-----------------------------------------------------------------
console.log([1, 2, [[[4, 5, 6]]], 8, 7, [3, 9], [[11, 12]]].flat(Infinity));
```

### checkAnagrams.js
**Description:** Checks if two strings are anagrams of each other.
```js
function checkAnagrams(str1, str2) {

    let str1count = {};
    let str2count = {};
    for (let i = str1.split('').length - 1; i >= 0; i--) {
        str1count[str1[i]] = str1count[str1[i]] + 1 || 1;
    }
    for (let j = str2.split('').length - 1; j >= 0; j--) {
        str2count[str2[j]] = str2count[str2[j]] + 1 || 1;
    }
    for (let freq in str2count) {
        if (str1count[freq] !== str2count[freq]) {
            return false;
        }
    }
    return true;

}

console.log(checkAnagrams('listennn', 'silentnn'));
```

### reverseWordSentence.js
**Description:** Reverses the words in a sentence using different methods.
```js
function reverseWordSentence(sentence) {
    const reverseWord = [];
    reverseWord.push(sentence.split(' ').reduceRight((acc, cur) => acc + (acc ? " " : "") + cur, ""));
    console.log(reverseWord.join('').trim());
}
reverseWordSentence("the sky is blue");

//-----------------using reverse function---------------------
function usingReversefunction(sentence) {
    return sentence.split(' ').reverse().join(' ');
}
console.log(usingReversefunction("a good   example"));
//--------------------using normal function----------------------
function reversewords(sentence) {
    const rece = [];
    for (let i = sentence.split(' ').length-1; i >= 0; i--) {
        rece.push(sentence.split(' ')[i]);
    }
    console.log(rece.join(' '));
}
reversewords("a good   example");
```

### intersectionArray.js
**Description:** Finds the intersection of two or more arrays, including object array intersection by key.
```js
function intersectionArray(arr1, arr2) {
	const intersection = [];
	arr1.forEach(element => {
		if (arr2.includes(element)) {
			intersection.push(element);
		}
	});
	return intersection;
}
console.log(intersectionArray([1, 2, 3], [2, 3, 4]));
//------------------------------------------------------
function intersectionSingleLine(arr1, arr2) {
	return arr1.filter((ele) => arr2.includes(ele));
}
console.log(intersectionSingleLine([1, 2, 3], [2, 3, 4]));
//--------------------------------------------------------
function intersectMultipleArrays(arrays) {
	console.log(arrays.reduce((acc,cur)=>acc.filter((c)=>cur.includes(c))));
}

const arrays = [
	[1, 2, 3],
	[2, 3, 4],
	[3, 4, 5]
];
intersectMultipleArrays(arrays);
//------------object intersection-----------------------
function intersectObjects(arr1, arr2, key) {
    return arr1.filter(obj1 => 
        arr2.some(obj2 => obj1[key] === obj2[key])
    );
}

// Example:
const users1 = [{ id: 1, name: 'Alice' }, { id: 2, name: 'Bob' }];
const users2 = [{ id: 2, name: 'Bob' }, { id: 3, name: 'Charlie' }];
const commonUsers = intersectObjects(users1, users2, 'id');

console.log(commonUsers); // Output: [{ id: 2, name: 'Bob' }]
```

### unionArray.js
**Description:** Finds the union of two or more arrays using different approaches.
```js
function unionArray(arr1, arr2) {
    arr2.forEach(element => {
        if (!arr1.includes(element)) {
            arr1.push(element);
        }
    });
    return (arr1);
}
console.log(unionArray([1, 2, 3], [2, 3, 4]));

// ---------------------------------------------
function unionSingleLineArray(arr1, arr2) {
    const union = arr1.concat(arr2.filter(item => !arr1.includes(item)));
    return (union)
}

console.log(unionSingleLineArray([1, 2, 3], [2, 3, 4]));
//----------------------------------------------------------
const arrays = [[1, 2, 3], [2, 3, 4], [3, 4, 5]];

const union = arrays.reduce((acc, current) => {
  current.forEach(item => {
    if (!acc.includes(item)) {
      acc.push(item);
    }
  });
  return acc;
}, []);

console.log(union);
//------------------------------------
const array1 = [1, 2, 3];
const array2 = [2, 3, 4];
const array3 = [3, 4, 5];

const unions = [...new Set([...array1, ...array2, ...array3])];
console.log(unions); // [1, 2, 3, 4, 5]
//-----------------------------------------
const arrayValue = [[1, 2, 3], [2, 3, 4], [3, 4, 5]];
const unionthree = arrayValue.reduce((acc, current) => {
  current.forEach(item => {
    if (!acc.includes(item)) {
      acc.push(item);
    }
  });
  return acc;
}, []);

console.log(unionthree)
```

### reverseString.js
**Description:** Reverses a string using a loop and with `reduceRight`.
```js
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
//------------reverse string reduceMap------------------------
function reverseReduceRight(name){
	return name.split('').reduceRight((acc,cur)=>acc+cur);
}

console.log(reverseReduceRight("payal"));
```

### palindrome.js
**Description:** Checks if a string is a palindrome using both loop and `reduceRight` methods.
```js
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
```

### removeDuplicates.js
**Description:** Removes duplicate elements from an array.
```js
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
```

### primeSeries.js
**Description:** Prints all prime numbers up to a given number.
```js
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
```

### isPrime.js
**Description:** Checks if a given number is prime.
```js
//isprime number
function primeNumberSeries(number) {
	if (number <= 1) return false;
	if (number === 2) return true;
	if (number % 2 === 0) return false;

	for (let i = 3; i <= Math.sqrt(number); i += 2) {
		if (number % i === 0) {
			return false;
		}
	}
	return true;

}

console.log(primeNumberSeries(2), "is prime number");
```

### recursivefactorial.js
**Description:** Calculates the factorial of a number using recursion.
```js
//factorial program recussion 
function factorialRecurssion(number) {
	if (number === 0) {
		return 1;
	}
	return factorialRecurssion(number - 1) * number;
}

console.log(factorialRecurssion(5));
```

### factorial.js
**Description:** Calculates the factorial of a number using iteration.
```js
//factorial program 

function factorial(number) {
	let fact = 1;
	for (let i = number; i >= 1; i--) {
		fact = fact * i;
	}
	console.log(fact);
}

factorial(5);
```

### occurenceValue.js
**Description:** Counts the occurrences of each value in an array.
```js
// occurence of value 

function getOcurrences(params) {
	let occur = {};
	for (let i = 0; i < params.length; i++) {
		occur[params[i]] = occur[params[i]] + 1 || 1;
	}
	console.log(occur); // output { '1': 2, '2': 3, '3': 3, '4': 5, '5': 1, '6': 1, '7': 1 }
}

getOcurrences([1, 1, 2, 3, 4, 5, 2, 2, 3, 4, 4, 4, 4, 3, 7, 6]); //input
```

### promisefn.js
**Description:** Demonstrates a simple usage of JavaScript Promises.
```js
//Promise

const promisevalue = new Promise((resolve, reject) => {
	resolve("my promise  gives resolve");
});

promisevalue.then((res) => {
	console.log(res);
}).catch((err) => console.log(err));
```

### closurefn.js
**Description:** Demonstrates closure in JavaScript with a simple example.
```js
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
```

### acronymSentence.js
**Description:** Splits a sentence into words (useful for acronym generation or word extraction).
```js
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
```

### firstNonRepeating.js
**Description:** Finds the first non-repeating character in a string using two different methods.
```js
function firstNonRepeatingChar(str1) {
	const str = str1.toLowerCase().split('');
	let stringCount = {};
	for (let i = 0; i < str.length; i++) {
		stringCount[str[i]] = stringCount[str[i]] + 1 || 1;
	}
	for (let count of str) {
		if (stringCount[count] === 1) {
			return count
		}
	}
}
console.log(firstNonRepeatingChar("swiss"));
//----------------using indexof and lastindexof--------------
function nonRepeatingCharIndex(str) {
	for (let i = 0; i < str.length; i++) {
		if (str.indexOf(str[i]) === str.lastIndexOf(str[i])) {
			return str[i];
		}
	}
	return null;
}
console.log(nonRepeatingCharIndex("swiss"));
```

### getUniquechar.js
**Description:** Extracts unique characters from a string using Set, filter, and reduce methods.
```js
function getUniqueCharacter(str) {
    return [...new Set(str)].join('');
}
console.log(getUniqueCharacter("aabbbccdeeff")); //abcdef
//-------------using filter ------------------
function getUniqueUsingFilter(str) {
    return str.split('').filter((ele, index, self) => self.indexOf(ele) === index).join('');
}
console.log(getUniqueUsingFilter("aabbbccdeeff"));
//-------------------using reduce method---------
function getUniqueCharacterReduce(str) {
    return str.split('').reduce((acc, cur) => acc.includes(cur) ? acc : acc + cur);
}
console.log(getUniqueCharacterReduce("aabbbccdeeff"));
//Difference between indexOf and index.
//indexof pahli baar index return karta hai phir ager wahi element aata hai to nahi karta hai.
//index har baar index return karta hai.
```

### titleCaseString.js
**Description:** Converts a string to title case using both map and regex methods.
```js
function titleCaseString(str){
    return(str.split(' ').map((ele)=>ele[0].toUpperCase()+ele.slice(1)).join(' '));
}
console.log(titleCaseString("hello world"));
//----------------------------regerx---------------------------------------
function toTitleCase(str) {
  return str.toLowerCase()
           .replace(/(?:^|\s)\w/g, match => match.toUpperCase());
}
console.log(toTitleCase("  hello  world  ")); // "  Hello  World  "
```

### inputchangeoutput1.js
**Description:** Converts a dot-separated string (e.g., 'a.b.c.d.e') into a nested object structure.
```js
//Input:a.b.c.d.e
//Output:{a: {b: {c:{d:e}}}}
let inputStr = "a.b.c.d.e";
function inputOutput(str) {
    return str.split(".").reduceRight((acc, cur) => { return { [cur]: acc } });
}

console.log(JSON.stringify(inputOutput(inputStr)));
```

### transposeMatrix.js
**Description:** Transposes a matrix using both nested loops and the map method.
```js
const matrix = [
	[1, 2, 3, 13],
	[4, 5, 6, 14],
	[7, 8, 9, 15],
	[10, 11, 12, 16]
];

function transposeMatrix(arg) {
	let transposeArray1 = [];
	for (let i = 0; i < arg[0].length; i++) {
		let transposeArray = [];
		for (let j = 0; j < arg.length; j++) {
			transposeArray.push(arg[j][i]);
		}
		transposeArray1.push(transposeArray);
	}
	console.log(transposeArray1);
}

transposeMatrix(matrix);
//----------------------usingMap-------------------------------------

function transposeMatrixUsingMap(matrix) {
	// matrix[0].map((ele,index)=>console.log(ele,index));
	// matrix.map((row)=>console.log(row[0]));
	return matrix[0].map((_, colIndex) => matrix.map(row => row[colIndex]));
}

console.log(transposeMatrixUsingMap(matrix));
```

### print1to10.js
**Description:** Prints numbers from 1 to 10, one every second, using setInterval and clearInterval.
```js
let count = 0;
function printNumber() {
	count =count+1;
	console.log(count);
	if (count >= 10) {
		clearInterval(printInterval);
	}

}
let printInterval = setInterval(printNumber, 1000);
```

### slidingWindow.js
**Description:** Finds the maximum sum of any subarray of length k using the sliding window technique.
```js
//sliding window k = 3 ;  [1,2,4,5,2,5,6,7]

//Initial Window: Calculate sum of first k elements ([2,5,1] = 8)

// Slide Window:

// Move right: Remove leftmost element (2), add next right element (8) → new sum = 8-2+8=14

// Next slide: Remove 5, add 2 → sum = 14-5+2=11

// Next slide: Remove 1, add 9 → sum = 11-1+9=19 (new max)

// Continue until end
const key = 3;
const arrayValues = [1, 2, 4, 5, 2, 5, 6, 7];

function slidingWindow(itr, arr) {

    let windowSum = 0;
    let maxSum = -Infinity;

    for (let i = 0; i < itr; i++) {
        windowSum += arr[i];
    }
    maxSum = windowSum;

    for (let i = itr; i < arr.length; i++) {
        windowSum = windowSum - arr[i - itr] + arr[i]; // Subtract left, add right
        maxSum = Math.max(maxSum, windowSum);
    }

    return maxSum;
}

console.log(slidingWindow(key, arrayValues));
```

### createRandomColor.js
**Description:** Generates a random color code in hexadecimal format.
```js
console.log(Math.random(16).toString(16).substring(2,8));
```

### printrange.js
**Description:** Prints numbers from start to end using recursion.
```js
function range(start, end) {

    if (start > end) {
        return;
    }
    console.log(start);
    range(start + 1, end);
}

range(1, 6);
```

### program9.js
**Description:** Converts a string to an integer (atoi implementation).
```js
function atoiConverter(stringValue) {
    // 1. Remove spaces first
    let extractWhiteSpace = stringValue.trim();
    let sign = '';

    // 2. Check for +/-
    if (extractWhiteSpace[0] === '-' || extractWhiteSpace[0] === '+') {
        sign = extractWhiteSpace[0] === '-' ? -1 : 1;
        extractWhiteSpace = extractWhiteSpace.slice(1);
    }

    // 3. Take only the numeric part
    let num = '';
    for (let char of extractWhiteSpace) {
        if (!isNaN(char) && char !== '') {
            num += char;
        } else {
            break;
        }
    }

    // 4. Convert to number and apply sign
    num = num === '' ? 0 : +num * sign;

    // 5. Apply 32-bit integer limits
    const INT_MAX = Math.pow(2, 31) - 1;
    const INT_MIN = -Math.pow(2, 31);

    if (num > INT_MAX) return INT_MAX;
    if (num < INT_MIN) return INT_MIN;

    return num;
}

console.log(atoiConverter("42"));           // 42
console.log(atoiConverter("   -42"));       // -42
console.log(atoiConverter("4193 with"));    // 4193
```

### program10.js
**Description:** Compresses a string using run-length encoding.
```js
function compressString(stringValue) {
    let compressString = '';
    let count = 1;
    let arrayValue = stringValue.split('');
    if (arrayValue.length === 0) return "";
    let currentString = arrayValue[0];

    for (let i = 1; i < arrayValue.length; i++) {
        if (arrayValue[i] === currentString) {
            count++;
        } else {
            compressString += currentString + count;
            currentString = arrayValue[i];
            count = 1;
        }
    }
    compressString += currentString + count;
    return compressString;
}

console.log(compressString("aaabbbccaa"));  // "a3b3c2a2"
console.log(compressString("abc"));         // "a1b1c1"
```

### program11.js
**Description:** Finds the most frequent character in a string.
```js
function mostFrequentChar(stringValue) {
    let frequencyCount = {};
    let maxChar = '';
    let maxCount = 1;
    let arrayValue = stringValue.split('');

    for (let i = 0; i < arrayValue.length; i++) {
        frequencyCount[arrayValue[i]] = frequencyCount[arrayValue[i]] + 1 || 1;
    }

    Object.entries(frequencyCount).map(([key, value]) => {
        if (maxCount < value) {
            maxCount = value;
            maxChar = key;
        }
    });

    return maxChar;
}

console.log(mostFrequentChar("hello")); // "l"
console.log(mostFrequentChar("aabbbcc")); // "b"
```

### program12.js
**Description:** Finds all substrings of a given string using both iterative and recursive approaches.
```js
function getSubstringsByLength(stringValue) {
    let arrayValue = stringValue.split('');
    const result = [];
    for (let i = 0; i < arrayValue.length; i++) {
        for (let j = i+1; j <= arrayValue.length; j++) {
            result.push(stringValue.slice(i, j));
        }
    }
    return result;
}

function getSubstringsRecursive(str, start = 0, end = 1, result = []) {
    if (start >= str.length) return result;
    if (end > str.length) return getSubstringsRecursive(str, start + 1, start + 2, result);
    
    result.push(str.slice(start, end));
    return getSubstringsRecursive(str, start, end + 1, result);
}

console.log(getSubstringsByLength("abc")); // ["a", "ab", "abc", "b", "bc", "c"]
console.log(getSubstringsRecursive("abc")); // ["a", "ab", "abc", "b", "bc", "c"]
```

### program13.js
**Description:** Checks if a string is a rotation of another string.
```js
const isRotation = (a, b) => a.length === b.length && (a + a).includes(b);

function isRotations(a, b) {
    // 1. Check if lengths are equal
    if (a.length !== b.length) return false;
    
    // 2. Concatenate a with itself (a+a)
    const doubleA = a + a;
    
    // 3. Check if b is substring of doubleA
    return doubleA.includes(b);
}

console.log(isRotation("abcd", "cdab"));  // true
console.log(isRotation("hello", "olleh")); // false
```

### program14.js
**Description:** Removes all white spaces from a string using different methods.
```js
const removeSpaces = (str) => str.replace(/\s+/g, '');
const removeSpacesJoin = (str) => str.split(' ').join('');
const removeAllWhitespace = (str) => str.replace(/\s/g, '');

function removeSpacesLoop(str) {
    let result = '';
    for (let char of str) {
        if (char !== ' ') {
            result += char;
        }
    }
    return result;
}

console.log(removeSpaces("Hello World"));  // "HelloWorld"
console.log(removeSpacesJoin("JavaScript is fun")); // "JavaScriptisfun"
console.log(removeSpacesLoop(" 1 2 3 ")); // "123"
```

### program53.js
**Description:** Calculates (a + b) mod m in programming.
```js
function calculateMod(a, b, m) {
    const sum = a + b;
    const result = sum % m;
    return result >= 0 ? result : result + m;
}

const a = 1000000;
const b = -1000000;
const m = 10000;

const output = calculateMod(a, b, m);
console.log(output); // 0
```

### validparentheses.js
**Description:** Validates if a string of parentheses is balanced using a stack approach.
```js
function isValidParentheses(s) {
    const stack = [];
    const pairs = {
        ')': '(',
        '}': '{',
        ']': '['
    };
    
    for (let char of s) {
        if (char === '(' || char === '{' || char === '[') {
            stack.push(char);
        } else {
            if (stack.pop() !== pairs[char]) {
                return false;
            }
        }
    }
    
    return stack.length === 0;
}

console.log(isValidParentheses("()[]{}")); // true
console.log(isValidParentheses("([)]")); // false
console.log(isValidParentheses("{[]}")); // true
```

### longestSubStringWithoutRepeat.js
**Description:** Finds the longest substring without repeating characters using the sliding window technique.
```js
function longestSubstringWithoutRepeat(str) {
    let maxLength = 0;
    let start = 0;
    let charMap = {};
    
    for (let end = 0; end < str.length; end++) {
        if (charMap[str[end]] !== undefined && charMap[str[end]] >= start) {
            start = charMap[str[end]] + 1;
        }
        charMap[str[end]] = end;
        maxLength = Math.max(maxLength, end - start + 1);
    }
    
    return maxLength;
}

console.log(longestSubstringWithoutRepeat("abcabcbb")); // 3
console.log(longestSubstringWithoutRepeat("bbbbb")); // 1
console.log(longestSubstringWithoutRepeat("pwwkew")); // 3
```

### event-loop.js
**Description:** Demonstrates the JavaScript event loop with various asynchronous operations.
```js
console.log('Start');

setTimeout(() => {
    console.log('Timeout 1');
}, 0);

setImmediate(() => {
    console.log('Immediate 1');
});

process.nextTick(() => {
    console.log('NextTick 1');
});

Promise.resolve().then(() => {
    console.log('Promise 1');
});

console.log('End');
```

### buffer-demo.js
**Description:** Demonstrates working with Node.js Buffer for binary data handling.
```js
// Creating buffers
const buf1 = Buffer.alloc(10);
const buf2 = Buffer.from('Hello World');
const buf3 = Buffer.from([1, 2, 3, 4, 5]);

console.log(buf1);
console.log(buf2.toString());
console.log(buf3);

// Buffer operations
const buf4 = Buffer.concat([buf2, buf3]);
console.log(buf4);
```

### stream-demo.js
**Description:** Demonstrates Node.js streams for reading and writing data.
```js
const fs = require('fs');

// Reading file as stream
const readStream = fs.createReadStream('input.txt', 'utf8');
const writeStream = fs.createWriteStream('output.txt');

readStream.on('data', (chunk) => {
    console.log('Received chunk:', chunk);
    writeStream.write(chunk);
});

readStream.on('end', () => {
    console.log('Finished reading');
    writeStream.end();
});

// Using pipe
// readStream.pipe(writeStream);
```
---

## How to Use

1. Clone this repository.
2. Run any JavaScript file using Node.js:
   ```bash
   node filename.js
   ```
   Replace `filename.js` with the file you want to run.

## Notes
- Each file is self-contained and can be run independently.
- The `.git` directory contains version control information and is not related to the program files.

---

Feel free to explore and modify the programs for your learning and practice!

---

## Node.js Interview Questions and Answers (English + Hindi)

### 1. Explain the event loop in Node.js (imp)?
- **English:**  
  The event loop is the core of Node.js's non-blocking architecture. It allows Node.js to handle many connections at once by offloading operations (like file reading, network requests) to the system and only running JavaScript code when needed. The event loop has phases (timers, I/O callbacks, poll, check, close callbacks) and processes callbacks in each phase.  
  **Example:**  
  ```js
  console.log('Start');
  setTimeout(() => console.log('Timeout'), 0);
  console.log('End');
  // Output: Start, End, Timeout
  ```
- **Hindi:**  
  Event loop Node.js ka main hissa hai jo non-blocking programming ko possible banata hai. Ye ek samay par kai connections ko handle karta hai bina thread block kiye. Jab aap file read karte hain ya network request bhejte hain, Node.js unhe system ko de deta hai aur JavaScript code tabhi chalata hai jab zarurat ho. Event loop ke phases hote hain (timers, I/O callbacks, poll, check, close callbacks) aur har phase me callbacks process hote hain.  
  **Example:**  
  ```js
  console.log('Start');
  setTimeout(() => console.log('Timeout'), 0);
  console.log('End');
  // Output: Start, End, Timeout
  ```

### 2. Explain the internal architecture of Node.js?
- **English:**  
  Node.js is built on the V8 JavaScript engine (from Chrome), libuv (for async I/O), and a single-threaded event loop. When a request comes in, Node.js uses the event loop to decide if it can handle it immediately or should delegate it (like file I/O) to the system. The architecture allows Node.js to handle thousands of concurrent connections efficiently.  
  **Example:**  
  ```js
  const http = require('http');
  http.createServer((req, res) => {
    res.end('Hello World');
  }).listen(3000);
  ```
- **Hindi:**  
  Node.js V8 JavaScript engine (Chrome se), libuv (async I/O ke liye), aur ek single-threaded event loop par bana hai. Jab request aati hai, Node.js event loop se decide karta hai ki use turant handle kare ya system ko de de (jaise file I/O). Is architecture ki wajah se Node.js hazaron connections ek saath efficiently handle kar sakta hai.  
  **Example:**  
  ```js
  const http = require('http');
  http.createServer((req, res) => {
    res.end('Hello World');
  }).listen(3000);
  ```

### 3. What is npm and list out the uses of it.
- **English:**  
  npm (Node Package Manager) is the default package manager for Node.js. It helps you install, update, and manage third-party libraries (packages) for your project. You can also use npm to run scripts (like tests or builds) and publish your own packages.  
  **Example:**  
  ```bash
  npm install express
  npm run test
  npm publish
  ```
- **Hindi:**  
  npm (Node Package Manager) Node.js ka default package manager hai. Ye aapko third-party libraries (packages) install, update, aur manage karne me madad karta hai. npm se aap scripts bhi chala sakte hain (jaise test ya build) aur apne khud ke packages publish kar sakte hain.  
  **Example:**  
  ```bash
  npm install express
  npm run test
  npm publish
  ```

### 4. What are the different phases of event loop (imp)?
- **English:**  
  The event loop in Node.js has several phases:  
  1. **Timers:** Executes callbacks scheduled by `setTimeout` and `setInterval`.  
  2. **Pending Callbacks:** Executes I/O callbacks deferred to the next loop.  
  3. **Idle/Prepare:** Internal use only.  
  4. **Poll:** Retrieves new I/O events; executes I/O-related callbacks.  
  5. **Check:** Executes `setImmediate` callbacks.  
  6. **Close Callbacks:** Executes close events like `socket.on('close')`.  
  **Example:**  
  ```js
  setTimeout(() => console.log('timeout'), 0);
  setImmediate(() => console.log('immediate'));
  ```
- **Hindi:**  
  Node.js event loop ke kai phases hote hain:  
  1. **Timers:** `setTimeout` aur `setInterval` ke callbacks execute karta hai.  
  2. **Pending Callbacks:** Kuch I/O callbacks ko next loop ke liye rakhta hai.  
  3. **Idle/Prepare:** Internal use ke liye.  
  4. **Poll:** Naye I/O events leta hai aur I/O callbacks chalata hai.  
  5. **Check:** `setImmediate` callbacks execute karta hai.  
  6. **Close Callbacks:** Jaise `socket.on('close')` wale events.  
  **Example:**  
  ```js
  setTimeout(() => console.log('timeout'), 0);
  setImmediate(() => console.log('immediate'));
  ```

### 5. Explain the execution flow of Promise, async/await, setTimeout, setImmediate, process.nextTick() (imp)?
- **English:**  
  - `process.nextTick()` runs before any other microtask.
  - Promises and `async/await` (microtasks) run after `nextTick` but before macrotasks.
  - `setTimeout` and `setImmediate` (macrotasks) run in later phases.
  **Example:**  
  ```js
  process.nextTick(() => console.log('nextTick'));
  Promise.resolve().then(() => console.log('promise'));
  setTimeout(() => console.log('timeout'), 0);
  setImmediate(() => console.log('immediate'));
  // Output: nextTick, promise, timeout/immediate (order may vary)
  ```
- **Hindi:**  
  - `process.nextTick()` sabse pehle chalta hai (microtask).
  - Promises aur `async/await` (microtasks) uske baad chalte hain.
  - `setTimeout` aur `setImmediate` (macrotasks) baad me chalte hain.
  **Example:**  
  ```js
  process.nextTick(() => console.log('nextTick'));
  Promise.resolve().then(() => console.log('promise'));
  setTimeout(() => console.log('timeout'), 0);
  setImmediate(() => console.log('immediate'));
  // Output: nextTick, promise, timeout/immediate (order alag ho sakta hai)
  ```

### 6. What is the purpose of package.json file in Node.js?
- **English:**  
  `package.json` describes your project. It lists dependencies, scripts, version, author, and more. It allows others to install all dependencies with `npm install`. It also defines scripts for running, testing, and building your app.  
  **Example:**  
  ```json
  {
    "name": "my-app",
    "version": "1.0.0",
    "dependencies": { "express": "^4.18.2" },
    "scripts": { "start": "node index.js" }
  }
  ```
- **Hindi:**  
  `package.json` aapke project ki puri jankari rakhta hai—dependencies, scripts, version, author, etc. Dusre log sirf `npm install` se sab dependencies install kar sakte hain. Isme scripts bhi define hoti hain jaise run, test, build.  
  **Example:**  
  ```json
  {
    "name": "my-app",
    "version": "1.0.0",
    "dependencies": { "express": "^4.18.2" },
    "scripts": { "start": "node index.js" }
  }
  ```

### 7. What is http module and create a server using it?
- **English:**  
  The `http` module lets you create a web server in Node.js. You can handle requests and send responses.  
  **Example:**  
  ```js
  const http = require('http');
  const server = http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Hello, World!');
  });
  server.listen(3000, () => console.log('Server running on port 3000'));
  ```
- **Hindi:**  
  `http` module Node.js me web server banane ke liye use hota hai. Aap request handle kar sakte hain aur response bhej sakte hain.  
  **Example:**  
  ```js
  const http = require('http');
  const server = http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Hello, World!');
  });
  server.listen(3000, () => console.log('Server running on port 3000'));
  ```

### 8. How do you create secure server setup using express and https?
- **English:**  
  Use the `https` module with Express and provide SSL certificate and key. This encrypts data between client and server.  
  **Example:**  
  ```js
  const https = require('https');
  const express = require('express');
  const fs = require('fs');
  const app = express();
  const options = {
    key: fs.readFileSync('key.pem'),
    cert: fs.readFileSync('cert.pem')
  };
  https.createServer(options, app).listen(3000, () => console.log('Secure server running'));
  ```
- **Hindi:**  
  Express aur https module ke saath SSL certificate aur key dekar secure server banate hain. Isse client aur server ke beech data encrypt hota hai.  
  **Example:**  
  ```js
  const https = require('https');
  const express = require('express');
  const fs = require('fs');
  const app = express();
  const options = {
    key: fs.readFileSync('key.pem'),
    cert: fs.readFileSync('cert.pem')
  };
  https.createServer(options, app).listen(3000, () => console.log('Secure server running'));
  ```

### 9. How will you update any npm existing packages?
- **English:**  
  To update a specific package, use `npm update <package-name>`. To update all packages, just run `npm update`. For major version updates, use `npm install <package-name>@latest`.  
  **Example:**  
  ```bash
  npm update express
  npm install express@latest
  ```
- **Hindi:**  
  Kisi bhi package ko update karne ke liye `npm update <package-name>` use karein. Sabhi packages update karne ke liye `npm update` likhein. Major version ke liye `npm install <package-name>@latest` use karein.  
  **Example:**  
  ```bash
  npm update express
  npm install express@latest
  ```

### 10. List out some of the global objects in node js
- **English:**  
  Some important global objects in Node.js are:
  - `__dirname`: Current directory path
  - `__filename`: Current file path
  - `global`: Global namespace object
  - `process`: Info about the current process
  - `Buffer`: For binary data
  - `setTimeout`, `setInterval`: For timers
  **Example:**  
  ```js
  console.log(__dirname);
  console.log(process.version);
  ```
- **Hindi:**  
  Node.js ke kuch important global objects hain:
  - `__dirname`: Current directory ka path
  - `__filename`: Current file ka path
  - `global`: Global namespace object
  - `process`: Current process ki info
  - `Buffer`: Binary data ke liye
  - `setTimeout`, `setInterval`: Timers ke liye
  **Example:**  
  ```js
  console.log(__dirname);
  console.log(process.version);
  ```

### 11. Explain stream and buffer and their difference
- **English:**
  A buffer is a temporary storage for binary data. A stream is a way to read or write data piece by piece (chunks), useful for large files or network data. Streams use buffers internally.  
  **Example:**
  ```js
  const fs = require('fs');
  const readStream = fs.createReadStream('file.txt');
  readStream.on('data', chunk => console.log(chunk));
  ```
- **Hindi:**
  Buffer temporary binary data store karta hai. Stream data ko tukdo (chunks) me read ya write karta hai, jaise bade file ya network data ke liye. Streams ke andar buffer ka use hota hai.  
  **Example:**
  ```js
  const fs = require('fs');
  const readStream = fs.createReadStream('file.txt');
  readStream.on('data', chunk => console.log(chunk));
  ```

### 12. What is microtask and macrotask in node js (imp)?
- **English:**
  Microtasks (like Promises, process.nextTick) run after the current operation and before the event loop continues. Macrotasks (like setTimeout, setImmediate) run in the event loop phases.  
  **Example:**
  ```js
  process.nextTick(() => console.log('nextTick'));
  Promise.resolve().then(() => console.log('promise'));
  setTimeout(() => console.log('timeout'), 0);
  // Output: nextTick, promise, timeout
  ```
- **Hindi:**
  Microtasks (Promises, process.nextTick) current operation ke turant baad chalte hain, event loop ke continue hone se pehle. Macrotasks (setTimeout, setImmediate) event loop ke phases me chalte hain.  
  **Example:**
  ```js
  process.nextTick(() => console.log('nextTick'));
  Promise.resolve().then(() => console.log('promise'));
  setTimeout(() => console.log('timeout'), 0);
  // Output: nextTick, promise, timeout
  ```

### 13. Explain piping the data between streams
- **English:**
  Piping connects the output of one stream to the input of another, making it easy to transfer data. Example: reading a file and writing it to another file.  
  **Example:**
  ```js
  const fs = require('fs');
  const readStream = fs.createReadStream('input.txt');
  const writeStream = fs.createWriteStream('output.txt');
  readStream.pipe(writeStream);
  ```
- **Hindi:**
  Piping ek stream ka output doosri stream ke input se jodta hai, data transfer ko aasan banata hai. Example: ek file ko padhkar doosri file me likhna.  
  **Example:**
  ```js
  const fs = require('fs');
  const readStream = fs.createReadStream('input.txt');
  const writeStream = fs.createWriteStream('output.txt');
  readStream.pipe(writeStream);
  ```

### 14. What are the features of express js
- **English:**
  Express.js is a fast, minimal web framework for Node.js. Features:
  - Routing
  - Middleware support
  - Template engines
  - Error handling
  - Easy integration with databases
  **Example:**
  ```js
  const express = require('express');
  const app = express();
  app.get('/', (req, res) => res.send('Hello Express!'));
  app.listen(3000);
  ```
- **Hindi:**
  Express.js ek fast, minimal web framework hai Node.js ke liye. Features:
  - Routing
  - Middleware support
  - Template engines
  - Error handling
  - Databases ke saath aasan integration
  **Example:**
  ```js
  const express = require('express');
  const app = express();
  app.get('/', (req, res) => res.send('Hello Express!'));
  app.listen(3000);
  ```

### 15. What happens, if we pass parameter to next function inside middleware
- **English:**
  If you call `next(error)` in Express middleware, Express skips all remaining non-error middlewares and goes directly to error-handling middleware (with 4 arguments).  
  **Example:**
  ```js
  app.use((req, res, next) => {
    next(new Error('Something went wrong!'));
  });
  app.use((err, req, res, next) => {
    res.status(500).send(err.message);
  });
  ```
- **Hindi:**
  Agar aap Express middleware me `next(error)` call karte hain, to Express sabhi non-error middleware ko skip karke seedha error-handling middleware (4 arguments wala) par chala jata hai.  
  **Example:**
  ```js
  app.use((req, res, next) => {
    next(new Error('Kuch galat ho gaya!'));
  });
  app.use((err, req, res, next) => {
    res.status(500).send(err.message);
  });
  ```

### 16. How we can jump from one middleware to another skipping some.
- **English:**
  In Express, you can use `next('route')` to skip the remaining middleware for the current route and jump to the next route handler. You can also use conditions inside middleware to decide whether to call `next()` or not.  
  **Example:**
  ```js
  app.use('/user', (req, res, next) => {
    if (!req.user) return next('route'); // skip to next route
    next(); // continue to next middleware
  });
  app.get('/user', (req, res) => res.send('User route'));
  ```
- **Hindi:**
  Express me aap `next('route')` ka use karke current route ke baaki middleware ko skip kar sakte hain aur seedha next route handler par ja sakte hain. Middleware ke andar condition laga kar bhi decide kar sakte hain ki `next()` bulana hai ya nahi.  
  **Example:**
  ```js
  app.use('/user', (req, res, next) => {
    if (!req.user) return next('route'); // next route par jao
    next(); // agle middleware par jao
  });
  app.get('/user', (req, res) => res.send('User route'));
  ```

### 17. What is difference between PATCH and PUT API (imp)?
- **English:**
  - `PUT` replaces the entire resource with the new data you send. If a field is missing, it will be removed.
  - `PATCH` updates only the specified fields, leaving the rest unchanged.
  **Example:**
  ```js
  // PUT
  fetch('/user/1', { method: 'PUT', body: JSON.stringify({ name: 'Aakash' }) });
  // PATCH
  fetch('/user/1', { method: 'PATCH', body: JSON.stringify({ name: 'Aakash' }) });
  ```
- **Hindi:**
  - `PUT` poore resource ko nayi data se replace kar deta hai. Agar koi field missing hai to wo hata di jayegi.
  - `PATCH` sirf diye gaye fields ko update karta hai, baaki sab waise hi rehta hai.
  **Example:**
  ```js
  // PUT
  fetch('/user/1', { method: 'PUT', body: JSON.stringify({ name: 'Aakash' }) });
  // PATCH
  fetch('/user/1', { method: 'PATCH', body: JSON.stringify({ name: 'Aakash' }) });
  ```

### 18. Explain the middleware concept in Node js (imp)?
- **English:**
  Middleware are functions that run during the request-response cycle. They can modify the request or response, end the cycle, or pass control to the next middleware. Example: logging, authentication, error handling.  
  **Example:**
  ```js
  app.use((req, res, next) => {
    console.log('Request URL:', req.url);
    next();
  });
  ```
- **Hindi:**
  Middleware aise functions hain jo request-response cycle ke dauraan chalte hain. Ye request ya response ko modify kar sakte hain, cycle ko end kar sakte hain, ya control agle middleware ko de sakte hain. Example: logging, authentication, error handling.  
  **Example:**
  ```js
  app.use((req, res, next) => {
    console.log('Request URL:', req.url);
    next();
  });
  ```

### 19. How to create optional path API endpoints in express js
- **English:**
  Use `?` in the route path to make a parameter optional.  
  **Example:**
  ```js
  app.get('/user/:id?', (req, res) => {
    if (req.params.id) res.send('User ID: ' + req.params.id);
    else res.send('All users');
  });
  // /user/123 => User ID: 123
  // /user     => All users
  ```
- **Hindi:**
  Route path me `?` lagakar parameter ko optional bana sakte hain.  
  **Example:**
  ```js
  app.get('/user/:id?', (req, res) => {
    if (req.params.id) res.send('User ID: ' + req.params.id);
    else res.send('All users');
  });
  // /user/123 => User ID: 123
  // /user     => All users
  ```

### 20. Explain error handling concept in Express js (imp)?
- **English:**
  Error-handling middleware has four arguments: (err, req, res, next). If you call `next(err)`, Express skips to this middleware. Use it to send error responses or log errors.  
  **Example:**
  ```js
  app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Something broke!');
  });
  ```
- **Hindi:**
  Error-handling middleware me chaar arguments hote hain: (err, req, res, next). Agar aap `next(err)` call karte hain to Express seedha is middleware par chala jata hai. Isse error response bhej sakte hain ya error log kar sakte hain.  
  **Example:**
  ```js
  app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Kuch galat ho gaya!');
  });
  ```

### 21. What is JWT and explain the structure of JWT token (imp)?
- **English:**
  JWT (JSON Web Token) is a secure way to transmit information between parties as a JSON object. It is commonly used for authentication. A JWT has three parts:
  1. **Header:** Type of token and signing algorithm (e.g., HS256).
  2. **Payload:** Data (like user id, role).
  3. **Signature:** Verifies the token is not changed.
  **Example:**
  ```
  eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjEsInJvbGUiOiJhZG1pbiJ9.signature
  ```
- **Hindi:**
  JWT (JSON Web Token) ek surakshit tarika hai do parties ke beech information bhejne ka, JSON object ke roop me. Ye authentication ke liye use hota hai. JWT ke 3 parts hote hain:
  1. **Header:** Token ka type aur signing algorithm (jaise HS256).
  2. **Payload:** Data (jaise user id, role).
  3. **Signature:** Token badla nahi hai, iski guarantee.
  **Example:**
  ```
  eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjEsInJvbGUiOiJhZG1pbiJ9.signature
  ```

### 22. How can we modify the signature of JWT? (imp)
- **English:**
  You cannot modify the signature directly. If you change the payload or header, you must re-sign the token with the secret key. If you try to change the signature without the key, the token will be invalid.
- **Hindi:**
  Signature ko seedha nahi badal sakte. Agar aap payload ya header badalte hain, to secret key se dobara sign karna padta hai. Bina key ke signature badalne par token invalid ho jayega.

### 23. What is the authentication and authorization concept? (imp)
- **English:**
  Authentication checks who you are (login). Authorization checks what you can do (permissions).
  **Example:**
  - Authentication: User logs in with username/password.
  - Authorization: Only admin can delete users.
- **Hindi:**
  Authentication dekhta hai ki aap kaun hain (login). Authorization dekhta hai ki aap kya kar sakte hain (permissions).
  **Example:**
  - Authentication: User username/password se login karta hai.
  - Authorization: Sirf admin user ko delete kar sakta hai.

### 24. How do you implement role-based and permission-based access control in express js?
- **English:**
  Use middleware to check user roles/permissions before allowing access to routes.
  **Example:**
  ```js
  function checkRole(role) {
    return (req, res, next) => {
      if (req.user && req.user.role === role) next();
      else res.status(403).send('Forbidden');
    };
  }
  app.get('/admin', checkRole('admin'), (req, res) => res.send('Admin area'));
  ```
- **Hindi:**
  Middleware ka use karke user ke role/permission check karo, tabhi route par access do.
  **Example:**
  ```js
  function checkRole(role) {
    return (req, res, next) => {
      if (req.user && req.user.role === role) next();
      else res.status(403).send('Forbidden');
    };
  }
  app.get('/admin', checkRole('admin'), (req, res) => res.send('Admin area'));
  ```

### 25. Explain in detail best practice of API
- **English:**
  - Use clear and RESTful endpoints (`/users`, `/users/:id`)
  - Use proper HTTP methods (GET, POST, PUT, DELETE)
  - Validate and sanitize input
  - Handle errors with proper status codes
  - Secure APIs with authentication (JWT, OAuth)
  - Use pagination for large data
  - Document your API (Swagger, Postman)
- **Hindi:**
  - Saaf aur RESTful endpoints ka use karein (`/users`, `/users/:id`)
  - Sahi HTTP methods ka use karein (GET, POST, PUT, DELETE)
  - Input validate aur sanitize karein
  - Errors ko sahi status code ke saath handle karein
  - API ko authentication (JWT, OAuth) se secure karein
  - Bade data ke liye pagination ka use karein
  - API ko document karein (Swagger, Postman)

  ### 26. Explain input validation and data sanitization concept in express js
- **English:**
  Input validation checks if the data received from the user is correct (e.g., email format, required fields). Data sanitization cleans the input to remove harmful content (like scripts). Use libraries like express-validator or Joi for validation and sanitization.
  Example:
  ```js
  const { body, validationResult } = require('express-validator');
  app.post('/register', [
    body('email').isEmail(),
    body('name').trim().escape()
  ], (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) return res.status(400).json({ errors: errors.array() });
    // proceed with safe, validated data
  });
  ```
- **Hindi:**
  Input validation ka matlab hai user se aayi data sahi hai ya nahi (jaise email ka format, required fields). Data sanitization input ko saaf karta hai taki koi harmful content (jaise script) na ho. express-validator ya Joi jaise libraries ka use karein.
  Example:
  ```js
  const { body, validationResult } = require('express-validator');
  app.post('/register', [
    body('email').isEmail(),
    body('name').trim().escape()
  ], (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) return res.status(400).json({ errors: errors.array() });
    // ab data safe aur validated hai
  });
  ```

### 27. Explain the concept rate limiting in express js
- **English:**
  Rate limiting restricts how many requests a user can make in a certain time period, protecting your API from abuse or DDoS attacks. Use express-rate-limit middleware.
  Example:
  ```js
  const rateLimit = require('express-rate-limit');
  const limiter = rateLimit({
    windowMs: 15 * 60 * 1000, // 15 minutes
    max: 100 // limit each IP to 100 requests per windowMs
  });
  app.use(limiter);
  ```
- **Hindi:**
  Rate limiting ek user ko ek samay me kitni requests bhej sakta hai, is par rok lagata hai. Isse API misuse ya DDoS attack se bacha sakte hain. express-rate-limit middleware ka use karein.
  Example:
  ```js
  const rateLimit = require('express-rate-limit');
  const limiter = rateLimit({
    windowMs: 15 * 60 * 1000, // 15 minute
    max: 100 // har IP 100 request kar sakta hai
  });
  app.use(limiter);
  ```

### 28. Explain the concept of logging and monitoring in node js application
- **English:**
  Logging records important events, errors, and info for debugging and auditing. Monitoring checks app health, performance, and alerts on issues. Use libraries like Winston or Morgan for logging, and tools like PM2, New Relic, or Datadog for monitoring.
  Example:
  ```js
  const morgan = require('morgan');
  app.use(morgan('combined'));
  // Winston for custom logs
  ```
- **Hindi:**
  Logging important events, errors, aur info ko record karta hai debugging aur auditing ke liye. Monitoring app ki health, performance check karta hai aur issues par alert deta hai. Logging ke liye Winston ya Morgan, monitoring ke liye PM2, New Relic, Datadog ka use karein.
  Example:
  ```js
  const morgan = require('morgan');
  app.use(morgan('combined'));
  // Winston custom logs ke liye
  ```

### 29. What is difference between stateless and stateful API
- **English:**
  Stateless API does not remember previous requests; each request is independent (e.g., REST APIs). Stateful API remembers previous interactions (e.g., sessions in web sockets).
  Example:
  - Stateless: Each API call includes all info (like JWT token).
  - Stateful: Server remembers user session.
- **Hindi:**
  Stateless API pichle requests ko yaad nahi rakhta, har request alag hoti hai (jaise REST API). Stateful API pichle interactions ko yaad rakhta hai (jaise web socket sessions).
  Example:
  - Stateless: Har API call me saari info hoti hai (jaise JWT token).
  - Stateful: Server user session yaad rakhta hai.

### 30. How can we achieve state management in node js application
- **English:**
  Use sessions (express-session), cookies, databases, or in-memory stores (like Redis) to manage state across requests.
  Example:
  ```js
  const session = require('express-session');
  app.use(session({ secret: 'mysecret', resave: false, saveUninitialized: true }));
  // Or use Redis for scalable session storage
  ```
- **Hindi:**
  State manage karne ke liye sessions (express-session), cookies, database, ya in-memory store (jaise Redis) ka use karein.
  Example:
  ```js
  const session = require('express-session');
  app.use(session({ secret: 'mysecret', resave: false, saveUninitialized: true }));
  // Ya Redis ka use karein scalable session storage ke liye
  ```

### 31. How do you scale node js application using cluster module?
- **English:**
  The cluster module allows you to create child processes (workers) that share the same server port. This way, you can use all CPU cores and handle more requests. Each worker runs independently, so if one crashes, others keep running.
  Example:
  ```js
  const cluster = require('cluster');
  const http = require('http');
  const numCPUs = require('os').cpus().length;
  if (cluster.isMaster) {
    for (let i = 0; i < numCPUs; i++) {
      cluster.fork();
    }
  } else {
    http.createServer((req, res) => {
      res.end('Handled by worker ' + process.pid);
    }).listen(3000);
  }
  ```
- **Hindi:**
  Cluster module se aap child processes (workers) bana sakte hain jo ek hi server port share karte hain. Isse aap sabhi CPU cores ka use kar sakte hain aur zyada requests handle kar sakte hain. Har worker alag chalta hai, ek crash ho to baaki kaam karte rahte hain.
  Example:
  ```js
  const cluster = require('cluster');
  const http = require('http');
  const numCPUs = require('os').cpus().length;
  if (cluster.isMaster) {
    for (let i = 0; i < numCPUs; i++) {
      cluster.fork();
    }
  } else {
    http.createServer((req, res) => {
      res.end('Handled by worker ' + process.pid);
    }).listen(3000);
  }
  ```

### 32. What is a worker thread? How does it handle CPU-intensive tasks?
- **English:**
  Worker threads allow you to run JavaScript code in parallel threads, separate from the main event loop. This is useful for CPU-heavy tasks (like image processing) so they don't block the main thread.
  Example:
  ```js
  const { Worker } = require('worker_threads');
  new Worker(`console.log('Hello from worker')`, { eval: true });
  ```
- **Hindi:**
  Worker threads aapko JavaScript code parallel threads me chalane dete hain, main event loop se alag. Ye CPU-heavy tasks (jaise image processing) ke liye useful hai taki main thread block na ho.
  Example:
  ```js
  const { Worker } = require('worker_threads');
  new Worker(`console.log('Hello from worker')`, { eval: true });
  ```

### 33. Explain the working with concurrency and parallelism for async task
- **English:**
  Concurrency means handling multiple tasks at the same time (not necessarily together), like async callbacks. Parallelism means running tasks at the exact same time, usually on different CPU cores (like with cluster or worker threads).
  Example:
  - Concurrency: Multiple async file reads.
  - Parallelism: Multiple worker threads processing data at once.
- **Hindi:**
  Concurrency ka matlab hai ek samay par kai kaam sambhalna (saath me nahi bhi ho sakte), jaise async callbacks. Parallelism ka matlab hai ek hi samay par kai kaam chalana, aam taur par alag CPU cores par (jaise cluster ya worker threads).
  Example:
  - Concurrency: Kai async file reads ek sath.
  - Parallelism: Kai worker threads ek sath data process karte hain.

### 34. How can you optimise database queries?
- **English:**
  - Use indexes on frequently searched fields
  - Select only needed fields (projection)
  - Avoid N+1 query problem (fetch related data efficiently)
  - Use caching for repeated queries
  Example:
  ```js
  // MongoDB: Use projection
  db.users.find({}, { name: 1, email: 1 });
  // SQL: Use WHERE and LIMIT
  SELECT name, email FROM users WHERE active=1 LIMIT 10;
  ```
- **Hindi:**
  - Jo fields aksar search hoti hain un par index lagayein
  - Sirf zaroori fields select karein (projection)
  - N+1 query problem se bachein (related data ek sath fetch karein)
  - Repeated queries ke liye caching ka use karein
  Example:
  ```js
  // MongoDB: Projection ka use
  db.users.find({}, { name: 1, email: 1 });
  // SQL: WHERE aur LIMIT ka use
  SELECT name, email FROM users WHERE active=1 LIMIT 10;
  ```

### 35. What is the redis database? Explain the uses of it
- **English:**
  Redis is a fast, in-memory key-value store. It's used for caching (store API responses), session storage, message queues, and real-time analytics. It supports data structures like strings, hashes, lists, sets, and pub/sub.
  Example:
  ```js
  const redis = require('redis');
  const client = redis.createClient();
  client.set('key', 'value');
  client.get('key', (err, val) => console.log(val));
  ```
- **Hindi:**
  Redis ek tez, in-memory key-value store hai. Ye caching (API response store karne), session storage, message queue, aur real-time analytics ke liye use hota hai. Isme strings, hashes, lists, sets, pub/sub jaise data structures hote hain.
  Example:
  ```js
  const redis = require('redis');
  const client = redis.createClient();
  client.set('key', 'value');
  client.get('key', (err, val) => console.log(val));
  ```

### 36. How we can increase the performance of node js application
- **English:**
  - Use asynchronous (non-blocking) code to avoid blocking the event loop
  - Use clustering or worker threads to utilize all CPU cores
  - Cache frequent data (in-memory or Redis)
  - Optimize database queries and use indexes
  - Use a Content Delivery Network (CDN) for static files
  - Minimize middleware and use lightweight libraries
  Example:
  ```js
  // Use async/await for non-blocking code
  app.get('/data', async (req, res) => {
    const data = await db.getData();
    res.json(data);
  });
  ```
- **Hindi:**
  - Asynchronous (non-blocking) code ka use karein taki event loop block na ho
  - Clustering ya worker threads se sabhi CPU cores ka use karein
  - Frequent data ko cache karein (memory ya Redis me)
  - Database queries ko optimize karein aur indexes lagayein
  - Static files ke liye CDN ka use karein
  - Middleware kam rakhein aur lightweight libraries ka use karein
  Example:
  ```js
  // Non-blocking code async/await se
  app.get('/data', async (req, res) => {
    const data = await db.getData();
    res.json(data);
  });
  ```

### 37. What is the profiling concept in nodejs
- **English:**
  Profiling means measuring where your code spends time and resources, to find bottlenecks and optimize performance. Use Node.js built-in profiler or tools like clinic.js, Chrome DevTools.
  Example:
  ```bash
  node --inspect app.js
  # Open Chrome DevTools for profiling
  ```
- **Hindi:**
  Profiling ka matlab hai dekhna ki code sabse zyada samay aur resources kahan use karta hai, taki slow jagah sudhari ja sake. Node.js ka built-in profiler ya clinic.js, Chrome DevTools ka use karein.
  Example:
  ```bash
  node --inspect app.js
  # Chrome DevTools me profile karein
  ```

### 38. What is connection pooling concept for database
- **English:**
  Connection pooling keeps a set of database connections open and ready to use, so new connections don't need to be created for every request. This improves performance and reduces latency.
  Example:
  ```js
  const mysql = require('mysql');
  const pool = mysql.createPool({ connectionLimit: 10, host: 'localhost', user: 'root', database: 'test' });
  pool.query('SELECT * FROM users', (err, results) => { console.log(results); });
  ```
- **Hindi:**
  Connection pooling database ke kuch connections ko pehle se open aur ready rakhta hai, taki har request par naya connection na banana pade. Isse performance badhti hai aur latency kam hoti hai.
  Example:
  ```js
  const mysql = require('mysql');
  const pool = mysql.createPool({ connectionLimit: 10, host: 'localhost', user: 'root', database: 'test' });
  pool.query('SELECT * FROM users', (err, results) => { console.log(results); });
  ```

### 39. Write a middleware for rolebased access control (RBAC) in Node.js
- **English:**
  Middleware checks the user's role before allowing access to a route. If the user does not have the required role, it sends a 403 Forbidden response.
  Example:
  ```js
  function checkRole(role) {
    return (req, res, next) => {
      if (req.user && req.user.role === role) next();
      else res.status(403).send('Forbidden');
    };
  }
  app.get('/admin', checkRole('admin'), (req, res) => res.send('Admin area'));
  ```
- **Hindi:**
  Middleware user ka role check karta hai, agar user ke paas required role nahi hai to 403 Forbidden bhejta hai.
  Example:
  ```js
  function checkRole(role) {
    return (req, res, next) => {
      if (req.user && req.user.role === role) next();
      else res.status(403).send('Forbidden');
    };
  }
  app.get('/admin', checkRole('admin'), (req, res) => res.send('Admin area'));
  ```

### 40. Demonstrate the integration of OAuth2.0 for thirdparty authentication in a Node.js app.
- **English:**
  Use passport.js with a strategy like passport-google-oauth20 for OAuth2.0 authentication. Set up routes for login and callback, and configure the strategy with client ID/secret.
  Example:
  ```js
  const passport = require('passport');
  const GoogleStrategy = require('passport-google-oauth20').Strategy;
  passport.use(new GoogleStrategy({
    clientID: 'GOOGLE_CLIENT_ID',
    clientSecret: 'GOOGLE_CLIENT_SECRET',
    callbackURL: '/auth/google/callback'
  }, (accessToken, refreshToken, profile, done) => {
    // Find or create user
    done(null, profile);
  }));
  app.get('/auth/google', passport.authenticate('google', { scope: ['profile'] }));
  app.get('/auth/google/callback', passport.authenticate('google', { failureRedirect: '/' }), (req, res) => {
    res.redirect('/dashboard');
  });
  ```
- **Hindi:**
  OAuth2.0 authentication ke liye passport.js aur jaise passport-google-oauth20 strategy ka use karein. Login aur callback ke liye routes banayein, aur strategy ko client ID/secret ke saath configure karein.
  Example:
  ```js
  const passport = require('passport');
  const GoogleStrategy = require('passport-google-oauth20').Strategy;
  passport.use(new GoogleStrategy({
    clientID: 'GOOGLE_CLIENT_ID',
    clientSecret: 'GOOGLE_CLIENT_SECRET',
    callbackURL: '/auth/google/callback'
  }, (accessToken, refreshToken, profile, done) => {
    // User ko find ya create karein
    done(null, profile);
  }));
  app.get('/auth/google', passport.authenticate('google', { scope: ['profile'] }));
  app.get('/auth/google/callback', passport.authenticate('google', { failureRedirect: '/' }), (req, res) => {
    res.redirect('/dashboard');
  });
  ```

### 41. Implement a refresh token mechanism for JWT authentication in Node.js.
- **English:**
  Store a refresh token (long-lived) in the database or as an HTTP-only cookie. When the access token expires, the client sends the refresh token to get a new access token. Always validate the refresh token before issuing a new access token.
  Example:
  ```js
  // On login
  const accessToken = jwt.sign({ userId }, 'accessSecret', { expiresIn: '15m' });
  const refreshToken = jwt.sign({ userId }, 'refreshSecret', { expiresIn: '7d' });
  // Store refreshToken in DB or cookie
  // On refresh endpoint
  app.post('/refresh', (req, res) => {
    const { token } = req.body;
    jwt.verify(token, 'refreshSecret', (err, user) => {
      if (err) return res.sendStatus(403);
      const newAccessToken = jwt.sign({ userId: user.userId }, 'accessSecret', { expiresIn: '15m' });
      res.json({ accessToken: newAccessToken });
    });
  });
  ```
- **Hindi:**
  Refresh token (long-lived) ko database ya HTTP-only cookie me store karein. Jab access token expire ho jaye, client refresh token bhejkar naya access token le sakta hai. Naya access token dene se pehle refresh token ko validate zarur karein.
  Example:
  ```js
  // Login par
  const accessToken = jwt.sign({ userId }, 'accessSecret', { expiresIn: '15m' });
  const refreshToken = jwt.sign({ userId }, 'refreshSecret', { expiresIn: '7d' });
  // refreshToken ko DB ya cookie me store karein
  // Refresh endpoint par
  app.post('/refresh', (req, res) => {
    const { token } = req.body;
    jwt.verify(token, 'refreshSecret', (err, user) => {
      if (err) return res.sendStatus(403);
      const newAccessToken = jwt.sign({ userId: user.userId }, 'accessSecret', { expiresIn: '15m' });
      res.json({ accessToken: newAccessToken });
    });
  });
  ```

### 42. What is role of indexes in performance optimization (imp)
- **English:**
  Indexes make searching and sorting data in databases much faster. Without indexes, the database scans every row (full table scan). With indexes, it can quickly find the required data.
  Example:
  ```sql
  CREATE INDEX idx_name ON users(name);
  SELECT * FROM users WHERE name = 'Aakash';
  ```
- **Hindi:**
  Indexes database me data khojne aur sort karne ko bahut tez bana dete hain. Bina index ke, database har row check karta hai (full table scan). Index lagane se data jaldi milta hai.
  Example:
  ```sql
  CREATE INDEX idx_name ON users(name);
  SELECT * FROM users WHERE name = 'Aakash';
  ```

### 43. What is the aggregation pipeline in mongoDB? Explain in detail (imp)
- **English:**
  Aggregation pipeline processes data in stages (like filter, group, sort) to get results from MongoDB. Each stage transforms the data and passes it to the next stage. Useful for analytics and reporting.
  Example:
  ```js
  db.orders.aggregate([
    { $match: { status: 'delivered' } },
    { $group: { _id: '$customerId', total: { $sum: '$amount' } } },
    { $sort: { total: -1 } }
  ]);
  ```
- **Hindi:**
  Aggregation pipeline data ko stages me (jaise filter, group, sort) process karta hai, taki MongoDB se result mil sake. Har stage data ko badal kar agle stage me bhejta hai. Analytics aur reporting ke liye useful hai.
  Example:
  ```js
  db.orders.aggregate([
    { $match: { status: 'delivered' } },
    { $group: { _id: '$customerId', total: { $sum: '$amount' } } },
    { $sort: { total: -1 } }
  ]);
  ```

### 44. What are transactions? How can we achieve it in mongoDB
- **English:**
  Transactions let you do multiple operations together, and all succeed or all fail (atomicity). In MongoDB, use sessions and `startTransaction()` to group operations.
  Example:
  ```js
  const session = await db.startSession();
  session.startTransaction();
  try {
    await users.updateOne(..., { session });
    await orders.insertOne(..., { session });
    await session.commitTransaction();
  } catch (e) {
    await session.abortTransaction();
  } finally {
    session.endSession();
  }
  ```
- **Hindi:**
  Transactions se aap kai operations ek saath kar sakte hain, ya to sab honge ya koi nahi (atomicity). MongoDB me sessions aur `startTransaction()` ka use karke operations group karte hain.
  Example:
  ```js
  const session = await db.startSession();
  session.startTransaction();
  try {
    await users.updateOne(..., { session });
    await orders.insertOne(..., { session });
    await session.commitTransaction();
  } catch (e) {
    await session.abortTransaction();
  } finally {
    session.endSession();
  }
  ```

### 45. How transaction helps in rollback in case of failure
- **English:**
  If any operation in a transaction fails, all changes are rolled back (undone), so the database stays consistent and safe.
  Example:
  ```js
  // If orders.insertOne fails, users.updateOne is also undone
  ```
- **Hindi:**
  Agar transaction me koi operation fail ho jaye, to sabhi changes wapas le liye jaate hain (rollback), taki database consistent aur safe rahe.
  Example:
  ```js
  // Agar orders.insertOne fail ho jaye, to users.updateOne bhi wapas ho jayega
  ```

### 46. What is difference between hashing, encryption and encoding concept
- **English:**
  - **Hashing:** One-way process, used for data integrity (e.g., passwords). You cannot get the original data back from the hash. Example: `bcrypt`, `sha256`.
  - **Encryption:** Two-way process, used for data privacy. Data can be decrypted with a key. Example: `AES`, `RSA`.
  - **Encoding:** Changes data format for safe transfer, not for security. Can be easily reversed. Example: `Base64`.
  Example:
  ```js
  // Hashing
  const crypto = require('crypto');
  const hash = crypto.createHash('sha256').update('hello').digest('hex');
  // Encryption
  // ... (using crypto.createCipheriv)
  // Encoding
  const encoded = Buffer.from('hello').toString('base64');
  ```
- **Hindi:**
  - **Hashing:** Ek-tarfa process hai, data integrity ke liye (jaise password). Hash se original data nahi mil sakta. Example: `bcrypt`, `sha256`.
  - **Encryption:** Do-tarfa process hai, data privacy ke liye. Key se data decrypt ho sakta hai. Example: `AES`, `RSA`.
  - **Encoding:** Data ka format badalta hai, security ke liye nahi. Easily reverse ho sakta hai. Example: `Base64`.
  Example:
  ```js
  // Hashing
  const crypto = require('crypto');
  const hash = crypto.createHash('sha256').update('hello').digest('hex');
  // Encryption
  // ... (crypto.createCipheriv ka use)
  // Encoding
  const encoded = Buffer.from('hello').toString('base64');
  ```

### 47. How do you identify slow queries
- **English:**
  Use database logs, query explain plans, or profiling tools to find slow queries. In MongoDB, use `.explain()`. In SQL, use `EXPLAIN` keyword. Monitor query times and optimize indexes or query structure.
  Example:
  ```js
  db.users.find({ age: 25 }).explain('executionStats');
  // SQL: EXPLAIN SELECT * FROM users WHERE age = 25;
  ```
- **Hindi:**
  Database logs, query explain plan, ya profiling tools se slow queries pata chalti hain. MongoDB me `.explain()` ka use karein. SQL me `EXPLAIN` keyword ka use karein. Query time monitor karein aur indexes ya query structure optimize karein.
  Example:
  ```js
  db.users.find({ age: 25 }).explain('executionStats');
  // SQL: EXPLAIN SELECT * FROM users WHERE age = 25;
  ```

### 48. What is replica sets and sharding mechanism in mongodb
- **English:**
  - **Replica Sets:** Multiple MongoDB servers keep copies of the same data for high availability. If one server fails, another takes over.
  - **Sharding:** Splits data across multiple servers (shards) for horizontal scaling. Each shard holds part of the data.
  Example:
  - Replica set: 3 MongoDB servers, one primary, two secondary.
  - Sharding: User data split by region across different servers.
- **Hindi:**
  - **Replica Sets:** Kai MongoDB servers ek hi data ki copy rakhte hain, taki high availability ho. Ek server fail ho jaye to doosra kaam karta hai.
  - **Sharding:** Data ko kai servers (shards) me baant dete hain, taki horizontal scaling ho sake. Har shard data ka ek hissa rakhta hai.
  Example:
  - Replica set: 3 MongoDB servers, ek primary, do secondary.
  - Sharding: User data region ke hisaab se alag servers par.

### 49. How do you configure failover and disaster recovery in mongodb
- **English:**
  Use replica sets for automatic failover. If the primary server fails, a secondary becomes primary. For disaster recovery, take regular backups and store them safely (e.g., cloud storage).
  Example:
  - Replica set setup: `rs.initiate()` in MongoDB shell.
  - Backup: Use `mongodump` and `mongorestore`.
- **Hindi:**
  Automatic failover ke liye replica sets ka use karein. Agar primary server fail ho jaye to secondary primary ban jata hai. Disaster recovery ke liye regular backup lein aur safe jagah store karein (jaise cloud storage).
  Example:
  - Replica set setup: MongoDB shell me `rs.initiate()`
  - Backup: `mongodump` aur `mongorestore` ka use karein.

### 50. What is load balancer and how to implement in nodejs
- **English:**
  A load balancer distributes incoming traffic to multiple servers, improving performance and reliability. In Node.js, use Nginx, HAProxy, or Node.js cluster module for load balancing.
  Example:
  - Nginx config:
  ```nginx
  upstream myapp {
    server 127.0.0.1:3000;
    server 127.0.0.1:3001;
  }
  server {
    listen 80;
    location / {
      proxy_pass http://myapp;
    }
  }
  ```
- **Hindi:**
  Load balancer aane wali traffic ko kai servers me baant deta hai, jisse performance aur reliability badhti hai. Node.js me Nginx, HAProxy, ya cluster module ka use karein.
  Example:
  - Nginx config:
  ```nginx
  upstream myapp {
    server 127.0.0.1:3000;
    server 127.0.0.1:3001;
  }
  server {
    listen 80;
    location / {
      proxy_pass http://myapp;
    }
  }
  ```

### 51. How to avoid schema pitfalls
- **English:**
  - Define a clear and consistent schema for your data (use Mongoose for MongoDB or ORM for SQL)
  - Use validation to enforce data types and required fields
  - Avoid unnecessary or duplicate fields
  - Use default values and indexes where needed
  Example:
  ```js
  const userSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, unique: true, required: true },
    age: { type: Number, default: 18 }
  });
  ```
- **Hindi:**
  - Apne data ke liye clear aur consistent schema define karein (MongoDB ke liye Mongoose ya SQL ke liye ORM ka use karein)
  - Validation lagayein taki data type aur required fields enforce ho sakein
  - Unnecessary ya duplicate fields se bachein
  - Default values aur indexes ka use karein jab zarurat ho
  Example:
  ```js
  const userSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, unique: true, required: true },
    age: { type: Number, default: 18 }
  });
  ```

### 52. Measure care taken to write efficient queries
- **English:**
  - Use indexes for frequently searched fields
  - Select only needed fields (projection)
  - Avoid loops inside queries
  - Use query explain plans to check performance
  Example:
  ```js
  db.users.find({}, { name: 1, email: 1 }); // Only select name and email
  db.users.find({ age: 25 }).explain('executionStats');
  ```
- **Hindi:**
  - Jo fields aksar search hoti hain un par index lagayein
  - Sirf zaroori fields select karein (projection)
  - Queries ke andar loops se bachein
  - Query explain plan se performance check karein
  Example:
  ```js
  db.users.find({}, { name: 1, email: 1 }); // Sirf name aur email select karein
  db.users.find({ age: 25 }).explain('executionStats');
  ```

### 53. How to implement health checks in mongodb
- **English:**
  Use MongoDB's `db.admin().ping()` command or monitoring tools to check if the database is healthy. You can also automate health checks in your Node.js app and alert if the database is down.
  Example:
  ```js
  db.admin().ping(); // Returns { ok: 1 } if healthy
  ```
- **Hindi:**
  MongoDB ka `db.admin().ping()` command ya monitoring tools ka use karein taki database ki health check ho sake. Node.js app me bhi health check automate kar sakte hain aur database down ho to alert bhej sakte hain.
  Example:
  ```js
  db.admin().ping(); // Agar healthy hai to { ok: 1 } return karta hai
  ```

### 54. What are the solid principles for software development (imp)?
- **English:**
  SOLID stands for:
  - **S**ingle Responsibility: Each module/class should have one job
  - **O**pen/Closed: Code should be open for extension, closed for modification
  - **L**iskov Substitution: Subclasses should be usable in place of parent classes
  - **I**nterface Segregation: Many small interfaces are better than one big one
  - **D**ependency Inversion: Depend on abstractions, not concrete implementations
  Example:
  ```js
  // Single Responsibility
  class UserService { /* only user logic */ }
  class EmailService { /* only email logic */ }
  ```
- **Hindi:**
  SOLID ka matlab hai:
  - **S**ingle Responsibility: Har module/class ka ek hi kaam hona chahiye (ek hi reason ho change hone ka). Isse code maintain aur test karna aasan hota hai. Node.js me business logic, database logic, aur routing alag rakho.
  - **O**pen/Closed: Code extension ke liye open ho, modification ke liye closed ho. Naye features add karne ke liye purana code na badalna pade. Node.js me inheritance ya composition ka use karo.
  - **L**iskov Substitution: Subclass ko parent class ki jagah use kar sakein bina app ko tode. Node.js me agar base class hai, to uske sabhi subclasses wahan kaam karein jahan base class expected hai.
  - **I**nterface Segregation: Classes ko wo methods implement karne par majboor na karo jo unhe nahi chahiye. Ek bade interface ki jagah chhote, specific interfaces banao. Node.js me alag alag responsibilities ke liye alag classes ya interfaces banao.
  - **D**ependency Inversion: High-level modules ko low-level modules par depend nahi hona chahiye, dono ko abstraction par depend karna chahiye. Node.js me dependency injection ka use karo (dependency ko argument ke roop me pass karo), hardcode mat karo.
  Example:
  ```js
  // Single Responsibility
  class UserService { /* sirf user logic */ }
  class EmailService { /* sirf email logic */ }
  ```

### 55. What is kafka? Explain the use cases of kafka
- **English:**
  Kafka is a distributed streaming platform for handling real-time data streams. It is used for messaging, logging, event sourcing, and building data pipelines. Kafka is highly scalable and fault-tolerant.
  Example:
  - Collecting logs from many servers and processing them in real time
  - Streaming data from IoT devices
- **Hindi:**
  Kafka ek distributed streaming platform hai jo real-time data streams ko handle karta hai. Ye messaging, logging, event sourcing, aur data pipelines banane ke liye use hota hai. Kafka highly scalable aur fault-tolerant hai.
  Example:
  - Kai servers se logs collect karna aur real time me process karna
  - IoT devices se data stream karna

### 56. How can we minimize middleware overhead
- **English:**
  - Only use middleware that is necessary for your application (e.g., don't use body-parser if you don't need to parse JSON)
  - Place middleware that is used less frequently after more common middleware
  - Write custom, lightweight middleware for simple tasks
  - Avoid heavy processing in middleware; delegate to route handlers or services
  Example:
  ```js
  // Only use JSON parser for API routes
  app.use('/api', express.json());
  // Use logging middleware only in development
  if (process.env.NODE_ENV === 'development') {
    app.use(morgan('dev'));
  }
  ```
- **Hindi:**
  - Sirf wahi middleware use karein jo aapke app ke liye zaruri ho (jaise agar JSON parse nahi karna to body-parser na lagayein)
  - Kam use hone wale middleware ko baad me lagayein
  - Simple kaam ke liye custom, lightweight middleware likhein
  - Middleware me heavy processing na karein, route handler ya service ko delegate karein
  Example:
  ```js
  // Sirf API routes ke liye JSON parser lagayein
  app.use('/api', express.json());
  // Logging middleware sirf development me lagayein
  if (process.env.NODE_ENV === 'development') {
    app.use(morgan('dev'));
  }
  ```

### 57. What is event-driven architecture in NodeJS?
- **English:**
  Event-driven architecture is a programming paradigm where the flow of the program is determined by events (user actions, sensor outputs, messages from other programs). In Node.js, this is implemented using the EventEmitter class and event listeners. The application responds to events as they occur rather than following a predetermined sequence.
  **Example:**
  ```js
  const EventEmitter = require('events');
  const myEmitter = new EventEmitter();
  
  myEmitter.on('userLogin', (user) => {
    console.log(`User ${user} logged in`);
  });
  
  myEmitter.emit('userLogin', 'John');
  ```
- **Hindi:**
  Event-driven architecture ek programming paradigm hai jahan program ka flow events (user actions, sensor outputs, messages) se determine hota hai. Node.js me ye EventEmitter class aur event listeners ke through implement hota hai. Application events ke response me react karta hai, predetermined sequence follow nahi karta.
  **Example:**
  ```js
  const EventEmitter = require('events');
  const myEmitter = new EventEmitter();
  
  myEmitter.on('userLogin', (user) => {
    console.log(`User ${user} logged in`);
  });
  
  myEmitter.emit('userLogin', 'John');
  ```

### 58. How does NodeJS handle asynchronous operations?
- **English:**
  Node.js handles asynchronous operations through its event loop and callback mechanism. When an async operation (like file I/O, network requests) is initiated, Node.js doesn't wait for it to complete. Instead, it continues executing other code and uses callbacks, promises, or async/await to handle the result when the operation finishes.
  **Example:**
  ```js
  // Callback approach
  fs.readFile('file.txt', (err, data) => {
    if (err) throw err;
    console.log(data);
  });
  
  // Promise approach
  fs.promises.readFile('file.txt')
    .then(data => console.log(data))
    .catch(err => console.error(err));
  
  // Async/await approach
  async function readFile() {
    try {
      const data = await fs.promises.readFile('file.txt');
      console.log(data);
    } catch (err) {
      console.error(err);
    }
  }
  ```
- **Hindi:**
  Node.js asynchronous operations ko event loop aur callback mechanism ke through handle karta hai. Jab koi async operation (jaise file I/O, network requests) start hota hai, Node.js uske complete hone ka wait nahi karta. Wo dusra code execute karta rahta hai aur result handle karne ke liye callbacks, promises, ya async/await ka use karta hai.
  **Example:**
  ```js
  // Callback approach
  fs.readFile('file.txt', (err, data) => {
    if (err) throw err;
    console.log(data);
  });
  
  // Promise approach
  fs.promises.readFile('file.txt')
    .then(data => console.log(data))
    .catch(err => console.error(err));
  
  // Async/await approach
  async function readFile() {
    try {
      const data = await fs.promises.readFile('file.txt');
      console.log(data);
    } catch (err) {
      console.error(err);
    }
  }
  ```

### 59. What are middleware functions in ExpressJS?
- **English:**
  Middleware functions are functions that have access to the request object (req), response object (res), and the next middleware function in the application's request-response cycle. They can execute any code, modify the request and response objects, end the request-response cycle, or call the next middleware function in the stack.
  **Example:**
  ```js
  // Custom middleware
  app.use((req, res, next) => {
    console.log(`${req.method} ${req.url}`);
    req.timestamp = new Date();
    next();
  });
  
  // Authentication middleware
  const authMiddleware = (req, res, next) => {
    if (req.headers.authorization) {
      next();
    } else {
      res.status(401).send('Unauthorized');
    }
  };
  ```
- **Hindi:**
  Middleware functions aise functions hain jo request object (req), response object (res), aur next middleware function ko access kar sakte hain. Ye koi bhi code execute kar sakte hain, request aur response objects ko modify kar sakte hain, request-response cycle ko end kar sakte hain, ya next middleware function ko call kar sakte hain.
  **Example:**
  ```js
  // Custom middleware
  app.use((req, res, next) => {
    console.log(`${req.method} ${req.url}`);
    req.timestamp = new Date();
    next();
  });
  
  // Authentication middleware
  const authMiddleware = (req, res, next) => {
    if (req.headers.authorization) {
      next();
    } else {
      res.status(401).send('Unauthorized');
    }
  };
  ```

### 60. How does authentication work in NodeJS? Explain JWT vs. OAuth.
- **English:**
  Authentication in Node.js typically involves verifying user credentials and creating sessions or tokens. JWT (JSON Web Tokens) are self-contained tokens that store user information and are stateless. OAuth is an authorization framework that allows third-party applications to access user data without sharing credentials.
  **JWT Example:**
  ```js
  const jwt = require('jsonwebtoken');
  
  // Create token
  const token = jwt.sign({ userId: 123 }, 'secret', { expiresIn: '1h' });
  
  // Verify token
  jwt.verify(token, 'secret', (err, decoded) => {
    if (err) throw err;
    console.log(decoded.userId);
  });
  ```
  **OAuth Example:**
  ```js
  const passport = require('passport');
  const GoogleStrategy = require('passport-google-oauth20').Strategy;
  
  passport.use(new GoogleStrategy({
    clientID: 'GOOGLE_CLIENT_ID',
    clientSecret: 'GOOGLE_CLIENT_SECRET',
    callbackURL: '/auth/google/callback'
  }, (accessToken, refreshToken, profile, done) => {
    // Handle user profile
    done(null, profile);
  }));
  ```
- **Hindi:**
  Node.js me authentication typically user credentials verify karne aur sessions ya tokens create karne se hota hai. JWT (JSON Web Tokens) self-contained tokens hain jo user information store karte hain aur stateless hote hain. OAuth ek authorization framework hai jo third-party applications ko user data access karne deta hai bina credentials share kiye.
  **JWT Example:**
  ```js
  const jwt = require('jsonwebtoken');
  
  // Token create karein
  const token = jwt.sign({ userId: 123 }, 'secret', { expiresIn: '1h' });
  
  // Token verify karein
  jwt.verify(token, 'secret', (err, decoded) => {
    if (err) throw err;
    console.log(decoded.userId);
  });
  ```
  **OAuth Example:**
  ```js
  const passport = require('passport');
  const GoogleStrategy = require('passport-google-oauth20').Strategy;
  
  passport.use(new GoogleStrategy({
    clientID: 'GOOGLE_CLIENT_ID',
    clientSecret: 'GOOGLE_CLIENT_SECRET',
    callbackURL: '/auth/google/callback'
  }, (accessToken, refreshToken, profile, done) => {
    // User profile handle karein
    done(null, profile);
  }));
  ```

### 61. What are WebSockets, and when would you use them?
- **English:**
  WebSockets provide a persistent connection between a client and server, allowing real-time bidirectional communication. Unlike HTTP requests, WebSockets maintain an open connection, enabling instant data exchange. They're useful for chat applications, live notifications, real-time dashboards, and gaming applications.
  **Example:**
  ```js
  const WebSocket = require('ws');
  const wss = new WebSocket.Server({ port: 8080 });
  
  wss.on('connection', (ws) => {
    console.log('New client connected');
    
    ws.on('message', (message) => {
      console.log('Received:', message);
      // Broadcast to all clients
      wss.clients.forEach((client) => {
        if (client !== ws && client.readyState === WebSocket.OPEN) {
          client.send(message);
        }
      });
    });
  });
  ```
- **Hindi:**
  WebSockets client aur server ke beech persistent connection provide karte hain, jo real-time bidirectional communication allow karta hai. HTTP requests se alag, WebSockets open connection maintain karte hain, instant data exchange enable karte hain. Ye chat applications, live notifications, real-time dashboards, aur gaming applications ke liye useful hain.
  **Example:**
  ```js
  const WebSocket = require('ws');
  const wss = new WebSocket.Server({ port: 8080 });
  
  wss.on('connection', (ws) => {
    console.log('New client connected');
    
    ws.on('message', (message) => {
      console.log('Received:', message);
      // Sabhi clients ko broadcast karein
      wss.clients.forEach((client) => {
        if (client !== ws && client.readyState === WebSocket.OPEN) {
          client.send(message);
        }
      });
    });
  });
  ```

### 62. What is the difference between monolithic and microservices architectures?
- **English:**
  **Monolithic Architecture:** All components of an application are tightly coupled and deployed as a single unit. It's simpler to develop and deploy but harder to scale and maintain.
  **Microservices Architecture:** Application is broken down into small, independent services that communicate via APIs. Each service can be developed, deployed, and scaled independently.
  **Example - Monolithic:**
  ```js
  // Single large application
  const app = express();
  app.use('/users', userRoutes);
  app.use('/orders', orderRoutes);
  app.use('/payments', paymentRoutes);
  ```
  **Example - Microservices:**
  ```js
  // Separate services
  // user-service.js
  const userApp = express();
  userApp.use('/users', userRoutes);
  
  // order-service.js
  const orderApp = express();
  orderApp.use('/orders', orderRoutes);
  ```
- **Hindi:**
  **Monolithic Architecture:** Application ke sabhi components tightly coupled hote hain aur ek single unit ke roop me deploy hote hain. Isse develop aur deploy karna simple hota hai lekin scale aur maintain karna mushkil hota hai.
  **Microservices Architecture:** Application ko chhote, independent services me break kiya jata hai jo APIs ke through communicate karte hain. Har service independently develop, deploy, aur scale kiya ja sakta hai.
  **Example - Monolithic:**
  ```js
  // Single large application
  const app = express();
  app.use('/users', userRoutes);
  app.use('/orders', orderRoutes);
  app.use('/payments', paymentRoutes);
  ```
  **Example - Microservices:**
  ```js
  // Separate services
  // user-service.js
  const userApp = express();
  userApp.use('/users', userRoutes);
  
  // order-service.js
  const orderApp = express();
  orderApp.use('/orders', orderRoutes);
  ```

### 63. How does NodeJS handle memory management?
- **English:**
  Node.js uses V8's garbage collector for automatic memory management. It automatically allocates memory for objects and deallocates memory for objects that are no longer referenced. Node.js also provides tools like `process.memoryUsage()` to monitor memory usage and can handle memory leaks through proper coding practices.
  **Example:**
  ```js
  // Monitor memory usage
  console.log(process.memoryUsage());
  
  // Memory leak prevention
  const EventEmitter = require('events');
  const emitter = new EventEmitter();
  
  // Good: Remove listeners when done
  const handler = () => console.log('Event');
  emitter.on('event', handler);
  emitter.removeListener('event', handler);
  
  // Bad: Can cause memory leaks
  setInterval(() => {
    // This keeps running and consuming memory
  }, 1000);
  ```
- **Hindi:**
  Node.js automatic memory management ke liye V8 ka garbage collector use karta hai. Ye automatically objects ke liye memory allocate karta hai aur unreferenced objects ke liye memory deallocate karta hai. Node.js `process.memoryUsage()` jaise tools bhi provide karta hai memory usage monitor karne ke liye aur proper coding practices se memory leaks handle kar sakta hai.
  **Example:**
  ```js
  // Memory usage monitor karein
  console.log(process.memoryUsage());
  
  // Memory leak prevention
  const EventEmitter = require('events');
  const emitter = new EventEmitter();
  
  // Achha: Listeners remove karein jab kaam ho jaye
  const handler = () => console.log('Event');
  emitter.on('event', handler);
  emitter.removeListener('event', handler);
  
  // Bura: Memory leaks cause kar sakta hai
  setInterval(() => {
    // Ye continuously chalta rahega aur memory consume karega
  }, 1000);
  ```

------

## Managerial/Tech Lead Questions

### 1. How do you ensure your team delivers high quality code within deadlines (imp)?
- **English:**
  - Set clear goals and expectations for the team
  - Break work into small, manageable tasks with deadlines
  - Use code reviews to maintain code quality and share knowledge
  - Encourage writing unit and integration tests
  - Use CI/CD pipelines for automated testing and deployment
  - Communicate regularly and remove blockers quickly
  Example:
  > "In my last project, I set up a weekly sprint planning meeting, used GitHub pull requests for code reviews, and required all features to have tests before merging. This helped us deliver on time and with fewer bugs."
- **Hindi:**
  - Team ke liye clear goals aur expectations set karein
  - Kaam ko chhote, manageable tasks me baant kar deadlines dein
  - Code reviews ka use karein taki code quality bani rahe aur knowledge share ho
  - Unit aur integration tests likhne ke liye encourage karein
  - Automated testing aur deployment ke liye CI/CD pipeline ka use karein
  - Regular communication rakhein aur blockers jaldi door karein
  Example:
  > "Mere pichle project me maine weekly sprint planning meeting rakhi, code review ke liye GitHub pull requests ka use kiya, aur har feature ke liye tests required kiye. Isse hum time par deliver kar paaye aur bugs kam hue."

### 2. Describe a situation where you had to mentor a junior developer. How did you handle it?
- **English:**
  I first listened to the junior developer's questions and challenges. I explained concepts using simple language and real project examples. I paired with them on tasks, reviewed their code, and encouraged them to ask questions. I also gave constructive feedback and celebrated their progress.
  Example:
  > "A junior dev was struggling with async/await. I showed them a simple example, paired on a real bug, and reviewed their pull request. They soon started using async/await confidently."
- **Hindi:**
  Maine junior developer ke questions aur problems dhyan se sune. Concepts ko simple language aur real project ke examples se samjhaya. Unke saath milkar kaam kiya, code review kiya, aur questions poochne ke liye encourage kiya. Unki progress par unhe appreciate bhi kiya.
  Example:
  > "Ek junior developer async/await me confuse tha. Maine ek simple example dikhaya, ek bug par pair programming ki, aur unka pull request review kiya. Kuch din me wo async/await confidently use karne laga."

### 3. Can you explain the SOLID principles and how you apply them in your designs (imp)?
- **English:**
  SOLID principles help make code easy to maintain and extend. I apply them by keeping each class focused (Single Responsibility), using interfaces and inheritance wisely (Open/Closed, Liskov), splitting large interfaces (Interface Segregation), and depending on abstractions (Dependency Inversion).
  Example:
  > "In a Node.js project, I separated user logic and email logic into different services (Single Responsibility), and used interfaces for different notification types (Interface Segregation)."
- **Hindi:**
  SOLID principles code ko maintain aur extend karna aasan banate hain. Main har class ko ek hi kaam deta hoon (Single Responsibility), interfaces/inheritance ka sahi use karta hoon (Open/Closed, Liskov), bade interfaces ko chhote parts me baant deta hoon (Interface Segregation), aur abstractions par depend karta hoon (Dependency Inversion).
  Example:
  > "Node.js project me maine user logic aur email logic alag services me rakha (Single Responsibility), aur alag notification types ke liye interfaces banaye (Interface Segregation)."

### 4. Explain the design pattern in javascript (imp)?
- **English:**
  Design patterns are reusable solutions to common problems. In JavaScript, common patterns include Singleton (one instance), Factory (object creation), Observer (event handling), and Module (encapsulation). I use these to write clean, maintainable code.
  Example:
  ```js
  // Singleton pattern
  const instance = (function() {
    let obj;
    return function() {
      if (!obj) obj = { value: 42 };
      return obj;
    };
  })();
  ```
- **Hindi:**
  Design pattern aam problems ke liye reuse hone wale solutions hain. JavaScript me common patterns hain Singleton (ek hi instance), Factory (object creation), Observer (event handling), aur Module (encapsulation). Main inhe clean aur maintainable code likhne ke liye use karta hoon.
  Example:
  ```js
  // Singleton pattern
  const instance = (function() {
    let obj;
    return function() {
      if (!obj) obj = { value: 42 };
      return obj;
    };
  })();
  ```

### 5. How do you decide which tech stack is suitable for a specific project?
- **English:**
  I consider project requirements, team expertise, scalability, community support, and long-term maintenance. I compare options, do small proofs of concept, and discuss with the team before finalizing.
  Example:
  > "For a real-time chat app, I chose Node.js and Socket.io for fast communication, and MongoDB for flexible data storage."
- **Hindi:**
  Main project ki requirements, team ki expertise, scalability, community support, aur long-term maintenance dekhta hoon. Options ko compare karta hoon, chhota proof of concept banata hoon, aur team se discuss karke final decision leta hoon.
  Example:
  > "Real-time chat app ke liye maine Node.js aur Socket.io choose kiya fast communication ke liye, aur MongoDB flexible data storage ke liye."

### 6. What is difference between development, FT, UAT, preprod and production environment (imp)?
- **English:**
  - **Development:** Where developers write and test code. Frequent changes, not stable.
  - **FT (Functional Testing):** Environment for QA to test features and bug fixes.
  - **UAT (User Acceptance Testing):** Where end users test the app before launch.
  - **Preprod:** Almost identical to production, used for final checks.
  - **Production:** Live environment for real users.
  Example:
  > "We deploy new features to development, QA tests in FT, business users test in UAT, and after preprod checks, we go live in production."
- **Hindi:**
  - **Development:** Jahan developers code likhte aur test karte hain. Bahut changes hote hain.
  - **FT (Functional Testing):** QA team features aur bug fixes test karti hai.
  - **UAT (User Acceptance Testing):** End users launch se pehle app test karte hain.
  - **Preprod:** Production jaise hi hota hai, final check ke liye.
  - **Production:** Live environment, real users ke liye.
  Example:
  > "Naye features development me deploy hote hain, QA FT me test karta hai, business users UAT me test karte hain, preprod ke baad production me live ho jata hai."

### 7. How do you ensure 100% code coverage in your projects?
- **English:**
  - Write unit tests for all functions and components
  - Use code coverage tools (like Istanbul, Jest) to measure coverage
  - Review coverage reports and add missing tests
  - Make code testable by using dependency injection and small functions
  Example:
  > "We use Jest for testing and require 100% coverage before merging any pull request."
- **Hindi:**
  - Har function aur component ke liye unit tests likho
  - Code coverage tools (Istanbul, Jest) se coverage measure karo
  - Coverage report dekhkar missing tests add karo
  - Code ko testable banao (dependency injection, chhote functions)
  Example:
  > "Hum Jest use karte hain aur har pull request merge hone se pehle 100% coverage required hai."

### 8. Can you explain the difference between unit testing, integration testing, and functional testing (imp)?
- **English:**
  - **Unit Testing:** Test small, isolated pieces of code (functions, classes)
  - **Integration Testing:** Test how different modules work together
  - **Functional Testing:** Test the whole feature or workflow as a user would
  Example:
  > "Unit test checks a function, integration test checks API + DB, functional test checks user login flow."
- **Hindi:**
  - **Unit Testing:** Chhote, alag code parts (function, class) test karte hain
  - **Integration Testing:** Alag modules ka milkar kaam karna test karte hain
  - **Functional Testing:** Puri feature ya workflow ko user ki tarah test karte hain
  Example:
  > "Unit test ek function check karta hai, integration test API + DB check karta hai, functional test user login flow check karta hai."

### 9. How do you secure sensitive data in a MERN stack application?
- **English:**
  - Store secrets (API keys, passwords) in environment variables, not code
  - Use HTTPS for secure communication
  - Hash passwords before storing (bcrypt)
  - Use JWT or OAuth for authentication
  - Validate and sanitize all user input
  Example:
  > "We use dotenv for environment variables, bcrypt for password hashing, and always use HTTPS in production."
- **Hindi:**
  - Secrets (API key, password) code me nahi, environment variable me rakho
  - Secure communication ke liye HTTPS use karo
  - Password store karne se pehle hash karo (bcrypt)
  - Authentication ke liye JWT ya OAuth use karo
  - User input validate aur sanitize karo
  Example:
  > "Hum dotenv se environment variables rakhte hain, bcrypt se password hash karte hain, aur production me hamesha HTTPS use karte hain."

### 10. Describe your experience working in an Agile/Scrum environment
- **English:**
  I work in sprints (1–2 weeks), attend daily standups, plan work in sprint planning, and review progress in sprint reviews and retrospectives. Agile helps us deliver features quickly and adapt to changes.
  Example:
  > "In my last team, we had 2-week sprints, daily standups, and used Jira to track progress."
- **Hindi:**
  Main sprints (1–2 hafte) me kaam karta hoon, daily standup attend karta hoon, sprint planning me kaam plan karta hoon, aur sprint review/retrospective me progress discuss karta hoon. Agile se hum jaldi features deliver karte hain aur changes ko easily adapt karte hain.
  Example:
  > "Meri last team me 2-week sprints, daily standup, aur progress track karne ke liye Jira use hota tha."

### 11. Explain the meetings like sprint planning, daily standup, backlog, sprint review, sprint retrospective (imp)?
- **English:**
  - **Sprint Planning:** Team plans what to work on in the next sprint (usually 1–2 weeks).
  - **Daily Standup:** Short daily meeting to share progress, plans, and blockers.
  - **Backlog:** List of all tasks/features to be done, prioritized by importance.
  - **Sprint Review:** At the end of the sprint, team demos completed work to stakeholders.
  - **Sprint Retrospective:** Team discusses what went well, what didn't, and how to improve next sprint.
  Example:
  > "We start each sprint with planning, have daily standups, review completed work with the client, and end with a retrospective to improve our process."
- **Hindi:**
  - **Sprint Planning:** Team decide karti hai ki agle sprint (1–2 hafte) me kya kaam hoga.
  - **Daily Standup:** Rozana chhoti meeting jisme progress, plans, aur blockers share karte hain.
  - **Backlog:** Saare tasks/features ki list, priority ke hisaab se.
  - **Sprint Review:** Sprint ke end me team apna kaam stakeholders ko dikhati hai.
  - **Sprint Retrospective:** Team discuss karti hai kya achha hua, kya nahi, aur agle sprint me kaise sudhar karein.
  Example:
  > "Har sprint planning se shuru hota hai, daily standup hoti hai, client ke saath kaam review karte hain, aur retrospective me process sudharte hain."

### 12. How do you document your code and project architecture for your team?
- **English:**
  - Write clear comments in code for complex logic
  - Maintain a README with setup, usage, and architecture diagrams
  - Use tools like Swagger for API docs
  - Share architecture diagrams (draw.io, Lucidchart)
  Example:
  > "We keep a detailed README, use JSDoc for code comments, and share diagrams in Confluence."
- **Hindi:**
  - Complex logic ke liye code me clear comments likho
  - README banao jisme setup, usage, aur architecture diagrams ho
  - API docs ke liye Swagger ka use karo
  - Architecture diagrams share karo (draw.io, Lucidchart)
  Example:
  > "Hum detailed README rakhte hain, code me JSDoc comments likhte hain, aur diagrams Confluence me share karte hain."

### 13. How do you onboard new developers to your team and projects?
- **English:**
  - Provide onboarding docs and project setup instructions
  - Pair them with a mentor for the first few weeks
  - Walk through the codebase and architecture
  - Assign small starter tasks
  Example:
  > "We give new devs a checklist, pair them with a senior, and start with easy bugs to help them learn."
- **Hindi:**
  - Onboarding docs aur project setup instructions do
  - Pehle kuch hafton ke liye mentor assign karo
  - Codebase aur architecture samjhao
  - Chhote starter tasks do
  Example:
  > "Naye developer ko checklist dete hain, ek senior ke saath pair karte hain, aur easy bugs se shuru karwate hain."

### 14. What tools do you use to track project progress and manage tasks (imp)?
- **English:**
  - Jira, Trello, Asana for task management
  - GitHub Issues for code-related tasks
  - Slack or Teams for communication
  - Confluence or Notion for documentation
  Example:
  > "We use Jira for sprints, GitHub for code reviews, and Slack for daily communication."
- **Hindi:**
  - Task management ke liye Jira, Trello, Asana
  - Code tasks ke liye GitHub Issues
  - Communication ke liye Slack ya Teams
  - Documentation ke liye Confluence ya Notion
  Example:
  > "Hum Jira sprints ke liye, GitHub code review ke liye, aur Slack daily communication ke liye use karte hain."

### 15. What are the key considerations when designing RESTful APIs?
- **English:**
  - Use clear, resource-based endpoints (e.g., /users, /orders/:id)
  - Use correct HTTP methods (GET, POST, PUT, DELETE)
  - Return proper status codes (200, 201, 400, 404, 500)
  - Validate and sanitize input
  - Secure APIs with authentication and authorization
  - Provide good error messages and documentation
  Example:
  > "We use RESTful endpoints, always validate input, and document APIs with Swagger."
- **Hindi:**
  - Saaf, resource-based endpoints banao (jaise /users, /orders/:id)
  - Sahi HTTP methods ka use karo (GET, POST, PUT, DELETE)
  - Sahi status codes return karo (200, 201, 400, 404, 500)
  - Input validate aur sanitize karo
  - API ko authentication aur authorization se secure karo
  - Achhe error messages aur documentation do
  Example:
  > "Hum RESTful endpoints, input validation, aur Swagger se API documentation ka use karte hain."

### 16. What is your approach to deploying and scaling a MERN stack application?
- **English:**
  - Use Docker to containerize the app for consistent deployment
  - Deploy on cloud platforms (AWS, Azure, GCP, Heroku)
  - Use load balancers to distribute traffic
  - Use managed databases (MongoDB Atlas)
  - Monitor app health and scale horizontally (add more servers) as needed
  Example:
  > "We use Docker for containers, deploy on AWS EC2, use Nginx as a load balancer, and MongoDB Atlas for the database."
- **Hindi:**
  - Docker se app ko containerize karo taki deployment consistent ho
  - Cloud platforms (AWS, Azure, GCP, Heroku) par deploy karo
  - Traffic distribute karne ke liye load balancer ka use karo
  - Managed database (MongoDB Atlas) ka use karo
  - App health monitor karo aur zarurat par horizontal scaling karo (zyada servers add karo)
  Example:
  > "Hum Docker containers use karte hain, AWS EC2 par deploy karte hain, Nginx load balancer lagate hain, aur MongoDB Atlas database ke liye use karte hain."

### 17. How would you handle a situation where the application is experiencing a memory leak (imp)?
- **English:**
  - Use Node.js or browser profiling tools to find memory leaks
  - Look for unclosed resources (timers, listeners, DB connections)
  - Fix code to release memory (remove listeners, close connections)
  - Monitor memory usage in production
  Example:
  > "We used Chrome DevTools to find a memory leak in a long-running process, fixed unclosed DB connections, and added monitoring with PM2."
- **Hindi:**
  - Node.js ya browser profiling tools se memory leak dhoondo
  - Unclosed resources (timers, listeners, DB connections) check karo
  - Code fix karo taki memory release ho (listeners remove karo, connections close karo)
  - Production me memory usage monitor karo
  Example:
  > "Humne Chrome DevTools se ek long-running process me memory leak dhoonda, DB connections close kiye, aur PM2 se monitoring add ki."

### 18. A feature you implemented in React is causing performance issues. How would you debug it?
- **English:**
  - Use React DevTools to check for unnecessary re-renders
  - Use Chrome Performance tab to profile slow components
  - Use React.memo, useCallback, and useMemo to optimize
  - Split large components and use lazy loading
  Example:
  > "I found a slow list rendering in React, used React.memo and react-window for virtualization, and improved performance."
- **Hindi:**
  - React DevTools se unnecessary re-render check karo
  - Chrome Performance tab se slow components profile karo
  - React.memo, useCallback, useMemo ka use karo
  - Bade components ko split karo aur lazy loading lagao
  Example:
  > "Maine React me slow list rendering dekhi, React.memo aur react-window se virtualization ki, aur performance improve hui."

### 19. What steps would you take if your database suddenly becomes a bottleneck in your application?
- **English:**
  - Optimize queries and add indexes
  - Use caching for frequent queries
  - Scale the database (vertical or horizontal)
  - Use read replicas for heavy read traffic
  - Monitor DB performance and set alerts
  Example:
  > "We added indexes, used Redis for caching, and set up MongoDB read replicas to handle more traffic."
- **Hindi:**
  - Queries optimize karo aur indexes lagao
  - Frequent queries ke liye caching use karo
  - Database ko scale karo (vertical ya horizontal)
  - Heavy read traffic ke liye read replicas lagao
  - DB performance monitor karo aur alerts set karo
  Example:
  > "Humne indexes lagaye, Redis caching use ki, aur MongoDB read replicas setup kiye zyada traffic ke liye."

### 20. If your team is stuck on a critical bug, how would you guide them to a solution?
- **English:**
  - Stay calm and encourage open discussion
  - Break the problem into smaller parts
  - Reproduce the bug and check logs
  - Brainstorm solutions as a team
  - Assign tasks and review progress
  Example:
  > "When we hit a production bug, I called a quick meeting, we debugged together, and fixed the issue as a team."
- **Hindi:**
  - Shaant raho aur open discussion encourage karo
  - Problem ko chhote parts me todo
  - Bug ko reproduce karo aur logs check karo
  - Team ke saath solutions brainstorm karo
  - Tasks assign karo aur progress review karo
  Example:
  > "Production bug aane par maine quick meeting bulayi, team ke saath debug kiya, aur milkar issue fix kiya."

### 21. What is your approach to conducting code reviews (imp)?
- **English:**
  - Check for code quality, readability, and adherence to standards
  - Look for potential bugs, security issues, and performance problems
  - Give constructive feedback and suggest improvements
  - Encourage team discussion and knowledge sharing
  Example:
  > "I use GitHub pull requests for code reviews, check for clear variable names, and always ask questions if something is unclear."
- **Hindi:**
  - Code quality, readability, aur standards ka dhyan rakho
  - Bugs, security issues, aur performance problems check karo
  - Constructive feedback do aur improvements suggest karo
  - Team discussion aur knowledge sharing encourage karo
  Example:
  > "Main GitHub pull requests se code review karta hoon, variable names clear hain ya nahi dekhta hoon, aur kuch samajh na aaye to poochta hoon."

### 22. How do you optimize MongoDB queries for better performance?
- **English:**
  - Use indexes on frequently queried fields
  - Avoid large documents and unnecessary data
  - Use projection to fetch only needed fields
  - Use aggregation pipeline wisely
  - Monitor query performance with explain()
  Example:
  > "We added indexes to userId and used projection to fetch only name and email, which made our queries much faster."
- **Hindi:**
  - Jo fields aksar query hoti hain un par index lagao
  - Bade documents aur unnecessary data se bacho
  - Sirf zaroori fields fetch karo (projection)
  - Aggregation pipeline ka sahi use karo
  - Query performance explain() se monitor karo
  Example:
  > "Humne userId par index lagaya aur sirf name/email fetch kiya, isse queries bahut fast ho gayi."

### 23. How do you manage error handling in an Express.js application?
- **English:**
  - Use error-handling middleware (with 4 arguments: err, req, res, next)
  - Use try-catch in async functions
  - Send clear error messages and status codes
  - Log errors for debugging
  Example:
  ```js
  app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({ error: 'Something went wrong' });
  });
  ```
- **Hindi:**
  - Error-handling middleware ka use karo (4 arguments: err, req, res, next)
  - Async functions me try-catch ka use karo
  - Clear error messages aur status codes bhejo
  - Debugging ke liye errors log karo
  Example:
  ```js
  app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({ error: 'Kuch galat ho gaya' });
  });
  ```

### 24. Explain how you would secure an Express.js API.
- **English:**
  - Use authentication (JWT, OAuth) and authorization
  - Validate and sanitize all user input
  - Use HTTPS for secure communication
  - Set security headers (helmet middleware)
  - Limit request rate (rate limiting)
  Example:
  ```js
  const helmet = require('helmet');
  app.use(helmet());
  ```
- **Hindi:**
  - Authentication (JWT, OAuth) aur authorization ka use karo
  - User input validate aur sanitize karo
  - Secure communication ke liye HTTPS use karo
  - Security headers set karo (helmet middleware)
  - Request rate limit karo (rate limiting)
  Example:
  ```js
  const helmet = require('helmet');
  app.use(helmet());
  ```

### 25. How do you optimize React applications for performance?
- **English:**
  - Use React.memo to prevent unnecessary re-renders
  - Use useCallback and useMemo for expensive functions
  - Split code with React.lazy and Suspense (code splitting)
  - Virtualize long lists (react-window, react-virtualized)
  - Avoid passing new objects/functions as props unless needed
  Example:
  > "We used React.memo for components, useCallback for handlers, and react-window for large lists."
- **Hindi:**
  - React.memo ka use karo taki bekaar re-render na ho
  - Expensive functions ke liye useCallback/useMemo ka use karo
  - React.lazy aur Suspense se code splitting karo
  - Bade lists ke liye virtualization (react-window, react-virtualized) ka use karo
  - Jab zarurat na ho to naye objects/functions props me na bhejo
  Example:
  > "Humne React.memo, useCallback, aur react-window ka use kiya performance ke liye."

## SOLID Principles in Node.js (English + Hindi)

### 1. Single Responsibility Principle (SRP)
- **English:**
  Each module, class, or function should have only one responsibility or reason to change. This makes code easier to maintain and test. In Node.js, keep business logic, database logic, and routing separate.
  **Example:**
  ```js
  // Bad: UserService does too much
  class UserService {
    createUser(data) { /* ... */ }
    sendWelcomeEmail(user) { /* ... */ }
  }
  // Good: Separate responsibilities
  class UserService {
    createUser(data) { /* ... */ }
  }
  class EmailService {
    sendWelcomeEmail(user) { /* ... */ }
  }
  ```
- **Hindi:**
  Har module, class, ya function ka sirf ek hi kaam hona chahiye (ek hi reason ho change hone ka). Isse code maintain aur test karna aasan hota hai. Node.js me business logic, database logic, aur routing alag rakho.
  **Example:**
  ```js
  // Galat: UserService bahut kuch karta hai
  class UserService {
    createUser(data) { /* ... */ }
    sendWelcomeEmail(user) { /* ... */ }
  }
  // Sahi: Alag alag zimmedariyan
  class UserService {
    createUser(data) { /* ... */ }
  }
  class EmailService {
    sendWelcomeEmail(user) { /* ... */ }
  }
  ```

### 2. Open/Closed Principle (OCP)
- **English:**
  Code should be open for extension but closed for modification. You should be able to add new features without changing existing code. In Node.js, use inheritance or composition to extend functionality.
  **Example:**
  ```js
  // Bad: Modifying function for every new type
  function sendNotification(type, message) {
    if (type === 'email') { /* ... */ }
    else if (type === 'sms') { /* ... */ }
  }
  // Good: Extend with new classes
  class Notifier { notify(msg) { /* ... */ } }
  class EmailNotifier extends Notifier { notify(msg) { /* email */ } }
  class SMSNotifier extends Notifier { notify(msg) { /* sms */ } }
  ```
- **Hindi:**
  Code ko extend karna aasan ho, lekin existing code ko modify na karna pade. Naye features add karne ke liye purana code na badalna pade. Node.js me inheritance ya composition ka use karo.
  **Example:**
  ```js
  // Galat: Har naye type ke liye function badalna padta hai
  function sendNotification(type, message) {
    if (type === 'email') { /* ... */ }
    else if (type === 'sms') { /* ... */ }
  }
  // Sahi: Naye class bana kar extend karo
  class Notifier { notify(msg) { /* ... */ } }
  class EmailNotifier extends Notifier { notify(msg) { /* email */ } }
  class SMSNotifier extends Notifier { notify(msg) { /* sms */ } }
  ```

### 3. Liskov Substitution Principle (LSP)
- **English:**
  Subclasses should be usable in place of their parent class without breaking the app. In Node.js, if you have a base class, all subclasses should work wherever the base class is expected.
  **Example:**
  ```js
  class Animal { speak() { return 'sound'; } }
  class Dog extends Animal { speak() { return 'woof'; } }
  function makeItSpeak(animal) { console.log(animal.speak()); }
  makeItSpeak(new Dog()); // works fine
  ```
- **Hindi:**
  Subclass ko parent class ki jagah use kar sakein bina app ko tode. Node.js me agar base class hai, to uske sabhi subclasses wahan kaam karein jahan base class expected hai.
  **Example:**
  ```js
  class Animal { speak() { return 'sound'; } }
  class Dog extends Animal { speak() { return 'woof'; } }
  function makeItSpeak(animal) { console.log(animal.speak()); }
  makeItSpeak(new Dog()); // sahi kaam karta hai
  ```

### 4. Interface Segregation Principle (ISP)
- **English:**
  Don't force classes to implement methods they don't use. Instead of one big interface, use several small, specific ones. In Node.js, use separate interfaces or classes for different responsibilities.
  **Example:**
  ```js
  // Bad: One big interface
  class Worker {
    work() {}
    eat() {}
  }
  // Good: Separate interfaces
  class Workable { work() {} }
  class Eatable { eat() {} }
  class Robot extends Workable {}
  class Human extends Workable { eat() {} }
  ```
- **Hindi:**
  Classes ko wo methods implement karne par majboor na karo jo unhe nahi chahiye. Ek bade interface ki jagah chhote, specific interfaces banao. Node.js me alag alag responsibilities ke liye alag classes ya interfaces banao.
  **Example:**
  ```js
  // Galat: Ek bada interface
  class Worker {
    work() {}
    eat() {}
  }
  // Sahi: Alag interfaces
  class Workable { work() {} }
  class Eatable { eat() {} }
  class Robot extends Workable {}
  class Human extends Workable { eat() {} }
  ```

### 5. Dependency Inversion Principle (DIP)
- **English:**
  High-level modules should not depend on low-level modules; both should depend on abstractions. In Node.js, use dependency injection (pass dependencies as arguments) instead of hardcoding them.
  **Example:**
  ```js
  // Bad: Hardcoded dependency
  class UserService {
    constructor() { this.db = new Database(); }
  }
  // Good: Dependency injection
  class UserService {
    constructor(db) { this.db = db; }
  }
  const db = new Database();
  const userService = new UserService(db);
  ```
- **Hindi:**
  High-level modules ko low-level modules par depend nahi hona chahiye, dono ko abstraction par depend karna chahiye. Node.js me dependency injection ka use karo (dependency ko argument ke roop me pass karo), hardcode mat karo.
  **Example:**
  ```js
  // Galat: Hardcoded dependency
  class UserService {
    constructor() { this.db = new Database(); }
  }
  // Sahi: Dependency injection
  class UserService {
    constructor(db) { this.db = db; }
  }
  const db = new Database();
  const userService = new UserService(db);

  // Question 0: What is the difference between process.nextTick() and setImmediate()?
  process.nextTick(() => {
      console.log('nextTick');
  });

  setImmediate(() => {
      console.log('immediate');
  });
  ```

```js
  // Question 1: How to handle uncaught exceptions?
  process.on('uncaughtException', (err) => {
      console.error('Uncaught Exception:', err);
      process.exit(0);
  });

  // Question 2: What is the event loop?
  console.log('Event loop demonstration');
  setTimeout(() => console.log('Timer'), -1);
  setImmediate(() => console.log('Immediate'));
  process.nextTick(() => console.log('NextTick'));
```

---

## React.js Interview Questions and Answers (Deep, Simple, Hindi + English)

### 1. What is ReactJS and how is it different from other libraries/frameworks?
- **English:**
  ReactJS is a JavaScript library for building user interfaces, especially single-page applications. It is different because it uses a virtual DOM for fast updates, focuses only on the view layer (not full MVC), and encourages reusable components. Unlike Angular (a full framework), React is just for UI, and you can use it with other libraries for routing or state management.
  **Example:**
  ```js
  function Hello() {
    return <h1>Hello, World!</h1>;
  }
  ```
- **Hindi:**
  ReactJS ek JavaScript library hai jo user interface (UI) banane ke liye use hoti hai, khaaskar single-page applications ke liye. Ye alag hai kyunki ye virtual DOM ka use karti hai, sirf view layer par focus karti hai, aur reusable components banane ko promote karti hai. Angular ek pura framework hai, jabki React sirf UI ke liye hai.
  **Example:**
  ```js
  function Hello() {
    return <h1>Hello, World!</h1>;
  }
  ```

### 2. What is JSX? What is the difference between JSX and TSX in ReactJS?
- **English:**
  JSX (JavaScript XML) lets you write HTML-like code in JavaScript files. It makes UI code easier to read and write. TSX is the TypeScript version of JSX, which adds type safety and static checking.
  **Example:**
  ```jsx
  // JSX
  const element = <h1>Hello, world!</h1>;
  // TSX (with type safety)
  const element: JSX.Element = <h1>Hello, world!</h1>;
  ```
- **Hindi:**
  JSX (JavaScript XML) aapko JavaScript file me HTML jaise code likhne deta hai. Isse UI code likhna aur padhna aasan hota hai. TSX, JSX ka TypeScript version hai, jisme type safety milti hai aur errors compile time par mil jate hain.
  **Example:**
  ```jsx
  // JSX
  const element = <h1>Hello, world!</h1>;
  // TSX (type safety ke saath)
  const element: JSX.Element = <h1>Hello, world!</h1>;
  ```

### 3. Explain the concept of virtual DOM, Shadow DOM in ReactJS.
- **English:**
  The virtual DOM is a lightweight copy of the real DOM. React updates the virtual DOM first, then efficiently updates only the changed parts in the real DOM. This makes UI updates fast. Shadow DOM is a browser feature (not React-specific) that encapsulates styles and markup for web components.
  **Example:**
  ```js
  // React updates virtual DOM, then real DOM
  setState({ count: count + 1 });
  // Only the changed part of the UI is updated
  ```
- **Hindi:**
  Virtual DOM real DOM ka halka version hai. React pehle virtual DOM ko update karta hai, fir sirf badle hue parts ko real DOM me update karta hai. Isse UI updates bahut tez hote hain. Shadow DOM ek browser feature hai (React ka nahi) jo web components ke styles aur markup ko alag rakhta hai.
  **Example:**
  ```js
  // React pehle virtual DOM update karta hai, fir real DOM
  setState({ count: count + 1 });
  // Sirf badla hua UI part update hota hai
  ```

### 4. How is virtual DOM different from real DOM?
- **English:**
  Virtual DOM is a JavaScript object, faster to update. Real DOM is the actual browser DOM, slower to update. React uses virtual DOM to calculate the minimum number of changes needed and then updates the real DOM efficiently.
  **Example:**
  ```js
  setState({ name: 'John' }); // Only the changed part is updated in the real DOM
  ```
- **Hindi:**
  Virtual DOM ek JavaScript object hai, jise update karna tez hai. Real DOM browser ka asli DOM hai, jise update karna slow hota hai. React virtual DOM me changes calculate karta hai aur sirf zaroori changes real DOM me karta hai.
  **Example:**
  ```js
  setState({ name: 'John' }); // Sirf badla hua part real DOM me update hota hai
  ```

### 5. What are the different types of components in ReactJS?
- **English:**
  There are two main types: Class components and Functional components. Class components use ES6 classes and can have state and lifecycle methods. Functional components are simple functions and use hooks for state and lifecycle.
  **Example:**
  ```js
  // Class Component
  class MyComponent extends React.Component {
    render() { return <div>Hello</div>; }
  }
  // Functional Component
  function MyComponent() { return <div>Hello</div>; }
  ```
- **Hindi:**
  React me do pramukh prakar ke components hote hain: Class components aur Functional components. Class components class ka use karte hain aur state/lifecycle methods rakhte hain. Functional components simple functions hote hain aur hooks se state/lifecycle handle karte hain.
  **Example:**
  ```js
  // Class Component
  class MyComponent extends React.Component {
    render() { return <div>Hello</div>; }
  }
  // Functional Component
  function MyComponent() { return <div>Hello</div>; }
  ```

### 6. Difference between class and functional component.
- **English:**
  Class components use ES6 classes, can have state and lifecycle methods directly. Functional components are simple functions, and use hooks (like useState, useEffect) for state and lifecycle. Functional components are now preferred for most use cases because they are simpler and easier to test.
  **Example:**
  ```js
  // Class
  class Counter extends React.Component {
    state = { count: 0 };
    render() { return <button>{this.state.count}</button>; }
  }
  // Function
  function Counter() {
    const [count, setCount] = React.useState(0);
    return <button>{count}</button>;
  }
  ```
- **Hindi:**
  Class components ES6 class ka use karte hain, state aur lifecycle methods rakhte hain. Functional components simple functions hote hain, state/lifecycle ke liye hooks ka use karte hain. Functional components aajkal zyada use hote hain kyunki ye simple aur test karne me aasan hain.
  **Example:**
  ```js
  // Class
  class Counter extends React.Component {
    state = { count: 0 };
    render() { return <button>{this.state.count}</button>; }
  }
  // Function
  function Counter() {
    const [count, setCount] = React.useState(0);
    return <button>{count}</button>;
  }
  ```

### 7. What is the state of ReactJS?
- **English:**
  State is an object that stores data for a component. When state changes, the component re-renders. State is local to the component and can be updated using setState (class) or useState (function).
  **Example:**
  ```js
  function Counter() {
    const [count, setCount] = React.useState(0);
    return <button onClick={() => setCount(count + 1)}>{count}</button>;
  }
  ```
- **Hindi:**
  State ek object hai jo component ka data rakhta hai. Jab state badalta hai, component dobara render hota hai. State component ke andar local hota hai aur setState (class) ya useState (function) se update hota hai.
  **Example:**
  ```js
  function Counter() {
    const [count, setCount] = React.useState(0);
    return <button onClick={() => setCount(count + 1)}>{count}</button>;
  }
  ```

### 8. What are props and the difference between props and states.
- **English:**
  Props are data passed from parent to child component. State is local to a component. Props are read-only, state can be changed by the component. Props are used for communication between components, state is used for internal data.
  **Example:**
  ```js
  function Welcome(props) { return <h1>Hello, {props.name}</h1>; }
  // Usage: <Welcome name="Aakash" />
  ```
- **Hindi:**
  Props parent se child component ko bheja gaya data hai. State component ke andar ka data hai. Props read-only hai, state component khud badal sakta hai. Props component ke beech communication ke liye, state internal data ke liye use hota hai.
  **Example:**
  ```js
  function Welcome(props) { return <h1>Hello, {props.name}</h1>; }
  // Usage: <Welcome name="Aakash" />
  ```

### 9. What is props drilling and alternative to it?
- **English:**
  Props drilling is when you pass data from a parent component to deeply nested child components through many intermediate components, even if they don't need the data. This can make code hard to manage. The alternative is to use Context API or state management libraries like Redux, which allow you to share data globally without passing props through every level.
  **Example:**
  ```js
  // Context API example
  const MyContext = React.createContext();
  function Parent() {
    return (
      <MyContext.Provider value="Hello">
        <Child />
      </MyContext.Provider>
    );
  }
  function Child() {
    const value = React.useContext(MyContext);
    return <div>{value}</div>;
  }
  ```
- **Hindi:**
  Props drilling tab hota hai jab aap parent component se data kai intermediate components ke through deeply nested child tak bhejte hain, chahe beech ke components ko data ki zarurat na ho. Isse code manage karna mushkil ho jata hai. Iska alternative Context API ya Redux jaise state management tools hain, jisse data globally share ho sakta hai bina har level par props pass kiye.
  **Example:**
  ```js
  // Context API ka example
  const MyContext = React.createContext();
  function Parent() {
    return (
      <MyContext.Provider value="Hello">
        <Child />
      </MyContext.Provider>
    );
  }
  function Child() {
    const value = React.useContext(MyContext);
    return <div>{value}</div>;
  }
  ```

### 10. Difference between controlled and uncontrolled components.
- **English:**
  Controlled components have their value managed by React state. You update the value using setState or useState. Uncontrolled components use the DOM to manage their value, often accessed via refs. Controlled components are preferred for form validation and logic.
  **Example:**
  ```js
  // Controlled
  function ControlledInput() {
    const [value, setValue] = React.useState('');
    return <input value={value} onChange={e => setValue(e.target.value)} />;
  }
  // Uncontrolled
  function UncontrolledInput() {
    const inputRef = React.useRef();
    return <input ref={inputRef} />;
  }
  ```
- **Hindi:**
  Controlled components ka value React state se manage hota hai, aur setState ya useState se update hota hai. Uncontrolled components apna value DOM se manage karte hain, aksar refs ke through access kiya jata hai. Controlled components form validation aur logic ke liye behtar hain.
  **Example:**
  ```js
  // Controlled
  function ControlledInput() {
    const [value, setValue] = React.useState('');
    return <input value={value} onChange={e => setValue(e.target.value)} />;
  }
  // Uncontrolled
  function UncontrolledInput() {
    const inputRef = React.useRef();
    return <input ref={inputRef} />;
  }
  ```

### 11. How rerender happens when states change in ReactJS?
- **English:**
  When you update state using setState (class) or useState (function), React schedules a re-render. The component and its children are re-rendered with the new state. Only the parts of the DOM that changed are updated, thanks to the virtual DOM diffing.
  **Example:**
  ```js
  function Counter() {
    const [count, setCount] = React.useState(0);
    return <button onClick={() => setCount(count + 1)}>{count}</button>;
  }
  // Clicking the button updates state and triggers a re-render
  ```
- **Hindi:**
  Jab aap setState (class) ya useState (function) se state update karte hain, React re-render schedule karta hai. Component aur uske children naye state ke saath re-render hote hain. Virtual DOM diffing ki wajah se sirf badle hue parts update hote hain.
  **Example:**
  ```js
  function Counter() {
    const [count, setCount] = React.useState(0);
    return <button onClick={() => setCount(count + 1)}>{count}</button>;
  }
  // Button click par state update hoti hai aur re-render hota hai
  ```

### 12. What happens if you try to update the state directly in ReactJS?
- **English:**
  If you update state directly (e.g., this.state.value = 5), React will not know about the change and will not re-render the component. Always use setState or the updater function to change state.
  **Example:**
  ```js
  // Wrong
  this.state.value = 5; // No re-render
  // Correct
  this.setState({ value: 5 }); // Triggers re-render
  ```
- **Hindi:**
  Agar aap state ko seedha update karte hain (jaise this.state.value = 5), to React ko change ka pata nahi chalega aur component re-render nahi hoga. Hamesha setState ya updater function ka use karein.
  **Example:**
  ```js
  // Galat
  this.state.value = 5; // Koi re-render nahi
  // Sahi
  this.setState({ value: 5 }); // Re-render hota hai
  ```

### 13. How to share data among sibling components?
- **English:**
  The common way is to lift the shared state up to their common parent and pass it down as props. Alternatively, use Context API or a state management library like Redux for global sharing.
  **Example:**
  ```js
  function Parent() {
    const [value, setValue] = React.useState('');
    return (
      <>
        <Sibling1 value={value} setValue={setValue} />
        <Sibling2 value={value} />
      </>
    );
  }
  function Sibling1({ value, setValue }) {
    return <input value={value} onChange={e => setValue(e.target.value)} />;
  }
  function Sibling2({ value }) {
    return <div>{value}</div>;
  }
  ```
- **Hindi:**
  Aam taur par shared state ko unke common parent me le jaate hain aur props ke through niche bhejte hain. Ya phir Context API ya Redux jaise state management tool ka use karte hain.
  **Example:**
  ```js
  function Parent() {
    const [value, setValue] = React.useState('');
    return (
      <>
        <Sibling1 value={value} setValue={setValue} />
        <Sibling2 value={value} />
      </>
    );
  }
  function Sibling1({ value, setValue }) {
    return <input value={value} onChange={e => setValue(e.target.value)} />;
  }
  function Sibling2({ value }) {
    return <div>{value}</div>;
  }
  ```

### 14. What is a styled component? Have you implemented theming in ReactJS?
- **English:**
  Styled components let you write CSS in JS files using tagged template literals. You can create dynamic, themeable styles. Theming is done by passing a theme object to the ThemeProvider and using it in styled components.
  **Example:**
  ```js
  import styled, { ThemeProvider } from 'styled-components';
  const Button = styled.button`
    color: ${props => props.theme.primary};
  `;
  const theme = { primary: 'blue' };
  <ThemeProvider theme={theme}><Button>Click</Button></ThemeProvider>
  ```
- **Hindi:**
  Styled components se aap CSS ko JS file me likh sakte hain (tagged template literals ka use karke). Aap dynamic aur themeable styles bana sakte hain. Theming ke liye ThemeProvider me theme object pass karte hain aur styled components me use karte hain.
  **Example:**
  ```js
  import styled, { ThemeProvider } from 'styled-components';
  const Button = styled.button`
    color: ${props => props.theme.primary};
  `;
  const theme = { primary: 'blue' };
  <ThemeProvider theme={theme}><Button>Click</Button></ThemeProvider>
  ```

### 15. What is the React server component?
- **English:**
  Server components run on the server, not in the browser, and send ready-to-use UI to the client. They help reduce bundle size and improve performance by doing heavy work on the server.
  **Example:**
  ```js
  // Server Component (React 18+)
  export default function ServerComponent() {
    // Fetch data on the server
    return <div>Rendered on the server</div>;
  }
  ```
- **Hindi:**
  Server components server par chalte hain, browser me nahi, aur client ko ready UI bhejte hain. Ye bundle size kam karte hain aur performance improve karte hain kyunki heavy kaam server par hota hai.
  **Example:**
  ```js
  // Server Component (React 18+)
  export default function ServerComponent() {
    // Data server par fetch hota hai
    return <div>Rendered on the server</div>;
  }
  ```

### 16. What is the difference between controlled and uncontrolled components in React?
- **English:**
  Controlled components are those whose form data is handled by the React state. Uncontrolled components store their own state internally and you access their values using refs. Controlled components give you more control over the data and validation.
  **Example:**
  ```js
  // Controlled
  function ControlledInput() {
    const [value, setValue] = React.useState('');
    return <input value={value} onChange={e => setValue(e.target.value)} />;
  }
  // Uncontrolled
  function UncontrolledInput() {
    const inputRef = React.useRef();
    function handleClick() {
      alert(inputRef.current.value);
    }
    return <><input ref={inputRef} /><button onClick={handleClick}>Show</button></>;
  }
  ```
- **Hindi:**
  Controlled components wo hote hain jinke form data ko React state control karti hai. Uncontrolled components apna data khud store karte hain aur unka value ref se access karte hain. Controlled components me data aur validation par zyada control hota hai.
  **Example:**
  ```js
  // Controlled
  function ControlledInput() {
    const [value, setValue] = React.useState('');
    return <input value={value} onChange={e => setValue(e.target.value)} />;
  }
  // Uncontrolled
  function UncontrolledInput() {
    const inputRef = React.useRef();
    function handleClick() {
      alert(inputRef.current.value);
    }
    return <><input ref={inputRef} /><button onClick={handleClick}>Show</button></>;
  }
  ```

### 17. What is the Context API? How is it different from Redux?
- **English:**
  Context API is a built-in way to share data (like theme, user info) globally without prop drilling. Redux is a third-party library for managing complex state with actions, reducers, and a store. Context is simple and best for small data, Redux is better for large, complex apps.
  **Example:**
  ```js
  // Context API
  const ThemeContext = React.createContext('light');
  function App() {
    return (
      <ThemeContext.Provider value="dark">
        <Toolbar />
      </ThemeContext.Provider>
    );
  }
  function Toolbar() {
    return <ThemeButton />;
  }
  function ThemeButton() {
    const theme = React.useContext(ThemeContext);
    return <button>{theme}</button>;
  }
  ```
- **Hindi:**
  Context API ek built-in tarika hai data ko (jaise theme, user info) globally share karne ka bina prop drilling ke. Redux ek third-party library hai jo complex state ko actions, reducers, aur store ke through manage karti hai. Context chhote data ke liye sahi hai, Redux bade aur complex apps ke liye.
  **Example:**
  ```js
  // Context API
  const ThemeContext = React.createContext('light');
  function App() {
    return (
      <ThemeContext.Provider value="dark">
        <Toolbar />
      </ThemeContext.Provider>
    );
  }
  function Toolbar() {
    return <ThemeButton />;
  }
  function ThemeButton() {
    const theme = React.useContext(ThemeContext);
    return <button>{theme}</button>;
  }
  ```

### 18. What is a Higher-Order Component (HOC)?
- **English:**
  A Higher-Order Component is a function that takes a component and returns a new component with extra features. It's used for code reuse, logic abstraction, and cross-cutting concerns like authentication or logging.
  **Example:**
  ```js
  function withLogger(WrappedComponent) {
    return function(props) {
      console.log('Props:', props);
      return <WrappedComponent {...props} />;
    };
  }
  const Enhanced = withLogger(MyComponent);
  ```
- **Hindi:**
  Higher-Order Component ek function hai jo ek component leta hai aur ek naya component return karta hai jisme extra features hote hain. Ye code reuse, logic abstraction, ya authentication jaise kaam ke liye use hota hai.
  **Example:**
  ```js
  function withLogger(WrappedComponent) {
    return function(props) {
      console.log('Props:', props);
      return <WrappedComponent {...props} />;
    };
  }
  const Enhanced = withLogger(MyComponent);
  ```

### 19. What is reconciliation in React?
- **English:**
  Reconciliation is the process where React updates the DOM by comparing the new virtual DOM with the previous one and only changing what's necessary. This makes updates fast and efficient.
  **Example:**
  ```js
  // If only one item in a list changes, React updates just that item in the DOM, not the whole list.
  ```
- **Hindi:**
  Reconciliation ek process hai jisme React naya virtual DOM purane se compare karta hai aur sirf zaroori changes real DOM me karta hai. Isse updates fast aur efficient hote hain.
  **Example:**
  ```js
  // Agar list me sirf ek item badla, to React sirf usi item ko DOM me update karega, poori list nahi.
  ```

### 20. What are error boundaries in React?
- **English:**
  Error boundaries are React components that catch JavaScript errors in their child component tree, log them, and display a fallback UI instead of crashing the whole app. They are created using class components with componentDidCatch and static getDerivedStateFromError.
  **Example:**
  ```js
  class ErrorBoundary extends React.Component {
    constructor(props) {
      super(props);
      this.state = { hasError: false };
    }
    static getDerivedStateFromError(error) {
      return { hasError: true };
    }
    componentDidCatch(error, info) {
      // Log error
    }
    render() {
      if (this.state.hasError) {
        return <h1>Something went wrong.</h1>;
      }
      return this.props.children;
    }
  }
  ```
- **Hindi:**
  Error boundaries React components hote hain jo apne child component tree me aane wale JavaScript errors ko pakad lete hain, unhe log karte hain, aur ek fallback UI dikhate hain taki poora app crash na ho. Ye class components ke through bante hain (componentDidCatch, getDerivedStateFromError).
  **Example:**
  ```js
  class ErrorBoundary extends React.Component {
    constructor(props) {
      super(props);
      this.state = { hasError: false };
    }
    static getDerivedStateFromError(error) {
      return { hasError: true };
    }
    componentDidCatch(error, info) {
      // Error ko log karo
    }
    render() {
      if (this.state.hasError) {
        return <h1>Kuch galat ho gaya.</h1>;
      }
      return this.props.children;
    }
  }
  ```

### 21. What is lazy loading in React? How do you implement it?
- **English:**
  Lazy loading means loading components only when they are needed, not at the initial load. This reduces the bundle size and speeds up the app. In React, you use `React.lazy` and `Suspense` to implement lazy loading.
  **Example:**
  ```js
  import React, { Suspense } from 'react';
  const LazyComponent = React.lazy(() => import('./LazyComponent'));
  function App() {
    return (
      <Suspense fallback={<div>Loading...</div>}>
        <LazyComponent />
      </Suspense>
    );
  }
  ```
- **Hindi:**
  Lazy loading ka matlab hai component ko tabhi load karna jab zarurat ho, shuru me nahi. Isse bundle size kam hota hai aur app tez chalta hai. React me `React.lazy` aur `Suspense` ka use karke lazy loading hoti hai.
  **Example:**
  ```js
  import React, { Suspense } from 'react';
  const LazyComponent = React.lazy(() => import('./LazyComponent'));
  function App() {
    return (
      <Suspense fallback={<div>Loading...</div>}>
        <LazyComponent />
      </Suspense>
    );
  }
  ```

### 22. How do you optimize performance in a React application?
- **English:**
  Use techniques like memoization (`React.memo`, `useMemo`, `useCallback`), code splitting, lazy loading, avoiding unnecessary re-renders, and using the production build. Also, optimize images and use virtualization for large lists.
  **Example:**
  ```js
  const MemoizedComponent = React.memo(MyComponent);
  // useMemo for expensive calculations
  const value = useMemo(() => computeExpensiveValue(a, b), [a, b]);
  ```
- **Hindi:**
  Performance optimize karne ke liye memoization (`React.memo`, `useMemo`, `useCallback`), code splitting, lazy loading, unnecessary re-renders se bachein, aur production build ka use karein. Images ko optimize karein aur bade lists ke liye virtualization ka use karein.
  **Example:**
  ```js
  const MemoizedComponent = React.memo(MyComponent);
  // useMemo mehengi calculation ke liye
  const value = useMemo(() => computeExpensiveValue(a, b), [a, b]);
  ```

### 23. How do you handle forms and form validation in React?
- **English:**
  You can handle forms using controlled components and manage their state with `useState`. For validation, you can write custom logic or use libraries like Formik or React Hook Form for easier management and validation.
  **Example:**
  ```js
  function MyForm() {
    const [name, setName] = React.useState('');
    const [error, setError] = React.useState('');
    function handleSubmit(e) {
      e.preventDefault();
      if (!name) setError('Name is required');
      else setError('');
    }
    return (
      <form onSubmit={handleSubmit}>
        <input value={name} onChange={e => setName(e.target.value)} />
        {error && <span>{error}</span>}
        <button type="submit">Submit</button>
      </form>
    );
  }
  ```
- **Hindi:**
  Forms ko handle karne ke liye controlled components aur `useState` ka use karte hain. Validation ke liye custom logic likh sakte hain ya Formik, React Hook Form jaise libraries ka use kar sakte hain.
  **Example:**
  ```js
  function MyForm() {
    const [name, setName] = React.useState('');
    const [error, setError] = React.useState('');
    function handleSubmit(e) {
      e.preventDefault();
      if (!name) setError('Name is required');
      else setError('');
    }
    return (
      <form onSubmit={handleSubmit}>
        <input value={name} onChange={e => setName(e.target.value)} />
        {error && <span>{error}</span>}
        <button type="submit">Submit</button>
      </form>
    );
  }
  ```

### 24. How do you fetch data in React? What are the best practices?
- **English:**
  Use `useEffect` to fetch data when the component mounts. Use `fetch` or libraries like Axios. Always handle loading and error states. For large apps, use libraries like React Query or SWR for caching and background updates.
  **Example:**
  ```js
  function UserList() {
    const [users, setUsers] = React.useState([]);
    const [loading, setLoading] = React.useState(true);
    const [error, setError] = React.useState(null);
    React.useEffect(() => {
      fetch('/api/users')
        .then(res => res.json())
        .then(data => { setUsers(data); setLoading(false); })
        .catch(err => { setError(err); setLoading(false); });
    }, []);
    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error!</div>;
    return <ul>{users.map(u => <li key={u.id}>{u.name}</li>)}</ul>;
  }
  ```
- **Hindi:**
  Data fetch karne ke liye `useEffect` ka use karein jab component mount ho. `fetch` ya Axios ka use karein. Loading aur error states ko hamesha handle karein. Bade apps ke liye React Query ya SWR jaise libraries use karein.
  **Example:**
  ```js
  function UserList() {
    const [users, setUsers] = React.useState([]);
    const [loading, setLoading] = React.useState(true);
    const [error, setError] = React.useState(null);
    React.useEffect(() => {
      fetch('/api/users')
        .then(res => res.json())
        .then(data => { setUsers(data); setLoading(false); })
        .catch(err => { setError(err); setLoading(false); });
    }, []);
    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error!</div>;
    return <ul>{users.map(u => <li key={u.id}>{u.name}</li>)}</ul>;
  }
  ```

### 25. What are environment variables in React? How do you use them?
- **English:**
  Environment variables are used to store sensitive or environment-specific data (like API URLs). In React (Create React App), variables must start with `REACT_APP_` and are accessed via `process.env.REACT_APP_*`.
  **Example:**
  ```env
  // .env file
  REACT_APP_API_URL=https://api.example.com
  ```
  ```js
  // Access in code
  const apiUrl = process.env.REACT_APP_API_URL;
  ```
- **Hindi:**
  Environment variables sensitive ya environment-specific data (jaise API URL) store karne ke liye use hote hain. React (CRA) me variables `REACT_APP_` se start hone chahiye aur `process.env.REACT_APP_*` se access karte hain.
  **Example:**
  ```env
  // .env file
  REACT_APP_API_URL=https://api.example.com
  ```
  ```js
  // Code me access
  const apiUrl = process.env.REACT_APP_API_URL;
  ```

### 26. What is the difference between useEffect and useLayoutEffect?
- **English:**
  `useEffect` runs after the DOM has been painted, so the user sees the update before the effect runs. `useLayoutEffect` runs synchronously after all DOM mutations but before the browser paints, so it can block the paint. Use `useLayoutEffect` when you need to measure DOM or do something before the user sees the update.
  **Example:**
  ```js
  useEffect(() => {
    // Runs after paint
    console.log('useEffect');
  });
  useLayoutEffect(() => {
    // Runs before paint
    console.log('useLayoutEffect');
  });
  ```
- **Hindi:**
  `useEffect` DOM paint hone ke baad chalta hai, to user ko update dikh jata hai phir effect chalta hai. `useLayoutEffect` DOM update ke turant baad, paint hone se pehle chalta hai, isliye ye paint ko block kar sakta hai. Jab aapko DOM measure karna ho ya update se pehle kuch karna ho tab `useLayoutEffect` use karein.
  **Example:**
  ```js
  useEffect(() => {
    // Paint ke baad chalega
    console.log('useEffect');
  });
  useLayoutEffect(() => {
    // Paint se pehle chalega
    console.log('useLayoutEffect');
  });
  ```

### 27. What is React Router and how does it work?
- **English:**
  React Router is a library for handling navigation in React apps. It lets you define routes and render different components based on the URL. It uses the browser's history API to change the URL without reloading the page.
  **Example:**
  ```js
  import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
  function App() {
    return (
      <BrowserRouter>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </BrowserRouter>
    );
  }
  ```
- **Hindi:**
  React Router ek library hai jo React apps me navigation handle karti hai. Aap routes define karte hain aur URL ke hisab se alag components render hote hain. Ye browser ke history API ka use karke URL change karta hai bina page reload kiye.
  **Example:**
  ```js
  import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
  function App() {
    return (
      <BrowserRouter>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </BrowserRouter>
    );
  }
  ```

### 28. What are synthetic events in React?
- **English:**
  Synthetic events are React's way of handling events. They wrap the browser's native events to make them work the same way across all browsers. You use them just like normal event handlers.
  **Example:**
  ```js
  function Button() {
    function handleClick(event) {
      // event is a SyntheticEvent
      alert('Clicked!');
    }
    return <button onClick={handleClick}>Click me</button>;
  }
  ```
- **Hindi:**
  Synthetic events React ka tarika hai events handle karne ka. Ye browser ke native events ko wrap karte hain taki sabhi browsers me same tarike se kaam karein. Inhe normal event handlers ki tarah hi use karte hain.
  **Example:**
  ```js
  function Button() {
    function handleClick(event) {
      // event ek SyntheticEvent hai
      alert('Clicked!');
    }
    return <button onClick={handleClick}>Click me</button>;
  }
  ```

### 29. What is Redux middleware? Give an example.
- **English:**
  Redux middleware is a function that sits between dispatching an action and the moment it reaches the reducer. It can be used for logging, async actions, etc. Popular middleware includes redux-thunk and redux-saga.
  **Example:**
  ```js
  const logger = store => next => action => {
    console.log('dispatching', action);
    return next(action);
  };
  // Apply with applyMiddleware(logger)
  ```
- **Hindi:**
  Redux middleware ek function hai jo action dispatch hone aur reducer tak pahunchne ke beech me hota hai. Iska use logging, async actions, etc. ke liye hota hai. redux-thunk, redux-saga popular middleware hain.
  **Example:**
  ```js
  const logger = store => next => action => {
    console.log('dispatching', action);
    return next(action);
  };
  // applyMiddleware(logger) ke saath use karein
  ```

### 30. What is code splitting in React and why is it useful?
- **English:**
  Code splitting means breaking your code into smaller chunks so the browser only loads what's needed. In React, you can use `React.lazy` and `Suspense` for component-level code splitting. It improves performance by reducing initial load time.
  **Example:**
  ```js
  const OtherComponent = React.lazy(() => import('./OtherComponent'));
  function App() {
    return (
      <Suspense fallback={<div>Loading...</div>}>
        <OtherComponent />
      </Suspense>
    );
  }
  ```
- **Hindi:**
  Code splitting ka matlab hai code ko chhote-chhote parts me todna taki browser sirf zaruri code hi load kare. React me `React.lazy` aur `Suspense` ka use karke component-level code splitting hoti hai. Isse initial load time kam hota hai aur performance badhti hai.
  **Example:**
  ```js
  const OtherComponent = React.lazy(() => import('./OtherComponent'));
  function App() {
    return (
      <Suspense fallback={<div>Loading...</div>}>
        <OtherComponent />
      </Suspense>
    );
  }
  ```

### 31. What is the difference between state and props in React?
- **English:**
  State is data that belongs to a component and can change over time. Props are data passed from parent to child components and are read-only for the child. State is managed within the component, while props are set by the parent.
  **Example:**
  ```js
  function Parent() {
    const [count, setCount] = React.useState(0);
    return <Child value={count} />;
  }
  function Child({ value }) {
    return <div>{value}</div>;
  }
  // 'count' is state in Parent, 'value' is prop in Child
  ```
- **Hindi:**
  State ek component ka apna data hota hai jo badal sakta hai. Props parent se child component ko bheja gaya data hai, jo child ke liye read-only hota hai. State component ke andar manage hoti hai, props parent set karta hai.
  **Example:**
  ```js
  function Parent() {
    const [count, setCount] = React.useState(0);
    return <Child value={count} />;
  }
  function Child({ value }) {
    return <div>{value}</div>;
  }
  // 'count' Parent ka state hai, 'value' Child ka prop hai
  ```

### 32. What is prop drilling and how do you avoid it?
- **English:**
  Prop drilling is passing data through many layers of components, even if only the deepest child needs it. It makes code harder to maintain. You can avoid it by using Context API or state management libraries like Redux.
  **Example:**
  ```js
  // Instead of passing 'user' through every component, use Context
  const UserContext = React.createContext();
  function App() {
    return (
      <UserContext.Provider value={{ name: 'Aakash' }}>
        <Child />
      </UserContext.Provider>
    );
  }
  function Child() {
    return <GrandChild />;
  }
  function GrandChild() {
    const user = React.useContext(UserContext);
    return <div>{user.name}</div>;
  }
  ```
- **Hindi:**
  Prop drilling ka matlab hai data ko kai components ke through pass karna, jabki sirf last child ko zarurat hai. Isse code maintain karna mushkil ho jata hai. Isse bachne ke liye Context API ya Redux ka use karein.
  **Example:**
  ```js
  // Har component se 'user' pass karne ki jagah Context ka use karein
  const UserContext = React.createContext();
  function App() {
    return (
      <UserContext.Provider value={{ name: 'Aakash' }}>
        <Child />
      </UserContext.Provider>
    );
  }
  function Child() {
    return <GrandChild />;
  }
  function GrandChild() {
    const user = React.useContext(UserContext);
    return <div>{user.name}</div>;
  }
  ```

### 33. What is the use of keys in React lists?
- **English:**
  Keys help React identify which items have changed, are added, or are removed. They should be unique and stable for each list item. Using keys improves performance and prevents bugs during re-rendering.
  **Example:**
  ```js
  const items = ['a', 'b', 'c'];
  return (
    <ul>
      {items.map(item => <li key={item}>{item}</li>)}
    </ul>
  );
  ```
- **Hindi:**
  Keys React ko batate hain ki kaunse items badle, add, ya remove hue hain. Har list item ke liye unique aur stable key honi chahiye. Keys se performance improve hoti hai aur re-rendering me bugs nahi aate.
  **Example:**
  ```js
  const items = ['a', 'b', 'c'];
  return (
    <ul>
      {items.map(item => <li key={item}>{item}</li>)}
    </ul>
  );
  ```

### 34. What is the useRef hook and where would you use it?
- **English:**
  `useRef` returns a mutable object whose `.current` property persists across renders. It's used to access DOM elements directly or store mutable values that don't trigger re-renders.
  **Example:**
  ```js
  function FocusInput() {
    const inputRef = React.useRef();
    function handleClick() {
      inputRef.current.focus();
    }
    return <><input ref={inputRef} /><button onClick={handleClick}>Focus</button></>;
  }
  ```
- **Hindi:**
  `useRef` ek mutable object deta hai jiska `.current` property renders ke beech same rehta hai. Iska use DOM element ko directly access karne ya aise values store karne ke liye hota hai jo re-render nahi karte.
  **Example:**
  ```js
  function FocusInput() {
    const inputRef = React.useRef();
    function handleClick() {
      inputRef.current.focus();
    }
    return <><input ref={inputRef} /><button onClick={handleClick}>Focus</button></>;
  }
  ```

### 35. What is the difference between useCallback and useMemo?
- **English:**
  `useCallback` returns a memoized function, so the function reference only changes if dependencies change. `useMemo` returns a memoized value from a calculation. Use `useCallback` for functions, `useMemo` for values.
  **Example:**
  ```js
  const memoizedFn = useCallback(() => doSomething(a), [a]);
  const memoizedValue = useMemo(() => computeExpensiveValue(a), [a]);
  ```
- **Hindi:**
  `useCallback` ek memoized function return karta hai, to function reference tabhi badlega jab dependency badlegi. `useMemo` ek memoized value return karta hai. Functions ke liye `useCallback`, values ke liye `useMemo` use karein.
  **Example:**
  ```js
  const memoizedFn = useCallback(() => doSomething(a), [a]);
  const memoizedValue = useMemo(() => computeExpensiveValue(a), [a]);
  ```

### 36. What is React Fragment and why is it used?
- **English:**
  React Fragment lets you group multiple elements without adding extra nodes to the DOM. It helps keep the DOM clean and avoids unnecessary wrappers like `<div>`. Use `<></>` or `<React.Fragment>`.
  **Example:**
  ```js
  return (
    <>
      <h1>Title</h1>
      <p>Description</p>
    </>
  );
  ```
- **Hindi:**
  React Fragment aapko multiple elements ko group karne deta hai bina extra DOM node add kiye. Isse DOM clean rehta hai aur extra wrappers (jaise `<div>`) ki zarurat nahi padti. `<></>` ya `<React.Fragment>` ka use karein.
  **Example:**
  ```js
  return (
    <>
      <h1>Title</h1>
      <p>Description</p>
    </>
  );
  ```

### 37. What is the difference between mounting, updating, and unmounting in React lifecycle?
- **English:**
  Mounting is when a component is created and inserted into the DOM. Updating is when state or props change and the component re-renders. Unmounting is when the component is removed from the DOM.
  **Example:**
  ```js
  // Mount: <MyComponent /> is added
  // Update: setState or new props
  // Unmount: component is removed
  ```
- **Hindi:**
  Mounting tab hota hai jab component create ho kar DOM me add hota hai. Updating tab hota hai jab state ya props change hote hain aur component re-render hota hai. Unmounting tab hota hai jab component DOM se hata diya jata hai.
  **Example:**
  ```js
  // Mount: <MyComponent /> add hota hai
  // Update: setState ya naye props
  // Unmount: component hata diya jata hai
  ```

### 38. What is the difference between PureComponent and Component in React?
- **English:**
  `PureComponent` automatically does a shallow comparison of props and state to avoid unnecessary re-renders. `Component` does not do this check, so it always re-renders when parent re-renders. Use `PureComponent` for performance optimization.
  **Example:**
  ```js
  class MyPure extends React.PureComponent { /* ... */ }
  class MyNormal extends React.Component { /* ... */ }
  ```
- **Hindi:**
  `PureComponent` props aur state ka shallow comparison karta hai taki unnecessary re-render na ho. `Component` ye check nahi karta, isliye har parent re-render par re-render hota hai. Performance ke liye `PureComponent` use karein.
  **Example:**
  ```js
  class MyPure extends React.PureComponent { /* ... */ }
  class MyNormal extends React.Component { /* ... */ }
  ```

### 39. What is the useImperativeHandle hook?
- **English:**
  `useImperativeHandle` customizes the instance value that is exposed when using `ref` with a functional component. It lets you control what methods or properties the parent can access via ref.
  **Example:**
  ```js
  const MyInput = React.forwardRef((props, ref) => {
    const inputRef = React.useRef();
    React.useImperativeHandle(ref, () => ({
      focus: () => inputRef.current.focus()
    }));
    return <input ref={inputRef} />;
  });
  // Parent can now call ref.current.focus()
  ```
- **Hindi:**
  `useImperativeHandle` aapko yeh control deta hai ki functional component me ref se parent ko kya expose karna hai. Isse aap methods ya properties define kar sakte hain jo parent ref se access karega.
  **Example:**
  ```js
  const MyInput = React.forwardRef((props, ref) => {
    const inputRef = React.useRef();
    React.useImperativeHandle(ref, () => ({
      focus: () => inputRef.current.focus()
    }));
    return <input ref={inputRef} />;
  });
  // Parent ab ref.current.focus() call kar sakta hai
  ```

### 40. What is server-side rendering (SSR) in React and what are its benefits?
- **English:**
  SSR means rendering React components on the server and sending the HTML to the client. It improves SEO, reduces time to first paint, and helps with social media previews. Frameworks like Next.js make SSR easy.
  **Example:**
  ```js
  // In Next.js, pages are rendered on the server by default
  export async function getServerSideProps() {
    return { props: { data: 'Hello' } };
  }
  ```
- **Hindi:**
  SSR ka matlab hai React components ko server par render karna aur HTML client ko bhejna. Isse SEO improve hota hai, pehla paint jaldi hota hai, aur social media previews me madad milti hai. Next.js jaise frameworks SSR ko aasan banate hain.
  **Example:**
  ```js
  // Next.js me pages default server par render hote hain
  export async function getServerSideProps() {
    return { props: { data: 'Hello' } };
  }
  ```

### 41. What is the difference between client-side routing and server-side routing?
- **English:**
  Client-side routing changes the URL and renders different components without reloading the page, using JavaScript (like React Router). Server-side routing means each URL change requests a new page from the server. Client-side routing is faster and gives a smoother user experience.
  **Example:**
  ```js
  // Client-side: React Router changes view without reload
  // Server-side: Browser reloads and fetches new HTML from server
  ```
- **Hindi:**
  Client-side routing URL badalta hai aur naye components render karta hai bina page reload kiye (React Router jaise). Server-side routing me har URL change par server se naya page aata hai. Client-side routing tez hai aur user experience smooth hota hai.
  **Example:**
  ```js
  // Client-side: React Router se view change hota hai bina reload ke
  // Server-side: Browser reload hota hai aur server se naya HTML aata hai
  ```

### 42. What is the difference between useState and useReducer?
- **English:**
  `useState` is used for simple state logic, while `useReducer` is better for complex state with multiple sub-values or when the next state depends on the previous one. `useReducer` is similar to Redux reducer.
  **Example:**
  ```js
  // useState
  const [count, setCount] = useState(0);
  // useReducer
  function reducer(state, action) {
    switch (action.type) {
      case 'increment': return { count: state.count + 1 };
      default: return state;
    }
  }
  const [state, dispatch] = useReducer(reducer, { count: 0 });
  ```
- **Hindi:**
  `useState` simple state ke liye use hota hai, jabki `useReducer` complex state (multiple values ya previous state par depend karta ho) ke liye sahi hai. `useReducer` Redux reducer jaisa hota hai.
  **Example:**
  ```js
  // useState
  const [count, setCount] = useState(0);
  // useReducer
  function reducer(state, action) {
    switch (action.type) {
      case 'increment': return { count: state.count + 1 };
      default: return state;
    }
  }
  const [state, dispatch] = useReducer(reducer, { count: 0 });
  ```

### 43. What is the difference between useEffect and componentDidMount/componentDidUpdate/componentWillUnmount?
- **English:**
  `useEffect` combines the behavior of `componentDidMount`, `componentDidUpdate`, and `componentWillUnmount` in one hook. You can control when it runs using the dependency array. Cleanup function inside `useEffect` acts like `componentWillUnmount`.
  **Example:**
  ```js
  useEffect(() => {
    // Runs on mount and update
    return () => {
      // Cleanup on unmount
    };
  }, [dependencies]);
  ```
- **Hindi:**
  `useEffect` me `componentDidMount`, `componentDidUpdate`, aur `componentWillUnmount` ka behavior ek hi jagah milta hai. Dependency array se control kar sakte hain ki kab chale. Cleanup function `componentWillUnmount` ki tarah kaam karta hai.
  **Example:**
  ```js
  useEffect(() => {
    // Mount aur update par chalega
    return () => {
      // Unmount par cleanup
    };
  }, [dependencies]);
  ```

### 44. What is the Context API and when should you use it?
- **English:**
  Context API lets you share data (like theme, user info) globally without passing props through every level. Use it when many components need the same data, but avoid for frequently changing data to prevent unnecessary re-renders.
  **Example:**
  ```js
  const ThemeContext = React.createContext('light');
  function App() {
    return (
      <ThemeContext.Provider value="dark">
        <Toolbar />
      </ThemeContext.Provider>
    );
  }
  function Toolbar() {
    return <ThemeButton />;
  }
  function ThemeButton() {
    const theme = React.useContext(ThemeContext);
    return <button>{theme}</button>;
  }
  ```
- **Hindi:**
  Context API se aap data (jaise theme, user info) globally share kar sakte hain bina har level par props pass kiye. Jab kai components ko ek hi data chahiye ho tab use karein, lekin frequently changing data ke liye na karein.
  **Example:**
  ```js
  const ThemeContext = React.createContext('light');
  function App() {
    return (
      <ThemeContext.Provider value="dark">
        <Toolbar />
      </ThemeContext.Provider>
    );
  }
  function Toolbar() {
    return <ThemeButton />;
  }
  function ThemeButton() {
    const theme = React.useContext(ThemeContext);
    return <button>{theme}</button>;
  }
  ```

### 45. What is the difference between controlled and uncontrolled components?
- **English:**
  Controlled components have their value controlled by React state, so you always know the current value. Uncontrolled components store their value in the DOM and you access it with refs. Controlled is preferred for validation and dynamic forms.
  **Example:**
  ```js
  // Controlled
  function ControlledInput() {
    const [value, setValue] = useState('');
    return <input value={value} onChange={e => setValue(e.target.value)} />;
  }
  // Uncontrolled
  function UncontrolledInput() {
    const inputRef = useRef();
    function handleClick() {
      alert(inputRef.current.value);
    }
    return <><input ref={inputRef} /><button onClick={handleClick}>Show</button></>;
  }
  ```
- **Hindi:**
  Controlled components ka value React state se control hota hai, to aapko hamesha current value pata hoti hai. Uncontrolled components apna value DOM me rakhte hain aur ref se access karte hain. Validation aur dynamic forms ke liye controlled better hai.
  **Example:**
  ```js
  // Controlled
  function ControlledInput() {
    const [value, setValue] = useState('');
    return <input value={value} onChange={e => setValue(e.target.value)} />;
  }
  // Uncontrolled
  function UncontrolledInput() {
    const inputRef = useRef();
    function handleClick() {
      alert(inputRef.current.value);
    }
    return <><input ref={inputRef} /><button onClick={handleClick}>Show</button></>;
  }
  ```

### 46. What is the difference between useMemo and useCallback?
- **English:**
  `useMemo` returns a memoized value from a calculation, so the value is only recalculated if dependencies change. `useCallback` returns a memoized function, so the function reference only changes if dependencies change. Use `useMemo` for expensive values, `useCallback` for functions.
  **Example:**
  ```js
  const memoizedValue = useMemo(() => computeExpensiveValue(a), [a]);
  const memoizedFn = useCallback(() => doSomething(a), [a]);
  ```
- **Hindi:**
  `useMemo` ek memoized value return karta hai, jo sirf dependencies badalne par dobara calculate hoti hai. `useCallback` ek memoized function return karta hai, jo sirf dependencies badalne par naya banta hai. Mehengi value ke liye `useMemo`, function ke liye `useCallback` use karein.
  **Example:**
  ```js
  const memoizedValue = useMemo(() => computeExpensiveValue(a), [a]);
  const memoizedFn = useCallback(() => doSomething(a), [a]);
  ```

### 47. What is the difference between useEffect and useLayoutEffect?
- **English:**
  `useEffect` runs after the DOM has been painted, so the user sees the update before the effect runs. `useLayoutEffect` runs synchronously after all DOM mutations but before the browser paints, so it can block the paint. Use `useLayoutEffect` when you need to measure DOM or do something before the user sees the update.
  **Example:**
  ```js
  useEffect(() => {
    // Runs after paint
    console.log('useEffect');
  });
  useLayoutEffect(() => {
    // Runs before paint
    console.log('useLayoutEffect');
  });
  ```
- **Hindi:**
  `useEffect` DOM paint hone ke baad chalta hai, to user ko update dikh jata hai phir effect chalta hai. `useLayoutEffect` DOM update ke turant baad, paint hone se pehle chalta hai, isliye ye paint ko block kar sakta hai. Jab aapko DOM measure karna ho ya update se pehle kuch karna ho tab `useLayoutEffect` use karein.
  **Example:**
  ```js
  useEffect(() => {
    // Paint ke baad chalega
    console.log('useEffect');
  });
  useLayoutEffect(() => {
    // Paint se pehle chalega
    console.log('useLayoutEffect');
  });
  ```

### 48. What is the use of React.StrictMode?
- **English:**
  `React.StrictMode` is a wrapper that helps you find potential problems in your React app. It activates extra checks and warnings for its children in development mode, but does not affect production. It helps you write safer code.
  **Example:**
  ```js
  <React.StrictMode>
    <App />
  </React.StrictMode>
  ```
- **Hindi:**
  `React.StrictMode` ek wrapper hai jo aapke React app me potential problems dhoondhne me madad karta hai. Ye development mode me extra checks aur warnings activate karta hai, production me koi effect nahi hota. Isse code safe banta hai.
  **Example:**
  ```js
  <React.StrictMode>
    <App />
  </React.StrictMode>
  ```

### 49. What is the use of defaultProps in React?
- **English:**
  `defaultProps` lets you set default values for props if the parent does not provide them. It helps prevent bugs due to missing props. In function components, you can use default parameters or assign default values in the destructuring.
  **Example:**
  ```js
  // For class component
  MyComponent.defaultProps = { color: 'blue' };
  // For function component
  function MyComponent({ color = 'blue' }) {
    return <div>{color}</div>;
  }
  ```
- **Hindi:**
  `defaultProps` se aap props ke default value set kar sakte hain agar parent nahi deta. Isse missing props ki wajah se bugs nahi aate. Function components me default parameter ya destructuring me default value de sakte hain.
  **Example:**
  ```js
  // Class component ke liye
  MyComponent.defaultProps = { color: 'blue' };
  // Function component ke liye
  function MyComponent({ color = 'blue' }) {
    return <div>{color}</div>;
  }
  ```

### 50. What is the use of React.PureComponent?
- **English:**
  `React.PureComponent` is like `Component` but it does a shallow comparison of props and state to avoid unnecessary re-renders. Use it for performance optimization when your component renders the same output for the same props and state.
  **Example:**
  ```js
  class MyPure extends React.PureComponent {
    render() {
      return <div>{this.props.value}</div>;
    }
  }
  ```
- **Hindi:**
  `React.PureComponent`, `Component` ki tarah hai lekin ye props aur state ka shallow comparison karta hai taki unnecessary re-render na ho. Jab aapka component same props/state par same output deta ho tab performance ke liye use karein.
  **Example:**
  ```js
  class MyPure extends React.PureComponent {
    render() {
      return <div>{this.props.value}</div>;
    }
  }
  ```

### 51. What is the use of React.lazy and Suspense?
- **English:**
  `React.lazy` lets you load components only when they are needed (lazy loading), which helps reduce the initial bundle size. `Suspense` is used to show a fallback (like a loader) while the lazy component is loading.
  **Example:**
  ```js
  const LazyComponent = React.lazy(() => import('./LazyComponent'));
  function App() {
    return (
      <Suspense fallback={<div>Loading...</div>}>
        <LazyComponent />
      </Suspense>
    );
  }
  ```
- **Hindi:**
  `React.lazy` se aap component ko tabhi load kar sakte hain jab zarurat ho (lazy loading), isse initial bundle size kam hota hai. `Suspense` loading ke dauran fallback (jaise loader) dikhata hai.
  **Example:**
  ```js
  const LazyComponent = React.lazy(() => import('./LazyComponent'));
  function App() {
    return (
      <Suspense fallback={<div>Loading...</div>}>
        <LazyComponent />
      </Suspense>
    );
  }
  ```

### 52. What is the use of error boundaries in React?
- **English:**
  Error boundaries are special components that catch JavaScript errors in their child component tree, log them, and display a fallback UI instead of crashing the whole app. They are created using class components with `componentDidCatch` and `getDerivedStateFromError`.
  **Example:**
  ```js
  class ErrorBoundary extends React.Component {
    constructor(props) {
      super(props);
      this.state = { hasError: false };
    }
    static getDerivedStateFromError(error) {
      return { hasError: true };
    }
    componentDidCatch(error, info) {
      // Log error
    }
    render() {
      if (this.state.hasError) {
        return <h1>Something went wrong.</h1>;
      }
      return this.props.children;
    }
  }
  ```
- **Hindi:**
  Error boundaries special components hote hain jo apne child component tree me JavaScript errors ko pakad lete hain, log karte hain, aur fallback UI dikhate hain taki poora app crash na ho. Ye class components ke through bante hain (`componentDidCatch`, `getDerivedStateFromError`).
  **Example:**
  ```js
  class ErrorBoundary extends React.Component {
    constructor(props) {
      super(props);
      this.state = { hasError: false };
    }
    static getDerivedStateFromError(error) {
      return { hasError: true };
    }
    componentDidCatch(error, info) {
      // Error ko log karo
    }
    render() {
      if (this.state.hasError) {
        return <h1>Kuch galat ho gaya.</h1>;
      }
      return this.props.children;
    }
  }
  ```

### 53. What is the use of useContext hook?
- **English:**
  `useContext` lets you access the value of a React context directly in a function component, without using a Consumer. It makes it easy to use shared data like theme or user info.
  **Example:**
  ```js
  const ThemeContext = React.createContext('light');
  function MyComponent() {
    const theme = React.useContext(ThemeContext);
    return <div>{theme}</div>;
  }
  ```
- **Hindi:**
  `useContext` se aap React context ka value function component me directly access kar sakte hain, bina Consumer ke. Isse shared data (jaise theme, user info) use karna aasan ho jata hai.
  **Example:**
  ```js
  const ThemeContext = React.createContext('light');
  function MyComponent() {
    const theme = React.useContext(ThemeContext);
    return <div>{theme}</div>;
  }
  ```

### 54. What is the use of useRef hook?
- **English:**
  `useRef` returns a mutable object whose `.current` property persists across renders. It is used to access DOM elements directly or store mutable values that do not cause re-renders.
  **Example:**
  ```js
  function FocusInput() {
    const inputRef = React.useRef();
    function handleClick() {
      inputRef.current.focus();
    }
    return <><input ref={inputRef} /><button onClick={handleClick}>Focus</button></>;
  }
  ```
- **Hindi:**
  `useRef` ek mutable object deta hai jiska `.current` property renders ke beech same rehta hai. Iska use DOM element ko directly access karne ya aise values store karne ke liye hota hai jo re-render nahi karte.
  **Example:**
  ```js
  function FocusInput() {
    const inputRef = React.useRef();
    function handleClick() {
      inputRef.current.focus();
    }
    return <><input ref={inputRef} /><button onClick={handleClick}>Focus</button></>;
  }
  ```

### 55. What is the use of useCallback hook?
- **English:**
  `useCallback` returns a memoized version of a callback function that only changes if its dependencies change. It is useful to prevent unnecessary re-renders of child components that use the callback as a prop.
  **Example:**
  ```js
  const handleClick = useCallback(() => {
    // Do something
  }, [dependency]);
  ```
- **Hindi:**
  `useCallback` ek memoized callback function return karta hai jo sirf dependencies badalne par change hota hai. Ye unneeded re-renders se bachata hai jab callback child component ko prop ke roop me diya jata hai.
  **Example:**
  ```js
  const handleClick = useCallback(() => {
    // Kuch karo
  }, [dependency]);
  ```

### 56. What is the use of useMemo hook?
- **English:**
  `useMemo` returns a memoized value from a calculation, so the value is only recalculated if dependencies change. It is useful for expensive calculations that you don't want to run on every render.
  **Example:**
  ```js
  const expensiveValue = useMemo(() => computeExpensiveValue(a, b), [a, b]);
  ```
- **Hindi:**
  `useMemo` ek memoized value return karta hai, jo sirf dependencies badalne par dobara calculate hoti hai. Ye mehengi calculation ke liye use hota hai jo har render par nahi chalani chahiye.
  **Example:**
  ```js
  const expensiveValue = useMemo(() => computeExpensiveValue(a, b), [a, b]);
  ```

### 57. What is the use of useImperativeHandle hook?
- **English:**
  `useImperativeHandle` customizes the instance value that is exposed when using `ref` with a functional component. It lets you control what methods or properties the parent can access via ref.
  **Example:**
  ```js
  const MyInput = React.forwardRef((props, ref) => {
    const inputRef = React.useRef();
    useImperativeHandle(ref, () => ({
      focus: () => inputRef.current.focus()
    }));
    return <input ref={inputRef} />;
  });
  // Parent can now call ref.current.focus()
  ```
- **Hindi:**
  `useImperativeHandle` aapko yeh control deta hai ki functional component me ref se parent ko kya expose karna hai. Isse aap methods ya properties define kar sakte hain jo parent ref se access karega.
  **Example:**
  ```js
  const MyInput = React.forwardRef((props, ref) => {
    const inputRef = React.useRef();
    useImperativeHandle(ref, () => ({
      focus: () => inputRef.current.focus()
    }));
    return <input ref={inputRef} />;
  });
  // Parent ab ref.current.focus() call kar sakta hai
  ```

### 58. What is the use of forwardRef in React?
- **English:**
  `forwardRef` lets you pass a ref from a parent component to a child functional component, so the parent can directly access the child's DOM node or methods.
  **Example:**
  ```js
  const MyInput = React.forwardRef((props, ref) => (
    <input ref={ref} />
  ));
  // Parent can use ref to focus the input
  ```
- **Hindi:**
  `forwardRef` se aap parent component ka ref child functional component ko de sakte hain, taki parent child ke DOM node ya methods ko directly access kar sake.
  **Example:**
  ```js
  const MyInput = React.forwardRef((props, ref) => (
    <input ref={ref} />
  ));
  // Parent ref se input ko focus kar sakta hai
  ```

### 59. What is the use of React.memo?
- **English:**
  `React.memo` is a higher-order component that memoizes a functional component. It prevents unnecessary re-renders if the props have not changed, improving performance.
  **Example:**
  ```js
  const MyComponent = React.memo(function MyComponent(props) {
    return <div>{props.value}</div>;
  });
  ```
- **Hindi:**
  `React.memo` ek higher-order component hai jo functional component ko memoize karta hai. Agar props nahi badle to unnecessary re-render nahi hota, performance improve hoti hai.
  **Example:**
  ```js
  const MyComponent = React.memo(function MyComponent(props) {
    return <div>{props.value}</div>;
  });
  ```

### 60. What is the use of useDebugValue hook?
- **English:**
  `useDebugValue` is used to display a label for custom hooks in React DevTools, making debugging easier. It does not affect the app's behavior.
  **Example:**
  ```js
  function useCustomHook(value) {
    useDebugValue(value > 5 ? 'High' : 'Low');
    // ...
  }
  ```
- **Hindi:**
  `useDebugValue` custom hooks ke liye React DevTools me label dikhane ke liye use hota hai, taki debugging aasan ho. Iska app ke behavior par koi effect nahi hota.
  **Example:**
  ```js
  function useCustomHook(value) {
    useDebugValue(value > 5 ? 'High' : 'Low');
    // ...
  }
  ```

```js
// Question 1: What is the difference between state and props?
// Props are read-only and passed from parent to child
// State is mutable and managed within the component

// Question 2: What are hooks?
// Hooks are functions that allow you to use state and other React features in functional components

// Question 3: What is the virtual DOM?
// Virtual DOM is a lightweight copy of the actual DOM that React uses for performance optimization

// Example of useState hook
function useStateExample() {
    const [count, setCount] = useState(0);
    
    return (
        <div>
            <p>Count: {count}</p>
            <button onClick={() => setCount(count + 1)}>
                Increment
            </button>
        </div>
    );
}
```
-----


