import Queue from '../Data Structures/Queue.js';

//implement priority queue, there are two options. Set the priority and
// add the element at the correct position. or you can queue the elements
// as they are added to the queue. and remove them accoring to priority

// we will add elements at their correct position, then dequeue them by default
// this is a min priority queue because we are adding the element witht the
// lower value (1 has higher priority) to the front of the queue.
// max priority queue adds the element with the greater value to the front of the queue
function PriorityQueue() {
  let items = [];
  function QueueElement(element, priority) {
    // PriorityQueue needs element and its priority
    this.element = element;
    this.priority = priority;
  }

  this.enqueue = function(element, priority) {
    let queueElement = new QueueElement(element, priority);

    let added = false;
    for (let i = 0; i < items.length; i++) {
      // first compare its priority to the rest of the elements
      // when we find an item that has a higher priority than the element
      // we are trying to add, we insert the new element one position before
      if (queueElement.priority < items[i].priority) {
        // once we find an element with a higher priority, we insert the new element
        items.splice(i, 0, queueElement);
        added = true;
        // we stop looping
        break;
      }
    }

    if (!added) {
      // if the priority we are adding is greater than any priority already added
      // or if the queue is empty, we simply add to the end of the queue
      items.push(queueElement);
    }
  }

  this.print = function() {
    for (let i = 0; i < items.length; i++) {
      console.log(`${items[i].element} - ${items[i].priority}`)
    }
  }
}

let priorityQueue = new PriorityQueue();
priorityQueue.enqueue("John", 2);
priorityQueue.enqueue("Jack", 1);
priorityQueue.enqueue("Camila", 1);
// priorityQueue.print() // "John, Jack, Camila"
