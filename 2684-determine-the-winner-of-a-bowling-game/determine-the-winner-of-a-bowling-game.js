/**
 * @param {number[]} player1
 * @param {number[]} player2
 * @return {number}
 */

 const helperSum = (acc, num, index, arr) => {
    if(arr[index - 1] === 10 || arr[index - 2] === 10) {
        acc += 2 * num;
    } else {
        acc += num;
    }

    return acc
}
var isWinner = function(player1, player2) {
    let player1Sum = player1.reduce(helperSum, 0);
    let player2Sum = player2.reduce(helperSum, 0);

    console.log("player1Sum", player1Sum)
    console.log("player2Sum", player2Sum)

    if(player1Sum > player2Sum) {
        return 1;
    }

    if(player2Sum > player1Sum) {
        return 2;
    }

    return 0;
};