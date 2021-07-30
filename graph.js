// The Data
const airports = 'PHX BKK OKC JFK LAX MEX EZE HEL LOS LAP LIM'.split(' ');

const routes = [
	['PHX', 'LAX'],
  ['PHX', 'JFK'],
  ['JFK', 'OKC'],
  ['JFK', 'HEL'],
  ['JFK', 'LOS'],
  ['MEX', 'LAX'],
  ['MEX', 'BKK'],
  ['MEX', 'LIM'],
  ['MEX', 'EZE'],
  ['LIM', 'BKK'],
];

// The Graph
const adjacenyList = new Map();

// Add Node
function addNode(airport) {
	adjacenyList.set(airport, []);
}

// Add Edge, undirected
function addEdge(origin, destination) {
	adjacenyList.get(origin).push(destination);
  adjacenyList.get(destination).push(origin);
}

// Create the graph represented as an adjaceny list
airports.forEach(addNode);
routes.forEach(route => addEdge(...route));

console.log(adjacenyList);
console.log('\n');

// Breadth first search -> Find if there is a route between x and y
function bfs(start, airportToFind) {
  const visited = new Set();
  const queue = [start];

  while(queue.length > 0) {
    const airport = queue.shift();
    const destinations = adjacenyList.get(airport);

    for (const destination of destinations) {
      if (destination === airportToFind) {
        console.log(`BFS found ${airportToFind}`);
      }

      if (!visited.has(destination)) {
        visited.add(destination);
        queue.push(destination);
        console.log(destination);
      }
    }
  }
}

bfs('PHX', 'BKK');
console.log('\n');

// Depth first search -> Find if there is a route between x and y
function dfs(start, airportToFind, visited = new Set()) {
  console.log(start);
  visited.add(start);

  const destinations = adjacenyList.get(start);
  steps = 1;

  for (const destination of destinations) {
    steps++
  
    if (destination === airportToFind) {
      console.log(`DFS found ${airportToFind} in ${steps} steps`);
      return;
    }

    if (!visited.has(destination)) {
      dfs(destination, airportToFind, visited);
    }
  }
}

dfs('PHX', 'BKK');
