function maximizeExpression(array) {
  // Write your code here.
  if (array.length < 4) return 0;
  const maxOfA = new Array(1).fill(array[0]);
  const maxOfAMinusB = new Array(1).fill(-Infinity);
  const maxOfAMinusBPlusC = new Array(2).fill(-Infinity);
  const maxOfAMinusBPlusCMinusD = new Array(3).fill(-Infinity);

  for (let i = 1; i < array.length; i++) {
    maxOfA.push(Math.max(array[i], maxOfA[i - 1]));
  }

  for (let i = 1; i < array.length; i++) {
    maxOfAMinusB.push(Math.max(maxOfAMinusB[i - 1], maxOfA[i - 1] - array[i]));
  }

  for (let i = 2; i < array.length; i++) {
    maxOfAMinusBPlusC.push(
      Math.max(maxOfAMinusBPlusC[i - 1], maxOfAMinusB[i - 1] + array[i])
    );
  }

  for (let i = 3; i < array.length; i++) {
    maxOfAMinusBPlusCMinusD.push(
      Math.max(
        maxOfAMinusBPlusCMinusD[i - 1],
        maxOfAMinusBPlusC[i - 1] - array[i]
      )
    );
  }

  return maxOfAMinusBPlusCMinusD.at(-1);
}

// Do not edit the line below.
exports.maximizeExpression = maximizeExpression;

function maximizeExpression(array) {
  // Write your code here.
  let maxSum = -Infinity;
  if (array.length < 4) return 0;
  for (let i = 0; i < array.length; i++) {
    for (let j = i + 1; j < array.length; j++) {
      for (let k = j + 1; k < array.length; k++) {
        for (let l = k + 1; l < array.length; l++) {
          maxSum = Math.max(evalExpression(array, i, j, k, l), maxSum);
        }
      }
    }
  }
  return maxSum;
}

function evalExpression(array, a, b, c, d) {
  return array[a] - array[b] + (array[c] - array[d]);
}

// Do not edit the line below.
exports.maximizeExpression = maximizeExpression;
