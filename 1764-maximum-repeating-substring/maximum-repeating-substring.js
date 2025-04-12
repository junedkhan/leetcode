/**
 * @param {string} sequence
 * @param {string} word
 * @return {number}
 */
var maxRepeating = function(sequence, word) {

    let count = 0;
    let max = 0;

    for(let i = 0; i < sequence.length; i++) {
        let start = i;
        let end = i + word.length;
        let w = sequence.slice(start, end);
        while(w === word) {
            count += 1;
            start += word.length;
            end += word.length;
            w = sequence.slice(start, end)
            if(count > max) {
                max = count;
            }
        }
        count = 0;
    }

    return max;
};