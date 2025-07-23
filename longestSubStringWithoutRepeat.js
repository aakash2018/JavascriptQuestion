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

