function subarraySort(array) {
  // Write your code here.
  let minOutOfOrder = Infinity;
  let maxOutOfOrder = -Infinity;
  for (let i = 0; i < array.length; i++) {
    const num = array[i];
    if (isOutOfOrder(i, num, array)) {
      minOutOfOrder = Math.min(num, minOutOfOrder);
      maxOutOfOrder = Math.max(num, maxOutOfOrder);
    }
  }
  // This just checks to see if the bundle of code above ever runs at all... could use min or max (and does not run when everything is
  // in order)
  if (maxOutOfOrder === -Infinity) return [-1, -1];
  let left = 0;
  while (minOutOfOrder >= array[left]) {
    left++;
  }
  let right = array.length - 1;
  while (maxOutOfOrder <= array[right]) {
    right--;
  }
  return [left, right];
}

function isOutOfOrder(i, num, array) {
  if (i === 0) return num > array[i + 1];
  if (i === array.length - 1) return num < array[i - 1];
  return num > array[i + 1] || num < array[i - 1];
}

// Do not edit the line below.
exports.subarraySort = subarraySort;
