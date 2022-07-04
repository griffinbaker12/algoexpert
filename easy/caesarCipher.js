function caesarCipherEncryptor(string, key) {
  // Write your code here.
  const newString = [];
  const newKey = key % 26;

  for (let i = 0; i < string.length; i++) {
    let charCode = string[i].charCodeAt() + newKey;
    if (charCode > 'z'.charCodeAt()) {
      const diff = charCode - 'z'.charCodeAt() - 1;
      charCode = 'a'.charCodeAt() + diff;
    }
    newString.push(String.fromCharCode(charCode));
  }

  return newString.join('');
}
