// the only difference between linkedList and doubly linked Lists
// is that we have a double link, one for the next element, and one for the
// previous element

// es5 implementation
function DoublyLinkedList() {
  let Node = function(element) {
    this.element = element;
    this.next = null;
    this.prev = null;
  }

  let length = 0;
  let head = null;
  // tail attribute to keep the reference of the last item of the list
  let tail = null;

  this.insert = function(pos, element) {
    if (pos >= 0 && pos <= lenght) {
      let node = new Node(element);
      let current = head;
      let prev;
      let index = 0;

      if (pos === 0) {
        if (!head) {
          head = node;
          tail = node;
        } else {
          node.next = current;
          current.prev = node;
          head = node;
        }
      } else if (pos === length) {
        current = tail;
        current.next = node;
        node.prev = current;
        tail = node;
      } else {
        while (index++ < pos) {
          prev = current;
          current = current.next;
        }
        node.next = current;
        prev.next = node;
        current.prev = node;
        node.prev = prev
      }
      length++;
      return true;
    } else {
      return false;
    }
  }

  this.removeAt = function(position) {
    // removing from doubly is similar to linked list, only difference
    // is we need to set the previous pointer as well

    if (position > -1 && position < length) {
      let current = head;
      let index = 0;

      // remove frist item
      if (position === 0) {
        head = current.next;

        // if there is only one item update tail
        if (length === 1) {
          tail = null;
        } else {
          head.prev = null;
        }
      } else if (position === length -1) {
        current = tail;
        tail = current.prev;
        tail.next = null;
      } else {
        while (index++ < position) {
          previous = current;
          current = current.next;
        }

        // link previous with current's next - skit it
        previous.next = current.next;
        current.next.prev = previous;
      }
      length--;
      return current.element;
    } else {
      return null;
    }
  }
}