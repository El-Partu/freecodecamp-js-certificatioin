let A = [
  [1, 2, 3],
  [5, 6, 7],
  
]; //rows -> 3 x  cols -> 3 matrix

let B = [
  [1, 2],
  [5, 6],
  [5, 6],
]; 
function matrixMultiplication(A, B) {
    // console.log("what is in B",B)
  let rowsA = A.length;
  let colsA = A[0].length;
  let rowsB = B.length;
  let colsB = B[0].length;

  let C = Array(rowsA).fill(0).map(() => new Array(colsB).fill(0))
//   console.log(C)

  if (colsA !== rowsB) {
    return "The number of columns of matrix A is not equal to the number of columns for matrix B, therefore can't be multiplied";
  }

  for (let i = 0; i < rowsA; i++) {
    for (let j = 0; j < colsA; j++) {
        for ( let k = 0; k < colsB; k++) {
          C[i][k] += A[i][j] * B[j][k];
        }
    }
  }

  return C
}

console.log(
  matrixMultiplication(A, B),
);