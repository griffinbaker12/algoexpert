// This is an input class. Do not edit.
class LinkedList {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

function sumOfLinkedLists(linkedListOne, linkedListTwo) {
  // Write your code here.
  let linkedListOneArr = [];
  let linkedListTwoArr = [];

  let currentNode = linkedListOne;
  while (currentNode) {
    linkedListOneArr.push(currentNode.value);
    currentNode = currentNode.next;
  }
  currentNode = linkedListTwo;
  while (currentNode) {
    linkedListTwoArr.push(currentNode.value);
    currentNode = currentNode.next;
  }
  let list1Str = linkedListOneArr.reverse().join('');
  let list2Str = linkedListTwoArr.reverse().join('');
  let number = Number(list1Str) + Number(list2Str);
  let numberStr = String(number).split('').reverse().join('');
  // let head;
  let count = 1;
  currentNode = new LinkedList(Number(numberStr[0]));
  let head = currentNode;
  while (count < numberStr.length) {
    let nextNode = new LinkedList(Number(numberStr[count]));
    currentNode.next = nextNode;
    currentNode = nextNode;
    count++;
  }
  return head;
}

// Do not edit the lines below.
exports.LinkedList = LinkedList;
exports.sumOfLinkedLists = sumOfLinkedLists;
