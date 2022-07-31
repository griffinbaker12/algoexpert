function minNumberOfJumps(array) {
  // Write your code here.
  const distance = new Array(array.length).fill(Infinity);
  distance[0] = 0;
  for (let i = 1; i < array.length; i++) {
    for (let j = 0; j < i; j++) {
      if (array[j] >= i - j) {
        distance[i] = Math.min(distance[i], distance[j] + 1);
      }
    }
  }
  return distance.at(-1);
}

// Do not edit the line below.
exports.minNumberOfJumps = minNumberOfJumps;

function minNumberOfJumps(array) {
  // Write your code here.
  if (array.length === 1) return 0;
  let jumps = 0;
  let maxReach = array[0];
  let steps = array[0];
  for (let i = 1; i < array.length - 1; i++) {
    maxReach = Math.max(maxReach, array[i] + i);
    steps--;
    if (steps === 0) {
      jumps++;
      steps = maxReach - i;
    }
  }
  return jumps + 1;
}

// Do not edit the line below.
exports.minNumberOfJumps = minNumberOfJumps;
