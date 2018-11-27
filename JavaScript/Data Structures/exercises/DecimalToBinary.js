import Stack from '../Data Structures/Stack.js';

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
