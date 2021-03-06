// Hashing consists of finding a vlaue in a data structure in the shortest
// time possible. A hash function is a function that, given a key, will return
// an address in the table where the value is

//es5
// function HashTable() {
//   var table = [];
//
//   //put(key, value): adds a new item to the hash table
//   this.put = function(key, value) {
//     //First, for the given key, we need to find a position in the table
//     // using the hash function. Then we add the value parameter to position.
//     var position = loseloseHashCode(key);
//     console.log(`${position} - ${key}`);
//     table[position] = value;
//   }
//
//   //remove(key): removes the value from the hash table using the key
//   this.remove = function(key) {
//     // remove an element from HashTable instance, we simply need to access
//     // the desired position
//     table[loseloseHashCode(key)] = undefined;
//   }
//
//   //get(key): returns a specific value searched by the key
//   this.get = function(key) {
//     return table[loseloseHashCode(key)];
//   }
//
//   var loseloseHashCode = function(key) {
//     //first, we need a variable to store the sum. Then, we will iterate
//     // through key, and add the ASCII value of the corresponding character
//     // value from the ASCII table to the hash variable (we use charCodeAt)
//     // finally we will return this hash value
//     var hash = 0;
//     for (var i = 0; i < key.length; i++) {
//       hash += hash.charCodeAt(i);
//     }
//     return hash % 37;
//   }
//
//   //seperate chaining technique to avoid collisions, consists of creating
//   // a linked lsit for each position of the table and storing the elements
//   // in it.
//   var ValuePair = function(key, value) {
//     this.key = key;
//     this.value = value;
//
//     this.toString = function() {
//       return '[' + this.key + ' - ' + this.value + ']';
//     }
//
//     this.put = function(key, value) {
//       var position = loseloseHashCode(key);
//
//       if (table[position] == undefined) {
//         table[position] = new LinkedList();
//       }
//       table[position].append(new ValuePair(key, value));
//     }
//
//     this.get = function(key) {
//       var position = loseloseHashCode(key);
//
//       if (table[position] !== undefined) {
//         var current = table[position].getHead();
//
//         while (current.next) {
//           if (current.element.key === key) {
//             return current.element.value;
//           }
//           current = current.next;
//         }
//         if (current.element.key === key) {
//           return current.element.value;
//         }
//       }
//
//       return undefined;
//     }
//
//     this.remove = function(key) {
//       var position = loseloseHashCode(key);
//
//       if (table[position] !== undefined) {
//         var current = table[position].getHead();
//
//         while (current.next) {
//           if (current.element.key === key) {
//             table[position].remove(current.element);
//             if (table[position].isEmpty()) {
//               table[position] = undefined;
//             }
//             return true;
//           }
//           current = current.next;
//         }
//         if (current.element.key === key) {
//           table[position].remove(current.element);
//           if (table[position].isEmpty()) {
//             table[position] = undefined;
//           }
//           return true;
//         }
//       }
//
//       return false;
//     }
//
//     //another technique of collision resolution is linear probing, when we try
//     // to add a new element, if the position index is already occupied, then we
//     // will try index+1, if index+1 is occupied, then we try index+2 and so on
//
//     this.put = function(key, value) {
//       var position = loseloseHashCode(key);
//
//       if (table[position] == undefined) {
//         table[position] = new ValuePair(key, value);
//       } else {
//         var index = ++position;
//         while (table[index] != undefined) {
//           index++;
//         }
//         table[index] = new ValuePair(key, value);
//       }
//     }
//
//     this.get = function(key) {
//       var position = loseloseHashCode(key);
//
//       if (table[position] !== undefined) {
//         if (table[position].key === key) {
//           return table[position].value;
//         } else {
//           var index = ++position;
//           while(table[index] === undefined || table[index].key !== key) {
//             index++;
//           }
//           if (table[index].key === key) {
//             return table[index].value;
//           }
//         }
//       }
//       return undefined;
//     }
//   }
//
// }

import { valuePair } from './ValuePair.js';

//es6
class HashTable {
  constructor() {
    this.table = {};
  }

  toStringFn(item) {
    if (item === null) {
      return "NULL";
    } else if (item === undefined) {
      return "UNDEFINED";
    } else if (typeof item === "string" || item instanceof String) {
      return `${item}`;
    }
    return item.toString();
  }

  loseloseHashCode(key) {
    if (typeof key === 'number') {
      return key;
    }
    const tableKey = this.toStringFn(key);
    let hash = 0;
    for (let i = 0; i < tableKey.length; i++) {
      hash += tableKey.charCodeAt(i);
    }
    return hash % 37;
  }

  hashCode(key) {
    return this.loseloseHashCode(key);
  }

  put(key, value) {
    if (key != null && value != null) {
      const position = this.hashCode(key);
      this.table[position] = new ValuePair(key, value);
      return true;
    }
    return false;
  }

  get(key) {
    const valuePair = this.table[this.hashCode(key)];
    return valuePair == null ? undefined : valuePair.value;
  }

  remove(key) {
    const hash = this.hashCode(key);
    const valuePair = this.table[hash];
    if (valuePair != null) {
      delete this.table[hash];
      return true;
    }
    return false;
  }

  getTable() {
    return this.table;
  }

  isEmpty() {
    return this.size() == 0;
  }

  size() {
    return Object.keys()
  }

  clear() {
    this.table = {};
  }

  toString() {
    if (this.isEmpty()) {
      return '';
    }
    const keys = Object.keys(this.table);
    let objString = `{${keys[0]} => ${this.table[keys[0]].toString()}}`;
    for (let i = 1; i < keys.length; i++) {
      objString = `${objString},{${keys[i]} => ${this.table[keys[i]].toString()}}`;
    }
    return objString;
  }
}
