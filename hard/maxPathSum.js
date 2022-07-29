function maxPathSum(tree) {
  // Write your code here.
  return helper(tree)[1];
}

function helper(tree) {
  if (!tree) return [0, -Infinity];
  const [leftMaxAsAsBranch, leftMaxPath] = helper(tree.left);
  const [rightMaxAsBranch, rightMaxPath] = helper(tree.right);
  const maxAndCurr = Math.max(
    tree.value,
    tree.value + Math.max(leftMaxAsAsBranch, rightMaxAsBranch)
  );
  const throughAsRoot = Math.max(
    maxAndCurr,
    tree.value + leftMaxAsAsBranch + rightMaxAsBranch
  );
  const maxPathSum = Math.max(leftMaxPath, rightMaxPath, throughAsRoot);
  return [maxAndCurr, maxPathSum];
}

// Do not edit the line below.
exports.maxPathSum = maxPathSum;
