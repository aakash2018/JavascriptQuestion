const arr = [0, 1, 2, 3, 4, 5, 6, 5, 4, 3, 2, 1, 0, 1, 2, 3, 4];

console.log(findInAdjacentDiffOne(arr, 6));   // 6
console.log(findInAdjacentDiffOne(arr, 0));   // 0
console.log(findInAdjacentDiffOne(arr, 10)); //- 1 

function findInAdjacentDiffOne(arr, target) {
    let count =0;
    while(count < arr.length) {
        if(arr[count] === target) {
            return count;
        }
        let diff = Math.abs(arr[count] - target);
        count += diff;      
    }
    return -1;
}