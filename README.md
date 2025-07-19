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
- **English:** The event loop allows Node.js to handle many tasks at once without waiting. It checks for tasks, executes them, and waits for new tasks, making Node.js fast and non-blocking.
- **Hindi:** Event loop Node.js ko ek samay par kai kaam bina ruke karne deta hai. Ye tasks ko check karta hai, unhe chalata hai, aur naye tasks ka intezaar karta hai. Isse Node.js tez aur non-blocking hota hai.

### 2. Explain the internal architecture of Node.js?
- **English:** Node.js uses the V8 engine to run JavaScript, has an event loop for async tasks, and uses libuv for handling I/O operations. It is single-threaded but can handle many connections at once.
- **Hindi:** Node.js JavaScript chalane ke liye V8 engine ka use karta hai, async tasks ke liye event loop hota hai, aur I/O ke liye libuv ka use karta hai. Ye single-threaded hai, lekin ek saath kai connections sambhal sakta hai.

### 3. What is npm and list out the uses of it.
- **English:** npm (Node Package Manager) is a tool to install, update, and manage packages (libraries) in Node.js projects.
- **Hindi:** npm (Node Package Manager) ek tool hai jo Node.js projects me packages (libraries) ko install, update, aur manage karta hai.

### 4. What are the different phases of event loop (imp)?
- **English:** The event loop has phases like timers, I/O callbacks, idle/prepare, poll, check, and close callbacks. Each phase handles specific types of tasks.
- **Hindi:** Event loop ke phases hain: timers, I/O callbacks, idle/prepare, poll, check, aur close callbacks. Har phase alag-alag tasks ko handle karta hai.

### 5. Explain the execution flow of Promise, async/await, setTimeout, setImmediate, process.nextTick() (imp)?
- **English:**
  - `process.nextTick()` runs first (microtask).
  - Promises and async/await run after nextTick (microtask).
  - `setTimeout` and `setImmediate` run later (macrotask), but setTimeout usually runs before setImmediate.
- **Hindi:**
  - `process.nextTick()` sabse pehle chalta hai (microtask).
  - Promises aur async/await uske baad chalte hain (microtask).
  - `setTimeout` aur `setImmediate` baad me chalte hain (macrotask), lekin aam taur par setTimeout pehle chalta hai.

### 6. What is the purpose of package.json file in Node.js?
- **English:** `package.json` keeps information about your project, like its name, version, dependencies, and scripts. It helps manage and share your project easily.
- **Hindi:** `package.json` aapke project ki jankari rakhta hai, jaise naam, version, dependencies, aur scripts. Isse project ko manage aur share karna aasan hota hai.

### 7. What is http module and create a server using it?
- **English:** The `http` module lets you create a web server in Node.js.
```js
const http = require('http');
const server = http.createServer((req, res) => {
  res.end('Hello, World!');
});
server.listen(3000);
```
- **Hindi:** `http` module Node.js me web server banane ke liye use hota hai.
```js
const http = require('http');
const server = http.createServer((req, res) => {
  res.end('Hello, World!');
});
server.listen(3000);
```

### 8. How do you create secure server setup using express and https?
- **English:** Use the `https` module with Express and provide SSL certificate and key.
```js
const https = require('https');
const express = require('express');
const fs = require('fs');
const app = express();
const options = {
  key: fs.readFileSync('key.pem'),
  cert: fs.readFileSync('cert.pem')
};
https.createServer(options, app).listen(3000);
```
- **Hindi:** Express aur https module ke saath SSL certificate aur key dekar secure server banate hain.
```js
const https = require('https');
const express = require('express');
const fs = require('fs');
const app = express();
const options = {
  key: fs.readFileSync('key.pem'),
  cert: fs.readFileSync('cert.pem')
};
https.createServer(options, app).listen(3000);
```

### 9. How will you update any npm existing packages?
- **English:** Run `npm update <package-name>` to update a package.
- **Hindi:** Package update karne ke liye `npm update <package-name>` command chalayein.

### 10. List out some of the global objects in Node.js
- **English:** Some global objects: `__dirname`, `__filename`, `global`, `process`, `Buffer`, `setTimeout`, `setInterval`.
- **Hindi:** Kuch global objects hain: `__dirname`, `__filename`, `global`, `process`, `Buffer`, `setTimeout`, `setInterval`.

