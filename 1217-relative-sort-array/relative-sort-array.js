/**
 * @param {number[]} arr1
 * @param {number[]} arr2
 * @return {number[]}
 */
var relativeSortArray = function(arr1, arr2) {

    const map = {};
    const result = [];
    // O(n)
    // O(n) where n is the length of arr1

    arr1.forEach((num, index) => {
        if(map[num] === undefined) {
            map[num] = [num]
        } else {
            map[num].push(num);
        }
    });


    arr2.forEach((num) => {
        result.push(...map[num])
        delete map[num];
    });

    Object.keys(map).forEach((num) => {
        result.push(...map[num])
    });
    
    return result;
};