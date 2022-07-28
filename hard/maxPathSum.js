function maxPathSum(tree) {
  // Write your code here.
  return helper(tree)[1];
}

function helper(tree) {
  if (!tree) return [0, -Infinity];
  const [leftOne, leftTwo] = helper(tree.left);
  const [rightOne, rightTwo] = helper(tree.right);
  const maxAndCurr = Math.max(
    tree.value,
    tree.value + Math.max(leftOne, rightOne)
  );
  const throughAsRoot = Math.max(maxAndCurr, tree.value + leftOne + rightOne);
  const maxPathSum = Math.max(leftTwo, rightTwo, throughAsRoot);
  return [maxAndCurr, maxPathSum];
}

// Do not edit the line below.
exports.maxPathSum = maxPathSum;
