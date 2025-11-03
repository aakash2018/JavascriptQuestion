function starPatternOne(n){
    for(let i=1; i<=n; i++){
       let pattern = ''.repeat(n-i)+'#'.repeat(i);
        console.log(pattern);
    }
}
starPatternOne(5);

function starPatternTwo(n){
    for(let i=1; i<=n; i++){
       let pattern = ' '.repeat(n-i)+' #'.repeat(i);
        console.log(pattern);
    }
}
starPatternTwo(5);

function starPatternThree(n){
    for(let i=1; i<=n; i++){
       let pattern = ' '.repeat(n-i)+'#'.repeat(i);
        console.log(pattern);
    }
}
starPatternThree(5);