// This is an input class. Do not edit.
class LinkedList {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

function removeKthNodeFromEnd(head, k) {
  // Write your code here.
  let count = 0;
  let currentNode = head;
  while (currentNode) {
    count++;
    currentNode = currentNode.next;
  }
  let nodeToRemove, priorNode;
  let newCount = 0;
  currentNode = head;
  while (newCount < count - k) {
    newCount++;
    if (newCount === count - k) {
      priorNode = currentNode;
      nodeToRemove = currentNode.next;
    } else {
      currentNode = currentNode.next;
    }
  }

  if (!nodeToRemove) {
    head.value = head.next.value;
    head.next = head.next.next;
  } else if (nodeToRemove !== head) {
    priorNode.next = nodeToRemove.next;
    nodeToRemove.next = null;
  }
}

// Do not edit the lines below.
exports.LinkedList = LinkedList;
exports.removeKthNodeFromEnd = removeKthNodeFromEnd;
