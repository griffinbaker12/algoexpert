function smallestDifference(arrayOne, arrayTwo) {
  // Write your code here.
  arrayOne.sort((a, b) => a - b);
  arrayTwo.sort((a, b) => a - b);
  let smallest = Number.MAX_SAFE_INTEGER;
  let smallestPair = [];
  let a1P = 0;
  let a2P = 0;

  while (a1P < arrayOne.length && a2P < arrayTwo.length) {
    const diff = Math.abs(arrayOne[a1P] - arrayTwo[a2P]);
    if (!diff) return [arrayOne[a1P], arrayTwo[a2P]];
    if (diff < smallest) {
      smallest = diff;
      smallestPair = [arrayOne[a1P], arrayTwo[a2P]];
      if (arrayOne[a1P] < arrayTwo[a2P]) {
        a1P++;
      } else a2P++;
    } else {
      if (arrayOne[a1P] < arrayTwo[a2P]) {
        a1P++;
      } else a2P++;
    }
  }

  return smallestPair;
}