### 11. Explain stream and buffer and their difference
- **English:** A buffer is a temporary storage for data. A stream is a way to read or write data piece by piece. Streams use buffers internally.
- **Hindi:** Buffer data ko temporary store karta hai. Stream data ko tukdo me read ya write karta hai. Streams ke andar buffer ka use hota hai.

### 12. What is microtask and macrotask in Node.js (imp)?
- **English:** Microtasks (like Promises, process.nextTick) run before macrotasks (like setTimeout, setImmediate). Microtasks are handled first after the current operation.
- **Hindi:** Microtasks (jaise Promises, process.nextTick) pehle chalte hain, macrotasks (jaise setTimeout, setImmediate) baad me. Microtasks current operation ke baad turant chalte hain.

### 13. Explain piping the data between streams
- **English:** Piping connects one stream’s output to another stream’s input, like reading a file and writing it somewhere else.
- **Hindi:** Piping ek stream ka output doosri stream ke input se jodta hai, jaise file read karke kahin aur likhna.

### 14. What are the features of express js
- **English:** Express is fast, simple, supports middleware, routing, templates, and error handling.
- **Hindi:** Express tezi se kaam karta hai, simple hai, middleware, routing, templates, aur error handling support karta hai.

### 15. What happens, if we pass parameter to next function inside middleware
- **English:** If you pass an argument to `next()`, Express treats it as an error and skips to the error-handling middleware.
- **Hindi:** Agar aap `next()` me argument dete hain, to Express ise error samajhkar error-handling middleware par chala jata hai.

### 16. How we can jump from one middleware to another skipping some?
- **English:** You can call `next('route')` to skip to the next route handler, or use conditions in your middleware to decide when to call `next()`.
- **Hindi:** Aap `next('route')` ka use karke agle route handler par ja sakte hain, ya middleware me condition laga kar decide kar sakte hain ki kab `next()` bulana hai.

### 17. What is difference between PATCH and PUT API (imp)?
- **English:** PUT replaces the whole resource. PATCH updates only the specified fields.
- **Hindi:** PUT poore resource ko replace karta hai. PATCH sirf diye gaye fields ko update karta hai.

### 18. Explain the middleware concept in Node.js (imp)?
- **English:** Middleware are functions that run during the request-response cycle. They can modify request, response, or end the cycle.
- **Hindi:** Middleware aise functions hain jo request-response cycle ke dauraan chalte hain. Ye request, response ko badal sakte hain ya cycle ko khatam kar sakte hain.

### 19. How to create optional path API endpoints in express js
- **English:** Use `?` in the route path. Example: `/user/:id?` makes `id` optional.
- **Hindi:** Route path me `?` lagayein. Jaise: `/user/:id?` se `id` optional ho jata hai.

### 20. Explain error handling concept in Express js (imp)?
- **English:** Error-handling middleware has four arguments: (err, req, res, next). Use it to catch and respond to errors.
- **Hindi:** Error-handling middleware me chaar arguments hote hain: (err, req, res, next). Isse errors ko pakad kar response bhejte hain.

### 21. What is JWT and explain the structure of JWT token (imp)?
- **English:** JWT (JSON Web Token) is used for secure data transfer. It has three parts: header, payload, and signature.
- **Hindi:** JWT (JSON Web Token) surakshit data transfer ke liye use hota hai. Isme teen parts hote hain: header, payload, aur signature.

### 22. How can we modify the signature of JWT? (imp)
- **English:** You cannot modify the signature directly. If you change the payload or header, you must re-sign with the secret key.
- **Hindi:** Signature ko seedha nahi badal sakte. Agar payload ya header badalte hain, to secret key se dobara sign karna padta hai.

### 23. What is the authentication and authorization concept? (imp)
- **English:** Authentication checks who you are. Authorization checks what you can do.
- **Hindi:** Authentication dekhta hai ki aap kaun hain. Authorization dekhta hai ki aap kya kar sakte hain.

