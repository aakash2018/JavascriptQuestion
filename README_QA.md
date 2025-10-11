# Questions and Answers

Below are the questions from `README.md` that have corresponding implemented answers in this repository. Each section lists the question first, followed by the answer (the implemented code).

---

## 1. Get Unique Characters from a string — getUniquechar.js

**Question:** Get Unique Characters from a string

**Answer:**

```javascript
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

---

## 2. Check if a String is a Palindrome — palindrome.js

**Question:** Check if a String is a Palindrome

**Answer:**

```javascript
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

---

## 3. Remove Duplicates from a String — removeDuplicates.js

**Question:** Remove Duplicates from a String / Array

**Answer:**

```javascript
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

---

## 4. Find the First Non-Repeating Character — firstNonRepeating.js

**Question:** Find the First Non-Repeating Character

**Answer:**

```javascript
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

---

## 5. Count the Occurrences of Each Character — occurenceValue.js

**Question:** Count the Occurrences of Each Character / Number

**Answer:**

```javascript
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

---

## 6. Reverse Words in a Sentence — reverseWordSentence.js

**Question:** Reverse Words in a Sentence

**Answer:**

```javascript
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

---

## 7. Check if Two Strings are Anagrams — checkAnagrams.js

**Question:** Check if Two Strings are Anagrams

**Answer:**

```javascript
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

//version 2
function checkAnagrams2(str1, str2) {
    let sortedStr1 = str1.split('').sort().join('');
    let sortedStr2 = str2.split('').sort().join('');
    return sortedStr1 === sortedStr2;
}

console.log(checkAnagrams2('listennn', 'silentnn'));
//version 3
function checkAnagrams3(str1, str2) {
    if (str1.length !== str2.length) return false;
    let count = new Array(26).fill(0);
    for (let i = 0; i < str1.length; i++) {
        count[str1.charCodeAt(i) - 97]++;
        count[str2.charCodeAt(i) - 97]--;
    }
    for (let i = 0; i < 26; i++) {
        if (count[i] !== 0) return false;
    }
    return true;
}

console.log(checkAnagrams3('listennn', 'silentnn'));
```

---

## 8. Find the Longest Substring Without Repeating Characters — longestSubStringWithoutRepeat.js

**Question:** Find the Longest Substring Without Repeating Characters

**Answer:**

```javascript
function longestSubstring(str) {
 let result = ""; // 🔸 Final answer store karega
  let temp = "";   // 🔸 Abhi tak ka substring jisme repeat nahi hai

  for (let i = 0; i < str.length; i++) {
    const ch = str[i]; // 🔹 current character

    if (temp.includes(ch)) {
      // 🔴 Agar current character pehle aa chuka hai `temp` mein
      // 🔁 Us character ke baad se naya `temp` banana padega
      temp = temp.slice(temp.indexOf(ch) + 1);
    }

    temp += ch; // ✅ Naya character add karo

    // 🔼 Agar temp ka size result se bada hai to update karo
    if (temp.length > result.length) {
      result = temp;
    }
  }

  return result; // 🔚 Sabse lambi unique substring return karo
}

console.log(longestSubstring("pwwkew"));
//-----------------------------------------------------------------------------
const subStrOfUniqueChar = str => [...str].reduce((p, c) => (p.includes(c) ? (p += c, p.substr(p.indexOf(c) + 1)) : p += c), '');
console.log(subStrOfUniqueChar('dvdf'));
console.log(subStrOfUniqueChar('pwwkew'));
```

---

## 9. Convert a String to an Integer (atoi Implementation) — program9.js

**Question:** Convert a String to an Integer (atoi)

**Answer:**

```javascript
function atoiConverter(stringValue) {
    // 1. पहले स्पेस हटाओ
    let extractWhiteSpace = stringValue.trim();

    let sign = ''

    // 2. +/- चेक करो
    if (extractWhiteSpace[0] === '-' || extractWhiteSpace[0] === '+') {
        sign = extractWhiteSpace[0] === '-' ? -1 : 1;
        extractWhiteSpace = extractWhiteSpace.slice(1);
    }

    // 3. सिर्फ नंबर वाला पार्ट लो
    let num = '';
    for (let char of extractWhiteSpace) {
        if (!isNaN(char) && char !== '') {
            num += char;
        } else {
            break;
        }
    }

    // 4. नंबर में बदलो और साइन लगाओ
    num = num === '' ? 0 : +num * sign;

    // 5. 32-bit इंटीजर की लिमिट में लाओ
    const INT_MAX = Math.pow(2, 31) - 1;
    const INT_MIN = -Math.pow(2, 31);

    if (num > INT_MAX) return INT_MAX;
    if (num < INT_MIN) return INT_MIN;

    return num;
}

console.log(atoiConverter("42"));           // 42
console.log(atoiConverter("   -42"));       // -42
console.log(atoiConverter("4193 with"));    // 4193
console.log(atoiConverter("words and 987")); // 0
console.log(atoiConverter("-91283472332")); // -2147483648atoiConverter()
```

