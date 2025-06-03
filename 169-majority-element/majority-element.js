/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    const map = {};
    let maxOcc = 0;
    let maxNum = Math.floor(nums.length/2)


    for(let i = 0; i < nums.length; i++) {
        const num = nums[i];
        if(map[num] === undefined) {
            map[num] = 0;
        }
        map[num] += 1;

        if(map[num] > maxNum) {
            return num;
        }
    }
};