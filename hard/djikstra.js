function dijkstrasAlgorithm(start, edges) {
  // Write your code here.
  const numberOfVertices = edges.length;
  const minDistances = new Array(edges.length).fill(Infinity);
  minDistances[start] = 0;
  const visited = new Set();
  while (visited.size !== numberOfVertices) {
    const [vertex, currentMinDistance] = getVertexWithMinDistance(
      minDistances,
      visited
    );
    if (currentMinDistance === Infinity) break;
    visited.add(vertex);
    for (const edge of edges[vertex]) {
      const [destination, distanceToDestination] = edge;
      if (visited.has(destination)) continue;
      minDistances[destination] = Math.min(
        currentMinDistance + distanceToDestination,
        minDistances[destination]
      );
    }
  }
  return minDistances.map(x => (x !== Infinity ? x : -1));
}

function getVertexWithMinDistance(minDistances, visited) {
  let currentMinDistance = Infinity;
  let vertex = -1;
  for (let i = 0; i < minDistances.length; i++) {
    if (visited.has(i)) continue;
    if (minDistances[i] < currentMinDistance) {
      vertex = i;
      currentMinDistance = minDistances[i];
    }
  }
  return [vertex, currentMinDistance];
}

// Do not edit the line below.
exports.dijkstrasAlgorithm = dijkstrasAlgorithm;
