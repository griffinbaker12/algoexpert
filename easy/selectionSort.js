function selectionSort(array) {
  // Write your code here.
  for (let i = 0; i < array.length; i++) {
    let smallestIndex = i;
    for (let j = i + 1; j < array.length; j++) {
      if (array[j] < array[smallestIndex]) {
        smallestIndex = j;
      }
    }
    if (smallestIndex !== i) {
      const temp = array[i];
      array[i] = array[smallestIndex];
      array[smallestIndex] = temp;
    }
  }
  return array;
}
