// Do not edit the class below except for the buildHeap,
// siftDown, siftUp, peek, remove, and insert methods.
// Feel free to add new properties and methods to the class.
class MinHeap {
  constructor(array) {
    this.heap = this.buildHeap(array);
  }

  // O(N) time | O(1) space; not allocating any additional space
  buildHeap(array) {
    // Write your code here.
    let firstParentIdx = Math.floor((array.length - 2) / 2);
    for (let currentIdx = firstParentIdx; currentIdx >= 0; currentIdx--) {
      this.siftDown(currentIdx, array.length - 1, array);
    }
    return array;
  }

  // O(logn) time | O(1) space
  siftDown(currentIdx, endIdx, heap) {
    // Write your code here.
    let child1Idx = 2 * currentIdx + 1;
    while (child1Idx <= endIdx) {
      let child2Idx = 2 * currentIdx + 2 <= endIdx ? 2 * currentIdx + 2 : null;
      let minChildIdx;
      if (!child2Idx) {
        minChildIdx = child1Idx;
      } else
        minChildIdx = heap[child1Idx] > heap[child2Idx] ? child2Idx : child1Idx;
      if (heap[currentIdx] > heap[minChildIdx]) {
        this.swap(currentIdx, minChildIdx, heap);
        currentIdx = minChildIdx;
        child1Idx = 2 * currentIdx + 1;
      } else return;
    }
  }

  // O(logn) time | O(1) space
  // Idx from which you start sifting up, and then we pass in a heap
  siftUp(currentIdx, heap) {
    // Write your code here.
    let parentIdx = Math.floor((currentIdx - 1) / 2);
    while (currentIdx > 0 && heap[currentIdx] < heap[parentIdx]) {
      this.swap(currentIdx, parentIdx, heap);
      currentIdx = parentIdx;
      parentIdx = Math.floor((currentIdx - 1) / 2);
    }
  }

  peek() {
    // Write your code here.
    return this.heap[0];
  }

  remove() {
    // Write your code here.
    this.swap(0, this.heap.length - 1, this.heap);
    const valueToRemove = this.heap.pop();
    this.siftDown(0, this.heap.length - 1, this.heap);
    return valueToRemove;
  }

  insert(value) {
    // Write your code here.
    this.heap.push(value);
    this.siftUp(this.heap.length - 1, this.heap);
  }

  swap(i, j, heap) {
    const temp = heap[i];
    heap[i] = heap[j];
    heap[j] = temp;
  }
}

// Do not edit the line below.
exports.MinHeap = MinHeap;
