/*
In this lab, you will build a function that returns an array consisting of the largest number from each provided sub-array.

Remember, you can iterate through an array with a simple for loop, and access each member with array syntax arr[i].

Objective: Fulfill the user stories below and get all the tests to pass to complete the lab.

User Stories:

You should create a function largestOfAll that takes an array of arrays as an argument.
The function should return an array containing the largest number from each sub-array.
 */

function largestOfAll(arr) {
  const maxNumOfArrs = [];

  for (const subArr of arr) {
    let maxNum = subArr[0];
    for (const num of subArr) {
      if (maxNum < num) {
        maxNum = num;
      }
    }
    maxNumOfArrs.push(maxNum)
  }

  return maxNumOfArrs;
}

// console.log(largestOfAll([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]))