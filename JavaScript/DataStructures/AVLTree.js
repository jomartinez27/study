// BST has a problem: depending on how many nodes you add, one of the edges
// of the tree can be very deep, meaning a branch of the tree can have
// a high level and another branch can have a low level

// This can cause performance issues when adding, removing, and searching
// for a node on a particular edge of the tree. For this reason, there is
// a tree called the "Adelson-Velskii and Landi's tree (AVL tree)". The AVL
// tree is a self-balancing BST tree, which means the height of both the
// left and right subtrees of any node differs by 1 at most.

// The AVL tree is a self-balancing tree, meaning the tree tries to self-balance
// whenever a node is added to it or removed from it. The height of the left
// or right subtree of any node (and any level) differs by 1 at most. This
// means the tree will try to become a complete tree whenever possible while
// adding or removing a node

import BinaryTree from './BSTES6.js';

class AVLTree extends BinaryTree {
  constructor() {

  }

  //insertNode(node, element)
  insertNode(node, element) {
    // inserting and removing nodes in an AVL tree works the same way
    // as in BST. However, the difference in the AVL tree is that we will need
    // to verify its balance factor, and if needed, we will apply the logic
    // to self-balance the tree

    // Whenever we insert a new node, we need to check whether the tree needs
    // to be balanced (line {1}, and {2})

    // calculating the balance factor:
    // We need to calculate the difference between the height of the right-hand
    // side subtree (hr) and the left-hand side subtree (hl). The result of
    // The result of hr - hl needs to be 0, 1, or -1. If the result is different
    // from these values, it means the tree needs to be balanced
    if (node === null) {
      node = new Node (element);
    } else if (element < node.key) {
      node.left = insertNode(node.left, element);
      if (node.left !== null) {
        // verify if balancing is needed {1}
      }
    } else if (element > node.key) {
      //veryify if balancing is needed {2}
    }
    return node;
  }

  heightNode(node) {
    if (node === null) {
      return -1;
    } else {
      return Math.max(heightNode(node.left), heightNode(node.right)) + 1;
    }
  }

}
