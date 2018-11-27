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

let Stack = (function () {
  const items = new WeakMap(); // we declare the items variable as a WeakMap
  class Stack {
    constructor() {
      // we set the items value inside the constructor by setting
      // this (reference to the Stack class) as the key of the WeakMap
      // and the array that represents the stack as its value
      items.set(this, []);
    }

    // Adds an element to top of stack
    push(element) {
      // we retrieve the value of the items by retrieving the value from the
      // WeakMap, by passing this as the key
      let s = items.get(this);
      s.push(element);
    }

    // Following LIFO, we remove the last element
    pop() {
      let s = items.get(this);
      let r = s.pop();
      return r;
    }

    // This method will return the item from the top of the stack
    peek() {
      let s = items.get(this);
      return s[s.length - 1]
    }

    // helper method that returns a boolean if list is empty or not
    isEmpty() {
      let s = items.get(this);
      return s.length === 0;
    }

    // clear method simply empties the stack
    clear() {
      let s = items.get(this);
      while(s.length > 0) {
        s.pop();
      }
      return s;
    }

    // we can implement a length method (called size for collections)
    size() {
      let s = items.get(this);
      return s.length;
    }

    print() {
      let s = items.get(this);
      console.log(s);
    }
  }
  return Stack; // when the constructor of the Stack function is called, it
  // will return an instance of the Stack class
})();

// Stacks can solve a variety of problems, including:
// backtracking problems to remember tasks or paths visited, and to undo actions


// Decimal to Binary
// convert a decimal number to a binary representation

// Approach:
// divide the number by 2 until the division result is 0.
function divideBy2(decNumber) {
  var remStack = new Stack(), rem, binaryString = "";

  // while the division result is not zero
  // we get the remainder of the divisq and push it to the stack
  // finally we update the number that will be divided by 2
  while (decNumber > 0) {
    rem = Math.floor(decNumber % 2);
    remStack.push(rem);
    decNumber = Math.floor(decNumber / 2);
  }

  /// we then pop elements from the stack  until it is empty
  while (!remStack.isEmpty()) {
    binaryString += remStack.pop().toString();
  }

  return binaryString;
}
