function intersectionArray(arr1, arr2) {
	const intersection = [];
	arr1.forEach(element => {
		if (arr2.includes(element)) {
			intersection.push(element);
		}
	});
	return intersection;
}
console.log(intersectionArray([1, 2, 3], [2, 3, 4]));
//------------------------------------------------------
function intersectionSingleLine(arr1, arr2) {
	return arr1.filter((ele) => arr2.includes(ele));
}
console.log(intersectionSingleLine([1, 2, 3], [2, 3, 4]));
//--------------------------------------------------------
function intersectMultipleArrays(arrays) {
	console.log(arrays.reduce((acc,cur)=>acc.filter((c)=>cur.includes(c))));
}

const arrays = [
	[1, 2, 3],
	[2, 3, 4],
	[3, 4, 5]
];
intersectMultipleArrays(arrays);
//------------object intersection-----------------------
function intersectObjects(arr1, arr2, key) {
    return arr1.filter(obj1 => 
        arr2.some(obj2 => obj1[key] === obj2[key])
    );
}

// Example:
const users1 = [{ id: 1, name: 'Alice' }, { id: 2, name: 'Bob' }];
const users2 = [{ id: 2, name: 'Bob' }, { id: 3, name: 'Charlie' }];
const commonUsers = intersectObjects(users1, users2, 'id');

console.log(commonUsers); // Output: [{ id: 2, name: 'Bob' }]