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

function uniteUnique(arr1, arr2, ...restOfArrs) {
  
  let arrMerge = [...arr1, ...arr2];
  for (let i = 0; i < arrMerge.length - 1; i++) {
   for (let j = i + 1; j < arrMerge.length; j++) {
    if(arrMerge[i] >= arrMerge[j]) {
      let copyNum = arrMerge[i];
      arrMerge[i] = arrMerge[j];
      arrMerge[j] = copyNum
    }
   }
  }

  if(restOfArrs.length > 0) {
    arrMerge = uniteUnique([...new Set(arrMerge)], ...restOfArrs)
  }
  return [...new Set(arrMerge)];
}

// console.log(uniteUnique([1, 2, 3], [5, 2, 1, 4], [2, 1], [6, 7, 8]))
