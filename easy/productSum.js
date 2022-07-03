function productSum(array) {
  // Write your code here.
  return helper(array);
}

function helper(input, sum = 0, depth = 1, aggDepth = 1) {
  if (typeof input === 'number') {
    sum += input * aggDepth;
  } else if (typeof input === 'object') {
    for (let i = 0; i < input.length; i++) {
      if (typeof input[i] === 'number') sum += input[i] * aggDepth;
      else if (typeof input[i] === 'object') {
        const depthToPass = aggDepth * (depth + 1);
        sum = helper(input[i], sum, depth + 1, depthToPass);
      }
    }
  }
  return sum;
}
