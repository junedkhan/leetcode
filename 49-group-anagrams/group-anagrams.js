/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
    const map = new Map();
    const result = [];

    strs.forEach((str) => {
        const sortedStr = str.split("").sort().join("");

        if(map.get(sortedStr) === undefined) {
            map.set(sortedStr, result.length);
            result.push([str]);
        } else {
            result[map.get(sortedStr)].push(str);
        }
    });

    return result;
};