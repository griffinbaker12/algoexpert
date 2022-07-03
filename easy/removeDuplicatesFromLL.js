function removeDuplicatesFromLinkedList(linkedList) {
  // Write your code here.
  let currentNum = linkedList.value;
  let nodeToAttachNextProp = linkedList;
  let currentNode = linkedList;

  while (currentNode) {
    if (currentNode.value !== currentNum) {
      nodeToAttachNextProp.next = currentNode;
      nodeToAttachNextProp = currentNode;
      currentNum = nodeToAttachNextProp.value;
      currentNode = currentNode.next;
    } else {
      currentNode = currentNode.next;
      if (!currentNode) nodeToAttachNextProp.next = null;
    }
  }
  return linkedList;
}
