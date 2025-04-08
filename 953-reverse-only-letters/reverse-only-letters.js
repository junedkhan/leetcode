/**
 * @param {string} s
 * @return {string}
 */

const isAlphabaticChar = (c) => {
    const charCode = c.charCodeAt(0);
    console.log("charCode", c, charCode);
    return  (charCode >= 65 && charCode <= 90) || (charCode >= 97 && charCode <= 122);
}
var reverseOnlyLetters = function(s) {
    let start = 0;
    let end = s.length - 1;
    const arr = s.split("");

    while(start <= end) {
        if(isAlphabaticChar(arr[start]) && isAlphabaticChar(arr[end])) {
            const temp = arr[end]
            arr[end] = arr[start]
            arr[start] = temp;

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