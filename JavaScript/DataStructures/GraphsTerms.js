// A Graph is an abstract model of a network structure. A graph is a set
// of nodes (or vertices) connected by edges. Learning about graphs is important
// because any binary relationship can be represented by a graph

// Any social network, Facebook, Twitter etc. can be represented by a graph
// We can also use graphs to represent roads, flights, and communications

// A graph is represented as G = (V,E)
// V: A set of vertices
// E: A set of edges connection the vertices in V

// Diagram of a graph
//                A
//              / | \
//            B   C - D
//           / \    \/ \
//          E   F    G  H
//          |
//          I

// Vertices - connected by an edge are called adjacent vertices. EX A and B
// are adjacent, A and D are adjacent, A and C are adjacent, A and E are NOT adjacent

// A degree of a vertex consists of the number of adjacent vertices. Ex
// A is connected to other three vertices, therefore A has degree 3;
// E is connected to other two vertices therefore E has degree 2

// A path is a sequence of consecutives vertices such as v1, v2, vk,
// where vi and vi+1 are adjacent. We have paths A B E I and A C D G, among others

// A simple path does not contain repeated vertices, EX path A D G. A cycle
// is a simple path, except for the last vertex, which is the same as the first
// vertex A D C A (back to A)

// A graph is acyclic if it does not have cycles. A graph is connected if there
// is a path between every pair of vertices

// Graphs can be "unidirected" (where edges do not have a direction) or
// "directed" (digraph) where edges have a direction

// Diagram of a directed
//                A
//              / | \
//             v  v v
//            B   C <-> D
//           / \    \ / \
//          v  v    vv   v
//          E   F    G   H
//          |
//          v
//          I

// A graph is "strongly connected" if there is a path in both directions
// between every pair of vertices. EX C and D are strongly connected while
// A and B are not strongly connected

// Graphs can also be "unweighted" or "weighted" in which the edges have weights

// Diagram of a directed
//                A
//             2/1| \4
//             v  v v
//            B   C <-> D
//          4/ \3    2\3/1 \1
//          v  v    vv   v
//          E   F    G   H
//          |6
//          v
//          I

// Representing the Graph:
// There is no correct way of representing a graph among the existing possibilities
// The "Adjacency Matrix" is among the most common. Each node is associated
// with an integer, which is the array index. We will represent the connectivity
// between vertices using a two-dimensional array, as array[i][j] === 1 if
// there is an edge from the node with index i to the node with index j or
// as array[i][j] === 0

// Demonstrated Matrix
//    A   B   C   D   E   F   G   H   I
//  A 0   1   1   1   0   0   0   0   0
//  B 1   0   0   0   1   1   0   0   0
//  C 1   0   0   1   0   0   1   0   0
//  D 1   0   1   0   0   0   1   1   0
//  E 0   1   0   0   0   0   0   0   1
//  F 0   1   0   0   0   0   0   0   0
//  G 0   0   1   1   0   0   0   0   0
//  H 0   0   0   1   0   0   0   0   0
//  I 0   0   0   0   1   0   0   0   0

// Graphs that are not strongly connected (sparse graphs) will be represented
// by a matrix with many zero entries in the Adjacency matrix. Meaning we would
// waste space in the computer memory to represent edges that do not exist
// EX: if we need to find the adjacent vertices of a given vertex, we will have
// to iterate through the whole row even if this vertex has only one adjacent vertex

// Adjaceny list:
// We can use a dynamic data structure to represent graphs as well, called an
// "adjacency list". This consists of a list of adjacent vertices for every
// vertex of the graph. There are a few different ways we can represent
// this data structure. To represent the list of adjacent vertices, we can
// use a list (array), a linked list, or even a hash map or dictionary.

// Demonstrated Adjaceny List
// A | B C D
// B | A E F
// C | A D G
// D | A C G H
// E | B I
// F | B
// G | C D
// H | D
// I | E

// Both representations are very useful and have different properties
// EX finding out whether the vertices v and w are adjacent is faster using
// adjacent matrix

