/* BEE 1095 - Sequencia IJ 1
Você deve fazer um programa que apresente a sequencia conforme o exemplo abaixo.

Entrada
Não há nenhuma entrada neste problema.

Saída
Imprima a sequencia conforme exemplo abaixo
*/

var input = require("fs").readFileSync("./dev/stdin", "utf8");
var lines = input.split("\n");

let countI = 1;
let countJ = 60;

for (let i = 0; i <= 60; i += 5) {
  console.log(`I=${countI} J=${countJ}`)
  countI += 3;
  countJ -= 5;
}