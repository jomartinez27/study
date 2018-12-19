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
