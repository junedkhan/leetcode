/**
 * @param {number[]} nums
 * @param {number[]} divisors
 * @return {number}
 */
var maxDivScore = function(nums, divisors) {
    let maxScore = 0;
    let result = Number.POSITIVE_INFINITY;
    divisors.forEach((divisor) => {
        let temp = 0;
        nums.forEach((num) => {
            if(num % divisor === 0) {
                temp += 1;
            }
        });

        if(temp > maxScore || (temp === maxScore && divisor < result)) { 
                result = divisor;
                maxScore = temp;
         }
    })

    return result;
};