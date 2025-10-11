function missingValue(values){
    let missing = [];
    let valueCheck = new Set(values);
    for(let i=1;i<values[values.length-1];i++){
        if(!valueCheck.has(i)){
            missing.push(i);
        }
    }
    console.log(missing);
}
missingValue([1,2,4,6,8,12]);