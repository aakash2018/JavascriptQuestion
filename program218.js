function sumUsingRecurssion(arrValue){
    if(arrValue.length === 0) return 0;
    return arrValue[0]+sumUsingRecurssion(arrValue.slice(1));
}

console.log(sumUsingRecurssion([1,2,3,4,5]));