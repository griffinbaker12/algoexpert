function balancedBrackets(string) {
  // Write your code here.
  const opening = '([{';
  const closing = ')]}';
  const matching = { ')': '(', '}': '{', ']': '[' };
  const stack = [];
  let counter = 0;

  while (counter < string.length) {
    const currentVal = string[counter];
    const isUnbalanced = matching[currentVal] && !stack.length ? true : false;
    if (isUnbalanced) return false;
    if (opening.includes(currentVal)) {
      stack.push(currentVal);
      counter++;
    } else if (closing.includes(currentVal)) {
      const currentPop = stack.pop();
      if (matching[currentVal] !== currentPop) return false;
      counter++;
    } else counter++;
  }
  return stack.length ? false : true;
}

// Do not edit the line below.
exports.balancedBrackets = balancedBrackets;
