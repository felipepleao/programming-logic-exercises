/* BEE 1060 - Números Positivos
Faça um programa que leia 6 valores. Estes valores serão somente negativos ou positivos (desconsidere os valores nulos). A seguir, mostre a quantidade de valores positivos digitados.

Entrada
Seis valores, negativos e/ou positivos.

Saída
Imprima uma mensagem dizendo quantos valores positivos foram lidos.
*/

var input = require("fs").readFileSync("./dev/stdin", "utf8");
var lines = input.split("\n");

const arrayLines = Array.from(lines);

const arrayNumbers = arrayLines.map((item) => Number(item));
let count = 0;

arrayNumbers.map((item) => {
  if (item > 0) {
    count++;
  }
});

console.log(`${count} valores positivos`);


