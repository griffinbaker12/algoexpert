// O(w * n * log(n)) T | O (wn)
function groupAnagrams(words) {
  // Write your code here.
  const ans = {};
  for (const word of words) {
    const sortedWord = word.split('').sort().join('');
    if (!(sortedWord in ans)) ans[sortedWord] = [word];
    else if (sortedWord in ans) ans[sortedWord].push(word);
  }
  return Object.values(ans);
}

// Do not edit the line below.
exports.groupAnagrams = groupAnagrams;
