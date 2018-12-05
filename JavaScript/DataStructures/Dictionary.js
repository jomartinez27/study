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
    if (this.has(key)) {
      delete items[key];
      return true;
    }
    return false;
  }

  //has(key): returns true if the key exists in the dictionary and false otherwise
  this.has = function(key) {
    return key in items;
  }

  //get(key): returns a specific value searched by the key
  this.get = function(key) {
    // get method will first verify that the value that we would like to retrieve
    // exists, and if it does we return the value, else we return undefined
    return this.has(key) ? items[key] : undefined;
  }

  //clear(): removes all the items from the dictionary
  this.clear = function() {
    items = {};
  }

  //size(): returns how many elements the dictionary contains
  this.size = function() {
    return Object.keys(items).length;
  }

  //keys(): returns an array of all the keys in the dictionary
  this.keys = function() {
    //keys metod returns all the keys used to identify a value in the
    // dictionary class. To retrieve all the keys from JavaScript, object
    // we can use the keys method from the Object class by passing our
    // object as a parameter
    return Object.keys(items);
  }

  //values(): returns an array of all the values of the dictionary
  this.values = function() {
    var values = [];
    for (var k in items) {
      if (this.has(k)) {
        values.push(items[k]);
      }
    }

    return values;
  }

  this.getItems = function() {
    return items;
  }
}
