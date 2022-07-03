function minimumWaitingTime(queries) {
  // Write your code here.
  queries.sort((a, b) => a - b);
  let acc = 0;
  let minTime = 0;
  for (let i = 1; i < queries.length; i++) {
    minTime += queries[i - 1];
    acc += minTime;
  }
  return acc;
}

function minimumWaitingTime(queries) {
  // Write your code here.
  queries.sort((a, b) => b - a);
  let wait = 0;
  for (let i = queries.length - 1; i >= 0; i--) {
    wait += i * queries[i];
  }
  return wait;
}
