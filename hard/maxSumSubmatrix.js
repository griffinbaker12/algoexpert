function maximumSumSubmatrix(matrix, size) {
  // Write your code here.
  const sums = createSumMatrix(matrix);
  let maxSum = -Infinity;

  for (let i = size - 1; i < matrix.length; i++) {
    for (let j = size - 1; j < matrix[0].length; j++) {
      let total = sums[i][j];

      const touchesLeft = j - size < 0;
      const touchesTop = i - size < 0;

      if (touchesLeft && touchesTop) {
        maxSum = Math.max(total, maxSum);
        continue;
      }

      if (touchesLeft) {
        total -= sums[i - size][j];
      } else if (touchesTop) {
        total -= sums[i][j - size];
      } else {
        total +=
          sums[i - size][j - size] - sums[i][j - size] - sums[i - size][j];
      }
      maxSum = Math.max(total, maxSum);
    }
  }

  return maxSum;
}

function createSumMatrix(matrix) {
  const sums = [];
  for (let row = 0; row < matrix.length; row++) {
    sums.push([]);
    for (let col = 0; col < matrix[0].length; col++) {
      sums[row].push(0);
    }
  }
  sums[0][0] = matrix[0][0];

  // Fill the first row
  for (let idx = 1; idx < matrix[0].length; idx++) {
    sums[0][idx] = sums[0][idx - 1] + matrix[0][idx];
  }

  // Fill the first column
  for (let idx = 1; idx < matrix.length; idx++) {
    sums[idx][0] = sums[idx - 1][0] + matrix[idx][0];
  }

  // Fill rest of matrix
  for (let row = 1; row < matrix.length; row++) {
    for (let col = 1; col < matrix[0].length; col++) {
      sums[row][col] =
        matrix[row][col] +
        sums[row - 1][col] +
        sums[row][col - 1] -
        sums[row - 1][col - 1];
    }
  }

  return sums;
}

// Do not edit the line below.
exports.maximumSumSubmatrix = maximumSumSubmatrix;

function maximumSumSubmatrix(matrix, size) {
  // Write your code here.
  let maxSum = -Infinity;
  for (let row = 0; row <= matrix.length - size; row++) {
    for (let col = 0; col <= matrix[0].length - size; col++) {
      const currSum = getSum(matrix, row, col, size);
      maxSum = Math.max(maxSum, currSum);
    }
  }
  return maxSum;
}

function getSum(matrix, row, col, size) {
  let sum = 0;
  for (let i = row; i < row + size; i++) {
    for (let j = col; j < col + size; j++) {
      sum += matrix[i][j];
    }
  }
  return sum;
}

// Do not edit the line below.
exports.maximumSumSubmatrix = maximumSumSubmatrix;
