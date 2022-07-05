function threeNumberSum(array, targetSum) {
  // Write your code here.
  const triplets = [];
  array.sort((a, b) => a - b);
  for (let i = 0; i < array.length - 2; i++) {
    const triplet = [];
    let p1 = i + 1;
    let p2 = array.length - 1;

    while (p1 < p2) {
      const guess = array[p1] + array[p2] + array[i];
      const diff = targetSum - guess;

      if (!diff) {
        triplets.push([array[i], array[p1], array[p2]]);
        p1++;
        p2--;
      } else if (guess > targetSum) {
        p2--;
      } else {
        p1++;
      }
    }
  }
  return triplets;
}
