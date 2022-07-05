function generateDocument(characters, document) {
  // Write your code here.
  let obj = {};

  for (let i = 0; i < characters.length; i++) {
    const charCode = characters[i].charCodeAt();
    if (charCode in obj) {
      obj[charCode]++;
    } else {
      obj[charCode] = 1;
    }
  }

  for (let i = 0; i < document.length; i++) {
    const charCode = document[i].charCodeAt();
    const contains = obj[charCode];
    if (!contains) {
      return false;
    } else {
      obj[charCode]--;
    }
  }

  return true;
}
