function stepCount(arrVal, limit) {
    let count = 0;
    for (let i = 0; i < arrVal.length; i++) {
        let gap = arrVal[i + 1] - arrVal[i];
        while (gap > limit) {
            let newValue = arrVal[i] + limit;
            arrVal.splice(i + 1, 0, newValue);
            count = count + 1;
            gap = arrVal[i + 1] - arrVal[i];
        }
    }
    return count;
}
console.log(stepCount([1, 2, 4, 7, 15], 3));

//usng recursion
function stepCounts(arrVal, limit, i = 0, count = 0) {
    if (i >= arrVal.length - 1) {
        return count;
    }
    let gap = arrVal[i + 1] - arrVal[i];
    if (gap > limit) {
        let newValue = arrVal[i] + limit;
        arrVal.splice(i + 1, 0, newValue);
        return stepCounts(arrVal, limit, i, count + 1);
    } else {
        return stepCounts(arrVal, limit, i + 1, count);
    }
}
console.log(stepCounts([1, 2, 4, 7, 15], 3));         