/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
function maxVowels(s, k) {
    let ans = 0;
    let count = 0;

    // Count vowels in the first window
    for (let i = 0; i < k; i++) {
        if (isVowel(s[i])) {
            count++;
        }
    }
    ans = Math.max(ans, count);

    // Slide the window and update the count
    for (let i = k; i < s.length; i++) {
        if (isVowel(s[i])) {
            count++;
        }
        if (isVowel(s[i - k])) {
            count--;
        }
        ans = Math.max(ans, count);
    }

    return ans;
}

function isVowel(c) {
    return c === 'a' || c === 'e' || c === 'i' || c === 'o' || c === 'u';
}
