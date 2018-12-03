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
    if (!this.has(value)) {
      items[value] = value;
      return true;
    }
    return false;
  }

  //delete(value): removes the value from the set
  this.delete = function(value) {

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

  }

  //size(): returns the length of items
  this.size = function() {

  }

  //values(): returns an array of all the values of the set
  this.values = function() {

  }
}
