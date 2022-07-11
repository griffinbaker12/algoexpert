function maxSubsetSumNoAdjacent(array) {
  // Write your code here.
  let maxSums = [];
  for (let i = 0; i < array.length; i++) {
    let prior = 0;
    let nextLargestAdj = 0;
    if (i - 1 >= 0) {
      prior = maxSums[i - 1];
    }
    if (i - 2 >= 0) {
      nextLargestAdj = array[i] + maxSums[i - 2];
    }
    maxSums.push(Math.max(prior, nextLargestAdj, array[i]));
  }
  return maxSums.at(-1) || 0;
}
