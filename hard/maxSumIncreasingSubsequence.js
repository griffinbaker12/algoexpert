function maxSumIncreasingSubsequence(array) {
  // Write your code here.
  const answers = array.map(element => element);
  const indices = new Array(array.length).fill(null);
  let maxIdx = 0;
  for (let i = 0; i < array.length; i++) {
    const currentNum = array[i];
    for (let j = 0; j < i; j++) {
      const otherNum = array[j];
      if (currentNum > otherNum && answers[i] <= answers[j] + currentNum) {
        answers[i] = answers[j] + currentNum;
        indices[i] = j;
      }
    }
    if (answers[i] > answers[maxIdx]) maxIdx = i;
  }
  return [answers[maxIdx], createSequence(array, maxIdx, indices)];
}

function createSequence(array, maxIdx, indices) {
  const sequence = [];
  while (maxIdx !== null) {
    sequence.unshift(array[maxIdx]);
    maxIdx = indices[maxIdx];
  }
  return sequence;
}

function findMaxForIndex(value, idx, array, answers, indices) {
  let maxIdx = null;
  let maxValue = -Infinity;
  for (let i = 0; i < idx; i++) {
    if (array[i] < value && value + array[i] > value) {
      if (answers[i] > maxValue) {
        maxIdx = i;
        maxValue = answers[i];
      }
    }
  }
  if (maxIdx !== null) {
    answers[idx] = value + answers[maxIdx];
    indices[idx] = maxIdx;
  }
  return answers[idx];
}

// Do not edit the line below.
exports.maxSumIncreasingSubsequence = maxSumIncreasingSubsequence;
