/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    const map = {};
    let maxOcc = 0;

    nums.forEach((num) => {
        if(map[num] === undefined) {
            map[num] = 0;
        }
        map[num] += 1;

        if(map[num] > Math.floor(nums.length/2)) {
            maxOcc = num;
        }
    });
    return maxOcc;
};