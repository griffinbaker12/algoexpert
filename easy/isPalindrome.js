function isPalindrome(string) {
  // Write your code here.
  let p1 = 0;
  let p2 = string.length - 1;
  while (p1 < p2) {
    if (string[p1] !== string[p2]) return false;
    p1++;
    p2--;
  }
  return true;
}
