/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let min = prices[0];
    let profit = 0;
    for (let i = 1; i < prices.length; i++) {
        const calProfit = prices[i] - min;
        profit = Math.max(profit, calProfit);
        min = Math.min(min, prices[i]);
    }

    return profit;
};