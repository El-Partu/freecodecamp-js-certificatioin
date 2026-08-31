function getAverage(scores) {
  let totalScores = 0;
  for (const score of scores) {
    totalScores += score;
  }

  return totalScores / scores.length;
}

function getGrade(score) {
  const grades = ["A+", "A", "B", "C", "D", "F"];
  if (score === 100) {
    return grades[0];
  } else if (score >= 90 && score <= 99) {
    return grades[1];
  } else if (score >= 80 && score <= 89) {
    return grades[2];
  } else if (score >= 70 && score <= 79) {
    return grades[3];
  } else if (score >= 60 && score <= 69) {
    return grades[4];
  } else {
    return grades[5];
  }
}

function hasPassingGrade(score) {
  return getGrade(score) === "F" ? false : true;
}

function studentMsg(scores, score) {
  if (hasPassingGrade(score)) {
    return `Class average: ${getAverage(scores)}. Your grade: ${getGrade(score)}. You passed the course.`;
  }

  return `Class average: ${getAverage(scores)}. Your grade: ${getGrade(score)}. You failed the course.`;
}
console.log(studentMsg([20, 50], 90));
console.log(getAverage([20, 50]));
console.log(getGrade(80));
console.log(hasPassingGrade(0));
