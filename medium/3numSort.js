function threeNumberSort(array, order) {
  // Write your code here.
  let p1 = 0;
  let p2 = 0;
  let p3 = array.length - 1;

  const order1 = order[0];
  const order2 = order[1];

  while (p2 <= p3) {
    if (array[p2] === order2) {
      p2++;
    } else if (array[p2] === order1) {
      swap(array, p2, p1);
      p1++;
      p2++;
    } else {
      swap(array, p2, p3);
      p3--;
    }
  }

  return array;
}

function swap(array, i, j) {
  const temp = array[i];
  array[i] = array[j];
  array[j] = temp;
}
// Do not edit the line below.
exports.threeNumberSort = threeNumberSort;
