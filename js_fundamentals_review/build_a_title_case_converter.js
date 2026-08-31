function titleCase(str) {
  let sentence = "";
  let words = [];
  for (const word of str.split(" ")) {
    words.push(word[0].toUpperCase() + word.slice(1).toLowerCase());
  }

  return words.join(" ");
}

// console.log(titleCase("I'm a little tea pot"));
