import Graph from './Graphs.js';

// Dijkstra's algorithm is a "greedy algorith" to calculate the shortest
// path between a single source and all the other sources.


//        4
//     B ---> D
// 2 / | \ 2 |  \2
// A  2|  \  |3  F
//4 \  v   v | / 2
//   C ---> E
//      3

// How can we find the shortest path between vertex A and all the other vertices?

var graph = [[0, 2, 4, 0, 0, 0],
             [0, 0, 1, 4, 2, 0],
             [0, 0, 0, 0, 3, 0],
             [0, 0, 0, 0, 0, 2],
             [0, 0, 0, 3, 0, 2],
             [0, 0, 0, 0, 0, 0]]

Graph.prototype.dijkstra = function(src) {
  var dist = []
  var visited = []
  var length = this.graph.length;

  for (let i = 0; i < length; i++) { // {1}
    dist[i] = INF;
    visited[i] = false;
  }
  dist[src] = 0; // {2}
  for (let i = 0; i < length - 1; i++) { // {3}
    var u = minDistance(dist, visited) // {4}
    visited[u] = true; // {5}

    for (var v = 0; v < length; v++) {
      if (!visited[v] && this.graph[u][v] != 0 && dist[u] != INF &&
        dist[u] + this.graph[u][v] < dist[v]) { // {6}
          dist[v] = dist[u] + this.graph[u][v]; // {7}
        }
    }
  }
  return dist; // {8}
}

// Line {1}: First we need to initialize all the distances, (dist) as infinite
//           JavaScript max number INF = Number.MAX_SAFE_INTEGER) and visitied[] as false
// Line {2}: Second, we will set the distance of the source vertex from itself as 0
// Line {3}: Then, we will find the shortest path for all vertices
// Line {4}: To do so, we need to select the minimum distance vertex from
//           the set of vertices that is not processed yet
// Line {5}: We need to mark the selected vertex as visited so that we do not
//           calculate twice
// Line {6}: In case a shortest path is found, we will set the new value for the shortest path Line {7}
// Line {8}: After all the vertices are processed, we will return the result
//           containing the shortest path value from the vertex source (src)
//           to all the other vertices of the graph






// To calculate the minDistance between, we will search for the minimum
// value in the dist array, and return the array index that contains the minimum value
