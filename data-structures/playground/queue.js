'use strict';

console.log( '-----Queue-----' );

var queue = new Queue();
console.log( queue.isEmpty() ); // true
queue.enqueue( 5 );
queue.enqueue( 8 );
console.log( queue.size() ); // 2
console.log( queue.isEmpty() ); // false
queue.dequeue();
queue.enqueue( 11 );
console.log( queue.size() ); // 2
console.log( queue.getQueue() ); // [8, 11]
queue.clear();
console.log( queue.getQueue() ); // []


console.log( '-----PriorityQueue-----' );

var priorityQueue = new PriorityQueue();
priorityQueue.enqueue( 'Underworld', 2 );
priorityQueue.enqueue( 'The Chemical Brothers', 1 );
priorityQueue.enqueue( 'The Crystal Method', 1 );
console.log( priorityQueue.getQueue() );


console.log( 'PriorityQueue hotPotato(), The winner is:', hotPotato( ['John', 'Jack', 'Camila', 'Ingrid', 'Carl'], 7 ) );
