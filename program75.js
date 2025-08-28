// Polyfill for Array.prototype.some()
// 👉 Definition

// some() check करता है कि array का कम से कम एक element condition पास करता है या नहीं।

// अगर कोई एक भी element true हुआ → true return करता है।

// अगर सारे elements fail हो गए → false return करता है।

// 👉 Polyfill Code
Array.prototype.mySome = function (callback) {
  for (let i = 0; i < this.length; i++) {
    if (callback(this[i], i, this)) {
      return true; // एक भी element pass हो गया तो true
    }
  }
  return false; // अगर कोई भी pass नहीं हुआ
};

// 👉 Example 1 (Check if any number is even)
let arr = [1, 3, 5, 7, 8];

let hasEven = arr.mySome(num => num % 2 === 0);

console.log(hasEven); // true (क्योंकि 8 even है)

// 👉 Example 2 (Check if name has length > 5)
let names = ["Ram", "Shyam", "Rohit"];

let result = names.mySome(name => name.length > 5);

console.log(result); // true (क्योंकि "Shyam" और "Rohit" की length > 5 है)

// 👉 Key Points

// पहला element match होते ही loop रुक जाता है ✅

// कोई भी element pass नहीं करे तो false देता है ✅