function sortedSquaredArray(array) {
  // Write your code here.
  return array.map(num => num ** 2).sort((a, b) => a - b);
}

function sortedSquaredArray(array) {
  // Write your code here.
  const newArr = new Array(array.length).fill(0);
  let start = 0;
  let end = array.length - 1;
  for (let idx = array.length - 1; idx >= 0; idx--) {
    if (Math.abs(array[start]) < Math.abs(array[end])) {
      newArr[idx] = array[end] ** 2;
      end--;
    } else {
      newArr[idx] = array[start] ** 2;
      start++;
    }
  }

  return newArr;
}
