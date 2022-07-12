function numberOfWaysToTraverseGraph(width, height) {
  // Write your code here.
  const grid = [];
  for (let i = 0; i < height; i++) {
    const row = [];
    for (let j = 0; j < width; j++) {
      row.push(1);
    }
    grid.push(row);
  }

  for (let i = 0; i < height; i++) {
    for (let j = 0; j < width; j++) {
      let leftCount = 0,
        upCount = 0;
      if (grid[i - 1]) upCount = grid[i - 1][j];
      if (grid[i][j - 1]) leftCount = grid[i][j - 1];
      grid[i][j] = Math.max(1, upCount + leftCount);
    }
  }
  return grid[height - 1][width - 1];
}

function numberOfWaysToTraverseGraph(width, height) {
  const small = width <= height ? width : height;
  const large = small === width ? height : width;
  let top = new Array(small).fill(1);
  let current = new Array(small).fill(1);
  for (let i = 1; i < large; i++) {
    for (let j = 1; j < small; j++) current[j] = current[j - 1] + top[j];
    const temp = top;
    top = current;
    current = temp;
  }
  return top.at(-1);
}
