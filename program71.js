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
compressString('aaaabbbbcccccccccc');
compressString('aaabbbaaccc');
compressString('aakash');

//---onlineaproach-----------
// The code const compressString = str => str.replace(/(.)\1*/g, match => match[0] + match.length); uses regular expressions to compress a string. Let me break it down in simple Hindi/English:

// समझने के लिए मुख्य भाग:
// 1. (.) - कोई भी एक character पकड़ो
// Dot (.) means "any single character"

// parentheses () में रखने से उसे "remember" करते हैं

// 2. \1* - वही character बार-बार आए तो पकड़ो
// \1 means "the same character that we captured first"

// * means "zero or more times"

// 3. /g - पूरी string में search करो
// Global flag - सारी string में ढूंढता है

// 4. match => match[0] + match.length
// जो भी pattern match हुआ है, उसके लिए:

// match[0] है वह character (जैसे 'a')

// match.length है उसके repetitions की संख्या (जैसे 3)

// उदाहरण के साथ समझें:
// Input: "aaabbbcc"

// पहला match: "aaa"

// match[0] = "a"

// match.length = 3

// Result: "a" + "3" = "a3"

// दूसरा match: "bbb"

// match[0] = "b"

// match.length = 3

// Result: "b3"

// तीसरा match: "cc"

// match[0] = "c"

// match.length = 2

// Result: "c2"

// Final Output: "a3b3c2"
const compressString = str => str.replace(/(.)\1*/g, match => match[0] + match.length);

console.log(compressString("aaabbbcc"));  // "a3b3c2"