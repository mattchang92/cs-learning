// 4.7 CtCI Build Order
// Solving using DFS - assuming no cycles as per the question
const STATUS = {
  NEW: 'NEW',
  PROCESSING: 'PROCESSING', // only needed for cycles
  COMPLETE: 'COMPLETE',
};

class Project {
  constructor(name) {
    this.name = name;
    this.status = STATUS.NEW;
    this.map = {};
    this.neighbours = [];
  }

  addNeighbour(node) {
    this.neighbours.push(node);
    this.map[node.name] = node;
  }
}

class Graph {
  constructor() {
    this.nodes = [];
    this.map = {};
  }

  getOrAddNode(name) {
    if (!this.map[name]) {
      const project = new Project(name);

      this.map[name] = project;
      this.nodes.push(project);
    }
    return this.map[name];
  }
}

const buildGraph = (projects, dependencies) => {
  const graph = new Graph();

  projects.forEach(name => {
    graph.getOrAddNode(name);
  });

  dependencies.forEach(dep => {
    const dependency = graph.getOrAddNode(dep[0]);
    const dependentProject = graph.getOrAddNode(dep[1]);

    dependency.addNeighbour(dependentProject);
  });

  return graph;
};

const findBuildOrder = (projects, dependencies) => {
  const graph = buildGraph(projects, dependencies);
  const buildOrder = [];

  const DFS = (node) => {
    if (node.status === STATUS.NEW) {
      node.neighbours.forEach(neighbourNode => {
        DFS(neighbourNode);
      });
      
      node.status = STATUS.COMPLETE;
      buildOrder.unshift(node);
    }
  }

  graph.nodes.forEach(node => {
    DFS(node);
  });

  console.log(buildOrder.map(test => test.name));
  return buildOrder;
};


const projects = ['a', 'b', 'c', 'd', 'e', 'f'];
const dependencies = [['a', 'd'], ['f', 'b'], ['b', 'd'], ['f', 'a'], ['d', 'c']];

findBuildOrder(projects, dependencies);