---

## 10. Compress a String (Run-Length Encoding) — program10.js

**Question:** Compress a String (Run-Length Encoding)

**Answer:**

```javascript
function compressString(stringValue) {
    let compressString = ''; // Final compressed result store करने के लिए
    let count = 1;  // उसकी count 1 से शुरू करें
    let arrayValue = stringValue.split('');
    if (arrayValue.length === 0) return "";
    let currentString = arrayValue[0]; // पहला character लें

    for (let i = 1; i < arrayValue.length; i++) {
        if (arrayValue[i] === currentString) {
            count++; // अगर वही character मिले, तो count बढ़ाओ
        } else {
            compressString += currentString + count; // नया character मिलने पर पुराने को store करो
            currentString = arrayValue[i]; // नए character पर शिफ्ट हो जाओ
            count = 1; // count फिर से 1 से शुरू
        }
    }
    compressString += currentString + count; // last character को भी जोड़ो
    return compressString;
}

console.log(compressString("aaabbbccaa"));  // "a3b3c2a2"
console.log(compressString("abc"));         // "abc" (कंप्रेशन नहीं होगा)
console.log(compressString("aabbb"));      // "a2b3"
console.log(compressString(""));
```

---

## 11. Find the Most Frequent Character — program11.js

**Question:** Find the Most Frequent Character

**Answer:**

```javascript
function mostFrequentChar(stringValue) {
    let frequencyCount = {};
    let maxChar = '';
    let maxCount = 1;
    let arrayValue = stringValue.split('');

    for (let i = 0; i < arrayValue.length; i++) {
        frequencyCount[arrayValue[i]] = frequencyCount[arrayValue[i]] + 1 || 1;
    }

    Object.entries((frequencyCount)).map(([key, value]) => {
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

---

## 12. Find All Substrings of a Given String — program12.js

**Question:** Find All Substrings of a Given String

**Answer:**

```javascript
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
console.log(getSubstringsByLength("abc"));

function getSubstringsRecursive(str, start = 0, end = 1, result = []) {
  if (start >= str.length) return result;
  if (end > str.length) return getSubstringsRecursive(str, start + 1, start + 2, result);
  
  result.push(str.slice(start, end));
  return getSubstringsRecursive(str, start, end + 1, result);
}

console.log(getSubstringsRecursive("abc"));
```

---

## 13. Check if a String is a Rotation of Another String — program13.js

**Question:** Check if a String is a Rotation of Another String

**Answer:**

```javascript
//Check if a String is a Rotation of Another String
const isRotation = (a, b) => a.length === b.length && (a + a).includes(b);
console.log(isRotation("abcd", "cdab"));  // true
console.log(isRotation("hello", "olleh")); // false

function isRotations(a, b) {
    if (a.length !== b.length) return false;
    const doubleA = a + a;
    return doubleA.includes(b);
}

console.log(isRotations("abcd", "cdab"));  // true
console.log(isRotations("hello", "olleh")); // false
```

---

## 14. Remove All White Spaces from a String — program14.js

**Question:** Remove All White Spaces from a String

**Answer:**

```javascript
const removeSpaces = (str) => str.replace(/\s+/g, '');
console.log(removeSpaces("Hello World"));  // "HelloWorld"
console.log(removeSpaces("  A  B  C  ")); // "ABC"

const removeSpacesJoin = (str) => str.split(' ').join('');
console.log(removeSpacesJoin("JavaScript is fun"));

function removeSpacesLoop(str) {
  let result = '';
  for (let char of str) {
    if (char !== ' ') {
      result += char;
    }
  }
  return result;
}
console.log(removeSpacesLoop(" 1 2 3 "));

const removeAllWhitespace = (str) => str.replace(/\s/g, '');
console.log(removeAllWhitespace("Hello\tWorld\n"));
```

---

## 15. Check if a String is a Valid Shuffle of Two Strings — program15.js

**Question:** Check if a String is a Valid Shuffle of Two Strings

**Answer:**

```javascript
function shuffleTwoString(str1, str2, shuffleStr) {

    const s1 = str1.length;
    const s2 = str2.length;
    const sStr = shuffleStr.length;

    if (sStr !== s1 + s2) {
        return false
    };

    const freq = new Map();

    for (let i = 0; i < s1; i++) {
        freq.set(str1[i], (freq.get(str1[i]) || 0) + 1);
    }

    for (let j = 0; j < s2; j++) {
        freq.set(str2[j], (freq.get(str2[j]) || 0) + 1);
    }

    for (let k = 0; k < sStr; k++) {
        if (freq.has(shuffleStr[k]))
            freq.set(shuffleStr[k], freq.get(shuffleStr[k]) - 1);
        else
            return false;
    }

    for (let [key, value] of freq) {
        if (value !== 0) {
            return false;
        }
    }

    return true;
}
console.log(shuffleTwoString('BA', 'XY', 'XYAB') ? 'Yes' : 'No');
console.log(shuffleTwoString('BA', 'XY', 'XUMB') ? 'Yes' : 'No');
console.log(shuffleTwoString('ABC', 'ZYS', 'YBAZSC') ? 'Yes' : 'No');
```

---

## 16. Convert a String to Title Case — titleCaseString.js

**Question:** Convert a String to Title Case

**Answer:**

```javascript
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

