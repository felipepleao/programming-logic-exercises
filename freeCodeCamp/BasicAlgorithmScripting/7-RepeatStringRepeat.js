// Repeat a String Repeat a String
// Repeat a given string str (first argument) for num times (second argument). Return an empty string if num is not a positive number. For the purpose of this challenge, do not use the built-in .repeat() method.

// Repetir uma string Repetir uma string
// Repita uma string passada str (primeiro argumento), num vezes (segundo argumento). Retorne uma string vazia se num não for um número positivo. Para o propósito do desafio, Não use o método integrado .repeat().


function repeatStringNumTimes(str, num) {
  let newString = ''
  if (num > 0) {
    for (let i = 0; i < num; i++) {
      newString += str
    }
    return newString;
  } else {
    return newString = ''
  }
}

console.log(repeatStringNumTimes("abc", 0));