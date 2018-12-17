// Binary Tree Inorder Traversal: Given a binary tree, return the inorder
// traversal of its node's values. Do this iteratively.
// 1
//  \
//   2
//  /
// 3
// return [1,3,2]

// Approach: We need to use a Stack to store all the root elements so that
// the left subtrees can be processed. Once the left subtree is processed,
// the root value is added to the list and process is repeated for the right
import { Node, BinarySearchTree } from '../DataStructures/BSTES.js';
import Stack from '../DataStructures/Stack.js';

const iterInorderTraversal = (root) {
  let list = [];
  let stack = Stack.new();
  while (root !== null || !stack.isEmpty()) {
    // if the root is not null, push it onto the stack and continue with left
    if (root != null) {
      stack.push(root);
      root = root.left
    }

    // remove from the stack and process the node value
    root = stack.pop();
    list.push(root.val);

    // continue with the right node
    root = root.right;
  }
  return list;
}

// Time complexity: O(n)
// this is an iterative approach which is performed on each node in the Tree

// Space complexity: O(log N)
// The stack needs to store maximum of log N elements(all its ancestors)
// at any given time
