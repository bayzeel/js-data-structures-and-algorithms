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

function addValueToTheLastPosOfTheArray ( arr, value ) {
  arr[arr.length] = value;

  return arr;
}

function addValueToTheFirstPosOfTheArray ( arr, value ) {
  var arrSize = arr.length;

  for ( var i = arrSize; i >= 0; i-- ) {
    arr[i] = arr[i-1];
  }
  arr[0] = value;

  return arr;
}

function removeValueFromTheFirstPosOfTheArray ( arr ) {
  var arrSize = arr.length;

  for ( var i = 0; i < arrSize; i++ ) {
    arr[i] = arr[i+1];
  }
  arr.length = arr.length-1;

  return arr;
}
