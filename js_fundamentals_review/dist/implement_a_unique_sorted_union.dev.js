"use strict";

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

/*
Implement a Unique Sorted Union
Objective: Fulfill the user stories below and get all the tests to pass to complete the lab.

User Stories:

You should have a function named uniteUnique.
The uniteUnique function should accept two or more arrays as arguments.
The function should return a new array that contains unique values from the argument arrays, 
in the order they are first found in the arguments. 
For example, an input like [1, 2, 4], [2, 3, 5] 
would have an output of [1, 2, 4, 3, 5].
 */
function uniteUnique(arr1, arr2) {
  var arrMerge = [].concat(_toConsumableArray(arr1), _toConsumableArray(arr2));

  for (var i = 0; i < arrMerge.length - 1; i++) {
    for (var j = i + 1; j < arrMerge.length; j++) {
      if (arrMerge[i] >= arrMerge[j]) {
        var copyNum = arrMerge[i];
        arrMerge[i] = arrMerge[j];
        arrMerge[j] = copyNum;
      }
    }
  }

  for (var _len = arguments.length, restOfArrs = new Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
    restOfArrs[_key - 2] = arguments[_key];
  }

  if (restOfArrs.length > 0) {
    arrMerge = uniteUnique.apply(void 0, [_toConsumableArray(new Set(arrMerge))].concat(restOfArrs));
  }

  return _toConsumableArray(new Set(arrMerge));
} // console.log(uniteUnique([1, 2, 3], [5, 2, 1, 4], [2, 1], [6, 7, 8]))