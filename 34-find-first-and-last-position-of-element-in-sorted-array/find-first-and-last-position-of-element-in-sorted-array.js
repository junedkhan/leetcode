/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

 const binarySearch = (nums, target, i, j) => {
    const mid = Math.floor((i+j)/2);

    if(nums[mid] === target) {
        return mid;
    }

    if(i > j) {
        return -1;
    }
        if(nums[mid] < target) {
        i = mid + 1;
       } else {
        j = mid - 1;
       }

      return binarySearch(nums, target, i, j);
 }
var searchRange = function(nums, target) {
    const result = [-1, -1];

    const foundIndex =   binarySearch(nums, target, 0, nums.length - 1);

    if(foundIndex !== -1) {
        let forUB = foundIndex, forLB = foundIndex;
        while(nums[forUB] === target) {
            result[1] = forUB;
            forUB++;
        }

        while(nums[forLB] === target) {
            result[0] = forLB;
            forLB--;
        }
    }

    return result;
};