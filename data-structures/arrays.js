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


function addValueToTheLastPosOfTheArray ( arr, value ) {
  arr[arr.length] = value;

  return arr;
}
console.log( 'addValueToTheLastPosOfTheArray', addValueToTheLastPosOfTheArray( [1, 2, 3, 4], 5 ) );


function addValueToTheFirstPosOfTheArray ( arr, value ) {
  var arrSize = arr.length;

  for ( var i = arrSize; i >= 0; i-- ) {
    arr[i] = arr[i-1];
  }
  arr[0] = value;

  return arr;
}
console.log( 'addValueToTheFirstPosOfTheArray', addValueToTheFirstPosOfTheArray( [2, 3, 4, 5], 1 ) );

function removeValueFromTheFirstPosOfTheArray ( arr ) {
  var arrSize = arr.length;

  for ( var i = 0; i < arrSize; i++ ) {
    arr[i] = arr[i+1];
  }
  arr.length = arr.length-1;

  return arr;
}
console.log( 'removeValueFromTheFirstPosOfTheArray', removeValueFromTheFirstPosOfTheArray( [1, 2, 3, 4, 5] ) );
