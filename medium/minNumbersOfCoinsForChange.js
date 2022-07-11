function minNumberOfCoinsForChange(n, denoms) {
  // Write your code here.
  const newA = new Array(n + 1).fill(Infinity);
  newA[0] = 0;
  for (const denom of denoms) {
    for (let i = 0; i < newA.length; i++) {
      if (denom <= i) {
        newA[i] = Math.min(newA[i - denom] + 1, newA[i]);
      }
    }
  }
  if (Infinity === newA.at(-1)) return -1;
  else return newA.at(-1);
}
