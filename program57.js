let arrValues=[1, 0, 3, 0, 5, 0, 2]

  let result = [];
  let concat = [];
for (let ch of arrValues){
  console.log(ch)
  if(ch >= 1){
    result.push(ch)
  }else{
    concat.push(ch)
  }
}

console.log([...result,...concat])


arrValues.sort((a,b)=>b-a)

function moveZerosModern(arr) {
    const nonZeros = arr.filter(x => x !== 0);
    const zeros = new Array(arr.length - nonZeros.length).fill(0);
    return [...nonZeros, ...zeros];
}


console.log(moveZerosModern([1, 0, 3, 0, 5, 0, 2]));