---

## 17. Find the Longest Common Prefix — program17.js

**Question:** Find the Longest Common Prefix

**Answer:**

```javascript
function longestCommonPreffix(arrValue) {
    if (arrValue.length === 0) return "";
    let firstString = arrValue[0];
    let smallestStringCount;
    for (let i = 0; i < arrValue.length; i++) {
        smallestStringCount = Math.min(firstString.length, arrValue[i].length);
        let secondString = arrValue[i];
        let temp = "";
        for (j = 0; j < smallestStringCount; j++) {
            if (firstString[j] === secondString[j]) {
                temp += secondString[j];
            } else {
                break;
            }
        }
        firstString = temp;
        if (firstString === "") return "";
    }
    console.log(firstString);
}

longestCommonPreffix(
    ["flower", "flow", "flight"]
);
longestCommonPreffix(
    ["dog", "racecar", "car"]
);

function commonPreffix(strs) {
    if (!strs || strs.length === 0) return "";
    let preffix = strs[0];
    for (let i = 1; i < strs?.length; i++) {
        while(strs[i].indexOf(preffix) !== 0) {
            preffix = preffix.slice(0, -1);
            if (preffix === "") return "";
        }
    }
    console.log(preffix);
}

commonPreffix(
    ["flower", "flow", "flight"]
);
commonPreffix(
    ["dog", "racecar", "car"]
);
```

---

## 18. Convert a String to a Character Array — program18.js

**Question:** Convert a String to a Character Array

**Answer:**

```javascript
function stringToChar(strs) {
    console.log(strs.split(''));
    console.log([...strs]);
    console.log(Array.from(strs));
}

stringToChar('hello');
```

---

## 19. Replace Spaces with %20 (URL Encoding) — program19.js

**Question:** Replace Spaces with %20 (URL Encoding)

**Answer:**

```javascript
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
}
addstring("i love programming");
```

---

## 20. Convert a Sentence into an Acronym — acronymSentence.js

**Question:** Convert a Sentence into an Acronym

**Answer:**

```javascript
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

---

## 21. Check if a String Contains Only Digits — program21.js

**Question:** Check if a String Contains Only Digits

**Answer:**

```javascript
function stringsDigit(stringValue) {
    return !/[^0-9]/.test(stringValue);
}
console.log(stringsDigit('a2kash'));
function stringsDigitregex(stringValue) {
    return /^\d+$/.test(stringValue);
}
console.log(stringsDigitregex('a2kash'));
function isOnlyDigits(arg) {
    if (arg.length === 0) return false;
    for (let i = 0; i < arg.length; i++) {
        if (arg[i] < '0' || arg[i] > '9') {
            return false;
        }
    }
    return true;
}
console.log(isOnlyDigits("12345"));
console.log(isOnlyDigits("12a45"));
console.log(isOnlyDigits(""));
```

---

## 22. Find the Number of Words in a String — program22.js

**Question:** Find the Number of Words in a String

**Answer:**

```javascript
function countWords(strArg) {
    return strArg.trim().split(' ').length;
}
console.log(countWords("  This is a sample string.  "));
function countWordsregex(str) {
    if (!str.trim()) return 0; // empty or spaces only
    return str.trim().split(/\s+/).length;
}
console.log(countWords("  This is a sample string.  "));
```

---

## 23. Remove a Given Character from a String — program23.js

**Question:** Remove a Given Character from a String

**Answer:**

```javascript
function removeCharacter(string, chars) {
    let strings = "";
    for (let character of string) {
        if (character !== chars) {
            strings += character;
        }
    }
    console.log(strings);
}
removeCharacter("hello", 'l')
```

---

## 24. Find the Shortest Word in a String — shortestWordString.js

**Question:** Find the Shortest Word in a String

**Answer:**

```javascript
function findShortestWord(str1) {
    return (str1.split(' ').sort((a, b) => a.length - b.length)[0]);
}
console.log(findShortestWord("This is a test string"));
function findShortestWordReduce(str1) {
    return str1.split(' ').reduce((acc, cur) => acc.length < cur.length ? acc : cur);
}
console.log(findShortestWordReduce("This is a test string"));
```

---

## 25. Find the Longest Palindromic Substring — program25.js

**Question:** Find the Longest Palindromic Substring

**Answer:**

```javascript
function expandAroundCenter(s, left, right) {
    while (left >= 0 && right < s.length && s[left] === s[right]) {
        left--;
        right++;
    }
    return s.substring(left + 1, right);
}

