function findMeanMedian(arr) {
  // 👉 Mean 
  let sum = arr.reduce((a, b) => a + b, 0);
  let mean = sum / arr.length;

  // 👉 Median 
  arr.sort((a, b) => a - b); // ascending order
  let mid = Math.floor(arr.length / 2);
  let median;

  if (arr.length % 2 === 0) {
    // even case  average of  2 numbers
    median = (arr[mid - 1] + arr[mid]) / 2;
  } else {
    // odd case  middle number
    median = arr[mid];
  }

  return { mean, median };
}

// Test
let result = findMeanMedian([1, 2, 3, 4, 5, 6]);
console.log("Mean:", result.mean);     // 3.5
console.log("Median:", result.median); // 3.5