depthFirstSearch(array) {
  // Write your code here.
  array.push(this.name)
  for (const child of this.children) {
    child.depthFirstSearch(array);
  }
  return array;
}