function longestPalindromeSubstring(str) {
    let longest = "";
    for (let i = 0; i < str.length; i++) {
        let odd = expandAroundCenter(str, i, i);
        let even = expandAroundCenter(str, i, i + 1);
        let bigger = odd.length > even.length ? odd : even;
        if (bigger.length > longest.length) {
            longest = bigger;
        }
    }
    console.log(longest);
}
longestPalindromeSubstring("babad");
longestPalindromeSubstring("cbbd");
```

---

## 26. closure function — closurefn.js

**Question:** closure function

**Answer:**

```javascript
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

## 27. factorial program — factorial.js

**Question:** factorial program

**Answer:**

```javascript
function factorial(number) {
    let fact = 1;
    for (let i = number; i >= 1; i--) {
        fact = fact * i;
    }
    console.log(fact);
}

factorial(5);
```

---

## 28. isPrime Number program — isPrime.js

**Question:** isPrime Number program

**Answer:**

```javascript
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

---

## 29. Prime Number series program — primeSeries.js

**Question:** Prime Number series program

**Answer:**

```javascript
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

---

## 30. Occurence Number program — occurenceValue.js

Covered earlier in item 5.

---

## 31. factorial recursive program — recursivefactorial.js

**Question:** factorial recursive program

**Answer:**

```javascript
function factorialRecurssion(number) {
    if (number === 0) {
        return 1;
    }
    return factorialRecurssion(number - 1) * number;
}

console.log(factorialRecurssion(5));
```

---

## 32. union array program — unionArray.js

**Question:** union array program

**Answer:**

```javascript
function unionArray(arr1, arr2) {
    arr2.forEach(element => {
        if (!arr1.includes(element)) {
            arr1.push(element);
        }
    });
    return (arr1);
}
console.log(unionArray([1, 2, 3], [2, 3, 4]));

function unionSingleLineArray(arr1, arr2) {
    const union = arr1.concat(arr2.filter(item => !arr1.includes(item)));
    return (union)
}
console.log(unionSingleLineArray([1, 2, 3], [2, 3, 4]));
```

---

## 33. intersection program — intersectionArray.js

**Question:** intersection program

**Answer:**

```javascript
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

function intersectionSingleLine(arr1, arr2) {
    return arr1.filter((ele) => arr2.includes(ele));
}
console.log(intersectionSingleLine([1, 2, 3], [2, 3, 4]));
```

---

## 34. fibonacci series — fibonacciSeries.js

**Question:** fibonacci series

**Answer:**

```javascript
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

function fibonacciSeries(number) {
    const arr = [0, 1];
    for (let i = 2; i <= number; i++) {
        arr[i] = arr[i - 1] + arr[i - 2];
    }
    return arr;
}
console.log(fibonacciSeries(5));
```

---

## 35. currying function — curryingfn.js

**Question:** currying function

**Answer:**

```javascript
function add(a) {
    return function (b) {
        return function (c) {
            return a + b + c;
        }
    }
}

console.log(add(2)(3)(4));
```

---

## 36. transpose matrix — transposeMatrix.js

**Question:** transpose matrix

**Answer:**

```javascript
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

function transposeMatrixUsingMap(matrix) {
    return matrix[0].map((_, colIndex) => matrix.map(row => row[colIndex]));
}

console.log(transposeMatrixUsingMap(matrix));
```

---

## 37. input-change-output-question1 — inputchangeoutput1.js

**Question:** Input: a.b.c.d.e → Output: {a: {b: {c:{d:e}}}}

**Answer:**

```javascript
let inputStr = "a.b.c.d.e";
function inputOutput(str) {
    return str.split(".").reduceRight((acc, cur) => { return { [cur]: acc } });
}

console.log(JSON.stringify(inputOutput(inputStr)));
```

---

## 38. Longest word in string — program38.js

**Question:** Longest word in string

**Answer:**

```javascript
function longestWord(stringVal) {
    const strings = stringVal.split(' ');
    let count = 0;
    let longestString = '';
    for (let words of strings) {
        if (count < words?.length) {
            count = words?.length;
            longestString = words;
        } 
    }
    console.log(longestString,count);
}
longestWord("A computer science portal for geeks");
```

---

## 39. i/p: "this tage hash tag" → o/p: #ThisTageHashTag — program39.js

**Question:** Convert string to hashtag format

**Answer:**

```javascript
function hasTag(strVal){
    let strings = strVal.split(' ');
    let result =[];
    for(let words of strings){
       result.push(words.at(0).toUpperCase()+words.slice(1));
    }
   result.unshift("#");
   console.log(result.join(""));
}
hasTag("this tage hash tag");
```

---

## 40. Count of 'i' in 'mississippi' — program40.js

**Question:** Find the count of 'i' in 'mississippi'

**Answer:**

```javascript
function findCountChar(strVal) {
    console.log([...strVal.matchAll(/i/g)].length);
}
findCountChar('mississippi')

function findIChar(strVal) {
    let arrString = strVal.split('');
    let count = 0;
    for (let char of arrString) {
        if (char === 'i') {
            count = count + 1;
        }
    }
    console.log(count);
}
findIChar('mississippi');
```

