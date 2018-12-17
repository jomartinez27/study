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
