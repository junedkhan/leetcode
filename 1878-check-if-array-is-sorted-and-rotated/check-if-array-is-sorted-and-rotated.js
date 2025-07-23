/**
 * @param {number[]} nums
 * @return {boolean}
 */
var check = function(nums) {
    let count = 0;

    for(let i = 0; i < nums.length; i++) {
        //check first region
        if(nums[i] > nums[(i + 1) % nums.length]) {
            count++;
        }

        if(count > 1) {
            return false;
        }
    }
    

    return true;
};