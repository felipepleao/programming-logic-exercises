/* BEE 1064 - Positivos e Média
Leia 6 valores. Em seguida, mostre quantos destes valores digitados foram positivos. Na próxima linha, deve-se mostrar a média de todos os valores positivos digitados, com um dígito após o ponto decimal.

Entrada
A entrada contém 6 números que podem ser valores inteiros ou de ponto flutuante. Pelo menos um destes números será positivo.

Saída
O primeiro valor de saída é a quantidade de valores positivos. A próxima linha deve mostrar a média dos valores positivos digitados.
*/

var input = require("fs").readFileSync("./dev/stdin", "utf8");
var lines = input.split("\n");

const arrayLines = Array.from(lines);

const arrayNumbers = arrayLines.map((item) => Number(item));
let sum = 0;
let average = 0;
let count = 0;

arrayNumbers.map((item) => {
  if (item > 0) {
    sum += item;
    count++;
  }
});

average = sum / count

console.log(`${count} valores positivos`);
console.log(`${average.toFixed(1)}`);
