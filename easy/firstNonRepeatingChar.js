function firstNonRepeatingCharacter(string) {
  // Write your code here.
  // O(N) time | O(U) space, where U is unique chars in string
  const obj = {};

  for (let i = 0; i < string.length; i++)
    string[i] in obj ? obj[string[i]]++ : (obj[string[i]] = 1);

  for (let i = 0; i < string.length; i++) if (obj[string[i]] === 1) return i;

  return -1;
}
