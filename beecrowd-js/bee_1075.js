/* BEE 1075 - Resto 2
Leia um valor inteiro N. Apresente todos os números entre 1 e 10000 que divididos por N dão resto igual a 2.

Entrada
A entrada contém um valor inteiro N (N < 10000).

Saída
Imprima todos valores que quando divididos por N dão resto = 2, um por linha.
*/

var input = require("fs").readFileSync("./dev/stdin", "utf8");
var lines = input.split("\n");

const number = parseInt(lines.shift());

for (let i = 0; i < 10000; i++) {
  let rest = i % number
  if (rest === 2) {
    console.log(i)
  }
}

