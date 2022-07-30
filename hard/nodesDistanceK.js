// This is an input class. Do not edit.
class BinaryTree {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

// O(N) Time and Space

function findNodesDistanceK(tree, target, k) {
  // Write your code here.
  const answerArr = [];
  const nodesToParents = {};
  const visited = new Set();
  const parentArr = [];
  findNodeAndParentsOfTarget(tree, target, parentArr);
  const queue = [[parentArr.shift(), 0]];
  while (queue.length) {
    const [currentNode, distanceFromTarget] = queue.shift();
    if (visited.has(currentNode.value)) {
      continue;
    } else {
      visited.add(currentNode.value);
    }
    if (distanceFromTarget === k) {
      answerArr.push(currentNode.value);
      queue.map(([el, _]) => answerArr.push(el.value));
      break;
    }
    let currentParent;
    if (parentArr.length) {
      currentParent = parentArr.shift();
    }
    if (currentParent) {
      const node = currentParent;
      if (!visited.has(node.value)) {
        queue.push([currentParent, distanceFromTarget + 1]);
      }
    }
    if (currentNode.left) {
      const node = currentNode.left;
      if (!visited.has(node.value)) {
        queue.push([currentNode.left, distanceFromTarget + 1]);
      }
    }
    if (currentNode.right) {
      const node = currentNode.right;
      if (!visited.has(node.value)) {
        queue.push([currentNode.right, distanceFromTarget + 1]);
      }
    }
  }
  return answerArr;
}

function findNodeAndParentsOfTarget(tree, target, parents, targetNode) {
  if (!tree) return;
  if (tree.value === target) {
    parents.push(tree);
    return true;
  }
  const foundLeft = findNodeAndParentsOfTarget(tree.left, target, parents);
  if (foundLeft) {
    parents.push(tree);
    return true;
  }
  const foundRight = findNodeAndParentsOfTarget(tree.right, target, parents);
  if (foundRight) {
    parents.push(tree);
    return true;
  }
}

// Do not edit the lines below.
exports.BinaryTree = BinaryTree;
exports.findNodesDistanceK = findNodesDistanceK;