// Traversing:
// Similar to the tree data structure, we can also visit all the nodes of
// a graph. There are two algorithms that can be used to traverse a graph
// called "breadth-first search" (bfs) and "depth-first search" (dfs)
// Traversing a graph can be used to find specific vertex or a path between
// two vertices, to check whether the graph is connected, to check whether
// it contains cycles and so on.

// The idea of graph traversal algorithms is that we must track each vertex
// when we first visit it and keep track of which vertices have not yet
// been completely explored. For both traversal graph algorithms, we need
// to specify which will be the first vertex to be visited
// To completely explore a vertex, we need to look at each edge of this vertex
// For each edge connected to a vertex that has not been visited yet, we will
// mark it as discovered and add it to the list of vertices to be visited
// In order to have efficient algorithms, we must visit each vertex twice
// at most when each of its endpoints is explored. Every edge and vertex
// in the connected graph will be visited

// BFS and DFS are basically the same with only one difference, the data
// structure used to store the list of vertices to be visited.

// DFS | Stack | By storing the vertices in a stack, the vertices are explored
//               by lurching along a path, visiting a new adjacent vertex if there is one

// BFS | Queue | By storing the vertices in a queue, the oldest unexplored
//               vertices are explored first.



// BFS implementation:
// var initializeColor = function() {
//   var color = [];
//   for (var i = 0; i < vertices.length; i++) {
//     color[Vertices[i]] = "whtie"; // {1}
//   }
//   return color;
// }

// Steps starting at vertex v:
// 1) Create a queue Q
// 2) Mark v as discovered and enqueue v into Q
// 3) While Q is not empty, perform the following:
//    a) Dequeue u from Q
//    b) Mark u as discovered
//    c) Enqueue all the unvisited neighbors w of u
//    d) Mark u as explored
// this.bfs = function(v, callback) {
//   var color = initializeColor(); // {2}
//   var q = new Queue(); //{3}
//   q.enqueue(v); //{4}
//
//   while (!q.isEmpty()) { //{5}
//     var u = q.dequeue(); //{6}
//     neighbors = adjList.get(u); //{7}
//     color[u] = "grey"; //{8}
//     for (var i = 0; i < neighbors.length; i++) { //{9}
//       var w = neighbors[i]; //{10}
//       if (color[w] === "white") { //{11}
//         color[w] = "grey"; //{12}
//         q.enqueue(w); //{13}
//       }
//     }
//     color[u] = "black"; //{14}
//     if (callback) {  //{15}
//       callback(u);
//     }
//   }
// }

// For both BFS and DFS, we need to mark the vertices visited. To do so,
// we will use a helper array called color. As and when we start executing
// the BFS and DFS algorithms, all the vertices have the color white line {1}
// so we can create a helper functtion called initializeColor, which will do
// this for us for both the algorithms that we are implementing.

// The first thing we will do is use the initializeColor function to initialize
// the color array with the white color line {2}. We also need to declare and
// create a Queue instance line {3} that will store the vertices that need to be
// visited and explored

// BFS method receives a vertex that will be used as the point of origin for
// our algorithm. As we need a starting point, we will enqueue this vertex into
// the queue line {4}

// If the queue is not empty line {5}, we will remove a vertex from the queue
// be dequeuing it line {6}, and we will get its adjacency list that contains
// all its neighbors line {7}. We will also mark this vertex as grey, meaning
// we have discovered it (but have not finished exploring it) line {8}

// For each neighbor of u line {9}, we will obtain its value (the name of the vertex line {10})
// and if it has not been visited yet (the color set to white line {11})
// we will mark that we have discovered it (the color is set to grey line {12})
// and will add this vertex to the queue line {13} so that it can be finished
// exploring when we dequeue it from the queue

// When we finish exploring the vertex and its adjacent vertices, we will
// mark it as explored set color to black line {14}

// We implemented our bfs to take a callback, in order to print the nodes
