function removeBadNumbers(arr) {
  return arr.filter(num => num !== -1);
}

// Usage
const numbers = [1, -1, 5, -1, 3, 8, -1, 2];
const clean = removeBadNumbers(numbers);

console.log(clean);  // [1, 5, 3, 8, 2]