### 24. How do you implement role-based and permission-based access control in express js?
- **English:** Check user roles/permissions in middleware before allowing access to routes.
- **Hindi:** Route par access dene se pehle middleware me user ke role/permission check karte hain.

### 25. Explain in detail best practice of API
- **English:** Use clear endpoints, proper HTTP methods, validation, error handling, and secure data.
- **Hindi:** Saaf endpoints, sahi HTTP methods, validation, error handling, aur data security ka dhyan rakhein.

### 26. Explain input validation and data sanitization concept in express js
- **English:** Input validation checks if data is correct. Sanitization cleans data to prevent attacks.
- **Hindi:** Input validation data ko sahi hone ki jaanch hai. Sanitization data ko saaf karta hai taaki attack na ho.

### 27. Explain the concept rate limiting in express js
- **English:** Rate limiting restricts how many requests a user can make in a time period to prevent abuse.
- **Hindi:** Rate limiting ek user ko ek samay me kitni requests bhej sakta hai, is par rok lagata hai, taki misuse na ho.

### 28. Explain the concept of logging and monitoring in node js application
- **English:** Logging records events and errors. Monitoring checks app health and performance.
- **Hindi:** Logging events aur errors ko record karta hai. Monitoring app ki health aur performance ko check karta hai.

### 29. What is difference between stateless and stateful API?
- **English:** Stateless API does not remember previous requests. Stateful API remembers previous interactions.
- **Hindi:** Stateless API pichle requests ko yaad nahi rakhta. Stateful API pichle interactions ko yaad rakhta hai.

### 30. How can we achieve state management in node js application?
- **English:** Use sessions, cookies, databases, or in-memory stores (like Redis) to manage state.
- **Hindi:** State manage karne ke liye sessions, cookies, database, ya in-memory store (jaise Redis) ka use karte hain.

### 31. How do you scale node js application using cluster module?
- **English:** The cluster module lets you run multiple Node.js processes to use all CPU cores and handle more requests.
- **Hindi:** Cluster module se aap ek hi server par kai Node.js processes chala sakte hain, taki sabhi CPU cores ka use ho aur zyada requests handle ho sakein.

### 32. What is a worker thread? How does it handle CPU-intensive tasks?
- **English:** Worker threads run code in parallel threads, so CPU-heavy tasks don’t block the main thread.
- **Hindi:** Worker threads alag thread me code chalate hain, isse bhari (CPU-intensive) kaam main thread ko block nahi karte.

### 33. Explain the working with concurrency and parallelism for async task
- **English:** Concurrency means handling multiple tasks at the same time (not necessarily together). Parallelism means running tasks at the exact same time, usually on different CPU cores.
- **Hindi:** Concurrency ka matlab hai ek samay par kai kaam sambhalna (saath me nahi bhi ho sakte). Parallelism ka matlab hai ek hi samay par kai kaam chalana, aam taur par alag CPU cores par.

### 34. How can you optimise database queries?
- **English:** Use indexes, select only needed fields, avoid N+1 queries, and use caching.
- **Hindi:** Indexes ka use karein, sirf zaroori fields select karein, N+1 queries se bachein, aur caching ka use karein.

### 35. What is the redis database? Explain the uses of it
- **English:** Redis is a fast, in-memory key-value store. It’s used for caching, sessions, queues, and real-time data.
- **Hindi:** Redis ek tez, in-memory key-value store hai. Ye caching, sessions, queues, aur real-time data ke liye use hota hai.

### 36. How we can increase the performance of node js application
- **English:** Use async code, clustering, caching, optimize queries, and use a CDN for static files.
- **Hindi:** Async code, clustering, caching, query optimization, aur static files ke liye CDN ka use karein.

### 37. What is the profiling concept in nodejs
- **English:** Profiling means checking where your code spends time and resources, to find and fix slow parts.
- **Hindi:** Profiling ka matlab hai dekhna ki code sabse zyada samay aur resources kahan use karta hai, taki slow jagah sudhari ja sake.

### 38. What is connection pooling concept for database
- **English:** Connection pooling keeps a set of database connections ready to use, so new connections don’t need to be created every time.
- **Hindi:** Connection pooling database connections ko pehle se ready rakhta hai, taki har baar nayi connection banani na pade.

