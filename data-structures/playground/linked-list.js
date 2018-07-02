'use strict';

console.log( '-----Linked List-----' );

var linkedList = new LinkedList();
linkedList.append( 5 );
linkedList.append( 10 );
console.log( linkedList.size() );
console.log( linkedList.removeAt( 1 ) );
console.log( linkedList.size());
linkedList.append( 15 );
console.log( linkedList.insert( 1, 10 ) );
console.log( linkedList.size() );
console.log( linkedList.toString() );
console.log( linkedList.indexOf( 10 ) );
console.log( linkedList.remove( 20 ) );
console.log( linkedList.remove( 15 ) );
console.log( linkedList.size() );
console.log( linkedList.getHead() );
linkedList.clear();
console.log( linkedList.size() );
console.log( linkedList.isEmpty() );


console.log( '-----Doubly Linked List-----' );

var doublyLinkedList = new DoublyLinkedList();
console.log( doublyLinkedList.insert( 0, 5 ) );
console.log( doublyLinkedList.insert( 1, 15 ) );
console.log( doublyLinkedList.insert( 1, 10 ) );
console.log( doublyLinkedList.size() );
console.log( doublyLinkedList.removeAt( 1 ) );
console.log( doublyLinkedList.size() );
console.log( doublyLinkedList.insert( 1, 10 ) );
console.log( doublyLinkedList.size() );
doublyLinkedList.append( 20 );
console.log( doublyLinkedList.size() );
console.log( doublyLinkedList.indexOf( 10 ) );
console.log( doublyLinkedList.isEmpty() );
console.log( doublyLinkedList.getHead() );
console.log( doublyLinkedList.getTail() );
console.log( doublyLinkedList.toString() );
console.log( doublyLinkedList.remove( 20 ) );
doublyLinkedList.clear();
console.log( doublyLinkedList.size() );
console.log( doublyLinkedList.isEmpty() );

