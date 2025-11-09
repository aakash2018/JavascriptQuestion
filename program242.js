 
 function circularArrayRotate(arr, k,q) {
        k = k % arr.length; // Normalize k to avoid unnecessary full rotations
        const n = arr.length;
        // Rotate the array
        const rotated = arr.slice(n - k).concat(arr.slice(0, n - k));
        // Map the queries to the rotated array
        return q.map(index => rotated[index]);
 }
 console.log(circularArrayRotate([1,2,3,4,5], 2, [0,2,4])); // [4,1,3]
 //-----------------------another method-------------------
 function circularArrayRotated(arr, k, q) {
        const n = arr.length;
        k = k % n; // Normalize k to avoid unnecessary full rotations
        const rotated = [];
        for (let query of q) {
            const rotatedIndex = (query - k + n) % n; // Calculate the index in the rotated array
            rotated.push(arr[rotatedIndex]); 
        }
        return rotated;
    }
    console.log(circularArrayRotated([1,2,3,4,5], 2, [0,2,4])); // [4,1,3]