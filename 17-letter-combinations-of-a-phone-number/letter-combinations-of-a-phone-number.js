/**
 * @param {string} digits
 * @return {string[]}
 */

 const map = {
    2: "abc",
    3: "def",
    4: "ghi",
    5: "jkl",
    6: "mno",
    7: "pqrs",
    8: "tuv",
    9: "wxyz",
 };


var letterCombinations = function(digits) {
    if(digits.length === 0) return [];

    const result = [];
    const backtracking = (index, path) => {
        if(index === digits.length) {
            result.push(path);
            return;
        }

        const letters = map[digits[index]];

        for(let letter of letters) {
            backtracking(index + 1, path + letter);
        }
    }

    backtracking(0, "");

    return result;
};