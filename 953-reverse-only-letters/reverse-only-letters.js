/**
 * @param {string} s
 * @return {string}
 */

const isAlphabaticChar = (c) => {
    return  /[a-zA-Z]/.test(c);
}
var reverseOnlyLetters = function(s) {
    let result = s.split(""); // Split the string into an array of characters for in-place modification
  let left = 0; // Left pointer, starting at the beginning of the array
  let right = result.length - 1; // Right pointer, starting at the end of the array

  while (left < right) { // Loop until the left and right pointers cross paths
    // Skip non-letter characters from the left
    while (left < right && !isAlphabaticChar(result[left])) {
      left++;
    }

    // Skip non-letter characters from the right
    while (left < right && !isAlphabaticChar(result[right])) {
      right--;
    }

    // If both pointers are on letters, swap them
    if (left < right) {
      [result[left], result[right]] = [result[right], result[left]];
      left++;
      right--;
    }
  }

  return result.join(""); // Join the modified array back into a string
};