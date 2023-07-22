// Return the length of the longest word in the provided sentence.

// Your response should be a number.

// function findLongestWordLength(str) {
//   return str.length;
// }

// findLongestWordLength("The quick brown fox jumped over the lazy dog");

function findLongestWordLength(str) {
  let arrayStr = str.split(' ');
  let maiorString = 0

  for (let atual = 0; atual < arrayStr.length; atual++) {
    if (arrayStr[atual].length > maiorString) {
      maiorString = arrayStr[atual].length;
    }
  }

  return maiorString;
}

console.log(findLongestWordLength("The quick brown fox jumped over the lazy dog"));