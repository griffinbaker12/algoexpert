function getNthFib(n) {
  // Write your code here.
  if (n === 1) return 0;
  let currentNum = 1;
  let priorNum = 0;
  let counter = 2;

  while (counter < n - 1) {
    counter++;
    const temp = currentNum;
    currentNum += priorNum;
    priorNum = temp;
  }
  return currentNum + priorNum;
}
