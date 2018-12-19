import Dictionary from './Dictionary.js';
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
}
