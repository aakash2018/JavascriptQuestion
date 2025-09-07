function findCharUpperCase(strVal){
 console.log((/[A-Z]/).test(strVal));
}
findCharUpperCase('A');
findCharUpperCase('a');
//-- traditional way --------------
function charIsUpper(strVal){
    console.log(strVal.toUpperCase()===strVal);
}
charIsUpper('a');
charIsUpper('K');