### 39. Write a middleware for role-based access control (RBAC) in Node.js
- **English:** A middleware checks user’s role before allowing access.
```js
function checkRole(role) {
  return (req, res, next) => {
    if (req.user && req.user.role === role) {
      next();
    } else {
      res.status(403).send('Forbidden');
    }
  };
}
```
- **Hindi:** Ek middleware user ka role check karta hai, tabhi access deta hai.
```js
function checkRole(role) {
  return (req, res, next) => {
    if (req.user && req.user.role === role) {
      next();
    } else {
      res.status(403).send('Forbidden');
    }
  };
}
```

### 40. Demonstrate the integration of OAuth2.0 for third-party authentication in a Node.js app.
- **English:** Use passport.js with a strategy like Google or Facebook for OAuth2.0.
- **Hindi:** OAuth2.0 ke liye passport.js aur Google ya Facebook strategy ka use karein.

### 41. Implement a refresh token mechanism for JWT authentication in Node.js.
- **English:** Store a refresh token in the database. When the access token expires, use the refresh token to get a new access token.
- **Hindi:** Refresh token ko database me store karein. Jab access token expire ho jaye, refresh token se naya access token lein.

### 42. What is role of indexes in performance optimization (imp)
- **English:** Indexes make data search faster in databases.
- **Hindi:** Indexes database me data khojne ko bahut tez bana dete hain.

### 43. What is the aggregation pipeline in mongoDB? Explain in detail (imp)
- **English:** Aggregation pipeline processes data in stages (like filter, group, sort) to get results from MongoDB.
- **Hindi:** Aggregation pipeline data ko stages me (jaise filter, group, sort) process karta hai, taki MongoDB se result mil sake.

### 44. What are transactions? How can we achieve it in mongoDB
- **English:** Transactions let you do multiple operations together, and all succeed or all fail. In MongoDB, use `session.startTransaction()`.
- **Hindi:** Transactions se aap kai operations ek saath kar sakte hain, ya to sab honge ya koi nahi. MongoDB me `session.startTransaction()` ka use hota hai.

### 45. How transaction helps in rollback in case of failure
- **English:** If any operation fails, transaction rolls back all changes, so data stays safe.
- **Hindi:** Agar koi operation fail ho jaye, to transaction sab changes wapas le leta hai, taki data safe rahe.

### 46. What is difference between hashing, encryption and encoding concept
- **English:** Hashing is one-way, for checking data. Encryption is two-way, for hiding data. Encoding is for changing data format.
- **Hindi:** Hashing ek-tarfa hai, data check karne ke liye. Encryption do-tarfa hai, data chhupane ke liye. Encoding data ka format badalne ke liye hai.

### 47. How do you identify slow queries
- **English:** Use database logs, explain plans, or profiling tools to find slow queries.
- **Hindi:** Database logs, explain plan, ya profiling tools se slow queries pata chalti hain.

### 48. What is replica sets and sharding mechanism in mongodb
- **English:** Replica sets copy data to multiple servers for safety. Sharding splits data across servers for scaling.
- **Hindi:** Replica sets data ko kai servers par copy karte hain, taki data safe rahe. Sharding data ko alag servers par baant kar scale karta hai.

### 49. How do you configure failover and disaster recovery in mongodb
- **English:** Use replica sets for automatic failover. Regularly backup data for disaster recovery.
- **Hindi:** Automatic failover ke liye replica sets ka use karein. Disaster recovery ke liye data ka regular backup lein.

### 50. What is load balancer and how to implement in nodejs
- **English:** A load balancer distributes traffic to multiple servers. Use Nginx, HAProxy, or Node.js cluster for load balancing.
- **Hindi:** Load balancer traffic ko kai servers me baant deta hai. Nginx, HAProxy, ya Node.js cluster ka use karein.

### 51. How to avoid schema pitfalls
- **English:** Define clear schema, use validation, and avoid unnecessary fields.
- **Hindi:** Schema ko saaf define karein, validation lagayein, aur bekaar fields na rakhein.

### 52. Measure care taken to write efficient queries
- **English:** Write queries with indexes, select only needed data, and avoid loops in queries.
- **Hindi:** Indexes ke saath queries likhein, sirf zaroori data select karein, aur queries me loops se bachein.

