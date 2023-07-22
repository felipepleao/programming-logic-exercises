// Truncate a string (first argument) if it is longer than the given maximum string length (second argument). Return the truncated string with a ... ending.

// Trunque uma string (primeiro argumento) se ela for maior que o comprimento máximo da string (segundo argumento). Retorne a string truncada com ... (reticências) ao final.

function truncateString(str, num) {
  let maxString = str.length > num;
  return maxString ? str.substring(0, num) + "..." : str;
}

console.log(truncateString("A-", 1));
// if (maxString) {
//   return str.substring(0, num) + "..."
// } else {
//   return str;
// }

