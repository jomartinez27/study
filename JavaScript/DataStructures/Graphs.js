import Dictionary from './Dictionary.js';
import Queue from './Queue';
// ES5
function Graph() {
  // We will use an array to store the names of all the vertices of the graph
  // line {1}, and we will use a dictionary to store adjacent list line {2}
  // The dictionary will use the name of the vertex as a key and the list
  // of adjacent vertices as a value. Both the vertices array and the adjList
  // dictionary are private attributes

  var vertices = []; // {1}
  var adjList = new Dictionary(); // {2}

  this.addVertex = function(v) {
    // this method receives a vertex v as a parameter. We will add this vertex
    // to the list of vertices (line {3}), and we will also initialize the
    // adjacent list with an empty array by setting the dictionary value
    // of the vertex v key with an empty array (line {4})
    vertices.push(v) // {3}
    adjList.set(v, []) // {4}
  };

  this.addEdge = function(v, w) {
    // this method receives two vertices as parameters. First, we will add
    // an edge from vertex v to vertex w, (line {5}) by adding w to the
    // adjacent list of v. If you want to implement a directed graph, line {5} is enough
    // With an undirected graph, we also need to add an edge from w to v line {6}
    adjList.get(v).push(w); // {5}
    adjList.get(w).push(v) // {6}
  }

  this.toString = function() {
    var s = "";
    for (var i = 0; i < vertices.length; i++) {
      s += vertices[i] + " - > ";
      var neighbors = adjList.get(vertices[i]);
      for (var j = 0; j < neighbors.length; j++) {
        s += neighbors[j] + " ";
      }
      s += "\n";
    }
    return s;
  }

  // BFS algorithm starts traversing the graph from the first specified vertex
  // and visits all its neighbors (adjacent vertices) first, one layer of the
  // graph at a time. It visits the vertices first widely then deeply

  // Marking the vertices that we have already visited, we will use three
  // colors to reflect their status:
  // White: This represents that the vertex has not been visited
  // Grey: This represents that the vertex has been visited but not explored
  // Black: This represents that the vertex has been completely explored

  var initializeColor = function() {
    var color = [];
    for (var i = 0; i < vertices.length; i++) {
      color[vertices[i]] = "white"; // {1}
    }
    return color;
  }

  // Steps starting at vertex v:
  // 1) Create a queue Q
  // 2) Mark v as discovered and enqueue v into Q
  // 3) While Q is not empty, perform the following:
  //    a) Dequeue u from Q
  //    b) Mark u as discovered
  //    c) Enqueue all the unvisited neighbors w of u
  //    d) Mark u as explored
  this.bfs = function(v, callback) {
    var color = initializeColor(); // {2}
    var q = new Queue(); //{3}
    q.enqueue(v); //{4}

    while (!q.isEmpty()) { //{5}
      var u = q.dequeue(); //{6}
      neighbors = adjList.get(u); //{7}
      color[u] = "grey"; //{8}
      for (var i = 0; i < neighbors.length; i++) { //{9}
        var w = neighbors[i]; //{10}
        if (color[w] === "white") { //{11}
          color[w] = "grey"; //{12}
          q.enqueue(w); //{13}
        }
      }
      color[u] = "black"; //{14}
      if (callback) {  //{15}
        callback(u);
      }
    }
  }
}

function printNode(value) {
  console.log('Visited vertex: ' + value);
}

// Test graph
var graph = new Graph();
var myVertices = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I']; // {7}
for (var i = 0; i < myVertices.length; i++) { // {8}
  graph.addVertex(myVertices[i])
}
graph.addEdge('A', 'B') // {9}
graph.addEdge('A', 'C')
graph.addEdge('A', 'D')
graph.addEdge('C', 'D')
graph.addEdge('C', 'G')
graph.addEdge('D', 'G')
graph.addEdge('D', 'H')
graph.addEdge('B', 'E')
graph.addEdge('B', 'F')
graph.addEdge('E', 'I')
