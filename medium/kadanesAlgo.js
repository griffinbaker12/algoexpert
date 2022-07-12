function kadanesAlgorithm(array) {
  // Write your code here.
  let currentSum = array[0];
  let maxSum = array[0];
  for (let i = 1; i < array.length; i++) {
    currentSum = Math.max(array[i] + currentSum, array[i]);
    maxSum = Math.max(maxSum, currentSum);
  }
  return maxSum;
}