---

## 41. find the char is upper case or not — program41.js

**Question:** find the char is upper case or not

**Answer:**

```javascript
function findCharUpperCase(strVal){
 console.log((/[A-Z]/).test(strVal));
}
findCharUpperCase('A');
findCharUpperCase('a');
function charIsUpper(strVal){
    console.log(strVal.toUpperCase()===strVal);
}
charIsUpper('a');
charIsUpper('K');
```

---

## 42. string start with arg — program42.js

**Question:** string start with arg: checks("hello worlds", 'hello')

**Answer:**

```javascript
function startWith(str, str1) {
    if (str.split(' ').at(0) === str1) console.log(true);
}

startWith("hello worlds", "hello");
function checks(str, str1) {
    console.log(str.startsWith(str1));
}
checks("hello worlds", "hello");
```

---

## 43. reverse string without using pre defined method — reverseString.js

**Question:** reverse string without using pre defined method

**Answer:**

```javascript
function reverseString(name) {
    const nameArray = name.split('');
    const reverseString = [];
    for (let i = nameArray.length - 1; i >= 0; i--) {
        reverseString.push(nameArray[i]);
    }
    console.log(reverseString.join(''));
}

reverseString("aakash");
function reverseReduceRight(name){
    return name.split('').reduceRight((acc,cur)=>acc+cur);
}

console.log(reverseReduceRight("payal"));
```

---

## 44. find mean of given array — program44.js

**Question:** find mean of given array

**Answer:**

```javascript
function mean(arrValue) {
    console.log(arrValue.reduce((acc, next) => acc + next, 0) / arrValue.length);
}
mean([1, 2, 3, 4, 5])
```

---

## 45. find mean median from given array — program45.js

**Question:** find mean median from given array

**Answer:**

```javascript
function findMeanMedian(arr) {
  let sum = arr.reduce((a, b) => a + b, 0);
  let mean = sum / arr.length;

  arr.sort((a, b) => a - b);
  let mid = Math.floor(arr.length / 2);
  let median;

  if (arr.length % 2 === 0) {
    median = (arr[mid - 1] + arr[mid]) / 2;
  } else {
    median = arr[mid];
  }

  return { mean, median };
}

let result = findMeanMedian([1, 2, 3, 4, 5, 6]);
console.log("Mean:", result.mean);
console.log("Median:", result.median);
```

---

## 46. repeate('abc',5) — program46.js

**Question:** repeate('abc',5)

**Answer:**

```javascript
function repeatChar(string, number) {
    let stringConcat = '';
    for (i = 0; i < number; i++) {
        stringConcat += string;
    }
    return stringConcat;
}

console.log(repeatChar('abc', 5));

console.log(((string, num) =>
    string.repeat(num)
)('abc', 5));
```

---

## 47. create random color — createRandomColor.js

**Question:** create random color

**Answer:**

```javascript
console.log(Math.random(16).toString(16).substring(2,8));
```

---

## 49. range of number rec(start = 1 , end = 6) — printrange.js

**Question:** range of number rec(start, end)

**Answer:**

```javascript
function range(start, end) {
    if (start > end) {
        return;
    }
    console.log(start);
    range(start + 1, end);
}

range(1, 6);
```

---

## 50. sliding window k = 3 — slidingWindow.js

**Question:** sliding window max sum

**Answer:**

```javascript
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
        windowSum = windowSum - arr[i - itr] + arr[i];
        maxSum = Math.max(maxSum, windowSum);
    }

    return maxSum;
}

console.log(slidingWindow(key, arrayValues));
```

---

## 51. print 1 to 10 every 1 sec. — print1to10.js

**Question:** print 1 to 10 every 1 sec

**Answer:**

```javascript
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

---

## 52. Valid Parentheses in an Expression — validparentheses.js

**Question:** Valid Parentheses in an Expression

**Answer:**

```javascript
function validParantheses(str1) {
    const stack = [];
    const map = {
        '(': ')',
        '[': ']',
        '{': '}'
    }
    for (let i = 0; i < str1.length; i++) {
        const char = str1[i];
        if (map[char]) {
            stack.push(char);
        } else {
            const last = stack.pop();
            if (char !== map[last]) {
                return false;
            }
        }
    }
  return stack.length === 0;
}

console.log(validParantheses('()[]{}'));
```

---

## 53. How to compute (a + b) mod m — program53.js

**Question:** How to compute (a + b) mod m

**Answer:**

```javascript
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

---

## 54. Binary search array with target value — program54.js

**Question:** Binary search array with target value

**Answer:**

```javascript
function binarySearchTargetValue(arrValue, targetValue) {
    let left = 0;
    let right = arrValue?.length - 1;
    let result = -1;
    while (left <= right) {
        let mid = Math.floor((left + right) / 2);
        if (arrValue[mid] === targetValue) {
            result = mid;
            return mid;
        } else if (arrValue[mid] < targetValue) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }
    return result;
}
let numArray = [1, 3, 5, 7, 9, 11, 13, 15, 17]
console.log(binarySearchTargetValue(numArray, 11));
console.log(binarySearchTargetValue(numArray, 8));
```

