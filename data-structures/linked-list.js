'use strict';

function LinkedList () {
  this.length = 0;
  this.head = null;
}
function Node ( element ) {
  this.element = element;
  this.next = null;
};
LinkedList.prototype.append = function ( element ) {
  var node = new Node( element ),
    current;

  if ( this.head === null ) {
    this.head = node;
  } else {
    current = this.head;

    while ( current.next ) {
      current = current.next;
    }

    current.next = node;
  }

  this.length++;
};
LinkedList.prototype.insert = function ( position, element ) {
  if ( position >= 0 && position <= this.length ) {
    var node = new Node( element ),
      current = this.head,
      previous,
      index = 0;

    if ( position === 0 ) {
      node.next === current;
      this.head = node;
    } else {
      while ( index++ < position ) {
        previous = current;
        current = current.next;
      }
      node.next = current;
      previous.next = node;
    }

    this.length++;

    return true;
  } else {
    return false;
  }
};
LinkedList.prototype.removeAt = function ( position ) {
  if ( position > -1 && position < this.length ) {
    var current = this.head,
      previous,
      index = 0;

    if ( position === 0 ) {
      this.head = current.next;
    } else {
      while ( index++ < position ) {
        previous = current;
        current = current.next;
      }
      previous.next = current.next;
    }

    this.length--;

    return current.element;
  } else {
    return null;
  }
};
LinkedList.prototype.remove = function ( element ) {
  var index = this.indexOf( element );
  return this.removeAt( index );
};
LinkedList.prototype.indexOf = function ( element ) {
  var current = this.head,
    index = 0;

  while ( current ) {
    if ( element === current.element ) {
      return index;
    }

    index++;

    current = current.next;
  }

  return -1;
};
LinkedList.prototype.isEmpty = function () {
  return this.length === 0;
};
LinkedList.prototype.size = function () {
  return this.length;
};
LinkedList.prototype.toString = function () {
  var current = this.head,
    string = '';

  while ( current ) {
    string += current.element + ( current.next ? '\n' : '' );
    current = current.next;
  }

  return string;
};
LinkedList.prototype.getHead = function () {
  return this.head;
};
LinkedList.prototype.clear = function () {
  this.length = 0;
  this.head = null;
};


function DoublyLinkedList () {
  this.length = 0;
  this.head = null;
  this.tail = null;
}
function DoublyNode ( element ) {
  this.element = element;
  this.next = null;
  this.prev = null;
}
DoublyLinkedList.prototype.append = function ( element ) {
  var node = new DoublyNode( element );

  if ( this.head === null ) {
    this.head = node;
    this.tail = node;
  } else {
    this.tail.next = node;
    node.prev = this.tail;
    this.tail = node;
  }

  this.length++;
};
DoublyLinkedList.prototype.insert = function ( position, element ) {
  if ( position >= 0 && position <= this.length ) {
    var node = new DoublyNode( element ),
      current = this.head,
      previuos,
      index = 0;

    if ( position === 0 ) {
      if ( !this.head ) {
        this.head = node;
        this.tail = node;
      } else {
        node.next = current;
        current.prev = node;
        this.head = node;
      }
    } else if ( position === this.length ) {
      current = this.tail;
      current.next = node;
      node.prev = current;
      this.tail = node;
    } else {
      while ( index++ < position ) {
        previuos = current;
        current = current.next;
      }
      node.next = current;
      previuos.next = node;
      current.prev = node;
      node.prev = previuos;
    }

    this.length++;

    return true;
  } else {
    return false;
  }
};
DoublyLinkedList.prototype.removeAt = function ( position ) {
  if ( position > -1 && position < this.length ) {
    var current = this.head,
      previous,
      index = 0;

    if ( position === 0 ) {
      this.head = current.next;

      if ( this.length === 1 ) {
        this.tail = null;
      } else {
        head.prev = null;
      }
    } else if ( position === this.length - 1 ) {
      current = this.tail;
      this.tail = current.prev;
      this.tail.next = null;
    } else {
      while ( index++ < position ) {
        previous = current;
        current = current.next;
      }

      previous.next = current.next;
      current.next.prev = previous;
    }

    this.length--;

    return current.element;
  } else {
    return null;
  }
};
DoublyLinkedList.prototype.remove = function ( element ) {
  var index = this.indexOf( element );
  return this.removeAt( index );
};
DoublyLinkedList.prototype.indexOf = function ( element ) {
  var current = this.head,
    index = 0;

  while ( current ) {
    if ( element === current.element ) {
      return index;
    }

    index++;

    current = current.next;
  }

  return - 1;
};
DoublyLinkedList.prototype.isEmpty = function () {
  return this.length === 0;
};
DoublyLinkedList.prototype.size = function () {
  return this.length;
};
DoublyLinkedList.prototype.toString = function () {
  var current = this.head,
    string = '';

  while ( current ) {
    string += current.element + ( current.next ? '\n' : '' );
    current = current.next;
  }

  return string;
};
DoublyLinkedList.prototype.getHead = function () {
  return this.head;
};
DoublyLinkedList.prototype.getTail = function () {
  return this.tail;
};
DoublyLinkedList.prototype.clear = function () {
  this.length = 0;
  this.head = null;
  this.tail = null;
};
