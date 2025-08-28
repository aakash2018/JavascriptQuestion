// Polyfill for Array.prototype.push() and Array.prototype.pop()
// 👉 push()

// Definition:
// push() किसी array के end में नया element add करता है और नया length return करता है।

// Polyfill Code:

Array.prototype.myPush = function (...args) {
  for (let i = 0; i < args.length; i++) {
    this[this.length] = args[i]; // end में add
  }
  return this.length; // नया length return
};


// Example:

let arr = [1, 2, 3];
arr.myPush(4, 5);

console.log(arr); // [1, 2, 3, 4, 5]

// 👉 pop()

// Definition:
// pop() array के last element को remove करता है और वही element return करता है।

// Polyfill Code:

Array.prototype.myPop = function () {
  if (this.length === 0) return undefined; // empty array

  const lastElement = this[this.length - 1];
  this.length = this.length - 1; // last element हट गया
  return lastElement;
};


// Example:

let arr1 = [10, 20, 30];
let removed = arr1.myPop();

console.log(removed); // 30
console.log(arr1);     // [10, 20]

