/* BEE 102 - 

Leia um valor de ponto flutuante com duas casas decimais. Este valor representa um valor monetário. A seguir, calcule o menor número de notas e moedas possíveis no qual o valor pode ser decomposto. As notas consideradas são de 100, 50, 20, 10, 5, 2. As moedas possíveis são de 1, 0.50, 0.25, 0.10, 0.05 e 0.01. A seguir mostre a relação de notas necessárias.

Entrada
O arquivo de entrada contém um valor de ponto flutuante N (0 ≤ N ≤ 1000000.00).

Saída
Imprima a quantidade mínima de notas e moedas necessárias para trocar o valor inicial, conforme exemplo fornecido.

Obs: Utilize ponto (.) para separar a parte decimal.

*/

var input = require("fs").readFileSync("./dev/stdin", "utf8");
var lines = input.split(" ");

let money = parseFloat(lines.shift());
let banknotes = [100, 50, 20, 10, 5, 2];
let coins = [1, 0.5, 0.25, 0.1, 0.05, 0.01];
let amountOfMoney = [];
let amountOfCoins = [];
let accumulator = money;

for (let i = 0; i < banknotes.length; i++) {
  let count = Math.trunc(accumulator / banknotes[i]);
  amountOfMoney.push(count);
  accumulator = accumulator % banknotes[i];
}

// for (let i = 0; i < coins.length; i++) {
//   let count = Math.floor(accumulator / coins[i]);
//   amountOfCoins.push(count);
//   accumulator = accumulator % coins[i];
//   console.log(accumulator)
// }

for (let i = 0; i < coins.length - 1; i++) {
  let count = Math.trunc(accumulator / coins[i]);
  amountOfCoins.push(count);
  accumulator = accumulator % coins[i];
}

let count = Math.round(accumulator / coins[5]);
amountOfCoins.push(count);

console.log("NOTAS:");
for (let i = 0; i < banknotes.length; i++) {
  console.log(`${amountOfMoney[i]} nota(s) de R$ ${banknotes[i]}.00`);
}

console.log("MOEDAS:");
for (let i = 0; i < coins.length; i++) {
  console.log(`${amountOfCoins[i]} moeda(s) de R$ ${coins[i].toFixed(2)}`);
}
