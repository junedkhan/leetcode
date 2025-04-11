/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findKthLargest = function(nums, k) {
    const minValue = Math.min(...nums);
    const maxValue = Math.max(...nums);

    const count = new Array(maxValue - minValue + 1).fill(0);

    for (const num of nums) {
        count[num - minValue]++;
    }

    let remaining = k;
    for (let i = count.length - 1; i >= 0; i--) {
        remaining -= count[i];

        if (remaining <= 0) {
            return i + minValue;
        }
    }
};