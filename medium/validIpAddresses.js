function validIPAddresses(string) {
  // Write your code here.
  const ipAddressFound = [];
  for (let i = 0; i < Math.min(4, string.length); i++) {
    const currentIPAddressParts = ['', '', '', ''];
    currentIPAddressParts[0] = string.slice(0, i);
    if (!isValidAddress(currentIPAddressParts[0])) continue;
    for (let j = i + 1; j < i + Math.min(4, string.length - i); j++) {
      currentIPAddressParts[1] = string.slice(i, j);
      if (!isValidAddress(currentIPAddressParts[1])) continue;
      for (let k = j + 1; k < j + Math.min(4, string.length - j); k++) {
        currentIPAddressParts[2] = string.slice(j, k);
        currentIPAddressParts[3] = string.slice(k);

        if (
          isValidAddress(currentIPAddressParts[2]) &&
          isValidAddress(currentIPAddressParts[3])
        ) {
          ipAddressFound.push(currentIPAddressParts.join('.'));
        }
      }
    }
  }
  return ipAddressFound;
}

function isValidAddress(address) {
  const strToNum = parseInt(address);
  if (strToNum > 255) return false;
  return strToNum.toString().length === address.length;
}

// Do not edit the line below.
exports.validIPAddresses = validIPAddresses;
