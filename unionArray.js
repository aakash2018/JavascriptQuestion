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
    arr2.map((ele) => !arr1.includes(ele) ? arr1.push(element):'');
}