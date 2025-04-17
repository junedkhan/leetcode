/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    const map = new Map();

    for(let i = 0; i< nums.length; i++) {
        const complimentNum = target - nums[i];
        if(map.has(complimentNum)) {
            return [i, map.get(complimentNum)]
        } else {
            map.set(nums[i], i)
        }
    }
};
