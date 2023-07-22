/* BEE 1066 - Pares, Ímpares, Positivos e Negativos
Leia 5 valores Inteiros. A seguir mostre quantos valores digitados foram pares, quantos valores digitados foram ímpares, quantos valores digitados foram positivos e quantos valores digitados foram negativos.

Entrada
O arquivo de entrada contém 5 valores inteiros quaisquer.

Saída
Imprima a mensagem conforme o exemplo fornecido, uma mensagem por linha, não esquecendo o final de linha após cada uma.
*/

var input = require("fs").readFileSync("./dev/stdin", "utf8");
var lines = input.split("\n");

const arrayLines = Array.from(lines).slice(0, 5);
const arrayNumbers = arrayLines.map((item) => Number(item));

let isEven = 0;
let isOdd = 0;
let isPositive = 0;
let isNegative = 0;

arrayNumbers.map((item) => {
  item % 2 === 0 ? isEven++ : isOdd++;
  item > 0 ? isPositive++ : item < 0 ? isNegative++ : '';
});

console.log(`${isEven} valor(es) par(es)`);
console.log(`${isOdd} valor(es) impar(es)`);
console.log(`${isPositive} valor(es) positivo(s)`);
console.log(`${isNegative} valor(es) negativo(s)`);
