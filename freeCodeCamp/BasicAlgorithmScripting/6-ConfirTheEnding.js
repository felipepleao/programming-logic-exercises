// Check if a string (first argument, str) ends with the given target string (second argument, target).

// This challenge can be solved with the .endsWith() method, which was introduced in ES2015. But for the purpose of this challenge, we would like you to use one of the JavaScript substring methods instead.

// Verifique se uma cadeia de caracteres (primeiro argumento, str) termina com a cadeia de caracteres de destino determinada (segundo argumento, destino).

// Esse desafio pode ser resolvido com o método .endsWith(), que foi introduzido no ES2015. Mas, para o propósito deste desafio, gostaríamos que você usasse um dos métodos de substring JavaScript.

// function confirmEnding(str, target) {
//   return str;
// }

// confirmEnding("Bastian", "n");

const str1 = "Bastian";
const str2 = "n";

function confirmEnding(str, target) {
  let equalString = str.substring(str.length - target.length);
  return equalString === target ? true : false;
}
confirmEnding("Open sesame", "sage");
