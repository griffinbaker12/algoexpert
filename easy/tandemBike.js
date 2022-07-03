function tandemBicycle(redShirtSpeeds, blueShirtSpeeds, fastest) {
  // Write your code here.
  redShirtSpeeds.sort((a, b) => a - b);
  let sum = 0;
  if (fastest) {
    blueShirtSpeeds.sort((a, b) => b - a);
    for (let i = 0; i < redShirtSpeeds.length; i++) {
      sum += Math.max(blueShirtSpeeds[i], redShirtSpeeds[i]);
    }
  } else {
    blueShirtSpeeds.sort((a, b) => a - b);
    for (let i = 0; i < redShirtSpeeds.length; i++) {
      sum += Math.max(blueShirtSpeeds[i], redShirtSpeeds[i]);
    }
  }
  return sum;
}
