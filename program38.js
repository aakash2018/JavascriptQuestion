function longestWord(stringVal) {

    const strings = stringVal.split(' ');
    let count = 0;
    let longestString = '';
    for (let words of strings) {
        if (count < words?.length) {
            count = words?.length;
            longestString = words;
        } 
    }
    console.log(longestString,count);

}
longestWord("A computer science portal for geeks");