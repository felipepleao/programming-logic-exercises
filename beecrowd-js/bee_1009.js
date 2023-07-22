/* BEE 1009 - Salário com Bônus

Faça um programa que leia o nome de um vendedor, o seu salário fixo e o total de vendas efetuadas por ele no mês (em dinheiro). Sabendo que este vendedor ganha 15% de comissão sobre suas vendas efetuadas, informar o total a receber no final do mês, com duas casas decimais.

Entrada
O arquivo de entrada contém um texto (primeiro nome do vendedor) e 2 valores de dupla precisão (double) com duas casas decimais, representando o salário fixo do vendedor e montante total das vendas efetuadas por este vendedor, respectivamente.

Saída
Imprima o total que o funcionário deverá receber, conforme exemplo fornecido.

*/

var input = require("fs").readFileSync("./dev/stdin", "utf8");
var lines = input.split("\n");

let name, fixedSalary, salesAmountMonth;

name = lines.shift();
fixedSalary = parseFloat(lines.shift());
salesAmountMonth = parseFloat(lines.shift());

const TOTAL = fixedSalary + (salesAmountMonth * 15) / 100;

console.log(`TOTAL = R$ ${TOTAL.toFixed(2)}`);
