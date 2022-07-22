function sunsetViews(buildings, direction) {
  // Write your code here.
  const indices = [];
  let currentMax;

  if (direction === 'EAST') {
    for (let i = buildings.length - 1; i >= 0; i--) {
      if (!indices.length) {
        indices.push(i);
        currentMax = buildings[i];
      } else if (buildings[i] > currentMax) {
        indices.push(i);
        currentMax = buildings[i];
      }
    }
    indices.reverse();
  } else {
    for (let i = 0; i < buildings.length; i++) {
      if (!indices.length) {
        indices.push(i);
        currentMax = buildings[i];
      } else if (buildings[i] > currentMax) {
        indices.push(i);
        currentMax = buildings[i];
      }
    }
  }

  return indices;
}

// Do not edit the line below.
exports.sunsetViews = sunsetViews;
