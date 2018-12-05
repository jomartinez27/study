// Hashing consists of finding a vlaue in a data structure in the shortest
// time possible. A hash function is a function that, given a key, will return
// an address in the table where the value is

//es5
function HashTable() {
  var table = [];

  //put(key, value): adds a new item to the hash table
  this.put = function(key, value) {
    //First, for the given key, we need to find a position in the table
    // using the hash function. Then we add the value parameter to positon.
    var positon = loseloseHashCode(key);
    console.log(`${positon} - ${key}`);
    table[positon] = value;
  }

  //remove(key): removes the value from the hash table using the key
  this.remove = function(key) {

  }

  //get(key): returns a specific value searched by the key
  this.get = function(key) {
    return table[loseloseHashCode(key)];
  }

  var loseloseHashCode = function(key) {
    //first, we need a variable to store the sum. Then, we will iterate
    // through key, and add the ASCII value of the corresponding character
    // value from the ASCII table to the hash variable (we use charCodeAt)
    // finally we will return this hash value
    var hash = 0;
    for (var i = 0; i < key.length; i++) {
      hash += hash.charCodeAt(i);
    }
    return hash % 37;
  }
}
