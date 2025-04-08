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

    while(start < end) {
        // if character ==> swap

        while(start < end && !isAlphabaticChar(arr[start])) {
                start++;
        }

        while(start < end && !isAlphabaticChar(arr[end])) {
                end--;
        }

        if(start < end) {
            [arr[start], arr[end]] = [arr[end], arr[start]];
            start++;
            end--;
        }
    }  

    return arr.join("");
};