/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    const map = new Map();

    for(let i = 0; i< nums.length; i++) {
        const comnplimentNum = target - nums[i];
        if(map.has(comnplimentNum)) {
            return [i, map.get(comnplimentNum)]
        } else {
            map.set(nums[i], i)
        }
    }
};