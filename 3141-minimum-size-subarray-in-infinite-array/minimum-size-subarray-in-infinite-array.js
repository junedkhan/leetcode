/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var minSizeSubarray = function(nums, target) {
let temp = [...nums];
    for (let i = 0; i < nums.length; i++) {
        temp.push(nums[i]);
    }

    // Calculate the total sum of elements in the original array.
    let sumNums = 0;
    for (let i = 0; i < nums.length; i++) {
        sumNums += nums[i];
    }

    // Calculate how many times the original array can be completely repeated
    // and the remaining sum needed after repeating.
    let q = Math.floor(target / sumNums);
    let rem = target % sumNums;
    
    // Check for a special case where the target can be achieved by repeating
    // the entire original array. If so, return the result immediately.
    if (rem === 0) {
        return q * nums.length;
    }

    // Update the target to be the remaining sum after repeating.
    target = rem;
    let ans = Infinity;
    let j = 0;
    let sum = 0;
    
    // Use a sliding window approach to find the minimum size subarray.
    for (let i = 0; i < temp.length; i++) {
        sum += temp[i];
        
        // While the sum exceeds the target, shrink the window from the left.
        while (sum > target) {
            sum -= temp[j++];
        }
        
        // If the sum equals the target, update the answer with the minimum length
        // of subarray found so far.
        if (sum === target) {
            ans = Math.min(ans, i - j + 1);
        }
    }

    // If a valid subarray is found, return the result by combining the number
    // of times the original array was repeated and the minimum subarray length.
    if (ans !== Infinity) {
        return q * nums.length + ans;
    }

    // If no valid subarray is found, return -1 to indicate that it's not possible.
    return -1;
};