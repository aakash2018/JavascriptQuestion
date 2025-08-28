// Polyfill for forEach
// 👉 Definition

// forEach() ek JavaScript array method hai jo array ke har element per ek function execute karta hai.

// Ye kuch return nahi karta (always undefined).

// Example:

[1,2,3].forEach((num, index) => {
  console.log(num, index);
});

// 👉 Polyfill Implementation (Simple)
Array.prototype.myForEach = function(callback, thisArg) {
  if (typeof callback !== "function") {
    throw new TypeError(callback + " is not a function");
  }

  for (let i = 0; i < this.length; i++) {
    // Agar element exist karta hai tabhi call karo (sparse arrays ke liye)
    if (this.hasOwnProperty(i)) {
      callback.call(thisArg, this[i], i, this);
    }
  }
};

// 👉 Example
const arr = [10, 20, 30];

arr.myForEach((value, index, array) => {
  console.log("Value:", value, "Index:", index, "Array:", array);
});


// ✅ Output:

// Value: 10 Index: 0 Array: [10,20,30]
// Value: 20 Index: 1 Array: [10,20,30]
// Value: 30 Index: 2 Array: [10,20,30]
