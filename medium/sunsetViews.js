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

// O(N) Time | O(N) Space
function sunsetViews(buildings, direction) {
  // Write your code here.
  const indices = [];
  const step = direction === 'EAST' ? 1 : -1;
  let idx = direction === 'EAST' ? 0 : buildings.length - 1;

  while (idx >= 0 && idx < buildings.length) {
    while (buildings[idx] >= buildings[indices.at(-1)] && indices.length)
      indices.pop();
    indices.push(idx);
    idx += step;
  }

  return direction === 'WEST' ? indices.reverse() : indices;
}

// Do not edit the line below.
exports.sunsetViews = sunsetViews;

// Do not edit the line below.
exports.sunsetViews = sunsetViews;
