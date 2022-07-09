function heightBalancedBinaryTree(tree) {
  // Write your code here.
  const treeInfo = getTreeInfo(tree);
  return treeInfo.balanced;
}

function getTreeInfo(node) {
  if (!node) return new TreeInfo(true, 0);
  const left = getTreeInfo(node.left);
  const right = getTreeInfo(node.right);
  const isBalanced =
    left.balanced &&
    right.balanced &&
    Math.abs(left.height - right.height) <= 1;
  const height = Math.max(left.height, right.height) + 1;
  const newTree = new TreeInfo(isBalanced, height);
  return newTree;
}
