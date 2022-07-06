function arrayOfProducts(array) {
  // Write your code here.
  const output = [];
  let i = 0;
  while (i < array.length) {
    let product = 1;
    let left = i - 1;
    while (left >= 0) {
      product *= array[left];
      left--;
    }
    let right = i + 1;
    while (right < array.length) {
      product *= array[right];
      right++;
    }
    output[i] = product;
    i++;
  }
  return output;
}

// Splitting into 2 loops to make more efficient
function arrayOfProducts(array) {
  // Write your code here.
  const output = [];
  let i = 0;
  let product = 1;
  while (i < array.length) {
    output[i] = product;
    product *= array[i];
    i++;
  }
  let j = array.length - 1;
  product = 1;
  while (j >= 0) {
    output[j] *= product;
    product *= array[j];
    j--;
  }
  return output;
}
