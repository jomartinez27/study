// A tree is an abstract model of a hierarchical structure. The most common
// example of a tree in real life would be a family tree or a company
// organizational chart

// A tree consists of nodes with a parent-child relationship. The top node
// of a tree is called the root. Each element of the tree is called a node
// There are "internal nodes" and "external nodes".
// Internal nodes - is a node with at least one child
// External nodes - is a node that does not have children

// A node can have ancestors and descendants. The ancestors (except for root)
// are parent, grandparent, great-grandparent and so on.
// A subtree is a tree inside another tree. The depth of a node consits of the
// number of ancestors. The height of a tree consists of the maximum depth of any node

// Binary Tree - A node in a Binary tree has two at most two children, one left and one right
// A Binary Search Tree - is a Binary Tree, but it only allows ypu to store
// nodes with lesser values on the left-hand side and nodes with greater values on the right
// hand side.

//es5 Binary Search Tree
function BinarySearchTree() {
  var Node = function(key) {
    this.key = key;
    this.left = null;
    this.right = null;
  }

  var root = null;

  //insert(key): inserts a new key in the tree
  this.insert = function(key) {
    // to insert new node, there are three steps; first is to create the
    // instance of the Node class that will represent the new node.
    // second: we need to verify that the insertion is a special case,
    // if the node is the first node in the tree, if it is we set the root to the node
    // third, is to add a node to a different position than the root
    var newNode = new Node(key);

    if (root === null) {
      root = newNode;
    } else {
      insertNode(root, newNode);
    }
  }

  //insertNode(node, newNode): recursive helper function to handle insert function
  this.insertNode = function(node, newNode) {
    // * if the tree is not empty, we need to find a place to add a new node
    // for this, we will call the insertNode function by passing the root and the node as parameters
    // * if the node's key is less than the current node key (in this case, it is the root)
    // then we need to check the left child of the node. If there is no left node
    // then we will insert the new node there. If not, we need to descend a level in the
    // tree by calling insertNode recursively. In this case, the node we will compare
    // next time will be the left child of the current node.
    // * If the node's key is greater than the current node key and there is no right
    // child, then we will insert the new node there, if not we will also
    // need to call the insertNode function recursively
    if (newNode.key < node.key) {
      if (node.left ==== null) {
        node.left = newNode;
      } else {
        insertNode(node.left, newNode);
      }
    } else {
      if (node.right === null) {
        node.right = newNode;
      } else {
        insertNode(node.right, newNode);
      }
    }
  }

  //search(key): searches for the key in the tree and returns true if it exists
  this.search = function(key) {

  }

  // inOrderTraverse(): visits all nodes of the tree using in-order traverse
  this.inOrderTraverse = function(callback) {
    // inOrderTraverse method receives a "callback" function as a parameter
    // This function can be used to perform the action we want to execute
    // when the node is visited
    inOrderTraverseNode(root, callback);
  }

  var inOrderTraverseNode = function(node, callback) {
    // to traverse a tree using the in-order method, we need to first check
    // wheter the tree node that was passed is null, which is the base case
    // next we will visit the left node by calling the same function recursively
    // Then we will visit the root node, and then we will visit the right node
    if (node !== null) {
      inOrderTraverseNode(node.left, callback);
      callback(node.key);
      inOrderTraverseNode(node.right, callback);
    }
  }

  //preOrderTraverse(): visits all nodes of the tree using pre-order traverse
  this.preOrderTraverse = function(callback) {
    preOrderTraverseNode(root, callback);
  }

  var preOrderTraverseNode = function(node, callback) {
    // The difference between the in-order and pre-order traversals is that
    // the pre-order one visits the root node first, then the left node, then the right
    // while in-order executes lines 2, 1, 3
    if (node !== null) {
      callback(node.key); // 1
      preOrderTraverseNode(node.left, callback); // 2
      preOrderTraverseNode(node.right, callback); // 3
    }
  }

  this.postOrderTraverse = function(callback) {
    postOrderTraverseNode(root, callback);
  }

  var postOrderTraverseNode = function(node, callback) {
    if (node !== null) {
      postOrderTraverseNode(node.left, callback);
      postOrderTraverseNode(node.right, callback);
      callback(node.key)
    }
  }

  //min(): returns the minimum value/key in the tree
  this.min = function() {
    return minNode(root)
  }

  var minNode = function(node) {
    // we traverse the left edge of the tree until we find the node at the
    // highest level of the tree (leftmost end)
    if (node) {
      while (node && node.left !== null) {
        node = node.left;
      }
      return node.key
    }
    return null;
  }

  //max(): returns the maximum value/key in the tree
  this.max = function() {
    return maxNode(root);
  }

  var maxNode = function(node) {
    // similar to minNode function, we traverse to the right until we find
    // the last node at the right
    if (node) {
      while (node && node.right !== null) {
        node = node.right;
      }
      return node.key;
    }
    return null;
  }

  this.search = function(key) {
    return searchNode(root, key);
  }

  var searchNode = function(node, key) {
    if (node === null) {
      return false;
    }
    if (key < node.key) {
      return searchNode(node.left, key);
    } else if (key > node.key) {
      return searchNode(node.right, key);
    } else {
      return true;
    }
  }

  //remove(key): removes the key from the tree
  this.remove = function(key) {
    root = removeNode(root, key); // {1}
  }

  var removeNode = function(node, key) {
    // As a stop point we have line {2}. If the node we are analyzing is null, it means
    // the key does not exist in the tree, and for this reason, we will return null
    //
    // Then, the first thing we need to do is to find the node in the tree.
    // So, if the key we are looking for has a lower value than the current node (line {3})
    // then we will go to the next node at the left-hand side edge of the tree (line {4})
    // If the key is greater than the current node (line {6}), then we will go to
    // the next node at the right-hand side edge of the tree (line {7})
    //
    // If we find the key we are looking for (key is equal to node.key), then
    // we will have three different scenarious to handle

    // The first scenario is a leaf node that does not have a left, or right
    // child (line {9}). In this case, all we have to do is get rid of
    // this node by assigning null to it (line {10}). However it is not
    // enough to assign null to the node, we also need to take care of the
    // pointers. In this case, the node doest not have any children, but it
    // does have a parent node. We need to assign null to its parent node,
    // and this can be done by returning null (line {11}).
    //
    // As the node already has the value null, the parent pointer to the node
    // will receive this value as well. This is why we are returnning the node
    // values as the return function.

    // Second scenario, a node that has a left or right child. In this case
    // we need to skip this node and assign the parent pointer to the child node
    //
    // If the node does not have a left child (line {12}), it means it has a right
    // child, so we will change the reference of the node to its right child (line {13})
    // and return the updated node (line {14}). We will do the same if the node
    // does not have the right child (line {15}); we will update the node reference
    // to its left child (line {16}) and return the updated value (line {17})

    // The third scenario, the node we are trying to remove has two children
    // To remove a node with children, there are 4 steps that need to be performed
    // 1. Once we find the node we want to remove, we need to find the minimum
    //    node from its right-hand side edge subtree (line {18})
    // 2. Then we will update the value of the node with the key of the
    //    minimum node from its right-hand side subtree (line {19}). With
    //    this action, we are replacing the key of the node, which means it was removed
    // 3. Now we have two nodes in the tree with the same key, and this cannot
    //    happen. We need to remove the minimum node from the right subtree as we
    //    moved it to the place of the removed node (line {20}).
    // 4. Finally we will return the updated node reference to its parent (line {21})


    if (node === null) { // {2}
      return null;
    }
    if (key < node.key) { // {3}
      node.left = removeNode(node.left, key); // {4}
      return node; // {5}
    } else if (key > node.key) { // {6}
      node.right = removeNode(node.right, key); // {7}
      return node; // {8}
    } else {
      if (node.left === null && node.right === null) { // {9}
        node = null; // {10}
        return node; // {11}
      }
      if (node.left === null) { // {12}
        node = node.right // {13}
        return node; // {14}
      } else if (node.right === null) { // {15}
        node = node.left; // {16}
        return node; // {17}
      }
      var aux = findMinNode(node.right); // {18}
      node.key =  aux.key // {19}
      node.right = removeNode(node.right, aux.key); // {20}
      return node; // {21}
    }
  }

  var findMinNode = function(node) {
    while (node && node.left !== null) {
      node = node.left;
    }
    return node;
  }
}
