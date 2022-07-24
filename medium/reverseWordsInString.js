function reverseWordsInString(string) {
  // Write your code here.
  const characters = [];
  for (const char of string) {
    characters.push(char);
  }
  reverseListRange(characters, 0, characters.length - 1);

  let startOfWord = 0;
  while (startOfWord < characters.length) {
    let endOfWord = startOfWord;
    while (endOfWord < characters.length && characters[endOfWord] !== ' ') {
      endOfWord++;
    }
    reverseListRange(characters, startOfWord, endOfWord - 1);
    startOfWord = endOfWord + 1;
  }
  return characters.join('');
}

function reverseListRange(characters, start, end) {
  while (start < end) {
    const temp = characters[start];
    characters[start] = characters[end];
    characters[end] = temp;
    start++;
    end--;
  }
}
