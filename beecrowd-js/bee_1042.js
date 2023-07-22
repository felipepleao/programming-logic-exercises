/* BEE 1042 - Sort Simples

Leia 3 valores inteiros e ordene-os em ordem crescente. No final, mostre os valores em ordem crescente, uma linha em branco e em seguida, os valores na sequência como foram lidos.

Entrada
A entrada contem três números inteiros.

Saída
Imprima a saída conforme foi especificado.

*/

var input = require("fs").readFileSync("./dev/stdin", "utf8");
var lines = input.split("\n");

let x = lines[0].split(" ");
let newOrder = x.slice(0, 3);

newOrder.sort(function (a, b) {
  return a - b;
});

for (let y of newOrder) {
  console.log(y);
}
console.log("");
for (let y of x) {
  console.log(y);
}

// for (let i = 0; i < x.length; i++) {
//   x[i] = parseInt(x[i])
// }
