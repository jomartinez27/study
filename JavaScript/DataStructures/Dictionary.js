// Sets, dictionaries, and hashes store unique values. A dictionary is
// used to store [key,value] pairs, where the key is used to find a particular
// element. A dictionary is also known as a "map".

//es5 implementation
function Dictionary() {
  var item = {};

  //set(key, value): adds a new item to the dictionary
  this.set = function(key, value) {
    items[key] = value;
  }

  //delete(key): removes the value from the dictionary using the key
  this.delete = function(key) {

  }

  //has(key): returns true if the key exists in the dictionary and false otherwise
  this.has = function(key) {
    return key in items;
  }

  //get(key): returns a specific value searched by the key
  this.get = function(key) {

  }

  //clear(): removes all the items from the dictionary
  this.clear = function() {

  }

  //size(): returns how many elements the dictionary contains
  this.size = function() {

  }

  //keys(): returns an array of all the keys in the dictionary
  this.keys = function() {

  }

  //values(): returns an array of all the values of the dictionary
  this.values = function() {

  }
}
