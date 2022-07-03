function binarySearch(array, target) {
  // Write your code here.
  return helper(array, target, 0, array.length - 1);
}

function helper(array, target, p1, p2) {
  if (p1 > p2) return -1;
  const indexGuess = Math.floor((p2 + p1) / 2);
  const guess = array[indexGuess];
  if (guess === target) return indexGuess;
  else if (guess < target) {
    return helper(array, target, indexGuess + 1, p2);
  } else {
    return helper(array, target, p1, indexGuess - 1);
  }
}

function binarySearch(array, target) {
  // Write your code here.
  let p1 = 0;
  let p2 = array.length - 1;

  // Come back to this
  while (p1 <= p2) {
    const indexGuess = Math.floor((p2 + p1) / 2);
    const guess = array[indexGuess];
    if (guess === target) return indexGuess;
    else if (guess < target) {
      p1 = indexGuess + 1;
    } else {
      p2 = indexGuess - 1;
    }
  }

  return -1;
}
