function findClosestValueInBst(tree, target) {
  // Write your code here.
  return closestValueHelper(tree, target, tree.value);
  return closeDiff;
}

function closestValueHelper(tree, target, closest) {
  if (!tree) return closest;

  if (tree.value === target) return target;

  if (Math.abs(tree.value - target) < Math.abs(closest - target))
    closest = tree.value;

  if (tree.value > target) {
    return closestValueHelper(tree.left, target, closest);
  } else return closestValueHelper(tree.right, target, closest);
}

function findClosestValueInBst(tree, target) {
  // Write your code here.
  return helper(tree, target, tree.value);
}

function helper(tree, target, closest) {
  let currentTree = tree;
  while (currentTree) {
    if (Math.abs(currentTree.value - target) < Math.abs(closest - target))
      closest = currentTree.value;
    if (currentTree.value > target) {
      currentTree = currentTree.left;
    } else currentTree = currentTree.right;
  }
  return closest;
}
