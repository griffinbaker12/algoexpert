function moveElementToEnd(array, toMove) {
  // Write your code here.
  let count = 0;
  for (let i = 0; i < array.length; i++) {
    if (array[i] !== toMove) {
      const temp = array[count];
      array[count] = array[i];
      array[i] = temp;
      count++;
    }
  }
  return array;
}
