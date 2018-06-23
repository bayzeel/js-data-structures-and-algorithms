'use strict';

console.log( '-----Stack-----' );
var stack = new Stack();
console.log( 'stack.isEmpty', stack.isEmpty() ); // true
stack.push( 5 );
stack.push( 8 );
console.log( 'stack.peek', stack.peek() ); // 8
stack.push( 11 );
console.log( 'stack.size', stack.size() ); // 3
console.log( 'stack.isEmpty', stack.isEmpty() ); // false
stack.pop();
stack.pop();
stack.push( 15 );
console.log( 'stack.size', stack.size() ); // 2

console.log( '---baseConverter()---' );
console.log( baseConverter( 10, 2 ) ); // 1010
console.log( baseConverter( 10, 8 ) );
console.log( baseConverter( 10, 16 ) );
