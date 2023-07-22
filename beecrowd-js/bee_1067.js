/* BEE 1066 - Pares, Ímpares, Positivos e Negativos
Leia 5 valores Inteiros. A seguir mostre quantos valores digitados foram pares, quantos valores digitados foram ímpares, quantos valores digitados foram positivos e quantos valores digitados foram negativos.

Entrada
O arquivo de entrada contém 5 valores inteiros quaisquer.

Saída
Imprima a mensagem conforme o exemplo fornecido, uma mensagem por linha, não esquecendo o final de linha após cada uma.
*/

var input = require("fs").readFileSync("./dev/stdin", "utf8");
var lines = input.split("\n");

const number = parseInt(lines.shift())
let isOdd = 0;

for (let i = 0; i <= number; i++) {
  let isEven = i % 2 === 0
  if (!isEven) {
    isOdd = i
    console.log(isOdd)
  }
}


