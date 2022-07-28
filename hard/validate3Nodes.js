// This is an input class. Do not edit.
class BST {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

function validateThreeNodes(nodeOne, nodeTwo, nodeThree) {
  // Write your code here.
  let searchOne = nodeOne;
  let searchTwo = nodeThree;
  let hasSeenNodeTwo = false;
  while (true) {
    if (searchOne === null && searchTwo === null) break;
    if (searchOne === nodeTwo || searchTwo === nodeTwo) break;

    if (searchOne === searchTwo && !hasSeenNodeTwo) return false;

    if (searchOne !== null) {
      searchOne =
        searchOne.value > nodeTwo.value ? searchOne.left : searchOne.right;
    }
    if (searchTwo !== null) {
      searchTwo =
        searchTwo.value > nodeTwo.value ? searchTwo.left : searchTwo.right;
    }
  }
  const foundNodeTwo = searchOne === nodeTwo || searchTwo === nodeTwo;
  if (!foundNodeTwo) return false;
  return searchForTarget(nodeTwo, searchOne === nodeTwo ? nodeThree : nodeOne);
}

function searchForTarget(node, target) {
  while (node !== null && node !== target) {
    node = node.value > target.value ? node.left : node.right;
  }

  return node === target;
}

// Do not edit the lines below.
exports.BST = BST;
exports.validateThreeNodes = validateThreeNodes;
