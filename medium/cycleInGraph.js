function cycleInGraph(edges) {
  // Write your code here.
  for (let i = 0; i < edges.length; i++) {
    if (checkForCycle(edges, i)) return true;
  }
  return false;
}

function checkForCycle(edges, target) {
  const seen = new Set();
  const stack = [target];
  while (stack.length) {
    const curr = stack.pop();
    if (edges[curr].includes(target)) return true;
    seen.add(curr);
    for (const edge of edges[curr]) {
      if (!seen.has(edge)) stack.push(edge);
    }
  }
  return false;
}
