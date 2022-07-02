function nodeDepths(root) {
  // Write your code here.
  let sum = 0;
  const stack = [{ node: root, depth: 0 }];
  while (stack.length !== 0) {
    const { node, depth } = stack.shift();
    sum += depth;
    if (node.left) stack.push({ node: node.left, depth: depth + 1 });
    if (node.right) stack.push({ node: node.right, depth: depth + 1 });
  }
  return sum;
}

function nodeDepths(root, depth = 0) {
  // Write your code here.
  if (root === null) return 0;
  return (
    depth + nodeDepths(root.left, depth + 1) + nodeDepths(root.right, depth + 1)
  );
}

function nodeDepths(root) {
  // Write your code here.
  return helper(root, 0, [0]);
}

function helper(node, depth, sumArr) {
  sumArr[0] += depth;
  if (node.left) helper(node.left, depth + 1, sumArr);
  if (node.right) helper(node.right, depth + 1, sumArr);
  return sumArr[0];
}
