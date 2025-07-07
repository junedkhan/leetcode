/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
    const map = new Map();

    for (const str of strs) {
        // Create a frequency array of size 26
        const count = new Array(26).fill(0);
        for (const char of str) {
            count[char.charCodeAt(0) - 97]++;
        }

        // Use the count array as a string key
        const key = count.join('#'); // '#' to avoid ambiguity

        if (!map.has(key)) {
            map.set(key, []);
        }

        map.get(key).push(str);
    }

    return Array.from(map.values());
};
