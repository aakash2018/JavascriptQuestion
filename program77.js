// 👉 slice()

// Definition:

// slice(start, end) array का एक हिस्सा copy करके नया array return करता है।

// यह original array को modify नहीं करता।

// end exclusive होता है (यानि end index वाला element include नहीं होगा)।

// Polyfill Code:

Array.prototype.mySlice = function (start = 0, end = this.length) {
  let result = [];

  // Negative index handle (जैसे slice(-2))
  if (start < 0) start = this.length + start;
  if (end < 0) end = this.length + end;

  for (let i = start; i < end && i < this.length; i++) {
    result.push(this[i]);
  }
  return result;
};


// Example:

let arr = [1, 2, 3, 4, 5];
console.log(arr.mySlice(1, 3)); // [2, 3]
console.log(arr.mySlice(-2));   // [4, 5]
console.log(arr);               // [1, 2, 3, 4, 5] (original same)

// 👉 splice()

// Definition:

// splice(start, deleteCount, ...items)

// Array को modify करता है (in place)।

// start से शुरू करके deleteCount elements हटाता है और optionally नए elements insert करता है।

// हटाए गए elements का array return करता है।

// Polyfill Code:

Array.prototype.mySplice = function (start, deleteCount, ...items) {
  let removed = [];

  // Negative start handle
  if (start < 0) start = this.length + start;
  if (start < 0) start = 0;

  // delete elements collect
  for (let i = 0; i < deleteCount; i++) {
    if (start < this.length) {
      removed.push(this[start]);
      this[start] = this[start + 1]; // shift होगा नीचे handle
      start++;
    }
  }

  // Delete + Insert logic
  let leftPart = this.slice(0, start - deleteCount);
  let rightPart = this.slice(start);

  let newArr = [...leftPart, ...items, ...rightPart];

  // Original array को modify करना
  this.length = 0;
  for (let i = 0; i < newArr.length; i++) {
    this[i] = newArr[i];
  }

  return removed;
};


// Example:

let arr1 = [1, 2, 3, 4, 5];

// remove 2 elements from index 1 and insert 9, 10
let removed = arr1.mySplice(1, 2, 9, 10);

console.log(removed); // [2, 3]
console.log(arr1);     // [1, 9, 10, 4, 5]