function findSuccessor(tree, node) {
  // Write your code here.
  const treeInfo = new TreeInfo(null, false, 0);
  helper(tree, node, treeInfo);
  if (treeInfo.seen) return treeInfo.lastVisited;
  else return null;
}

function helper(tree, node, treeInfo) {
  if (!tree) return;
  helper(tree.left, node, treeInfo);
  if (treeInfo.seen && treeInfo.count === 0) {
    treeInfo.lastVisited = tree;
    treeInfo.count = 1;
    return;
  }
  if (tree.value === node.value) {
    treeInfo.seen = true;
  }
  helper(tree.right, node, treeInfo);
}
