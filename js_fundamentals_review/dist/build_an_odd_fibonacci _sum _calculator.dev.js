"use strict";

/*
Build an Odd Fibonacci Sum Calculator
In this lab you will build an odd Fibonacci sum calculator that computes the 
sum of all odd Fibonacci numbers that are less than or equal to a given positive integer.

Objective: Fulfill the user stories below and get all the tests to pass to complete the lab.

User Stories:

You should have a sumFibs function that accepts a number as an argument.
The sumFibs function should return the sum of all odd Fibonacci 
numbers that are less than or equal to the given number.
The Fibonacci sequence starts with 0 and 1, and 
each subsequent number is the sum of the two previous ones.
Only the odd Fibonacci numbers should be added to the sum.
 */
function sumFibs(num) {
  var sum = 1;
  var fibs = [0, 1];

  for (var i = 1; i < num; i++) {
    if ((fibs[i - 1] + fibs[i]) % 2 === 1 && fibs[i - 1] + fibs[i] <= num) {
      sum += fibs[i - 1] + fibs[i];
    }

    fibs.push(fibs[i - 1] + fibs[i]);
  }

  return sum;
}

console.log(sumFibs(1000));