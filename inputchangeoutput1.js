//Input:a.b.c.d.e
//Output:{a: {b: {c:{d:e}}}}
let inputStr = "a.b.c.d.e";
function inputOutput(str) {
    return str.split(".").reduceRight((acc, cur) => { return { [cur]: acc } });
}

console.log(JSON.stringify(inputOutput(inputStr)));