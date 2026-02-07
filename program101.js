// let inputValue ="(()())(())"
function removeOuterMostParantesis(inputValue){
   console.log(inputValue.match(/\(\)/g).join(''))

}

removeOuterMostParantesis("(()())(())(()()())")

function removeOuterMost(inputValue){
  // console.log(inputValue);
    let count =0;
  for (let ch of inputValue) {
    if(ch==='(') count++;
  }
  const result = '()'.repeat(Math.ceil(count / 2));
  console.log(result);
}
removeOuterMost("(()())(())(()()())")
