/**
 * @param {number} n
 * @param {number[][]} flights
 * @param {number} src
 * @param {number} dst
 * @param {number} k
 * @return {number}
 */
var findCheapestPrice = function(n, flights, src, dst, k) {
 /// Build adjacency list
  const graph = Array.from({ length: n }, () => []);
  for (const [from, to, price] of flights) {
    graph[from].push([to, price]);
  }

  // Min-heap: [totalCost, city, stopsUsed]
  const heap = [[0, src, 0]];

  // Track cheapest price to (city, stops) combination
  const visited = Array.from({ length: n }, () => Array(k + 2).fill(Infinity));
  visited[src][0] = 0;

  while (heap.length) {
    // Always pick the minimum cost state
    heap.sort((a, b) => a[0] - b[0]);
    const [cost, city, stops] = heap.shift();

    if (city === dst) return cost;
    if (stops > k) continue;

    for (const [nei, price] of graph[city]) {
      const newCost = cost + price;
      // Only process if this path is cheaper than previous for (nei, stops+1)
      if (newCost < visited[nei][stops + 1]) {
        visited[nei][stops + 1] = newCost;
        heap.push([newCost, nei, stops + 1]);
      }
    }
  }
  return -1;
};