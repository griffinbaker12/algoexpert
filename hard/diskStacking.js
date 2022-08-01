function diskStacking(disks) {
  // Write your code here.
  disks.sort((a, b) => a[2] - b[2]);
  const heights = disks.map(disk => disk[2]);
  const seqs = new Array(disks.length).fill(null);
  let maxHeightIdx = 0;
  for (let i = 1; i < disks.length; i++) {
    const currentDisk = disks[i];
    for (let j = 0; j < i; j++) {
      const otherDisk = disks[j];
      if (isValidStack(currentDisk, otherDisk)) {
        if (heights[j] + currentDisk[2] >= heights[i]) {
          heights[i] = heights[j] + currentDisk[2];
          seqs[i] = j;
        }
      }
    }
    if (heights[i] >= heights[maxHeightIdx]) {
      maxHeightIdx = i;
    }
  }
  // creating the sequence, but the max height idx is so that you know where to start.
  return createSeq(disks, seqs, maxHeightIdx);
}

function isValidStack(c, o) {
  return c[0] > o[0] && c[1] > o[1] && c[2] > o[2];
}

function createSeq(disks, seqs, currentIdx) {
  const seq = [];
  while (currentIdx !== null) {
    seq.unshift(disks[currentIdx]);
    currentIdx = seqs[currentIdx];
  }
  return seq;
}

// Do not edit the line below.
exports.diskStacking = diskStacking;
