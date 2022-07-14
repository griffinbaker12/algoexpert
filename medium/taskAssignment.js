function taskAssignment(k, tasks) {
  // Write your code here.
  const output = [];
  const sorted = [...tasks].sort((a, b) => a - b);
  const durationToIndex = mapDurationToIndex(tasks);
  let i = 0;
  let j = tasks.length - 1;
  while (i < j) {
    const low = durationToIndex[sorted[i]].pop().pop();
    const high = durationToIndex[sorted[j]].pop().pop();
    output.push([low, high]);
    i++;
    j--;
  }
  return output;
}

function mapDurationToIndex(tasks) {
  const obj = {};
  tasks.forEach((task, i) => {
    if (!(task in obj)) obj[task] = [[i]];
    else {
      obj[task].push([i]);
    }
  });
  return obj;
}

// Do not edit the line below.
exports.taskAssignment = taskAssignment;
