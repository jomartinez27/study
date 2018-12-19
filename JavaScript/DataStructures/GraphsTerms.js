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
