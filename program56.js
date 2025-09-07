function generateValidParanthesis(n) {
    let result = [];
    function backtracking(cur, open, close) {
        if (cur.length === 2 * n) {
            result.push(cur);
            return;
        }
        if (open < n) {
            backtracking(cur + "(", open + 1, close);
        }
        if (close < open) {
            backtracking(cur + ")", open, close + 1);

        }
    }
    backtracking("", 0, 0);
    // return backtracking
    return result;
}

// console.log(generateValidParanthesis());
let functionCall = generateValidParanthesis(4);
console.log(functionCall);