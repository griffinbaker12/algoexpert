function removeIslands(matrix) {
  // Write your code here.
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[0].length; j++) {
      if (i > 0 && i < matrix.length - 1 && j > 0 && j < matrix[0].length - 1)
        continue;
      traverseIslands(i, j, matrix, true);
    }
  }
  for (let i = 1; i < matrix.length - 1; i++) {
    for (let j = 1; j < matrix[0].length - 1; j++) {
      traverseIslands(i, j, matrix, false);
    }
  }
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[0].length; j++) {
      if (matrix[i][j] === 2) matrix[i][j] = 1;
    }
  }
  return matrix;
}

function traverseIslands(i, j, matrix, isEdge) {
  if (matrix[i][j] !== 1) return;
  if (isEdge) matrix[i][j] = 2;
  else matrix[i][j] = 0;
  if (i > 0) traverseIslands(i - 1, j, matrix, isEdge);
  if (j > 0) traverseIslands(i, j - 1, matrix, isEdge);
  if (i < matrix.length - 1) traverseIslands(i + 1, j, matrix, isEdge);
  if (j < matrix[0].length - 1) traverseIslands(i, j + 1, matrix, isEdge);
}
