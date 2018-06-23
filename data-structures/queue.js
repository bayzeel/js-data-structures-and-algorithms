'use strict';

// FIFO
function Queue () {
  this.items = [];
}
Queue.prototype.enqueue = function ( element ) {
  this.items.push( element );
};
Queue.prototype.dequeue = function () {
  return this.items.shift();
};
Queue.prototype.front = function () {
  return this.items[0];
};
Queue.prototype.isEmpty = function () {
  return this.items.length === 0;
};
Queue.prototype.size = function () {
  return this.items.length;
};
Queue.prototype.clear = function () {
  this.items = [];
};
Queue.prototype.getQueue = function () {
  return this.items.slice();
};


// min priority queue
function PriorityQueue () {
  this.items = [];
  this.element;
  this.priority;
}
PriorityQueue.prototype.enqueue = function ( element, priority ) {
  function QueueElement ( element, priority ) {
    this.element = element;
    this.priority = priority;
  };

  var queueElement = new QueueElement( element, priority ),
    added = false,
    itemsSize = this.items.length;

  console.log( queueElement );

  for ( var i = 0; i < itemsSize; i++ ) {
    if ( queueElement.priority < this.items[i].priority ) {
      this.items.splice( i, 0, queueElement );
      added = true;
      break;
    }
  }
  if ( !added ) {
    this.items.push( queueElement );
  }
};
PriorityQueue.prototype.dequeue = function () {
  return this.items.shift();
};
PriorityQueue.prototype.front = function () {
  return this.items[0];
};
PriorityQueue.prototype.isEmpty = function () {
  return this.items.length === 0;
};
PriorityQueue.prototype.size = function () {
  return this.items.length;
};
PriorityQueue.prototype.clear = function () {
  this.items = [];
};
PriorityQueue.prototype.getQueue = function () {
  return this.items.slice();
};


function hotPotato ( nameList, num ) {
  var queue = new Queue(),
    nameListSize = nameList.length,
    eliminated = '';

  for ( var i = 0; i < nameListSize; i++ ) {
    queue.enqueue( nameList[i] );
  }

  while ( queue.size() > 1 ) {
    for ( var i = 0; i < num; i++ ) {
      queue.enqueue( queue.dequeue() );
    }
    eliminated = queue.dequeue();
    console.log( 'PriorityQueue hotPotato() - ' + eliminated + ' was eliminated from the Hot Potato game.' );
  }

  return queue.dequeue();
}
