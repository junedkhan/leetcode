/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function(n) {
    if(n === 1) return ["()"];
    const result = [];


    const backtracking = (open, close, path) => {
         if(path.length === n * 2) {
            result.push(path);
            return;
         }

         if(open < n) {
            backtracking(open + 1, close, path + "(");
         }

         if(close < open) {
            backtracking(open, close + 1, path + ")");
         }
    }

    backtracking(0, 0, "");

    return result;
};