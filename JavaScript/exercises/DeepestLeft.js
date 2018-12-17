// Deepest Left-Most Node: Given a root node, return the deepest left-most
//node in the tree. You may assume that there will always be a valid tree

// Approach: We can perform BreadthFirstSearch to get the deepest node,
// and reverse BreadthFirstSearch to get the left most, deepest node

const deepestLeft = (root) => {
  let queue = [root];
  let leftMost;
  while (queue.length > 0) {
    let current = queue.shift();
    if (current.right) {
      queue.unshift(current.right);
    }
    if (current.left) {
      queue.unshift(current.left);
    }
    leftMost = current;
  }
  return leftMost;
}
