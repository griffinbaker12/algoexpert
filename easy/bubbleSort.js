function bubbleSort(array) {
  // Write your code here.
  let loopCount = 0;
  let isSorted = false;

  while (!isSorted) {
    isSorted = true;
    for (let i = 0; i < array.length - loopCount; i++) {
      if (array[i] > array[i + 1]) {
        const temp = array[i];
        array[i] = array[i + 1];
        array[i + 1] = temp;
        isSorted = false;
      }
    }
    loopCount++;
  }
  return array;
}
