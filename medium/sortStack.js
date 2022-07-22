function sortStack(stack) {
  // Write your code here.
  if (stack.length <= 1) return stack;

  const valueOne = stack.pop();
  sortStack(stack);
  const valueTwo = stack.pop();

  let smaller = valueOne > valueTwo ? valueTwo : valueOne;
  let larger = valueOne < valueTwo ? valueTwo : valueOne;

  stack.push(smaller);
  sortStack(stack);
  stack.push(larger);

  return stack;
}

// Do not edit the line below.
exports.sortStack = sortStack;
