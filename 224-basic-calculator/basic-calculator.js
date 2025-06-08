/**
 * @param {string} s
 * @return {number}
 */
var calculate = function(s) {
    let i = 0;
    
    const dfs = () => {
        let sum = 0;
        let num = 0;
        let sign = 1; // -1, 1

        while(i < s.length) {
            if(/\d/.test(s[i])) {
                num = num * 10 + parseInt(s[i]);
            } else if(s[i] === "+") {
                sum += sign * num;
                num = 0;
                sign = 1;
            } else if(s[i] === "-") {
                 sum += sign * num;
                num = 0;
                sign = -1;
            } else if(s[i] === "(") {
                i++;
                num = dfs();
            } else if(s[i] === ")") {
                sum+= sign * num;
                return sum;
            }

            i++;
        }

        sum += sign * num;

        return sum;

    }

    return dfs();
};