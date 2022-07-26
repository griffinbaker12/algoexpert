// O(N) Time | O(N) Space
function largestRange(array) {
  // Write your code here.
  const numObj = {};
  const longestRange = [];
  for (const num of array) {
    numObj[num] = true;
  }
  for (let num of array) {
    if (!numObj[num]) continue;
    numObj[num] = false;
    let left = num - 1;
    let right = num + 1;
    while (left in numObj) {
      numObj[left] = false;
      left--;
    }
    left += 1;
    while (right in numObj) {
      numObj[right] = false;
      right++;
    }
    right -= 1;
    if (longestRange.length === 0) {
      longestRange[0] = left;
      longestRange[1] = right;
    } else {
      const currRange = longestRange[1] - longestRange[0];
      if (right - left > currRange) {
        longestRange[0] = left;
        longestRange[1] = right;
      }
    }
  }
  return longestRange;
}

// Do not edit the line below.
exports.largestRange = largestRange;