### 53. How to implement health checks in mongodb
- **English:** Use MongoDB’s `db.admin().ping()` or monitoring tools to check if the database is healthy.
- **Hindi:** MongoDB ka `db.admin().ping()` ya monitoring tools se database ki health check karein.

### 54. What are the solid principles for software development (imp)?
- **English:** SOLID stands for:  S - Single Responsibility, O - Open/Closed, L - Liskov Substitution, I - Interface Segregation, D - Dependency Inversion
- **Hindi:** SOLID ka matlab hai: S - Single Responsibility, O - Open/Closed, L - Liskov Substitution, I - Interface Segregation, D - Dependency Inversion

### 55. What is kafka? Explain the use cases of kafka
- **English:** Kafka is a tool for handling real-time data streams. It’s used for messaging, logging, and data pipelines.
- **Hindi:** Kafka real-time data streams ko handle karta hai. Ye messaging, logging, aur data pipelines ke liye use hota hai.

### 56. How can we minimize middleware overhead
- **English:** Use only needed middleware, keep them simple, and avoid heavy processing in middleware.
- **Hindi:** Sirf zaroori middleware ka use karein, unhe simple rakhein, aur heavy processing middleware me na karein.

---

## Managerial/Tech Lead Questions

### 1. How do you ensure your team delivers high quality code within deadlines (imp)?
- **English:** Set clear goals, do code reviews, use testing, and help team members.
- **Hindi:** Saaf goals set karein, code review karein, testing karein, aur team ki madad karein.

### 2. Describe a situation where you had to mentor a junior developer. How did you handle it?
- **English:** I explained concepts simply, gave examples, and encouraged questions.
- **Hindi:** Maine concepts ko asaan tareeke se samjhaya, examples diye, aur sawaal poochne ke liye encourage kiya.

### 3. Can you explain the SOLID principles and how you apply them in your designs (imp)?
- **English:** SOLID helps make code easy to change and understand. I use these rules when designing classes and functions.
- **Hindi:** SOLID se code badalna aur samajhna aasan hota hai. Main classes aur functions design karte waqt in rules ka use karta hoon.

### 4. Explain the design pattern in javascript (imp)?
- **English:** Design patterns are common solutions to problems. Examples: Singleton, Observer, Factory.
- **Hindi:** Design pattern aam samasyaon ke hal hain. Jaise: Singleton, Observer, Factory.

### 5. How do you decide which tech stack is suitable for a specific project?
- **English:** I look at project needs, team skills, and future growth before choosing.
- **Hindi:** Main project ki jarurat, team ki skills, aur future growth dekh kar tech stack chunata hoon.

### 6. What is difference between development, FT, UAT, preprod and production environment (imp)?
- **English:**
  - Development: For coding
  - FT (Functional Testing): For testing features
  - UAT (User Acceptance Testing): For user testing
  - Preprod: Like production, for final checks
  - Production: Live for users
- **Hindi:**
  - Development: Coding ke liye
  - FT: Features test karne ke liye
  - UAT: User testing ke liye
  - Preprod: Production jaise, final check ke liye
  - Production: Users ke liye live

### 7. How do you ensure 100% code coverage in your projects?
- **English:** Write tests for all code, use coverage tools, and review reports.
- **Hindi:** Har code ke liye test likho, coverage tools ka use karo, aur reports check karo.

### 8. Can you explain the difference between unit testing, integration testing, and functional testing (imp)?
- **English:**
  - Unit: Test small parts
  - Integration: Test parts together
  - Functional: Test whole features
- **Hindi:**
  - Unit: Chhote parts test karte hain
  - Integration: Parts ko saath me test karte hain
  - Functional: Puri feature test karte hain

### 9. How do you secure sensitive data in a MERN stack application?
- **English:** Use encryption, environment variables, and never expose secrets in code.
- **Hindi:** Encryption, environment variables ka use karo, aur secrets code me mat rakho.

### 10. Describe your experience working in an Agile/Scrum environment
- **English:** I work in sprints, attend daily standups, and deliver features in small steps.
- **Hindi:** Main sprints me kaam karta hoon, daily standup attend karta hoon, aur features chhote steps me deliver karta hoon.

