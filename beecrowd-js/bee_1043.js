/* BEE 1043 - Triângulo

Leia 3 valores reais (A, B e C) e verifique se eles formam ou não um triângulo. Em caso positivo, calcule o perímetro do triângulo e apresente a mensagem:


Perimetro = XX.X


Em caso negativo, calcule a área do trapézio que tem A e B como base e C como altura, mostrando a mensagem


Area = XX.X

Entrada
A entrada contém três valores reais.

Saída
O resultado deve ser apresentado com uma casa decimal.

*/

var input = require("fs").readFileSync("./dev/stdin", "utf8");
var lines = input.split(" ");

const a = parseFloat(lines.shift(" "));
const b = parseFloat(lines.shift(" "));
const c = parseFloat(lines.shift(" "));

if (
  (Math.abs(b - c) < a && a < b + c) &&
  (Math.abs(a - c) < b && b < a + c) &&
  (Math.abs(a - b) < c && c < a + b)  
) {
  let perimetrer = a + b + c;
  console.log(`Perimetro = ${perimetrer.toFixed(1)}`);
} else {
  let area = (a + b) * c / 2
  console.log(`Area = ${area.toFixed(1)}`);
}