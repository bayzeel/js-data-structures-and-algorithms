'use strict';

function fibonacciInLoop ( size ) {
  var arr = [];

  arr[0] = 1;
  arr[1] = 1;

  for ( var i = 2; i < size; i++ ) {
    arr[i] = arr[i-1] + arr[i-2];
  }

  return arr;
}

console.log( 'fibonacciInLoop', fibonacciInLoop( 20 ) );
