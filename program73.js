// 2. Polyfill for Array.prototype.filter()
// 👉 Definition

// filter() array के हर element पर callback चलाता है और सिर्फ वही elements return करता है जो condition पास करते हैं।

// Original array modify नहीं होता।

// Return हमेशा new array होता है।

// 👉 Polyfill Code
Array.prototype.myFilter = function (callback) {
  let result = [];

  for (let i = 0; i < this.length; i++) {
    // अगर callback true return करे → element add होगा
    if (callback(this[i], i, this)) {
      result.push(this[i]);
    }
  }

  return result;
};

// 👉 Example
let arr = [10, 25, 30, 45, 50];

let filteredArr = arr.myFilter((num) => num > 25);

console.log(filteredArr); // [30, 45, 50]
console.log(arr);         // [10, 25, 30, 45, 50] (original same hai)

// 👉 Key Points

// Condition pass करने वाले elements new array में आते हैं ✅

// Original array कभी change नहीं होता ✅