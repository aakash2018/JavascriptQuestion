//sliding window k = 3 ;  [1,2,4,5,2,5,6,7]

//Initial Window: Calculate sum of first k elements ([2,5,1] = 8)

// Slide Window:

// Move right: Remove leftmost element (2), add next right element (8) → new sum = 8-2+8=14

// Next slide: Remove 5, add 2 → sum = 14-5+2=11

// Next slide: Remove 1, add 9 → sum = 11-1+9=19 (new max)

// Continue until end
const key = 3;
const arrayValues = [1, 2, 4, 5, 2, 5, 6, 7];

function slidingWindow(itr, arr) {

    let windowSum = 0;
    let maxSum = -Infinity;

    for (let i = 0; i < itr; i++) {
        windowSum += arr[i];
    }
    maxSum = windowSum;

    for (let i = itr; i < arr.length; i++) {
        windowSum = windowSum - arr[i - itr] + arr[i]; // Subtract left, add right
        maxSum = Math.max(maxSum, windowSum);
    }

    return maxSum;
}

console.log(slidingWindow(key, arrayValues));