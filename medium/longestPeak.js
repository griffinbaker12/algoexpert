function longestPeak(array) {
  // Write your code here.
  let largestPeak = 0;
  let i = 1;
  while (i < array.length - 1) {
    const isPeak = array[i - 1] < array[i] && array[i] > array[i + 1];
    if (!isPeak) {
      i++;
      continue;
    }
    let count = 3;
    let left = i - 2;
    while (left >= 0) {
      if (array[left + 1] > array[left]) {
        count++;
        left--;
      } else break;
    }
    let right = i + 2;
    while (right < array.length) {
      if (array[right] < array[right - 1]) {
        count++;
        right++;
      } else break;
    }
    if (count > largestPeak) largestPeak = count;
    i = right;
  }
  return largestPeak;
}
