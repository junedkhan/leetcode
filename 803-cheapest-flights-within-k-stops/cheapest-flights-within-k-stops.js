/**
 * @param {number} n
 * @param {number[][]} flights
 * @param {number} src
 * @param {number} dst
 * @param {number} k
 * @return {number}
 */
var findCheapestPrice = function(n, flights, src, dst, k) {
 // Step 1: Build adjacency list
  const graph = Array.from({ length: n }, () => []);
  for (const [from, to, price] of flights) {
    graph[from].push([to, price]);
  }

  // Step 2: Init queue: [city, totalCost, stopsSoFar]
  const queue = [[src, 0, 0]];
  // Min cost to reach each city with certain stops
  const minCost = Array(n).fill(Infinity);
  minCost[src] = 0;

  let answer = -1;

  while (queue.length > 0) {
    const [city, cost, stops] = queue.shift();

    // If destination reached, update answer
    if (city === dst) {
      if (answer === -1 || cost < answer) answer = cost;
      continue;
    }

    // If stops limit exceeded, skip
    if (stops > k) continue;

    // Explore neighbors
    for (const [nei, price] of graph[city]) {
      const newCost = cost + price;
      // Only push if cheaper than previous found for that city at this point
      if (newCost < minCost[nei]) {
        minCost[nei] = newCost;
        queue.push([nei, newCost, stops + 1]);
      }
    }
  }
  return answer;
};