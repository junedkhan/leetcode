/**
 * @param {string} s
 * @return {string}
 */

const isAlphabaticChar = (c) => {
    return  /[a-zA-Z]/.test(c);
}
var reverseOnlyLetters = function(s) {
    let start = 0;
    let end = s.length - 1;
    const arr = s.split("");

    while(start <= end) {
        // if character ==> swap
        if(isAlphabaticChar(arr[start]) && isAlphabaticChar(arr[end])) {
            [arr[start], arr[end]] = [arr[end], arr[start]];
            start++;
            end--;
        } else {
            if(!isAlphabaticChar(arr[start])) {
                start++;
            }

            if(!isAlphabaticChar(arr[end])) {
                end--;
            }
        }
    }  

    return arr.join("");
};