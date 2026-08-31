"use strict";

var A = [[1, 2, 3], [5, 6, 7]]; //rows -> 3 x  cols -> 3 matrix

var B = [[1, 2], [5, 6], [5, 6]];

function matrixMultiplication(A, B) {
  // console.log("what is in B",B)
  var rowsA = A.length;
  var colsA = A[0].length;
  var rowsB = B.length;
  var colsB = B[0].length;
  var C = Array(rowsA).fill(0).map(function () {
    return new Array(colsB).fill(0);
  }); //   console.log(C)

  if (colsA !== rowsB) {
    return "The number of columns of matrix A is not equal to the number of columns for matrix B, therefore can't be multiplied";
  }

  for (var i = 0; i < rowsA; i++) {
    for (var j = 0; j < colsA; j++) {
      for (var k = 0; k < colsB; k++) {
        C[i][k] += A[i][j] * B[j][k];
      }
    }
  }

  return C;
}

console.log(matrixMultiplication(A, B));