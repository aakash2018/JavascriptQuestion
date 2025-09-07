function findCountChar(strVal) {
    console.log([...strVal.matchAll(/i/g)].length);
}
findCountChar('mississippi')
//traditional way

function findIChar(strVal) {
    let arrString = strVal.split('');
    let count = 0;
    for (let char of arrString) {
        if (char === 'i') {
            count = count + 1;
        }
    }
    console.log(count);
}
findIChar('mississippi');