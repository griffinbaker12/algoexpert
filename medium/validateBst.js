// This is an input class. Do not edit.
class BST {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

function validateBst(tree) {
  // Write your code here.
  return helper(tree, -Infinity, Infinity);
}

function helper(tree, min, max) {
  if (tree === null) return true;
  if (tree.value < min || tree.value > max) return false;
  const isLeftValid = helper(tree.left, min, tree.value - 1);
  return isLeftValid && helper(tree.right, tree.value, max);
}
