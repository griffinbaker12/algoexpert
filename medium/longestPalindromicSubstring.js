function longestPalindromicSubstring(string) {
  // Write your code here.
  let longest = '';
  for (let i = 0; i < string.length; i++) {
    for (let j = i; j < string.length; j++) {
      const substring = string.slice(i, j + 1);
      if (substring.length > longest.length && isPalindrome(substring)) {
        longest = substring;
      }
    }
  }
  return longest;
}

function isPalindrome(string) {
  let i = 0;
  let j = string.length - 1;
  while (i < j) {
    if (string[i] !== string[j]) return false;
    i++;
    j--;
  }
  return true;
}

// Do not edit the line below.
exports.longestPalindromicSubstring = longestPalindromicSubstring;
