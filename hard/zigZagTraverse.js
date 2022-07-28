// Time O(N) | Space O(N)
function zigzagTraverse(array) {
  // Write your code here.
  const answer = [];
  let direction = 'DOWN';
  let i = 0;
  let j = 0;
  while (!isOutOfBounds(array, i, j)) {
    answer.push(array[i][j]);
    if (direction === 'DOWN') {
      if (!isOutOfBounds(array, i + 1, j - 1)) {
        i++;
        j--;
      } else {
        if (i < array.length - 1) i++;
        else j++;
        direction = 'UP';
      }
    } else {
      if (!isOutOfBounds(array, i - 1, j + 1)) {
        i--;
        j++;
      } else {
        if (j < array[0].length - 1) j++;
        else i++;
        direction = 'DOWN';
      }
    }
  }
  return answer;
}

function isOutOfBounds(array, i, j) {
  if (i < 0 || j < 0 || i >= array.length || j >= array[0].length) return true;
  return false;
}

// Do not edit the line below.
exports.zigzagTraverse = zigzagTraverse;
