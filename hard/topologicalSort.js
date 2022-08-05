function topologicalSort(jobs, deps) {
  const graph = createGraph(jobs, deps);
  return getOrderedJobs(graph);
}

function createGraph(jobs, deps) {
  const graph = new JobGraph(jobs);
  for (const [prereq, job] of deps) {
    graph.addPrereq(prereq, job);
  }
  return graph;
}

function getOrderedJobs(graph) {
  const orderedJobs = [];
  const { nodes } = graph;
  while (nodes.length) {
    const node = nodes.pop();
    const containsCycle = dfs(node, orderedJobs);
    if (containsCycle) return [];
  }
  return orderedJobs;
}

function dfs(node, orderedJobs) {
  if (node.visited) return false;
  if (node.visiting) return true;
  node.visiting = true;
  for (const pre of node.prereqs) {
    const containsCycle = dfs(pre, orderedJobs);
    if (containsCycle) return true;
  }
  node.visited = true;
  node.visiting = false;
  orderedJobs.push(node.job);
  return false;
}

class JobGraph {
  constructor(jobs) {
    this.nodes = [];
    this.graph = {};
    for (const job of jobs) {
      this.addNode(job);
    }
  }

  addNode(job) {
    this.graph[job] = new JobNode(job);
    this.nodes.push(this.graph[job]);
  }

  addPrereq(prereq, job) {
    this.graph[job].prereqs.push(this.graph[prereq]);
  }
}

class JobNode {
  constructor(job) {
    this.job = job;
    this.visited = false;
    this.visiting = false;
    this.prereqs = [];
  }
}

// Do not edit the line below.
exports.topologicalSort = topologicalSort;
