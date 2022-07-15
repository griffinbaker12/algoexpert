// This is an input class. Do not edit.
class Node {
  constructor(value) {
    this.value = value;
    this.prev = null;
    this.next = null;
  }
}

// Feel free to add new properties and methods to the class.
class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  // O(1) T & S
  setHead(node) {
    // Write your code here.
    if (!this.head) {
      this.head = node;
      this.tail = node;
      return;
    }
    this.insertBefore(this.head, node);
  }

  // O(1) T & S
  setTail(node) {
    // Write your code here.
    if (!this.tail) {
      this.setHead(node);
      return;
    }
    this.insertAfter(this.tail, node);
  }

  // O(1) T & S
  insertBefore(node, nodeToInsert) {
    // Write your code here.
    if (nodeToInsert === this.head && nodeToInsert === this.null) return;
    this.remove(nodeToInsert);
    nodeToInsert.prev = node.prev;
    nodeToInsert.next = node;
    if (node.prev) node.prev.next = nodeToInsert;
    else this.head = nodeToInsert;
    node.prev = nodeToInsert;
  }

  // O(1) T & S
  insertAfter(node, nodeToInsert) {
    // Write your code here.
    if (nodeToInsert === this.head && nodeToInsert === this.null) return;
    this.remove(nodeToInsert);
    nodeToInsert.prev = node;
    nodeToInsert.next = node.next;
    if (node.next) node.next.prev = nodeToInsert;
    else this.tail = nodeToInsert;
    node.next = nodeToInsert;
  }

  // O(p) T | O(1) S
  insertAtPosition(position, nodeToInsert) {
    // Write your code here.
    if (position === 1) {
      this.setHead(nodeToInsert);
      return;
    }
    let count = 1;
    // If you get to the point where the next is null, then you can just call set tail
    let currentNode = this.head;
    while (currentNode && position !== count) {
      if (currentNode.next === null) {
        this.setTail(nodeToInsert);
        return;
      }
      count++;
      currentNode = currentNode.next;
    }
    this.insertBefore(currentNode, nodeToInsert);
  }

  // O(N) T | O(1) S
  removeNodesWithValue(value) {
    // Write your code here.
    let currentNode = this.head;
    while (currentNode) {
      const next = currentNode.next;
      if (currentNode.value === value) {
        this.remove(currentNode);
      }
      currentNode = next;
    }
  }

  // O(1) TS
  remove(node) {
    // Write your code here.
    if (node === this.head) this.head = node.next;
    if (node === this.tail) this.tail = node.prev;
    this.removeNodeBindings(node);
  }

  // O(N) T | O(1) S
  containsNodeWithValue(value) {
    // Write your code here.
    let currentNode = this.head;
    while (currentNode && currentNode.value !== value)
      currentNode = currentNode.next;
    return currentNode !== null;
  }

  removeNodeBindings(node) {
    if (node.prev) node.prev.next = node.next;
    if (node.next) node.next.prev = node.prev;
    node.prev = null;
    node.next = null;
  }
}

// Do not edit the lines below.
exports.Node = Node;
exports.DoublyLinkedList = DoublyLinkedList;
