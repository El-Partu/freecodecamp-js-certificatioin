"use strict";

var scores = {
  Ama: 1,
  Kofi: 3,
  Adwoa: 4,
  Abena: 5
};
var ages = scores;

for (var name in scores) {
  console.log("Name: ".concat(name, " Scores: ").concat(scores[name]));
}

console.log("=======================================================");

for (var _name in ages) {
  console.log("Name: ".concat(_name, " Ages: ").concat(ages[_name]));
} // console.log(`Ages: ${ages}`);