import Dictionary from './Dictionary.js';
import Queue from './Queue.js';
import Stack from './Stack.js'
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

  this.breadthFirst = function(v) {
    // We also need to declare the d array line {1}, which represents the distances
    // and the pred array line {2} which represents the predecessors. The next
    // step would be initializing the d array with zero line {4} and the pred
    // array with null line {5} for every vertex of the graph line {3}

    // when we discover the neighbor w of a vertex u, we will set the predecessor
    // value of w as u line {7} and also increment the distance line {6}
    // between v and w by adding 1 and the distance of u (as u is a predecessor
    //  of w, we have the value d[u] already)

    // at the end of the method, we can return an object with d and pred line {8}

    var color = initializeColor(),
    queue = new Queue(),
    d = [], // {1}
    pred = []; // {2}
    queue.enqueue(v);

    for (var i = 0; i < vertices.length; i++) { // {3}
      d[vertices[i]] = 0; // {4}
      pred[vertices[i]] = null; //{5}
    }

    while (!queue.isEmpty()) {
      var u = queue.dequeue(),
      neighbors = adjList.get(u);
      color[u] = 'grey';
      for (var j = 0; j < neighbors.length; j++) {
        var w = neighbors[j];
        if (color[w] === 'white') {
          color[w] = 'grey';
          d[w] = d[u] + 1 // {6}
          pred[w] = u; // {7}
          queue.enqueue(w);
        }
      }
      color[u] = 'black';
    }
    return { //{8}
    distances: d,
    predecessors: pred
    }
  }

  this.dfs = function(callback) {
    // The DFS steps are recursive, meaning the DFS algorithm uses a stack
    // to store the calls (a stack created by the recursive calls)

    // The first thing we need to do is create and initialize color array line {1}
    // For each nonvisited vertex lines {2} and {3}, we will call the recursive
    // private function dfsVisit, passing the vertex, the color array, and the
    // callback function line {4}

    // Whenever we visit the u vertex, we will mark it as discovered line {5}
    // If there is a callback function line {6}, we will execute it to output
    // the vertex visited. Then the next step is getting hte list of neighbors of u line {7}
    // For each unvisited (the color white, lines {10} and {8}) neighbor w
    // line {9} of u, we will call the dfsVisit function, passing w and
    // the other parameters line {11} add the vertex w to the stack so it can be
    // visited next. At the end after the vertex and its adjacent vertices are visited
    // deeply, we will backtrack, meaning the vertex is completely explored and
    // is marked black line {12}
    var color = initializeColor(); // {1}
    for (var i = 0; i < vertices.length; i++) { // {2}
      if (color[vertices[i]] === "white") { // {3}
        dfsVisit(vertices[i], color, callback); // {4}
      }
    }
  }

  var dfsVisit = function(u, color, callback) {
    color[u] = 'grey'; // {5}
    if (callback) { // {6}
      callback(u);
    }
    var neighbors = adjList.get(u);  // {7}
    for (var i = 0; i < neighbors.length; i++) { // {8}
      var w = neighbors[i]; //{9}
      if (color[w] === 'white') { // {10}
        dfsVisit(w, color, callback) // {11}
      }
    }
    color[u] = 'black'; // {12}
  }

  var time = 0; // {1}
  this.depthFirst = function() {
    var color = initializeColor(), // {2}
    d = [],
    f = [],
    p = [];
    time = 0;

    for (var i = 0; i < vertices.length; i++) { // {3}
      f[vertices[i]] = 0;
      d[vertices[i]] = 0;
      p[vertices[i]] = null;
    }
    for (var j = 0; j < vertices.length; j++) {
      if (color[vertices[j]] === 'white') {
        DFSVisit(vertices[j], color, d, f, p);
      }
    }
    return {  // {4}
      discovery: d,
      finished: f,
      predecessors: p
    }
  }

  var DFSVisit = function(u, color, d, f, p) {
    console.log('discovered ' + u);
    color[u] = 'grey';
    d[u] = ++time; // {5}
    var neighbors = adjList.get(u);

    for (var i = 0; i < neighbors.lenght; i++) {
      var w = neighbors[i];
      if (color[w] === 'white') {
        p[w] = u; // {6}
        DFSVisit(w, color, d, f, p);
      }
    }
    color[u] = 'black';
    f[u] = ++time;
    console.log('explored ' + u);
  }
}

function printNode(value) {
  console.log('Visited vertex: ' + value);
}

// Test graph
// var graph = new Graph();
// var myVertices = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I']; // {7}
// for (var i = 0; i < myVertices.length; i++) { // {8}
//   graph.addVertex(myVertices[i])
// }
// graph.addEdge('A', 'B') // {9}
// graph.addEdge('A', 'C')
// graph.addEdge('A', 'D')
// graph.addEdge('C', 'D')
// graph.addEdge('C', 'G')
// graph.addEdge('D', 'G')
// graph.addEdge('D', 'H')
// graph.addEdge('B', 'E')
// graph.addEdge('B', 'F')
// graph.addEdge('E', 'I')
//
// // run breadthFirst method and store its return value in a variable,
// var shortestPathA = graph.breadthFirst(myVertices[0])
// console.log(shortestPathA)
//
// // With the predecessor's array, we can build the path from vertex A to the
// // other vertices
//
// var fromVertex = myVertices[0]; // {9}
// for (var i = 1; i < myVertices.length; i++) { // {10}
//   var toVertex = myVertices[i], //{11}
//   path = new Stack(); // {12}
//   for (var v = toVertex; v !== fromVertex; v = shortestPathA.predecessors[v]) { // {13}
//       path.push(v);
//   }
//   path.push(fromVertex); // {15}
//   var s = path.pop(); // {16}
//   while (!path.isEmpty()) { // {17}
//     s += " - " + path.pop(); // {18}
//   }
//   console.log(s);
// }

// We will use the vertex A as the source vertex line {9}. For every other
// vertex (except vertex A, line {10}), we will calculate the path from vertex
// A to it. To do so, we will get the value of the toVertex method from the
// vertices array line {11} and we will create a stack to store the path values line {12}
// Next, we will follow the path from toVertex to fromVertex line {13}.
// The v variable will receive the value of its predecessor and we will be able to
// take the same path backwards. We will add the v variable to the stack
// line {14}. Finally, we will add the origin vertex to the stack as well line {15}

// After this, we will create an s string, and we will assign the orign vertex
// to it (this will be the last vertex added to th stack, so it is the first
// item to be popped out line {16}). While the stack is not empty line {17}
// we will remove an item from the stack and concatenate it to the existing
// value of the s string line {18}. Finally line {19} we output the s string



// Testing Topological
var graph = new Graph();
var myVertices = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I'];
for (var i = 0; i < myVertices.length; i++) {
  graph.addVertex(myVertices[i])
}
graph.addEdge('A', 'C')
graph.addEdge('A', 'D')
graph.addEdge('B', 'D')
graph.addEdge('B', 'E')
graph.addEdge('C', 'F')
graph.addEdge('F', 'E')
var result = graph.depthFirst();

// this will create the graph, apply the edges execute improved DFS algorithm
// and store the results inside the result variable.
// All we have to do is sort the finishing time array and the decreasing
// order of finishing time.
