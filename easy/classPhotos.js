function classPhotos(redShirtHeights, blueShirtHeights) {
  // Write your code here.
  redShirtHeights.sort((a, b) => a - b);
  blueShirtHeights.sort((a, b) => a - b);
  const backRowColor =
    redShirtHeights[0] - blueShirtHeights[0] > 0
      ? 'red'
      : redShirtHeights[0] - blueShirtHeights[0] < 0
      ? 'blue'
      : false;
  if (!backRowColor) return false;

  for (let i = 0; i < redShirtHeights.length; i++) {
    if (backRowColor === 'red') {
      if (redShirtHeights[i] < blueShirtHeights[i]) {
        return false;
      }
    } else {
      if (blueShirtHeights[i] < redShirtHeights[i]) {
        return false;
      }
    }
  }
  return true;
}
