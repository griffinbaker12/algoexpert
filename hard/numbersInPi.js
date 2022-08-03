function numbersInPi(pi, numbers) {
  // Write your code here.
  const numbersObj = {};
  for (const num of numbers) {
    numbersObj[num] = true;
  }
  const minSpaces = findMinSpaces(pi, numbersObj, {}, 0);
  return minSpaces === Infinity ? -1 : minSpaces;
}

function findMinSpaces(pi, numbersObj, cache, idx) {
  if (pi.length === idx) return -1;
  if (idx in cache) {
    return cache[idx];
  }
  let minSpaces = Infinity;
  for (let i = idx; i < pi.length; i++) {
    const prefix = pi.slice(idx, i + 1);
    if (prefix in numbersObj) {
      const minSpacesInSuffix = findMinSpaces(pi, numbersObj, cache, i + 1);
      minSpaces = Math.min(minSpaces, minSpacesInSuffix + 1);
    }
  }
  cache[idx] = minSpaces;
  return cache[idx];
}

// Do not edit the line below.
exports.numbersInPi = numbersInPi;
