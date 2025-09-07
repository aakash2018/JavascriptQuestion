function hasTag(strVal){
    let strings = strVal.split(' ');
    // strings.unshift("#");
    let result =[];
    console.log(strings);
    for(let words of strings){
       result.push(words.at(0).toUpperCase()+words.slice(1));
    }
   result.unshift("#");
   console.log(result.join(""));
}
hasTag("this tage hash tag");