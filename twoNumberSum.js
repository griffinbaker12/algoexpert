function twoNumberSum(array, targetSum) {
  // Write your code here.
  const obj = {};
  for (let i = 0; i < array.length; i++) {
    const diff = targetSum - array[i];
    if (obj[diff]) return [diff, array[i]];
    obj[array[i]] = true;
  }
  return [];
}

function twoNumberSum(array, targetSum) {
  // Write your code here.
  const sortedArr = array.sort((a, b) => a - b);
  console.log(sortedArr, 'the sorted arr');
  let left = 0;
  let right = array.length - 1;
  while (left < right) {
    if (sortedArr[left] + sortedArr[right] === targetSum)
      return [sortedArr[left], sortedArr[right]];
    if (sortedArr[left] + sortedArr[right] < targetSum) left++;
    if (sortedArr[left] + sortedArr[right] > targetSum) right--;
  }

  return [];
}
