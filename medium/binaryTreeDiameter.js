class BinaryTreeInfo {
  constructor(height, diameter) {
    this.height = height;
    this.diameter = diameter;
  }
}

function binaryTreeDiameter(tree) {
  return getTreeInfo(tree).diameter;
}

function getTreeInfo(tree) {
  if (!tree) return new BinaryTreeInfo(0, 0);
  const leftInfo = getTreeInfo(tree.left);
  const rightInfo = getTreeInfo(tree.right);
  const pathThroughRoot = leftInfo.height + rightInfo.height;
  const currentHeight = Math.max(leftInfo.height, rightInfo.height) + 1;
  const maxDiamBelow = Math.max(leftInfo.diameter, rightInfo.diameter);
  const currDiam = Math.max(pathThroughRoot, maxDiamBelow);
  return new BinaryTreeInfo(currentHeight, currDiam);
}
