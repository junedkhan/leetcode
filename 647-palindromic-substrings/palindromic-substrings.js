/**
 * @param {string} s
 * @return {number}
 */
var countSubstrings = function(s) {
    let count = 0;

    const expandFromCenter = (left, right) => {
        while(left>=0 && right < s.length && s[left] === s[right]) {
            count++;
            left--;
            right++;
        }
    }

    for(let i = 0; i < s.length; i++) {
        expandFromCenter(i, i); //odd
        expandFromCenter(i, i+1); //even
    }


    return count;
};