/* BEE 103 - 

Leia 3 valores de ponto flutuante e efetue o cálculo das raízes da equação de Bhaskara. Se não for possível calcular as raízes, mostre a mensagem correspondente “Impossivel calcular”, caso haja uma divisão por 0 ou raiz de numero negativo.

Entrada
Leia três valores de ponto flutuante (double) A, B e C.

Saída
Se não houver possibilidade de calcular as raízes, apresente a mensagem "Impossivel calcular". Caso contrário, imprima o resultado das raízes com 5 dígitos após o ponto, com uma mensagem correspondente conforme exemplo abaixo. Imprima sempre o final de linha após cada mensagem.

*/

var input = require("fs").readFileSync("./dev/stdin", "utf8");
var lines = input.split("\n");

let [A, B, C] = lines[0].split(" ");
let R1, R2;

let delta = Math.sqrt(Math.pow(B, 2) - 4 * A * C, 2);

if (delta >= 0 && A > 0) {
  R1 = ((-B + delta) / (2 * A)).toFixed(5);
  R2 = ((-B - delta) / (2 * A)).toFixed(5);

  console.log(`R1 = ${R1}`);
  console.log(`R2 = ${R2}`);
  
} else {
  console.log("Impossivel calcular");
}
