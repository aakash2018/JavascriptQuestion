// Polyfill for Array.prototype.every()
// 👉 Definition

// every() check करता है कि array के सभी elements condition pass करते हैं या नहीं।

// अगर सारे elements pass करें → true return करता है।

// अगर कोई भी element fail हो जाए → तुरंत false return करता है।

// 👉 Polyfill Code
Array.prototype.myEvery = function (callback) {
  for (let i = 0; i < this.length; i++) {
    if (!callback(this[i], i, this)) {
      return false; // जैसे ही कोई fail हुआ → false
    }
  }
  return true; // सारे pass हो गए
};

// 👉 Example 1 (Check if all numbers are positive)
let arr = [2, 4, 6, 8];

let allPositive = arr.myEvery(num => num > 0);

console.log(allPositive); // true

// 👉 Example 2 (Check if all names have length > 3)
let names = ["Ram", "Shyam", "Rohit"];

let result = names.myEvery(name => name.length > 3);

console.log(result); // false (क्योंकि "Ram" की length सिर्फ 3 है)

// 👉 Key Points

// Condition fail होते ही loop रुक जाता है ✅

// सारे elements pass कर गए तो true ✅