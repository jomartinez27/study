import Queue from '../DataStructures/Queue.js';

// Hot Potato game is a game where person are in a circle
// A hot potato is passed around until it is stopped
// the person holding the potato is removed from the circle
// this keeps on going until there is only one person left

function hotPotato (nameList, num) {
  // initialize Queue
  let queue = new Queue();

  for (let i = 0; i < nameList.length; i++) {
    // queue all the names
    queue.enqueue(nameList[i]);
  }

  let eliminated = "";
  while (queue.size() > 1) {
    for (let i = 0; i < num; i++) {
      // simulating hot potato, if you pass the hot potato to your neighbor
      // you are not threatened to be eliminated right away
      queue.enqueue(queue.dequeue());
    }
    // once we reach the number that is the person eliminated
    eliminated = queue.dequeue();
    console.log(`${eliminated} was eliminated from the Hot Potato game.`);
  }

  // this person is the winner
  return queue.dequeue();
}

let names = ["Mario", "Luigi", "Yoshi", "Peach", "Daisy"];
let winner = hotPotato(names, 7);
console.log(`The winner is: ${winner}`);
