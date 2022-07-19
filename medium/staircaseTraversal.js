function staircaseTraversal(height, maxSteps) {
  // Write your code here.
  return helper(height, maxSteps, { 0: 1, 1: 1 });
}

function helper(height, maxSteps, memoize) {
  if (height in memoize) return memoize[height];

  let count = 0;
  for (let step = 1; step < Math.min(maxSteps, height) + 1; step++) {
    count += helper(height - step, maxSteps, memoize);
  }

  memoize[height] = count;

  return count;
}
