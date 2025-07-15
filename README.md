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
