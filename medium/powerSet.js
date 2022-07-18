function powerset(array, idx = null) {
  // Write your code here.
  if (idx === null) idx = array.length - 1;
  if (idx < 0) return [[]];
  const element = array[idx];
  const subsets = powerset(array, idx - 1);
  const length = subsets.length;
  for (let i = 0; i < length; i++) {
    const currentSubset = subsets[i];
    subsets.push(currentSubset.concat(element));
  }
  return subsets;
}

// Do not edit the line below.
exports.powerset = powerset;
