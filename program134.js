function kadaneAlgo(n) {
    console.log(n);
    let currentSum = n[0];
    let currentEle = n[0];
    for (let i =1; i < n.length; i++) {
       currentSum = Math.max(n[i], currentSum + n[i]);
       currentEle = Math.max(currentEle, currentSum);
    }
    return currentEle;
}

console.log(kadaneAlgo([-2, 1, -3, 4, -1, 2, 1, -5, 4]));

// Output: 6
// Explanation: [4,-1,2,1] has the largest sum = 6.
// Time Complexity: O(n)
// Space Complexity: O(1)

// Another Example
console.log(kadaneAlgo([5,4,-1,7,8]));

// Output: 23
// Explanation: [5,4,-1,7,8] has the largest sum = 23.
// Time Complexity: O(n)
// Space Complexity: O(1)

//------------------kedane with subarray------------------//
function kadaneWithSubarray(n) {
    console.log(n);
    let currentSum = n[0];
    let currentEle = n[0];
    let start = 0;
    let end = 0;
    let s = 0;
    for (let i =1; i < n.length; i++) {
       currentSum = Math.max(n[i], currentSum + n[i]);
       if (currentSum === n[i]) {
           s = i;
       }
       if (currentEle < currentSum) {
           currentEle = currentSum;
           start = s;
           end = i;
       }
    }
    console.log("The contiguous subarray with the largest sum is:");
    console.log(n.slice(start, end + 1));
    return currentEle;
}

console.log(kadaneWithSubarray([-2, 1, -3, 4, -1, 2, 1, -5, 4]));