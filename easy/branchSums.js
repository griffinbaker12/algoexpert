function branchSums(root) {
  // Write your code here.
  return branchSumsHelper(root, []);
}

function branchSumsHelper(node, list, currentSum = 0) {
  currentSum += node.value;
  if (node.left) branchSumsHelper(node.left, list, currentSum);
  if (node.right) branchSumsHelper(node.right, list, currentSum);
  if (!node.left && !node.right) {
    list.push(currentSum);
  }
  return list;
}
