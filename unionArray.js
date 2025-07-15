function unionArray(arr1, arr2) {
    arr2.forEach(element => {
        if (!arr1.includes(element)) {
            arr1.push(element);
        }
    });
    return (arr1);
}
console.log(unionArray([1, 2, 3], [2, 3, 4]));

// ---------------------------------------------
function unionSingleLineArray(arr1, arr2) {
    const union = arr1.concat(arr2.filter(item => !arr1.includes(item)));
    return (union)
}

console.log(unionSingleLineArray([1, 2, 3], [2, 3, 4]));
//----------------------------------------------------------
const arrays = [[1, 2, 3], [2, 3, 4], [3, 4, 5]];

const union = arrays.reduce((acc, current) => {
  current.forEach(item => {
    if (!acc.includes(item)) {
      acc.push(item);
    }
  });
  return acc;
}, []);

console.log(union);
//------------------------------------
const array1 = [1, 2, 3];
const array2 = [2, 3, 4];
const array3 = [3, 4, 5];

const unions = [...new Set([...array1, ...array2, ...array3])];
console.log(unions); // [1, 2, 3, 4, 5]
//-----------------------------------------
const arrayValue = [[1, 2, 3], [2, 3, 4], [3, 4, 5]];
const unionthree = arrayValue.reduce((acc, current) => {
  current.forEach(item => {
    if (!acc.includes(item)) {
      acc.push(item);
    }
  });
  return acc;
}, []);

console.log(unionthree)