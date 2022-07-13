class Node {
  constructor(name) {
    this.name = name;
    this.children = [];
  }

  addChild(name) {
    this.children.push(new Node(name));
    return this;
  }

  breadthFirstSearch(array) {
    // Write your code here.
    const queue = [this];
    while (queue.length) {
      const current = queue.shift();
      if (!current.children) continue;
      current.children.forEach(child => queue.push(child));
      array.push(current.name);
    }
    return array;
  }
}
