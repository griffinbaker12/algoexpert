function runLengthEncoding(string) {
  // Write your code here.
  const array = [];
  let count = 1;

  for (let i = 0; i < string.length; i++) {
    if (string[i] === string[i + 1] && count < 9) {
      count++;
    } else {
      array.push(count);
      array.push(string[i]);
      count = 1;
    }
  }

  return array.join('');
}
