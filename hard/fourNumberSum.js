function fourNumberSum(array, targetSum) {
  // Write your code here.
  const sums = [];
  const sumObj = {};

  for (let i = 1; i < array.length - 1; i++) {
    for (let j = i + 1; j < array.length; j++) {
      const diff = targetSum - (array[i] + array[j]);
      if (diff in sumObj) {
        for (const currDiff of sumObj[diff]) {
          sums.push(currDiff.concat([array[i], array[j]]));
        }
      }
    }
    for (let k = 0; k < i; k++) {
      const currSum = array[k] + array[i];
      if (!(currSum in sumObj)) {
        sumObj[currSum] = [[array[k], array[i]]];
      } else {
        sumObj[currSum].push([array[k], array[i]]);
      }
    }
  }
  return sums;
}

// Do not edit the line below.
exports.fourNumberSum = fourNumberSum;
