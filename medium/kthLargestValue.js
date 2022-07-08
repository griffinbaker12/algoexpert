function findKthLargestValueInBst(tree, k) {
  // Write your code here
  const countArray = [0];
  return helper(tree, countArray, k);
}

function helper(tree, countArray, k) {
  if (!tree) return;
  const found = helper(tree.right, countArray, k);
  if (!found) {
    countArray[0]++;
  } else {
    return found;
  }
  if (countArray[0] === k) return tree.value;
  else {
    return helper(tree.left, countArray, k);
  }
}
