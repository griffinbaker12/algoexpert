// This is an input class. Do not edit.
class BST {
  constructor(value, left = null, right = null) {
    this.value = value;
    this.left = left;
    this.right = right;
  }
}

class TreeInfo {
  constructor(rootIdx) {
    this.rootIdx = rootIdx;
  }
}

function reconstructBst(preOrderTraversalValues) {
  // Write your code here.
  const treeInfo = new TreeInfo(0);
  return reconstructBstFromRange(
    -Infinity,
    Infinity,
    preOrderTraversalValues,
    treeInfo
  );
}

function reconstructBstFromRange(
  lowerBound,
  upperBound,
  preOrderTraversalValues,
  currentSubtreeInfo
) {
  if (currentSubtreeInfo.rootIdx === preOrderTraversalValues.length) return;
  const rootValue = preOrderTraversalValues[currentSubtreeInfo.rootIdx];
  if (rootValue < lowerBound || rootValue >= upperBound) return;
  currentSubtreeInfo.rootIdx++;
  const leftSubTree = reconstructBstFromRange(
    lowerBound,
    rootValue,
    preOrderTraversalValues,
    currentSubtreeInfo
  );
  const rightSubTree = reconstructBstFromRange(
    rootValue,
    upperBound,
    preOrderTraversalValues,
    currentSubtreeInfo
  );
  return new BST(rootValue, leftSubTree, rightSubTree);
}
