/* BFS traversal also constructs the breadth-first tree */
const BFS = (graph, root) => {
  graph.elements.forEach((vertex) => {
    vertex.color = 'white';
    vertex.distance = Infinity;
    vertex.parent = null;
  });
  root.color = 'grey';
  root.distance = 0;
  const queue = [root];
  while (queue.length) {
    const node = queue.shift();
    node.edges.forEach((vertex) => {
      if (vertex.color === 'white') {
        vertex.color = 'grey';
        vertex.parent = node;
        vertex.distance = node.distance + 1;
        queue.push(vertex);
      }
    });
    node.color = 'black';
  }
};

/* If breadth-first tree has been constructured */
const printPath = (start, end) => {
  if (start === end) {
    console.log(start);
  } else if (!end.parent) {
    console.log('No path exists');
  } else {
    printPath(start, end.parent);
    console.log(end);
  }
};


/* Run time is O (V + E) */
const DFS = (graph) => {
  graph.elements.forEach((vertex) => {
    vertex.color = 'white';
    vertex.parent = null;
  });
  let time = 0;

  const DFSTraversal = (vertex) => {
    time++;
    vertex.color = 'gray';
    vertex.discovered = time;
    vertex.edges.forEach((node) => {
      if (node.color === 'white') {
        node.parent = vertex;
        DFSTraversal(node);
      }
    });
    time++;
    vertex.completed = time;
    vertex.color = 'black';
  };


  graph.elements.forEach((vertex) => {
    if (vertex.color === 'white') {
      DFSTraversal(vertex);
    }
  });
};

// Topological sort can be accomplished by adding a vertex to the front of a linked list
// at the time of completion
