/**
 * @param {number[]} nums
 * @return {number}
 */
var findShortestSubArray = function(nums) {
    // solved
    let maxFreq = 0
    const map = {}
    for(let i=0; i<nums.length; i++){
        const num = nums[i]
        if(map[num]){
            map[num].count += 1,
            map[num].idxs[1] = i
        }
        else{
            map[num] = {
                count: 1,
                idxs: [i]
            }
        }
        if(map[num].count > maxFreq) maxFreq = map[num].count
    }
    if (maxFreq === 1) return 1
    
    let minLen = nums.length
    for(const num in map){
        if(map[num].count === maxFreq){

            const len = map[num].idxs[1] - map[num].idxs[0] + 1
            if(len < minLen) minLen = len
        }
    }

    return minLen
};