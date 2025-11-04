// Online Javascript Editor for free
// Write, Edit and Run your Javascript code using JS Online Compiler

console.log("Try programiz.pro");


function invertPattern(n){
    for(let i=n;i>0;i--){
     let printValue= "".repeat(n-i)+"# ".repeat(i);
       console.log(printValue);
    }
}

invertPattern(5);

function invertPatternOne(n){
    for(let i=n;i>0;i--){
     let printValue= " ".repeat(n-i)+" #".repeat(i);
       console.log(printValue);
    }
}

invertPatternOne(5);

function invertPatternTwo(n){
     for(let i=n;i>0;i--){
     let printValue= "  ".repeat(n-i)+" #".repeat(i);
       console.log(printValue);
    }
}
invertPatternTwo(5);