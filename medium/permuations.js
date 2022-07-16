function getPermutations(array) {
  const perms = [];
  helper(array, perms, []);
  return perms;
}

function helper(array, perms, currentPerm) {
  console.log(currentPerm, perms);
  if (!array.length && currentPerm.length) perms.push(currentPerm);
  else {
    for (let i = 0; i < array.length; i++) {
      const newArray = array.slice(0, i).concat(array.slice(i + 1));
      const newPerm = currentPerm.concat([array[i]]);
      helper(newArray, perms, newPerm);
    }
  }
}

// Do not edit the line below.
exports.getPermutations = getPermutations;
