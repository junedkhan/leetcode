/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    const map = {};
    let maxOcc = 0;
    let maxNum = Math.floor(nums.length/2)

    nums.forEach((num) => {
        if(map[num] === undefined) {
            map[num] = 0;
        }
        map[num] += 1;

        if(map[num] > maxNum) {
            maxOcc = num;
        }
    });
    return maxOcc;
};