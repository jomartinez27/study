// set is a sequential data structure that does not allow duplicated values
// A set is a collection of items that are not unordered and consits of
// unique elements. In math, a set is a collection of distinct objects
// ex we have a set of natural numbers, consisting of integer numbers
// greater than or equal to 0

// es5 implementation
function Set() {
  let items = {};

  // add(val): adds a new item to the set
  this.add = function(value) {
    // given the value we can check is the value already exists in the set
    // if not we add the value, and return a boolean indicating that it was added
    if (!this.has(value)) {
      items[value] = value;
      return true;
    }
    return false;
  }

  //delete(value): removes the value from the set
  this.delete = function(value) {
    // we verify that the value is in the set, if it is we remove the value
    // and return a boolean indicating whether it was removed or not
    // we can use JavaScript delete method
    if (this.has(value)) {
      delete items[value];
      return true;
    }
    return false;
  }

  //has(value): returns true if the value exists in the set and false otherwise
  this.has = function(value) {
    // JavaScript objects have the hasOwnProperty method.
    // this method returns a Boolean indicating
    // whether the object has the specified property or not
    return items.hasOwnProperty(value);
  }

  //clear(): removes all the items from the set
  this.clear = function() {
    items = {};
  }

  //size(): returns the length of items
  this.size = function() {
    // implement size by using a count variable, this way of implementing
    // works across all browsers
    let count = 0;
    for (let key in items) {
      if (items.hasOwnProperty(key)) {
        count++;
      }
    }
    return count;
  }

  //values(): returns an array of all the values of the set
  this.values = function() {
    // iterate through all the properties of the items object, add them to the array
    // same as size method
    let values = [];
    for (let key in items) {
      if (items.hasOwnProperty(key)) {
        values.push(items[key]);
      }
    }
    return values;
  }

  //union(otherSet): returns a new set with the values from set A and set B
  this.union = function(otherSet) {
    // First we create a new set to represent the union of the two sets
    // Next, we will get all the values form the first set, iterate through
    // and add all the values to the set, we do the same to otherSet
    let unionSet = new Set();
    let values = this.values();

    for (let i = 0; i < values.length; i++) {
      unionSet.add(values[i]);
    }

    values = otherSet.values();
    for (let j = 0; j < values.length; j++) {
      unionSet.add(values[i]);
    }
    return unionSet;
  }
}
