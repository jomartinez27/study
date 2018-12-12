// es6 bst
class Node {
  constructor(key) {
    this.key = key;
    this.left = null;
    this.right = null;
  }
}

class BinaryTree {
  constructor() {
    this.root = null;
  }

  insert(key) {
    if (this.root === null) {
      this.root = new Node(key);
    } else {
      this.insertNode(this.root, key);
    }
  }

  insertNode(node, key) {
    let newNode = new Node(key);
    if (newNode.key < node.key) {
      if (node.left === null) {
        node.lefft = newNode;
      } else {
        insertNode(node.left, newNode);
      }
    } else {
      if (node.right === null) {
        node.right = newNode;
      } else {
        insertNode(node.right, newNode)
      }
    }
  }

  getRoot() {
    return this.root;
  }

  searchNode() {
    
  }
}
