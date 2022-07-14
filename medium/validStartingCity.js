function validStartingCity(distances, fuel, mpg) {
  // Write your code here.
  let milesRemaining = 0;
  let lowestIdx = 0;
  for (let i = 1; i < distances.length; i++) {
    milesRemaining += fuel[i - 1] * mpg - distances[i - 1];
    if (milesRemaining < 0) {
      lowestIdx = i;
      milesRemaining = 0;
    }
  }
  return lowestIdx;
}

// Do not edit the line below.
exports.validStartingCity = validStartingCity;
