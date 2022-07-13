function getYoungestCommonAncestor(topAncestor, descendantOne, descendantTwo) {
  // Write your code here.
  markAsSeen(descendantOne);
  youngestAncestor = youngest(descendantTwo);
  return youngestAncestor;
}

function markAsSeen(node) {
  if (!node) return;
  node.visited = true;
  markAsSeen(node.ancestor);
}

function youngest(node, youngestAncestor) {
  if (!node) return;
  if (node.visited) return node;
  return youngest(node.ancestor, youngestAncestor);
}
