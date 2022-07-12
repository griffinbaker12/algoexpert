function hasSingleCycle(array) {
  // Write your code here.
  let count = 0;
  let currentIdx = 0;
  while (count < array.length) {
    if (count > 0 && currentIdx === 0) return false;
    count++;
    const increment = array[currentIdx];
    currentIdx = getNextIndex(array, currentIdx, increment);
  }
  return currentIdx === 0;
}

function getNextIndex(array, index, increment) {
  index = (increment + index) % array.length;
  return index >= 0 ? index : index + array.length;
}
