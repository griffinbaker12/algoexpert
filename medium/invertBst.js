function invertBinaryTree(tree) {
  // Write your code here.
  if (!tree) return;
  const left = invertBinaryTree(tree.left);
  const right = invertBinaryTree(tree.right);
  const temp = tree.right;
  tree.right = tree.left;
  tree.left = temp;
  return tree;
}
