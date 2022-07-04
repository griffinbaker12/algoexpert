function findThreeLargestNumbers(array) {
  // Write your code here.
  const largest3 = [null, null, null];
  for (const num of array) {
    updateLargest(num, largest3);
  }
  return largest3;
}

function updateLargest(currentNum, largest3) {
  if (currentNum > largest3[2] || largest3[2] === null)
    shiftLargest3(largest3, 2, currentNum);
  else if (currentNum > largest3[1] || largest3[1] === null)
    shiftLargest3(largest3, 1, currentNum);
  else if (currentNum > largest3[0] || largest3[0] === null)
    shiftLargest3(largest3, 0, currentNum);
}

function shiftLargest3(largest3, index, currentNum) {
  for (let i = 0; i <= index; i++) {
    if (i === index) {
      largest3[index] = currentNum;
    } else {
      largest3[i] = largest3[i + 1];
    }
  }
}
