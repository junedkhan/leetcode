/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var characterReplacement = function(s, k) {
    let n = s.length;
    let ans = 0;

    for(let c = 65; c <= 90; c++) {
        let i = 0, j = 0;
        let replaced = 0;
        while(j < n) {
        if(s[j] === String.fromCharCode(c)) {
            j++;
        } else if(replaced < k) {
            j++;
            replaced++;
        } else if(s[i] === String.fromCharCode(c)) {
            i++;
        } else {
            i++;
            replaced--;
        }
        ans = Math.max(ans, j - i);
      }
    }

    return ans;
};