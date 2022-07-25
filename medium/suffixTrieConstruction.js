// Do not edit the class below except for the
// populateSuffixTrieFrom and contains methods.
// Feel free to add new properties and methods
// to the class.
class SuffixTrie {
  constructor(string) {
    this.root = {};
    this.endSymbol = '*';
    this.populateSuffixTrieFrom(string);
  }

  populateSuffixTrieFrom(string) {
    // Write your code here.
    for (let i = 0; i < string.length; i++) {
      this.helper(string, i);
    }
  }

  helper(string, i) {
    let node = this.root;
    for (let idx = i; idx < string.length; idx++) {
      const letter = string[idx];
      if (!(letter in node)) node[letter] = {};
      node = node[letter];
    }
    node[this.endSymbol] = true;
  }

  contains(string) {
    // Write your code here.
    let node = this.root;
    for (const letter of string) {
      if (!(letter in node)) return false;
      node = node[letter];
    }
    return this.endSymbol in node ? true : false;
  }
}

// Do not edit the line below.
exports.SuffixTrie = SuffixTrie;