---

## 55-56. Generate parentheses — program56.js

**Question:** Generate parentheses (well-formed)

**Answer:**

```javascript
function generateValidParanthesis(n) {
    let result = [];
    function backtracking(cur, open, close) {
        if (cur.length === 2 * n) {
            result.push(cur);
            return;
        }
        if (open < n) {
            backtracking(cur + "(", open + 1, close);
        }
        if (close < open) {
            backtracking(cur + ")", open, close + 1);

        }
    }
    backtracking("", 0, 0);
    return result;
}

let functionCall = generateValidParanthesis(4);
console.log(functionCall);
```

---

## 61. Fibonacci sequence — program61.js

**Question:** Fibonacci sequence of a given number

**Answer:**

```javascript
function fibonacci(number) {
    let result = [];
    let start = 0;
    let end = 1;
    for (let i = 0; i < number; i++) {
        if (i == 0) {
            result.push(0)
        } else {
            const value = start + end;
            [start, end] = [end, value];
            result.push(start);
        }
    }
    console.log(result);
}
fibonacci(6);
```
//----------------------version 2 on number place of series--------------------------------
```
function fibonacciNumber(number) {
    if(number <= 1) return number;
    return fibonacciNumber(number - 1) + fibonacciNumber(number - 2);
}
console.log(fibonacciNumber(6));

```
---

## 63. Write a function to flatten a given array — program63.js

**Question:** Flatten a given array

**Answer:**

```javascript
function flattenArray(arrVal) {
    let result = [];
    for (let i = 0; i < arrVal.length; i++) {
        if (Array.isArray(arrVal[i])) {
            result = result.concat(flattenArray(arrVal[i]));
        } else {
            result.push(arrVal[i]);
        }
    }
    return result;
}

console.log(flattenArray([1, [2, [3, [4, 5]]], 6]));
console.log(flattenArray([1, 2, [[[4, 5, 6]]], 8, 7, [3, 9], [[11, 12]]]));
```

---

## 71. Implement a basic string compression algorithm — program71.js

**Question:** Implement a basic string compression algorithm

**Answer:**

```javascript
function compressString(argValue) {
    let splitString = argValue.split('');
    let stringConcat = '';
    let count = 1;
    for (let i = 0; i < splitString.length; i++) {
        if (splitString[i] === splitString[i + 1]) {
            count = count + 1;
        } else {
            stringConcat = stringConcat + splitString[i] + '' + count;
            count = 1;
        }
    }
    console.log(stringConcat);
}
compressString('aabbbcc');
```

---

## 72-83. Polyfills — program72.js to program83.js

Includes polyfills for map, filter, reduce, some, every, push/pop, slice/splice, call/apply/bind, Promise.all, debounce, throttle, JSON.stringify, forEach.

---

## 84. Implementing Bubble Sort — program84.js

**Question:** Implement Bubble Sort

**Answer:**

```javascript
function bubbleSorts(arrValue) {
    for (let i = 0; i < arrValue.length; i++) {
        for (let j = 0; j < arrValue.length - i - 1; j++) {
            if (arrValue[j] > arrValue[j + 1]) {
                [arrValue[j], arrValue[j + 1]] = [arrValue[j + 1], arrValue[j]]
            }
        }
    }
    console.log(arrValue);
}
bubbleSorts([64, 34, 25, 12, 22, 11, 90]);
```

---

## 85. Implementing Selection Sort — program85.js

**Question:** Implement Selection Sort

**Answer:**

```javascript
function selectionSorts(arrValue) {
    for (let i = 0; i < arrValue.length; i++) {
        let minIndex = i;
        for (let j = i+1; j < arrValue.length; j++) {
            if (arrValue[minIndex] > arrValue[j]) {
                minIndex = j;
            }
        }
        [arrValue[i], arrValue[minIndex]] = [arrValue[minIndex], arrValue[i]];
    }
    console.log(arrValue);
}
selectionSorts([5, 3, 8, 4, 2]);
```

---

## 100+. Additional Implemented Items

---

## 106. Best Time to Buy and Sell Stock — program106.js

**Question:** Given an array of prices, find the maximum profit by choosing a single day to buy and a different day in the future to sell.

**Answer:**

```javascript
function bestByAndSell(sellValues) {
    let minStockPurchasePrice = sellValues[0] || 0;
    let profit = 0;
    for (let i = 0; i < sellValues.length; i++) {
        if (sellValues[i] < minStockPurchasePrice) {
            minStockPurchasePrice = sellValues[i];
        }
        let currentProfit = sellValues[i] - minStockPurchasePrice;
        profit = Math.max(profit, currentProfit);
    }
    return profit;
}

console.log(bestByAndSell([10, 7, 5, 8, 11, 9]));
```

---

## 115. Retry a promise N times on failure — program115.js

**Question:** Retry a promise-returning function a given number of times with delay between attempts.

