function isValidSubsequence(array, sequence) {
  return sequence.every(sequenceNum =>
    array.some((arrNum, i) => {
      if (arrNum === sequenceNum) {
        array.splice(0, i + 1);
        return true;
      } else return false;
    })
  );
}

function isValidSubsequence(array, sequence) {
  // Write your code here.
  let idx = 0;
  for (let i = 0; i < array.length; i++) {
    if (sequence[idx] === array[i]) {
      idx++;
    }
    if (idx === sequence.length) {
      console.log('we broke');
      // You should obviously do this so that you can quicken your algorith if you already found your subsequence
      break;
    }
  }
  if (idx === sequence.length) return true;
  return false;
}
