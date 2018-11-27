// Queues are similar to stacks, but instead of LIFO, they use FIFO
// FIFO (First In First Out) means new elements are added at the tail
// and removal comes from the front.
// Think waiting in line scenario

// ES5 implementation
function Queue() {
  // can use an array to store items
  let items = [];

  //enqueue(el): adds a new item at the back of queue
  this.enqueue = function(ele) {
    // push elements to the back of the queue
    items.push(ele)
  }

  // dequeue: removes the first item from the queue (item from from)
  this.dequeue = function() {
    // following FIFO principle, the first item that we added is the one
    // removed.
    return items.shift();
  }

  // front: returns the frst element from the queue
  this.front = function() {
    return items[0];
  }

  //isEmpty: boolean method
  this.isEmpty = function() {
    return items.length === 0;
  }


  //size: returns the length
  this.size = function() {
    return items.length;
  }

  this.print = function() {
    console.log(items.toString());
  }
}
