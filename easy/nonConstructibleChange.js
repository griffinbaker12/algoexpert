function nonConstructibleChange(coins) {
  // Write your code here.
  let min = 1;
  let sum = 0;
  if (coins.length === 0) return min;
  const sortedCoins = coins.sort((a, b) => a - b);
  for (let i = 0; i < coins.length; i++) {
    const value = coins[i];
    sum += value;
    if (min < value) return min;
    min = sum + 1;
  }
  return min;
}

function nonConstructibleChange(coins) {
  // Write your code here.
  let change = 0;
  if (coins.length === 0) return 1;
  coins.sort((a, b) => a - b);
  for (let i = 0; i < coins.length; i++) {
    const value = coins[i];
    if (change + 1 < value) break;
    change += value;
  }
  return change + 1;
}
