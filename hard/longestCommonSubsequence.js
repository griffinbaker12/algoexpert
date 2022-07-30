function longestCommonSubsequence(str1, str2) {
  // Write your code here.
  const lcs = [];
  for (let i = 0; i < str2.length + 1; i++) {
    const row = [];
    for (let j = 0; j < str1.length + 1; j++) {
      // const entry = new Array(4);
      // entry[1] = 0;
      row.push([null, 0, null, null]);
    }
    lcs.push(row);
  }

  for (let i = 1; i < str2.length + 1; i++) {
    for (let j = 1; j < str1.length + 1; j++) {
      if (str1[j - 1] === str2[i - 1]) {
        lcs[i][j] = [str1[j - 1], lcs[i - 1][j - 1][1] + 1, i - 1, j - 1];
      } else {
        if (lcs[i - 1][j][1] > lcs[i][j - 1][1]) {
          lcs[i][j] = [null, lcs[i - 1][j][1], i - 1, j];
        } else {
          lcs[i][j] = [null, lcs[i][j - 1][1], i, j - 1];
        }
      }
    }
  }
  return buildSequence(lcs);
}

function buildSequence(lcs) {
  const seq = [];
  let i = lcs.length - 1;
  let j = lcs[0].length - 1;
  while (i !== 0 && j !== 0) {
    let currentEntry = lcs[i][j];
    if (currentEntry[0]) {
      seq.unshift(currentEntry[0]);
    }
    i = currentEntry[2];
    j = currentEntry[3];
  }
  return seq;
}

// Do not edit the line below.
exports.longestCommonSubsequence = longestCommonSubsequence;