**Answer:**

```javascript
function retry(fn, entries = 3, delay = 1000) {
    return new Promise((resolve, reject) => {
        function attempt(n) {
            fn().then(resolve).catch((err) => {
                if (n === 0) reject(err);
                else {
                    console.log("Retrying...");
                    setTimeout(() => attempt(n - 1), delay);
                }
            })
        }
        attempt(entries);
    })
}
let count = 0;
retry(() => {
    return new Promise((resolve, reject) => {
        count++;
        count < 3 ? reject("Fail") : resolve("success");
    });
}, 3).then(console.log);
```

---

## 116. Implement a cancelable promise — program116.js

**Question:** Create a promise that can be canceled before it resolves.

**Answer:**

```javascript
function cancelablePromise(ms) {
    let timer;
    let cancel;
    const promise = new Promise((resolve, reject) => {
        timer = setTimeout(() => resolve('done'), ms);
        cancel = () => {
            clearTimeout(timer);
            reject(new Error('canceled'));
        };
    });
    return { promise, cancel };
}
const { promise, cancel } = cancelablePromise(3000);

promise
    .then((value) => {
        console.log(value);
    })
    .catch((error) => {
        console.error(error.message);
    });
setTimeout(() => cancel(), 1000);
```

---

## 127. Implement a pipe and compose function — program127.js

**Question:** Implement `compose` (right-to-left) and `pipe` (left-to-right) function composition utilities.

**Answer:**

```javascript
const add = x => x + 1;
const mult = x => x * 2;
const square = x => x * x;

const compose = (...fn) => (value) => fn.reduceRight((acc, next) => next(acc), value);
const composed = compose(add, mult, square);
console.log(composed(3));

const pipe = (...fns) => (value) => fns.reduce((acc, next) => next(acc), value);
const piped = pipe(add, mult, square);
console.log(piped(3));
```

---

## 134. Kadane's Algorithm — program134.js

**Question:** Find the maximum subarray sum (and also print the subarray).

**Answer:**

```javascript
function kadaneAlgo(n) {
    let currentSum = n[0];
    let currentEle = n[0];
    for (let i =1; i < n.length; i++) {
       currentSum = Math.max(n[i], currentSum + n[i]);
       currentEle = Math.max(currentEle, currentSum);
    }
    return currentEle;
}

console.log(kadaneAlgo([-2, 1, -3, 4, -1, 2, 1, -5, 4]));
console.log(kadaneAlgo([5,4,-1,7,8]));

function kadaneWithSubarray(n) {
    let currentSum = n[0];
    let currentEle = n[0];
    let start = 0;
    let end = 0;
    let s = 0;
    for (let i =1; i < n.length; i++) {
       currentSum = Math.max(n[i], currentSum + n[i]);
       if (currentSum === n[i]) {
           s = i;
       }
       if (currentEle < currentSum) {
           currentEle = currentSum;
           start = s;
           end = i;
       }
    }
    console.log("The contiguous subarray with the largest sum is:");
    console.log(n.slice(start, end + 1));
    return currentEle;
}

console.log(kadaneWithSubarray([-2, 1, -3, 4, -1, 2, 1, -5, 4]));
```

---

## 205. Javascript Currying - Variadic Currying — program205.js

**Question:** Implement a generic curry function.

**Answer:**

```javascript
const curry = (fn) => (...args) => args.length >= fn.length ? fn(...args) : curry(fn.bind(null, ...args));

const add = (a, b, c) => a + b + c;
const multi = (a, b, c) => a * b * c;

const curriedAdd = curry(add);
console.log(curriedAdd(2)(3)(4));

const curriedMult = curry(multi);
console.log(curriedMult(2)(3,4));
```

---

## 213. Find first repeating character — program213.js

**Question:** Return the first repeating character in a string.

**Answer:**

```javascript
function firstRepeatingChar(value) {
    let count = {};
    for (let char of value) {
        count[char] = count[char] + 1 || 1;
        if (count[char] > 1) {
            return char;
        }
    }
}
console.log(firstRepeatingChar("success"));
```

---

## 216. Currying for Infinite Sum — program216.js

**Question:** Implement infinite currying for summation.

**Answer:**

```javascript
function infinitCurry(a) {
    let total = a || 0;
    function inner(b) {
        if (b !== undefined) {
            total += b;
            return inner;
        } else {
            return total;
        }
    }
    return inner;
}
console.log(infinitCurry(10)(20)(30)());
console.log(infinitCurry(10)(20)(30)(40)(50)(60)());
```

---

## 218. Find sum of numbers without a for loop — program218.js

**Question:** Sum an array using recursion (no loops).

**Answer:**

```javascript
function sumUsingRecurssion(arrValue){
    if(arrValue.length === 0) return 0;
    return arrValue[0]+sumUsingRecurssion(arrValue.slice(1));
}

console.log(sumUsingRecurssion([1,2,3,4,5]));
```

---

## 219. Input-change-output-question-2 — program219.js

