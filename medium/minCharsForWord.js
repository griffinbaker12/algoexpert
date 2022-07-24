function minimumCharactersForWords(words) {
  // Write your code here.
  const countPerLetter = {};
  const answerArr = [];
  for (const word of words) {
    const letterFreqs = {};
    for (let i = 0; i < word.length; i++) {
      if (!(word[i] in letterFreqs)) {
        letterFreqs[word[i]] = 1;
      } else {
        letterFreqs[word[i]]++;
      }
    }
    for (const [letter, frequency] of Object.entries(letterFreqs)) {
      if (letter in countPerLetter) {
        if (frequency > countPerLetter[letter]) {
          countPerLetter[letter] = frequency;
        }
      } else {
        countPerLetter[letter] = frequency;
      }
    }
  }

  for (let [letter, frequency] of Object.entries(countPerLetter)) {
    while (frequency > 0) {
      answerArr.push(letter);
      frequency--;
    }
  }

  return answerArr;
}

// Do not edit the line below.
exports.minimumCharactersForWords = minimumCharactersForWords;
