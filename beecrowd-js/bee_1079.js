/* BEE 1079 - Médias Ponderadas
Leia 1 valor inteiro N, que representa o número de casos de teste que vem a seguir. Cada caso de teste consiste de 3 valores reais, cada um deles com uma casa decimal. Apresente a média ponderada para cada um destes conjuntos de 3 valores, sendo que o primeiro valor tem peso 2, o segundo valor tem peso 3 e o terceiro valor tem peso 5.

Entrada
O arquivo de entrada contém um valor inteiro N na primeira linha. Cada N linha a seguir contém um caso de teste com três valores com uma casa decimal cada valor.

Saída
Para cada caso de teste, imprima a média ponderada dos 3 valores, conforme exemplo abaixo.
*/

var input = require("fs").readFileSync("./dev/stdin", "utf8");
var lines = input.split("\n");

const repetition = lines.shift();

const firstNumbers = lines
  .shift()
  .trim()
  .split(" ")
  .map((n) => Number(n));
const secondNumbers = lines
  .shift()
  .split(" ")
  .map((n) => Number(n));
const thirdNumbers = lines
  .shift()
  .split(" ")
  .map((n) => Number(n));

let firstWeightedAverage = 0;
let secondWeightedAverage = 0;
let thirdWeightedAverage = 0;

for (let i = 0; i < repetition; i++) {
  if (i == 0) {
    firstSum = firstNumbers[i] * 2;
    secondSum = secondNumbers[i] * 2;
    thirdSum = thirdNumbers[i] * 2;
  } else if (i == 1) {
    firstSum = firstNumbers[i] * 3;
    secondSum = secondNumbers[i] * 3;
    thirdSum = thirdNumbers[i] * 3;
  } else {
    firstSum = firstNumbers[i] * 5;
    secondSum = secondNumbers[i] * 5;
    thirdSum = thirdNumbers[i] * 5;
  }

  firstWeightedAverage += firstSum;
  secondWeightedAverage += secondSum;
  thirdWeightedAverage += thirdSum;

  console.log((firstWeightedAverage / 10).toFixed(1));
  console.log((secondWeightedAverage / 10).toFixed(1));
  console.log((thirdWeightedAverage / 10).toFixed(1));
}

// 