function minRewards(scores) {
  // Write your code here.
  const rewards = scores.map(_ => 1);
  const localMinIdxs = getLocalMinIdxs(scores);
  for (const localMinIdx of localMinIdxs) {
    expandFromLocalMin(localMinIdx, rewards, scores);
  }
  return rewards.reduce((a, b) => a + b);
}

function expandFromLocalMin(localMinIdx, rewards, scores) {
  let left = localMinIdx - 1;
  while (left >= 0 && scores[left] > scores[left + 1]) {
    rewards[left] = Math.max(rewards[left], rewards[left + 1] + 1);
    left--;
  }
  let right = localMinIdx + 1;
  // There will only be overlap when moving left, so you don't need the max here
  while (right < scores.length && scores[right] > scores[right - 1]) {
    rewards[right] = Math.max(rewards[right], rewards[right - 1] + 1);
    right++;
  }
}

function getLocalMinIdxs(scores) {
  const localMinIdxs = [];
  if (scores.length === 1) return [0];
  for (let i = 0; i < scores.length; i++) {
    if (i === 0 && scores[i] < scores[i + 1]) {
      localMinIdxs.push(i);
    } else if (i === scores.length - 1 && scores[i] < scores[i - 1]) {
      localMinIdxs.push(i);
    } else if (scores[i] < scores[i + 1] && scores[i] < scores[i - 1])
      localMinIdxs.push(i);
  }
  return localMinIdxs;
}

// Do not edit the line below.
exports.minRewards = minRewards;
