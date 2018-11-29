// Linked Lists store a sequential collection of elements
// but unlike arrays, the elements are not placed contiguosly in memory
// Each element consists of a node that stores the element itself and also
// a reference that points to the next element.

// es5 implementation
function LinkedList() {
  let Node = function(element) {
    // helper class represents the item that we want to add
    // contains element attribute, which is the value, and next
    // which is the pointer
    this.element = element;
    this.next = null;
  }

  // length property that stores the number of items we have on the list
  let length = 0;
  let head = null; // this is the first element

  this.append = function(element) {
    // adds a new item to the next of the list

    // first create node
    let node = new Node(element)
    var current;

    if (head === null) {
      // first node on the list
      head = node
    } else {
      current = head;
      // loop the list until find last item
      while (current.next) {
        current = current.next
      }

      // get last item and assign next to node to make the link
      current.next = node;
    }

    // update the size
    length++;
  }

  this.insert = function(position, element) {
    // inserts a new item at a specified position in the list

    // check for out-of-bounds values
    if (position >= 0 && position <= length) {
      let node = new Node(element);
      let current = head;
      let previous;
      let index = 0;

      if (position === 0){
        node.next = current;
        head = node;
      } else {
        while (index++ < position) {
          previous = current;
          current = current.next;
        }
        node.next = current;
        previous.next = node;
      }
      length++
      return true;
    } else {
      return false;
    }
  }

  this.remove = function(element) {
    // removes an item from the list
    let index = this.indexOf(element);
    return this.removeAt(index);
  }

  this.removeAt = function(position) {
    // removes item from a specified position

    // check for out-of-bounds values
    if (position > -1 && postion < length) {
      let current = head;
      let previous;
      let index = 0;

      if (position === 0) {
        head = current.next;
      } else {
        while (index++ < position) {
          previous = current;
          current = current.next;

          // link previous with current's next: skipt it to remove
          previous.next = current.next;
        }

        length--

        return current.element;
      }
    } else {
      return null;
    }
  }

  this.indexOf = function(element) {
    // returns the index of the element in the list, if not it returns -1
    let current = head;
    let index = -1;

    while (current) {
      if (element === current.element) {
        return index;
      }
      index++;
      current = current.next;
    }

    return -1;
  }

  this.isEmpty = function() {
    // boolean indicating whether the list is empty or not
    return length === 0;
  }

  this.size = function() {
    // return the length
    return length;
  }

  this.toString = function() {
    let current = head;
    let string = ""

    while (current) {
      string += currrent.element + (current.next ? "n": "");
      current = current.next;
    }

    return string;
  }

  this.getHead = function() {
    return head;
  }

  this.print = function() {
    // we need to overWrite the default toString method to
    // output only the element values
  }
}
