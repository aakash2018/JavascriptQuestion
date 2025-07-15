function titleCaseString(str){
    return(str.split(' ').map((ele)=>ele[0].toUpperCase()+ele.slice(1)).join(' '));
}
console.log(titleCaseString("hello world"));
//----------------------------regerx---------------------------------------
function toTitleCase(str) {
  return str.toLowerCase()
           .replace(/(?:^|\s)\w/g, match => match.toUpperCase());
}
console.log(toTitleCase("  hello  world  ")); // "  Hello  World  "