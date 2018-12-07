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
  }

  var inOrderTraverseNode = function(node, callback) {
    if (node !== null) {
      inOrderTraverseNode(node.left, callback);
      callback(node.key);
      inOrderTraverseNode(node.right, callback);
    }
  }

  //preOrderTraverse(): visits all nodes of the tree using pre-order traverse
  this.preOrderTraverse = function() {

  }

  //min(): returns the minimum value/key in the tree
  this.min = function() {

  }

  //max(): returns the maximum value/key in the tree
  this.max = function() {

  }

  //remove(key): removes the key from the tree
  this.remove = function() {

  }
}
