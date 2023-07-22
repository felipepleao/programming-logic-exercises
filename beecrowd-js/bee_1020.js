/* BEE 1020 - Idade em Dias

Leia um valor inteiro correspondente à idade de uma pessoa em dias e informe-a em anos, meses e dias

Obs.: apenas para facilitar o cálculo, considere todo ano com 365 dias e todo mês com 30 dias. Nos casos de teste nunca haverá uma situação que permite 12 meses e alguns dias, como 360, 363 ou 364. Este é apenas um exercício com objetivo de testar raciocínio matemático simples.

Entrada
O arquivo de entrada contém um valor inteiro.

Saída
Imprima a saída conforme exemplo fornecido.

*/

var input = require("fs").readFileSync("./dev/stdin", "utf8");
var lines = input.split(" ");

let daysOfLife, monthsOfLife, yearsOfLife;

daysOfLife = parseInt(lines.shift());

yearsOfLife = parseInt(daysOfLife / 365);
daysOfLife = parseInt(daysOfLife % 365);
monthsOfLife = parseInt(daysOfLife / 30);
daysOfLife = Math.ceil(daysOfLife % 30);

console.log(`${yearsOfLife} ano(s)`);
console.log(`${monthsOfLife} mes(es)`);
console.log(`${daysOfLife} dia(s)`);

// console.log(
//   `
// ${yearsOfLife} ano(s)
// ${monthsOfLife} mes(es)
// ${daysOfLife} dia(s)
// `
// );
