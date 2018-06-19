/* Dijkstra solves the single-source shortest path problem for a weighted,
directed graph with non-negative edge weights */

const initialize = (graph, root) => {
  graph.elements.forEach((vertex) => {
    vertex.distance = Infinity;
    vertex.parent = null;
  });
  root.distance = 0;
};

const relax = (start, end, edgeWeight) => {
  if (end.distance > (start.distance + edgeWeight)) {
    end.distance = start.distance + edgeWeight;
    end.parent = start;
  }
};
