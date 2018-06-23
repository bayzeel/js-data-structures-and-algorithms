'use strict';

// LIFO
function Stack () {
  this.items = [];
}
Stack.prototype.push = function ( element ) {
  this.items.push( element );
};
Stack.prototype.pop = function () {
  return this.items.pop();
};
Stack.prototype.peek = function () {
  return this.items[this.items.length-1];
};
Stack.prototype.isEmpty = function () {
  return this.items.length === 0;
};
Stack.prototype.size = function () {
  return this.items.length;
};
Stack.prototype.clear = function () {
  this.items = [];
};
Stack.prototype.getStack = function () {
  return this.items.slice();
};


function baseConverter ( decNumber, base ) {
  var remStack = new Stack(),
    rem,
    baseString = '',
    digits = '0123456789ABCDEF';

  while ( decNumber > 0 ) {
    rem = Math.floor( decNumber % base );
    remStack.push( rem );
    decNumber = Math.floor( decNumber / base );
  }

  while ( !remStack.isEmpty() ) {
    baseString += digits[ remStack.pop() ];
  }

  return baseString;
}
