function firstDuplicateValue(array) {
  // Write your code here.
  for (let i = 0; i < array.length; i++) {
    const absValue = Math.abs(array[i]);
    if (array[absValue - 1] < 0) return absValue;
    array[absValue - 1] *= -1;
  }
  return -1;
}