### 11. Explain the meetings like sprint planning, daily standup, backlog, sprint review, sprint retrospective (imp)?
- **English:**
  - Sprint planning: Plan work
  - Daily standup: Share progress
  - Backlog: List of tasks
  - Sprint review: Show work done
  - Retrospective: Discuss improvements
- **Hindi:**
  - Sprint planning: Kaam ki planning
  - Daily standup: Progress batana
  - Backlog: Tasks ki list
  - Sprint review: Kya kiya dikhana
  - Retrospective: Sudhar par baat

### 12. How do you document your code and project architecture for your team?
- **English:** Write comments, use README files, and make diagrams.
- **Hindi:** Comments likhta hoon, README banata hoon, aur diagrams banata hoon.

### 13. How do you onboard new developers to your team and projects?
- **English:** Give them documentation, explain the code, and help them set up the project.
- **Hindi:** Unhe documentation do, code samjhao, aur project setup me madad karo.

### 14. What tools do you use to track project progress and manage tasks (imp)?
- **English:** Jira, Trello, Asana, or GitHub Issues.
- **Hindi:** Jira, Trello, Asana, ya GitHub Issues ka use karta hoon.

### 15. What are the key considerations when designing RESTful APIs?
- **English:** Use clear endpoints, proper HTTP methods, and return correct status codes.
- **Hindi:** Saaf endpoints, sahi HTTP methods, aur sahi status codes ka use karo.

### 16. What is your approach to deploying and scaling a MERN stack application?
- **English:** Use cloud services, Docker, and load balancers for deployment and scaling.
- **Hindi:** Cloud services, Docker, aur load balancer ka use karo.

### 17. How would you handle a situation where the application is experiencing a memory leak (imp)?
- **English:** Use profiling tools to find the leak, fix the code, and restart the app.
- **Hindi:** Profiling tools se leak dhoondo, code sudharo, aur app restart karo.

### 18. A feature you implemented in React is causing performance issues. How would you debug it?
- **English:** Use React DevTools, check for unnecessary renders, and optimize components.
- **Hindi:** React DevTools ka use karo, bekaar renders check karo, aur components optimize karo.

### 19. What steps would you take if your database suddenly becomes a bottleneck in your application?
- **English:** Optimize queries, add indexes, use caching, and scale the database.
- **Hindi:** Queries optimize karo, indexes lagao, caching use karo, aur database scale karo.

### 20. If your team is stuck on a critical bug, how would you guide them to a solution?
- **English:** Stay calm, break the problem, discuss as a team, and try solutions step by step.
- **Hindi:** Shaant raho, problem ko tod do, team me discuss karo, aur step by step solution try karo.

### 21. What is your approach to conducting code reviews (imp)?
- **English:** Check for code quality, readability, and security. Give helpful feedback.
- **Hindi:** Code quality, readability, aur security check karo. Achha feedback do.

### 22. How do you optimize MongoDB queries for better performance?
- **English:** Use indexes, avoid large documents, and use aggregation pipeline wisely.
- **Hindi:** Indexes lagao, bade documents se bacho, aur aggregation pipeline sahi se use karo.

### 23. How do you manage error handling in an Express.js application?
- **English:** Use error-handling middleware and try-catch blocks.
- **Hindi:** Error-handling middleware aur try-catch ka use karo.

### 24. Explain how you would secure an Express.js API.
- **English:** Use authentication, validation, HTTPS, and limit requests.
- **Hindi:** Authentication, validation, HTTPS, aur request limit lagao.

### 25. How do you optimize React applications for performance?
- **English:** Use memoization, code splitting, and avoid unnecessary renders.
- **Hindi:** Memoization, code splitting, aur bekaar renders se bacho.

### 26. How do you secure a Node.js application?
- **English:** Validate input, use HTTPS, keep dependencies updated, and handle errors.
- **Hindi:** Input validate karo, HTTPS use karo, dependencies update rakho, aur errors handle karo.

### 27. How would you handle database sharding and replication in MongoDB (imp)?
- **English:** Use sharding to split data and replication for backups and failover.
- **Hindi:** Sharding se data baanto, replication se backup aur failover pao.
