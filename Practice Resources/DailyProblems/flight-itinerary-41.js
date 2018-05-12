/*
Given an unordered list of flights taken by someone, each represented as 
(origin, destination) pairs, and a starting airport, compute the person's itinerary. 
If no such itinerary exists, return null. If there are multiple possible itineraries, 
return the lexicographically smallest one. All flights must be used in the itinerary.

For example, given the list of flights [('SFO', 'HKO'), ('YYZ', 'SFO'), ('YUL', 'YYZ'), ('HKO', 'ORD')]
 and starting airport 'YUL', you should return the list ['YUL', 'YYZ', 'SFO', 'HKO', 'ORD'].

Given the list of flights [('SFO', 'COM'), ('COM', 'YYZ')] and starting airport 'COM', you should return null.

Given the list of flights [('A', 'B'), ('A', 'C'), ('B', 'C'), ('C', 'A')] 
and starting airport 'A', you should return the list ['A', 'B', 'C', 'A', 'C'] even though
['A', 'C', 'A', 'B', 'C'] is also a valid itinerary. However, the first one is lexicographically smaller.
*/

class Graph {
  constructor() {
    this.nodes = [];
    this.map = {};
  }

  createLocation(name) {
    if (!this.map[name]) {
      const location = new Location(name);
      this.nodes.push(location);
      this.map[name] = location;
    }
  }

  getLocation(name) {
    return this.map[name];
  }
}

class Location {
  constructor(name) {
    this.name = name;
    this.destinations = [];
  }

  addDestination(dest) {
    this.destinations.push(dest);
  }

  removeDestination(dest) {
    this.destinations = this.destinations.filter(location => location !== dest );
  }
}

const createItinerary = (flights, startingLocation) => {
  let flightsConsumed = 0;
  const flightOrders = [[]];
  let index = 0;
  let depth = 0;
  const graph = new Graph();
  flights.forEach(pair => {
    graph.createLocation(pair[0]);
    graph.createLocation(pair[1]);
  });

  flights.forEach(pair => {
    const start = graph.getLocation(pair[0]);
    const dest = graph.getLocation(pair[1]);
    start.addDestination(dest);
  });

  const DFS = (node) => {
    if (!node) return;

    flightOrders[index].push(node);
    depth++;

    node.destinations.forEach(dest => {
      node.removeDestination(dest);
      DFS(dest);
      node.addDestination(dest);
      flightOrders.push(flightOrders[index].slice(0, --depth));
      index++;
    });
  };

  DFS(graph.getLocation(startingLocation));


  const filteredAndSortedFlights = flightOrders
    .filter(order => order.length === flights.length + 1)
    .sort((a, b) => {
      const lexA = a.map(location => location.name).join('');
      const lexB = b.map(location => location.name).join('');

      return lexA < lexB ? -1 : 1;
    });

  return filteredAndSortedFlights.length  ? filteredAndSortedFlights[0] : null;
}

// const flights = [['A', 'B'], ['A', 'C'], ['B', 'C'], ['C', 'A']];
// const flights = [['SFO', 'COM'], ['COM', 'YYZ']];
const flights = [['SFO', 'HKO'], ['YYZ', 'SFO'], ['YUL', 'YYZ'], ['HKO', 'ORD']];

console.log(createItinerary(flights, 'YUL'));