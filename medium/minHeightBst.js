function minHeightBst(array) {
  // Write your code here.
  return helper(array, 0, array.length - 1);
}

function helper(array, minIdx, maxIdx) {
  if (maxIdx < minIdx) return null;
  const currIdx = Math.floor((minIdx + maxIdx) / 2);
  const bst = new BST(array[currIdx]);
  bst.left = helper(array, minIdx, currIdx - 1);
  bst.right = helper(array, currIdx + 1, maxIdx);
  return bst;
}
