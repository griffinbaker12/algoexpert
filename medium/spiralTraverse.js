function spiralTraverse(array) {
  // Write your code here.
  let a = [];
  let visited = 0;
  let p1 = 0;
  let p2 = 0;
  let depth = 0;
  let n = array[0].length;
  let m = array.length;
  let direction = n > 1 ? 'right' : 'down';
  let length = n * m;

  while (visited < length) {
    if (direction === 'right') {
      a.push(array[p1][p2]);
      p2++;
      visited++;
      if (p2 === n - 1 - depth) direction = 'down';
    } else if (direction === 'left') {
      a.push(array[p1][p2]);
      p2--;
      visited++;
      if (p2 === 0 + depth) direction = 'up';
    } else if (direction === 'down') {
      a.push(array[p1][p2]);
      p1++;
      visited++;
      if (p1 === m - 1 - depth) direction = 'left';
    } else if (direction === 'up') {
      a.push(array[p1][p2]);
      p1--;
      visited++;
      if (p1 === 0 + depth + 1) {
        direction = 'right';
        depth++;
      }
    }
  }

  return a;
}

function spiralTraverse(array) {
  // Write your code here.
  let sc = 0,
    ec = array[0].length - 1;
  let sr = 0,
    er = array.length - 1;
  let a = [];

  while (sc <= ec && sr <= er) {
    for (let col = sc; col <= ec; col++) {
      a.push(array[sr][col]);
    }
    for (let row = sr + 1; row <= er; row++) {
      a.push(array[row][ec]);
    }
    for (let col = ec - 1; col >= sc; col--) {
      if (sr === er) break;
      a.push(array[er][col]);
    }
    for (let row = er - 1; row > sr; row--) {
      if (sc === ec) break;
      a.push(array[row][sc]);
    }
    sc++;
    ec--;
    sr++;
    er--;
  }
  return a;
}
