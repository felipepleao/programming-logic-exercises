/* BEE 1073 - Quadrado de Pares
Leia um valor inteiro N. Apresente o quadrado de cada um dos valores pares, de 1 até N, inclusive N, se for o caso.

Entrada
A entrada contém um valor inteiro N (5 < N < 2000).

Saída
Imprima o quadrado de cada um dos valores pares, de 1 até N, conforme o exemplo abaixo.

Tome cuidado! Algumas linguagens tem por padrão apresentarem como saída 1e+006 ao invés de 1000000 o que ocasionará resposta errada. Neste caso, configure a precisão adequadamente para que isso não ocorra.
*/

var input = require("fs").readFileSync("./dev/stdin", "utf8");
var lines = input.split("\n");

const number = parseInt(lines.shift())
let numberSquared = 1;
let isEven

for (numberSquared; numberSquared <= number; numberSquared++) {
  isEven = numberSquared % 2 === 0;

  if (isEven) {
    let result = Math.pow(numberSquared, 2)
    console.log(`${numberSquared}^2 = ${result}`)
  }
}
