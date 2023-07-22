/* BEE 1070 - Seis Números Ímpares
Leia um valor inteiro X. Em seguida apresente os 6 valores ímpares consecutivos a partir de X, um valor por linha, inclusive o X ser for o caso.

Entrada
A entrada será um valor inteiro positivo.

Saída
A saída será uma sequência de seis números ímpares.
*/

var input = require("fs").readFileSync("./dev/stdin", "utf8");
var lines = input.split("\n");

let [X, Y] = lines.map((n) => parseFloat(n)).sort((a, b) => b - a);
let numbersOdd = [];
let sum = 0;

for (let count = Y; count < X; count++) {
  let numberEven = count % 2 === 0;
  if(!numberEven) {
    numbersOdd.push(count)
  }
}

numbersOdd[0] === Y ? numbersOdd.shift() : '';

for (let i = 0; i < numbersOdd.length; i++) {
  sum += numbersOdd[i]
}

console.log(sum)