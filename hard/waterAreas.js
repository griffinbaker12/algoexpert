function waterArea(heights) {
  // Write your code here.
  const waterAreas = new Array(heights.length);
  let maxLeft = 0;
  for (let i = 0; i < heights.length; i++) {
    waterAreas[i] = maxLeft;
    maxLeft = Math.max(maxLeft, heights[i]);
  }
  let maxRight = heights.at(-1);
  for (let i = heights.length - 1; i >= 0; i--) {
    if (heights[i] > maxRight) maxRight = heights[i];
    const minBarrierHeight = Math.min(maxRight, waterAreas[i]);
    waterAreas[i] = Math.min(
      Math.max(minBarrierHeight - heights[i], 0),
      waterAreas[i]
    );
  }
  return waterAreas.reduce((a, b) => a + b, 0);
}

// Do not edit the line below.
exports.waterArea = waterArea;

function waterArea(heights) {
  // Write your code here.
  let leftIdx = 0;
  let rightIdx = heights.length - 1;
  let maxLeft = heights[leftIdx];
  let maxRight = heights[rightIdx];
  let water = 0;
  while (leftIdx < rightIdx) {
    if (heights[leftIdx] < heights[rightIdx]) {
      leftIdx++;
      maxLeft = Math.max(maxLeft, heights[leftIdx]);
      water += maxLeft - heights[leftIdx];
    } else {
      rightIdx--;
      maxRight = Math.max(maxRight, heights[rightIdx]);
      water += maxRight - heights[rightIdx];
    }
  }
  return water;
}

// Do not edit the line below.
exports.waterArea = waterArea;
