"use strict";

// =============================================================================
// PROGRAMMING FUNDAMENTALS — Assignment 4
// =============================================================================
//
// TASK: Matrix Operations
//
// Write a Java program that performs three operations on matrices (2D arrays).
//
// -----------------------------------------------------------------------------
// PART A — Transpose a Matrix
// -----------------------------------------------------------------------------
// - Read an M x N matrix from the user.
// - Compute and display its transpose (rows become columns, columns become rows).
//
// Example (2 x 3 input):
//
//   Original Matrix:      Transposed Matrix:
//   [1  2  3]               1  4
//   [4  5  6 ]              2  5
//                         3  6
//
// -----------------------------------------------------------------------------
// PART B — Add Two Matrices
// -----------------------------------------------------------------------------
// - Read two matrices of exactly the same size (M x N).
// - Compute their element-wise sum and display the result.
//   (Each position in the result = the sum of the values at that position
//    in both matrices.)
//
// -----------------------------------------------------------------------------
// PART C — Multiply Two Matrices
// -----------------------------------------------------------------------------
// - Read matrix A of size M x N and matrix B of size N x P.
//   (The number of COLUMNS in A must equal the number of ROWS in B.)
// - Compute and display the matrix product A × B (result is M x P).
//
// -----------------------------------------------------------------------------
// EXPECTED INPUT FORMAT
// -----------------------------------------------------------------------------
// When entering a row, the user types all values on one line separated by spaces:
//
//   Enter number of rows: 2
//   Enter number of columns: 3
//   Enter row 1: 1 2 3
//   Enter row 2: 4 5 6
//
// -----------------------------------------------------------------------------
// REQUIREMENTS
// -----------------------------------------------------------------------------
// - Use nested loops for all operations (no external libraries).
// - Display each matrix in a neat, aligned grid format.
// - Tip: Complete Part A first, then Parts B and C.
function transposeMatrix(matrix) {
  var transposedMatrix = Array(matrix[0].length).fill(0).map(function () {
    return Array(matrix.length).fill(0);
  });
  console.log(transposedMatrix);

  for (var i = 0; i < matrix.length; i++) {
    for (var j = 0; j < matrix[i].length; j++) {
      if (j < matrix.length) transposedMatrix[i][j] = matrix[j][i];
      transposedMatrix[j][i] = matrix[i][j];
    }
  }

  return transposedMatrix;
} // console.log(
//   transposeMatrix([
//     [1, 2, 3],
//     [4, 5, 6],
//     [10, 7, 0],
//   ]),
// );


function multiplicationOfMatrices(matA, matB) {
  var rowsA = matA.length;
  var colsA = matA[0].length;
  var rowsB = matB.length;
  var colsB = matB[0].length;

  if (rowsA !== colsB) {
    console.log("Number of rows of the first matrix must be equal to the number of rows of the second matrix");
    return;
  }

  var result = Array(rowsA).fill(0).map(function () {
    return Array(colsB).fill(0);
  });

  for (var i = 0; i < rowsA; i++) {
    for (var j = 0; j < colsB; j++) {
      for (var k = 0; k < colsA; k++) {
        result[i][j] += matA[i][k] * matB[k][j];
      }
    }
  }

  for (var _len = arguments.length, restOfMatrices = new Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
    restOfMatrices[_key - 2] = arguments[_key];
  }

  if (restOfMatrices.length !== 0) {
    var _iteratorNormalCompletion = true;
    var _didIteratorError = false;
    var _iteratorError = undefined;

    try {
      for (var _iterator = restOfMatrices[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
        var matrix = _step.value;
        result = multiplicationOfMatrices(result, matrix);
      }
    } catch (err) {
      _didIteratorError = true;
      _iteratorError = err;
    } finally {
      try {
        if (!_iteratorNormalCompletion && _iterator["return"] != null) {
          _iterator["return"]();
        }
      } finally {
        if (_didIteratorError) {
          throw _iteratorError;
        }
      }
    }
  }

  return result;
} // const A = [
//   [1, 2],
//   [3, 4],
// ]; // 2x2
// const B = [
//   [2, 0],
//   [1, 3],
// ]; // 2x2
// const C = [
//   [1, 2, 0],
//   [0, 1, 2],
// ]; // 2x3
// const result = multiplicationOfMatrices(A, B, C);
// console.log(result);


function additionMatrices(A, B) {
  var rowsA = A.length;
  var colsA = A[0].length;
  var rowsB = B.length;
  var colsB = B[0].length;

  if (rowsA * colsA !== rowsB * colsB) {
    console.log("The matrices must be of the same dimension.");
    return;
  }

  var result = Array.from({
    length: rowsA
  }).fill(0).map(function () {
    return new Array(colsB).fill(0);
  });

  for (var i = 0; i < A.length; i++) {
    for (var j = 0; j < A.length; j++) {
      result[i][j] = A[i][j] + B[i][j];
    }
  }

  return result;
}

console.log(additionMatrices([[1, 2, 3], [4, 5, 6], [10, 7, 0]], [[1, 2, 3], [4, 5, 6], [10, 7, 0]]));