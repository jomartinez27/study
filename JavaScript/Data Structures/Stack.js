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
// There is one data type we can use to ensure that the property will be
// private in a class, called WeakMap.
// Finally we wrap the Stack class with a closure, so that WeakMap
// has scope only inside the function

export default class Stack {
  constructor() {
    this.items = {};
    this.count = 0;
  }

  push(element) {
    this.items[this.count] = element;
    this.count++;
  }

  pop() {
    if (this.isEmpty()) {
      return undefined;
    }
    this.count--;
    let el = this.items[this.count - 1];
    delete el;
    return el;
  }

  peek() {
    if (this.isEmpty()) {
      return undefined;
    }
    return this.items[this.count - 1];
  }
}
