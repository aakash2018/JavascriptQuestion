const removeSpaces = (str) => str.replace(/\s+/g, '');

// उदाहरण
console.log(removeSpaces("Hello World"));  // "HelloWorld"
console.log(removeSpaces("  A  B  C  ")); // "ABC"


const removeSpacesJoin = (str) => str.split(' ').join('');

// उदाहरण
console.log(removeSpacesJoin("JavaScript is fun")); // "JavaScriptisfun"


function removeSpacesLoop(str) {
  let result = '';
  for (let char of str) {
    if (char !== ' ') {
      result += char;
    }
  }
  return result;
}

// उदाहरण
console.log(removeSpacesLoop(" 1 2 3 ")); // "123"


const removeAllWhitespace = (str) => str.replace(/\s/g, '');

// उदाहरण
console.log(removeAllWhitespace("Hello\tWorld\n")); // "HelloWorld"