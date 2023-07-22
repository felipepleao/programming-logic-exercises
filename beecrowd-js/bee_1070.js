/* BEE 1070 - Seis Números Ímpares
Leia um valor inteiro X. Em seguida apresente os 6 valores ímpares consecutivos a partir de X, um valor por linha, inclusive o X ser for o caso.

Entrada
A entrada será um valor inteiro positivo.

Saída
A saída será uma sequência de seis números ímpares.
*/

var input = require("fs").readFileSync("./dev/stdin", "utf8");
var lines = input.split("\n");

let number = parseInt(lines.shift());
let count = 11;

for (let i = 0; i <= count; i++) {
  let isEven = number % 2 === 0;
  if (!isEven) {
    console.log(number);
  }
  number++;
}