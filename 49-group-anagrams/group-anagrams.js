/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
    const map = new Map();
    const ans = [];

    strs.forEach((str) => {
        const sortedStr = str.split("").sort().join("");
        if(map.has(sortedStr)) {
            ans[map.get(sortedStr)].push(str);
        } else {
            map.set(sortedStr, ans.length);
            ans.push([str]);
        }
    })

    return ans;
};