// 3. Polyfill for Array.prototype.reduce()
// 👉 Definition

// reduce() array के सारे elements को एक ही value में reduce करता है।

// ये एक callback function लेता है जो accumulator और currentValue पर काम करता है।

// साथ में एक optional initialValue भी होता है।

// 👉 Polyfill Code

Array.prototype.myReduce = function (callback, initialValue) {
  let accumulator = initialValue;
  let startIndex = 0;

  // अगर initialValue नहीं दी गई है → पहले element को ही accumulator बना लो
  if (accumulator === undefined) {
    accumulator = this[0];
    startIndex = 1;
  }

  for (let i = startIndex; i < this.length; i++) {
    accumulator = callback(accumulator, this[i], i, this);
  }

  return accumulator;
};

// 👉 Example 1 (Sum of numbers)
let arr = [1, 2, 3, 4];

let sum = arr.myReduce((acc, curr) => acc + curr, 0);

console.log(sum); // 10

// 👉 Example 2 (Find Max)
let nums = [5, 12, 7, 30, 15];

let max = nums.myReduce((acc, curr) => (curr > acc ? curr : acc));

console.log(max); // 30

// 👉 Key Points

// अगर initialValue नहीं दिया तो पहला element accumulator बन जाता है ✅

// हर बार callback accumulator को update करता है ✅

// Final में एक single value return करता है ✅