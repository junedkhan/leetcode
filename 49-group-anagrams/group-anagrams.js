/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
    const primes = [
        2, 3, 5, 7, 11, 13, 17, 19, 23, 29,
        31, 37, 41, 43, 47, 53, 59, 61, 67,
        71, 73, 79, 83, 89, 97, 101
    ];

    const map = new Map();

    for (const str of strs) {
        let hash = 1;
        for (const char of str) {
            hash *= primes[char.charCodeAt(0) - 97];
        }

        if (!map.has(hash)) map.set(hash, []);
        map.get(hash).push(str);
    }

    return Array.from(map.values());
};

