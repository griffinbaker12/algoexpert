function phoneNumberMnemonics(phoneNumber) {
  // Write your code here.
  const mnemonics = [];
  const currentMnemonic = Array(phoneNumber.length).fill(0);
  helper(phoneNumber, mnemonics, 0, currentMnemonic);
  return mnemonics;
}

function helper(number, mnemonics, idx, currentMnemonic) {
  if (idx === number.length && currentMnemonic.length) {
    mnemonics.push(currentMnemonic.join(''));
  } else {
    const digit = Number(number[idx]);
    const letters = LETTERS[digit];
    for (const letter of letters) {
      currentMnemonic[idx] = letter;
      helper(number, mnemonics, idx + 1, currentMnemonic);
    }
  }
}

const LETTERS = [
  ['0'],
  ['1'],
  ['a', 'b', 'c'],
  ['d', 'e', 'f'],
  ['g', 'h', 'i'],
  ['j', 'k', 'l'],
  ['m', 'n', 'o'],
  ['p', 'q', 'r', 's'],
  ['t', 'u', 'v'],
  ['w', 'x', 'y', 'z'],
];

// Do not edit the line below.
exports.phoneNumberMnemonics = phoneNumberMnemonics;
