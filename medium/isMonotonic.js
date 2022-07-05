function isMonotonic(array) {
  // Write your code here.
  let p1 = 0;
  let p2 = 1;
  let direction = array[0] < array[array.length - 1] ? 'inc' : 'dec';

  while (p2 < array.length) {
    if (direction === 'dec' && array[p2] > array[p1]) return false;
    else if (direction === 'inc' && array[p1] > array[p2]) return false;
    p1++;
    p2++;
  }

  return true;
}
