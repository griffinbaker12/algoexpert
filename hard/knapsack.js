function knapsackProblem(items, capacity) {
  // Write your code here.
  // Replace return below.
  const grid = new Array(items.length + 1).fill(0);
  for (let i = 0; i < grid.length; i++) {
    grid[i] = new Array(capacity + 1).fill(0);
  }
  for (let i = 1; i < grid.length; i++) {
    for (let j = 1; j < grid[0].length; j++) {
      if (items[i - 1][1] <= j) {
        const weightDiff = j - items[i - 1][1];
        // grid[i][j] = Math.max(grid[i-1][weightDiff] + items[i-1][0], grid[i-1][j]);
        grid[i][j] = Math.max(
          grid[i - 1][weightDiff] + items[i - 1][0],
          grid[i - 1][j],
          grid[i][j - 1]
        );
      } else {
        grid[i][j] = Math.max(grid[i - 1][j], grid[i][j - 1]);
        // grid[i][j] = grid[i-1][j];
      }
    }
  }
  return [grid.at(-1).at(-1), getKnapsackItems(grid, items)];
}

function getKnapsackItems(grid, items) {
  let i = grid.length - 1;
  let j = grid[0].length - 1;
  const knapsack = [];
  while (grid[i][j]) {
    if (grid[i - 1][j] === grid[i][j]) {
      i--;
    } else {
      knapsack.push(i - 1);
      j = j - items[i - 1][1];
      i--;
    }
  }
  return knapsack;
}

// Do not edit the line below.
exports.knapsackProblem = knapsackProblem;
