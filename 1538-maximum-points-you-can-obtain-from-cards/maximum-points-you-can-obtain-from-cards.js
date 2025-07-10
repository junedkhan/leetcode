/**
 * @param {number[]} cardPoints
 * @param {number} k
 * @return {number}
 */
var maxScore = function(cardPoints, k) {
    const totalCards = cardPoints.length;
    const windowSize = totalCards - k;
    const totalPoints = cardPoints.reduce((acc, item) => acc+item, 0);

     let windowPoints = 0;
     let minPoints = Infinity;

     for(let i=0, j=0; i < totalCards; i++) {
        windowPoints += cardPoints[i];

        if(i - j + 1 > windowSize) {
            windowPoints -= cardPoints[j++];
        }

        if(i - j + 1 === windowSize) {
            minPoints = Math.min(minPoints, windowPoints);
        }
     }

     return totalPoints - minPoints;
};