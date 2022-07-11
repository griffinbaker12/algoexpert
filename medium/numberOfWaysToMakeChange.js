function numberOfWaysToMakeChange(n, denoms) {
  // Write your code here.
  const newA = new Array(n + 1).fill(0);
  newA[0] = 1;
  for (let d of denoms) {
    for (let i = 1; i < newA.length; i++) {
      if (d <= i) newA[i] += newA[i - d];
    }
  }
  return newA.at(-1);
}
