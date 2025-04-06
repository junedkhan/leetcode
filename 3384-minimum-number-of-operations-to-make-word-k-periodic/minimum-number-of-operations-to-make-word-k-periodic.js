/**
 * @param {string} word
 * @param {number} k
 * @return {number}
 */
var minimumOperationsToMakeKPeriodic = function(word, k) {
    const map = new Map();
    let total = 0;
    let maxOcc = 0;

    for(let i = 0; i < word.length; i+=k) {
        const subStr = word.slice(i, i + k);
        if(map.get(subStr)) {
            let val = map.get(subStr);
            map.set(subStr, ++val)
        } else {
            map.set(subStr, 1)
        }

        maxOcc = Math.max(maxOcc, map.get(subStr))
        total += 1;
    }
    return total - maxOcc;
};