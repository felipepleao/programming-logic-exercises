/* BEE 1065 - Pares entre Cinco Números
Faça um programa que leia 5 valores inteiros. Conte quantos destes valores digitados são pares e mostre esta informação.

Entrada
O arquivo de entrada contém 5 valores inteiros quaisquer.

Saída
Imprima a mensagem conforme o exemplo fornecido, indicando a quantidade de valores pares lidos.
*/

var input = require("fs").readFileSync("./dev/stdin", "utf8");
var lines = input.split("\n");

const arrayLines = Array.from(lines).slice(0, 5);

const arrayNumbers = arrayLines.map((item) => Number(item));
let count = 0;

arrayNumbers.map((item) => {
  let isEven = item % 2 === 0
  if (isEven) {
    count++;
  }
});

console.log(`${count} valores pares`)