**Question:** Search an employee name in an organization chart (tree) recursively.

**Answer:**

```javascript
const orgChart = {
  name: "CEO",
  subordinates: [
    {
      name: "CTO",
      subordinates: [
        { name: "Dev1", subordinates: [] },
        { name: "Dev2", subordinates: [] }
      ]
    },
    {
      name: "CFO",
      subordinates: []
    }
  ]
};

function findEmployee(node, targetName) {
  if (node.name === targetName) {
    return true;
  }
  for (let sub of node.subordinates) {
    if (findEmployee(sub, targetName)) {
      return true;
    }
  }
  return false;
}

console.log(findEmployee(orgChart, "Dev2"));
console.log(findEmployee(orgChart, "CFO"));
console.log(findEmployee(orgChart, "Dev3"));
```

---

## 234. stale closure — program234.js

**Question:** Demonstrate stale closures and how to avoid them.

**Answer:**

```javascript
function outer() {
    let count = 0;
    function getCount() {
        count = count + 1;
    }

    function inner() {
        const message = `Final count is ${count}`;
        console.log(message);
    }
    return { inner, getCount };
}
const { getCount, inner } = outer();
getCount();
inner();
getCount();
inner();
```

---

## 235. Fill Missing Steps in Array — program235.js

**Question:** Insert intermediate steps so that gaps between consecutive numbers do not exceed a given limit, and return count of inserted values.

**Answer:**

```javascript
function stepCount(arrVal, limit) {
    let count = 0;
    for (let i = 0; i < arrVal.length; i++) {
        let gap = arrVal[i + 1] - arrVal[i];
        while (gap > limit) {
            let newValue = arrVal[i] + limit;
            arrVal.splice(i + 1, 0, newValue);
            count = count + 1;
            gap = arrVal[i + 1] - arrVal[i];
        }
    }
    return count;
}
console.log(stepCount([1, 2, 4, 7, 15], 3));

function stepCounts(arrVal, limit, i = 0, count = 0) {
    if (i >= arrVal.length - 1) {
        return count;
    }
    let gap = arrVal[i + 1] - arrVal[i];
    if (gap > limit) {
        let newValue = arrVal[i] + limit;
        arrVal.splice(i + 1, 0, newValue);
        return stepCounts(arrVal, limit, i, count + 1);
    } else {
        return stepCounts(arrVal, limit, i + 1, count);
    }
}
console.log(stepCounts([1, 2, 4, 7, 15], 3));
```

---

## 236. Progress bar using html,css and javascript — program236.html

**Question:** Build an auto-progressing progress bar using HTML, CSS, and JavaScript.

**Answer:**

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Auto Progress Bar</title>
  <style>
    body {
      display: flex;
      align-items: center;
      justify-content: center;
      height: 100vh;
      background: #222;
      color: white;
      font-family: Arial, sans-serif;
      flex-direction: column;
    }
    .progress-container {
      width: 80%;
      background: #555;
      border-radius: 25px;
      overflow: hidden;
      height: 30px;
      margin: 20px 0;
    }
    .progress-bar {
      height: 100%;
      width: 0%;
      background: #00c853;
      text-align: center;
      line-height: 30px;
      color: black;
      font-weight: bold;
      transition: width 0.1s linear;
    }
  </style>
  </head>
  <body>
  <h2>Auto Progress Bar</h2>

  <div class="progress-container">
    <div class="progress-bar" id="progress">0%</div>
  </div>

  <script>
    let progress = 0;
    let interval = setInterval(() => {
      if (progress >= 100) {
        clearInterval(interval);
      } else {
        progress++;
        const progressBar = document.getElementById("progress");
        progressBar.style.width = progress + "%";
        progressBar.textContent = progress + "%";
      }
    }, 100);
  </script>
  </body>
  </html>
```

---

## 237. Input output program 3 — program237.js

**Question:** Aggregate order amounts by category.

**Answer:**

```javascript
const  order = [
  { id: 1, category: 'Beverages', amount: 120 },
  { id: 2, category: 'Snacks', amount: 80 },
  { id: 3, category: 'Beverages', amount: 100 },
  { id: 4, category: 'Meals', amount: 200 },
  { id: 5, category: 'Snacks', amount: 50 },
];

var categories = {};

order.forEach((ele) => {
  if(categories.hasOwnProperty(ele.category)){
    categories[ele.category] += ele.amount;
  }else{
    categories[ele.category] = ele.amount;
  }
});

console.log(categories);
```

---

## 238. Missing value in array with n numbers — program238.js

**Question:** Given a sorted range starting from 1, find missing values up to the last value.

**Answer:**

```javascript
function missingValue(values){
    let missing = [];
    let valueCheck = new Set(values);
    for(let i=1;i<values[values.length-1];i++){
        if(!valueCheck.has(i)){
            missing.push(i);
        }
    }
    console.log(missing);
}
missingValue([1,2,4,6,8,12]);
```

---

Each of the above has now been expanded with the full answer code.


