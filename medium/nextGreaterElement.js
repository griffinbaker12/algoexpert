function nextGreaterElement(array) {
  // Write your code here.
  const stack = [];
  const answer = new Array(array.length).fill(-1);
  for (let i = 0; i < 2 * array.length; i++) {
    let circularIdx = i % array.length;
    while (stack.length && array[stack.at(-1)] < array[circularIdx]) {
      const top = stack.pop();
      answer[top] = array[circularIdx];
    }
    stack.push(circularIdx);
  }
  return answer;
}

// Do not edit the line below.
exports.nextGreaterElement = nextGreaterElement;
