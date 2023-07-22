/* BEE 1080 - Maior e Posição
Leia 100 valores inteiros. Apresente então o maior valor lido e a posição dentre os 100 valores lidos.

Entrada
O arquivo de entrada contém 100 números inteiros, positivos e distintos.

Saída
Apresente o maior valor lido e a posição de entrada, conforme exemplo abaixo.
*/

var input = require("fs").readFileSync("./dev/stdin", "utf8");
var lines = input.split("\n");

const arrayLines = Array.from(lines);
const arrayNumbers = arrayLines.map((item) => Number(item));
let itsBigger = 0;
let indexBigger = 0;

for (let i = 0; i < arrayNumbers.length; i++) {
  if (itsBigger < arrayNumbers[i]) {
    itsBigger = arrayNumbers[i];
    indexBigger = arrayNumbers.indexOf(itsBigger)
  }
}

console.log(itsBigger)
console.log(indexBigger + 1)