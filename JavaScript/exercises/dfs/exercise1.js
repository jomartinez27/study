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
