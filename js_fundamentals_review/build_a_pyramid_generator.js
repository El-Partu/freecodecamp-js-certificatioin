/*
Build a Pyramid Generator
Objective: Fulfill the user stories below and get all the tests to pass to complete the lab.

User Stories:

You should have a function named pyramid that takes three arguments.
The first argument should be a string representing the pattern character to repeat in your pyramid.
The second argument should be an integer representing the number of rows in the pyramid.
The third argument should be a Boolean value.
The pyramid function should return a string in which the pattern character is repeated and 
arranged to form a pyramid having the vertex facing upwards when the third argument is false.
When the third argument is true the pyramid should have the vertex facing downwards.
The vertex row should have a single pattern character, and each other row should have 
two pattern characters more than the previous one.
Each row should start with a number of spaces sufficient to put the center 
character of each row in the same column and there should not be any spaces at the end of each row.
The pyramid should start and end with a newline character.
For example, calling pyramid("o", 4, false) should give this output:


 */

// function pyramid(pattern, numOfRows, bool) {
//   let pyramidRow = "";
//   let pyramid = "";

//   for (let i = 1; i < numOfRows + 1; i++) {
//     if (i === 1) {
//       pyramidRow = pattern.repeat(i);
//       pyramid += `\n${" ".repeat(numOfRows)}${pyramidRow}\n`;
//     } else if (i > 1 && i < numOfRows) {
//       pyramidRow = pattern.repeat(pyramidRow.length + 2);

//       pyramid += `${" ".repeat(numOfRows - i + 1)}${pyramidRow}\n`;
//     } else {
//       pyramidRow = pattern.repeat(pyramidRow.length + 2);
//       pyramid += ` ${pyramidRow}\n`;
//     }
//   }

//   if (bool) {
//     let reversePyramid = pyramid.split("\n").reverse().join("\n");
//     pyramid = reversePyramid;
//   }

//   // console.log(pyramid);

//   return pyramid;
// }

// console.log(pyramid("p", 5, true));
function pyramid(pattern, numOfRows, reverse) {
  let rows = [];

  for (let i = 1; i <= numOfRows; i++) {
    const count = 2 * i - 1; // 1, 3, 5, 7, 9...
    const padding = numOfRows - i; // spaces before the row's pattern
    rows.push(" ".repeat(padding) + pattern.repeat(count));
  }

  if (reverse) {
    rows.reverse();
  }

  // wrap with leading/trailing newline, per spec (rule 9)
  const result = "\n" + rows.join("\n") + "\n";

  return result;
}

console.log(pyramid("o", 4, false));
// "\n   o\n  ooo\n ooooo\nooooooo\n"

console.log(pyramid("p", 5, true));
// "\nppppppppp\n ppppppp\n  ppppp\n   ppp\n    p\n"
