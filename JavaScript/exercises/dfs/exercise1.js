class Node {
  constructor(value) {
    this.value = value;
    this.children = [];
  }

  add(value) {
    this.children.push(new Node(value));
  }

  remove(value) {
    this.children = this.children.filter(child => child.value !== value);
  }
}

class Tree {
  constructor() {
    this.root = null;
  }

  //DFS to check for a value
  depthFirstSearch(value) {
    // to check for a value inside a tree we will begin with declaring
    // a collection array, which contains the root node. The we build a
    // while loop that will run until there is no longer a value inside of the array

    // DFS uses a Stack to traverse down the tree of nodes. We will declare the
    // current node by shifting off the first value of the array. With this
    // node, we will check to see if its data is equal to the value we are searching
    //for. If it is equal, we will return true and exit, if the node's value does
    // not match, we will push the children of that node to the front of the array
    // if it exists. We unshift the children to the front because the DFS
    // approach wants us to go all the way to the bottom of the tree before checking
    // any sibling element. If no value matches after searching we return false
    let collection = [this.root];

    while (collection.length) {
      let node = collection.shift();

      if (node.value === value) {
        return true
      } else {
        collection.unshift(...node.children)
      }
    }
    return false;
  }
}
