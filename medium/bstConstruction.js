// Feel free to add new properties and methods
// to the class.
class BST {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }

  insert(value) {
    // Write your code here.
    // Do not edit the return statement of this method.
    let node = this;
    while (true) {
      if (value >= node.value) {
        if (node.right) {
          node = node.right;
        } else {
          node.right = new BST(value);
          break;
        }
      } else {
        if (node.left) {
          node = node.left;
        } else {
          node.left = new BST(value);
          break;
        }
      }
    }
    return this;
  }

  contains(value) {
    // Write your code here.
    let node = this;
    while (node) {
      if (node.value === value) return true;
      else if (value > node.value) node = node.right;
      else node = node.left;
    }
    return false;
  }

  remove(value, parentNode = null) {
    // Write your code here.
    // Do not edit the return statement of this method.
    let node = this;
    while (node) {
      if (value < node.value) {
        parentNode = node;
        node = node.left;
      } else if (value > node.value) {
        parentNode = node;
        node = node.right;
      } else {
        // Value has 2 children nodes; find smallest value of right-most sub tree and replace it with value we are removing, and then remove that smallest value
        // also we have already dealt with the case where the node has 2 children nodes
        if (node.right && node.left) {
          node.value = node.right.getMinValue();
          node.right.remove(node.value, node);
        } else if (!parentNode) {
          if (node.left) {
            node.value = node.left.value;
            node.right = node.left.right;
            node.left = node.left.left;
          } else if (node.right) {
            node.value = node.right;
            node.left = node.right.left;
            node.right = node.right.right;
          } else {
            node.value = null;
          }
        }
        // In these cases, the value that we are trying to find only has 1 children node and we are determining whether it is a right or left child
        else if (parentNode.left === node) {
          parentNode.left = node.left !== null ? node.left : node.right;
        } else if (parentNode.right === node) {
          parentNode.right = node.left !== null ? node.left : node.right;
        }
        break;
      }
    }
    return this;
  }

  getMinValue() {
    let node = this;
    while (node) {
      if (node.left === null) return node.value;
      else node = node.left;
    }
  }
}
