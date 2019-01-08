// Clone an undirected graph. Each node in the graph contains a label
// and a list of its neighbors

// OJ's undirected graph serialization: Nodes are labeled uniquely


// total = (arr.length + 1) * arr.length / 2
// actual_sum = arr.inject(&:+)
// total - actual_sum

function solution(A) {
  let total = (A.length + 1) * A.length / 2;
  let actualSum = 0;
  for (let i = 0; i < A.length; i++) {
    actualSum += A[i];
  }
  return total - actualSum
}
