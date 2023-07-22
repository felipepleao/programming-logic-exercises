/* BEE 1096 - Sequencia IJ 2
Você deve fazer um programa que apresente a sequencia conforme o exemplo abaixo.

Entrada
Não há nenhuma entrada neste problema.

Saída
Imprima a sequencia conforme exemplo abaixo
*/

var input = require("fs").readFileSync("./dev/stdin", "utf8");
var lines = input.split("\n");

let countI = 1;
let countJ = 7;

for (countI; countI <= 9; countI += 2) {
  console.log(`I=${countI} J=${countJ}`)
  console.log(`I=${countI} J=${countJ - 1}`)
  console.log(`I=${countI} J=${countJ - 2}`)
  ;
}