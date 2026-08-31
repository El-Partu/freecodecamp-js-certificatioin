function isPalindrome(word) {
  return word.toLowerCase() === word.split("").reverse().join("").toLowerCase();
}
// console.log(isPalindrome("level"))
function findPalindromeBreaks(words) {
  const positionOfWordsNotPalindrome = [];
  if (!words || words.length === 0) {
    return [];
  }

  for (let i = 0; i < words.length; i++) {
    if (!isPalindrome(words[i])) {
      positionOfWordsNotPalindrome.push(i);
    }
  }

  return positionOfWordsNotPalindrome;
}

// console.log(findPalindromeBreaks(["the", "cat", "sat", "the", "cat"]))

function findRepeatedPhrases(words, phraseLength) {
  if (!words || phraseLength >= words.length) {
    return [];
  }

  let occurrenceCount = 0;
  let arrOfStartIdxs = [];
  for (let i = 0; i < words.length; i++) {
    if (i + phraseLength < words.length) {
      const firstPhrase = words.slice(i, i + phraseLength).join(" ");
      // console.log("firs:",firstPhrase);
      for (let j = i + 1; j < words.length; j++) {
        if (j + phraseLength <= words.length) {
          const secondPhrase = words.slice(j, j + phraseLength).join(" ");
          // console.log("second:",secondPhrase);
          if (secondPhrase === firstPhrase) {
            // console.log("---here---")
            // occurrenceCount += 1;
            arrOfStartIdxs.push(i);
            arrOfStartIdxs.push(j);
          }
        }
      }
    }

    // if (occurrenceCount >= 1) {
    //   arrOfStartIdxs.push(i)
    //   occurrenceCount = 0
    // }
  }

  return arrOfStartIdxs;
}

// console.log(findRepeatedPhrases(["the", "cat", "sat", "the", "cat"], 2))

function analyzeTexts(texts, phraseLength) {
  if (!texts || texts.length === 0) {
    return [];
  }

  const processedTexts = [];
  for (const text of texts) {
    processedTexts.push({
      repeatedPhrases: findRepeatedPhrases(text, phraseLength),
      palindromeBreaks: findPalindromeBreaks(text),
    });
  }

  return processedTexts;
}

// console.log(analyzeTexts(["It should return an empty array if the input is empty", "It should return an array of all start indices where a sequence of phraseLength consecutive words appears more"]))
