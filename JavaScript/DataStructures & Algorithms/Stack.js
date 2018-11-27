// A stack is an ordered collection of items that follows the
// LIFO (Last In First Out) principle. The addition of new items or the removal
// of existing items takes place at the same end. The end of the stack is
// known as the top, and the opposite side is known as the base. The newest
// elements are near the top, and the oldest elements are near the base.

// Think of a stack like a stack of books

// declare our stack with ES5

// function Stack() {
//   let items = [];
//
//   // Adds a new item to the top of the stack
//   this.push = function(element) {
//     items.push(element);
//   }
//
//   // Following LIFO, we remove the last item
//   this.pop = function() {
//     return items.pop();
//   }
//
//   // This method will return the item from the top of the stack
//   this.peek = function() {
//     return items[items.length - 1];
//   }
//
//   // helper method that returns a boolean if list is empty or not
//   this.isEmpty = function() {
//     return items.length === 0;
//   }
//
//   // we can implement a length method (called size for collections)
//   this.size = function() {
//     return items.length;
//   }
//
//   // clear method simply empties the stack
//   this.clear = function() {
//     items = [];
//   }
//
//   // helper func to inspect in console
//   this.print = function() {
//     console.log(items.toString());
//   }
// }

// Stack with ES6
class Stack {
  constructor() {
    this.items = [];
  }

  // Adds an element to top of stack
  push(element) {
    this.items.push(element);
  }

  // Following LIFO, we remove the last element
  pop() {
    this.items.pop();
  }

  peek() {
    return this.items[this.items.length - 1]
  }

  isEmpty() {
    return this.items.length === 0;
  }

  clear() {
    this.items = []
  }

  size() {
    return this.items.length;
  }

  print() {
    console.log(this.items.toString())
  }
}

let stack = new Stack();
console.log(stack.isEmpty());
