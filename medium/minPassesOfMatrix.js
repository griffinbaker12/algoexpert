function minimumPassesOfMatrix(matrix) {
  // Write your code here.
  const passes = convertNegatives(matrix);
  return !containsNegatives(matrix) ? passes - 1 : -1;
}

function containsNegatives(matrix) {
  for (const row of matrix) {
    for (const value of row) {
      if (value < 0) return true;
    }
  }
  return false;
}

function convertNegatives(matrix) {
  let queue = [];
  let passes = 0;
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[0].length; j++) {
      if (matrix[i][j] > 0) queue.push([i, j]);
    }
  }
  let nextQueue = [];
  while (queue.length) {
    const [currentRow, currentCol] = queue.shift();
    const adjacents = getAdjacents(matrix, currentRow, currentCol);
    for (const adjacent of adjacents) {
      const [adjRow, adjCol] = adjacent;
      if (matrix[adjRow][adjCol] < 0) {
        matrix[adjRow][adjCol] *= -1;
        nextQueue.push([adjRow, adjCol]);
      }
    }
    if (queue.length === 0) {
      passes++;
      const temp = queue;
      queue = nextQueue;
      nextQueue = temp;
    }
  }
  return passes;
}

function getAdjacents(matrix, i, j) {
  const adjacents = [];
  if (i > 0) adjacents.push([i - 1, j]);
  if (i < matrix.length - 1) adjacents.push([i + 1, j]);
  if (j > 0) adjacents.push([i, j - 1]);
  if (j < matrix[0].length - 1) adjacents.push([i, j + 1]);
  return adjacents;
}

// Do not edit the line below.
exports.minimumPassesOfMatrix = minimumPassesOfMatrix;
