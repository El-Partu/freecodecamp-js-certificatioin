const scores = { Ama: 1, Kofi: 3, Adwoa: 4, Abena: 5 };

const ages = scores;

for (const name in scores) {
    console.log(`Name: ${name} Scores: ${scores[name]}`);

}

console.log("=======================================================")
for (const name in ages) {
  console.log(`Name: ${name} Ages: ${ages[name]}`);
}
// console.log(`Ages: ${ages}`);
