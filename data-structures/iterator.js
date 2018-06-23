'use strict';

var iteratorArr = ['The Chemical Brothers', 'The Chrystal Method', 'Underworld'];
var iterator = iteratorArr[Symbol.iterator]();
var iteratorArrEntries = iteratorArr.entries();
var iteratorArrKeys = iteratorArr.keys();
var iteratorArrValues = iteratorArr.values();
