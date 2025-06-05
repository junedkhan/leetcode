/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function(candidates, target) {
    const result = [];
      const backTrack = (index, path, total) => {

        if(total === target) {
            result.push([...path]);
            return;
        }

        if(total > target) { 
            return;
        }

        for(let i = index; i < candidates.length; i++) {
            path.push(candidates[i]);
            backTrack(i, path, total + candidates[i]);
            path.pop();
        }

      }

      backTrack(0, [], 0)

      return result;
};