function mergeOverlappingIntervals(array) {
  // Write your code here.
  array.sort((a, b) => a[0] - b[0]);
  let currentInterval = array[0];
  const intervals = [];
  intervals.push(currentInterval);

  for (const interval of array) {
    const [_, currJ] = currentInterval;
    const [intI, intJ] = interval;
    if (currJ >= intI) currentInterval[1] = Math.max(currJ, intJ);
    else {
      currentInterval = interval;
      intervals.push(currentInterval);
    }
  }
  return intervals;
}
