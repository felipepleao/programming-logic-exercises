/* BEE 1048 - Aumento de Salário
A empresa ABC resolveu conceder um aumento de salários a seus funcionários de acordo com a tabela abaixo:


Salário	Percentual de Reajuste
0 - 400.00
400.01 - 800.00
800.01 - 1200.00
1200.01 - 2000.00
Acima de 2000.00

15%
12%
10%
7%
4%

Leia o salário do funcionário e calcule e mostre o novo salário, bem como o valor de reajuste ganho e o índice reajustado, em percentual.

Entrada
A entrada contém apenas um valor de ponto flutuante, com duas casas decimais.

Saída
Imprima 3 linhas na saída: o novo salário, o valor ganho de reajuste (ambos devem ser apresentados com 2 casas decimais) e o percentual de reajuste ganho, conforme exemplo abaixo.
*/

var input = require("fs").readFileSync("./dev/stdin", "utf8");
var lines = input.split(" ");

let salary = parseFloat(lines.shift());

function percentageSalary(salary) {
  let newSalary, gainReadjustment, percent;

  function percentageIncrease() {
    if (salary >= 0 && salary <= 400.0) {
      newSalary = (salary * 1.15).toFixed(2);
      gainReadjustment = (newSalary - salary).toFixed(2);
      percent = "15 %";
    } else if (salary > 400.0 && salary <= 800.0) {
      newSalary = (salary * 1.12).toFixed(2);
      gainReadjustment = (newSalary - salary).toFixed(2);
      percent = "12 %";
    } else if (salary > 800.0 && salary <= 1200.0) {
      newSalary = (salary * 1.1).toFixed(2);
      gainReadjustment = (newSalary - salary).toFixed(2);
      percent = "10 %";
    } else if (salary > 1200.0 && salary <= 2000.0) {
      newSalary = (salary * 1.07).toFixed(2);
      gainReadjustment = (newSalary - salary).toFixed(2);
      percent = "7 %";
    } else {
      newSalary = (salary * 1.04).toFixed(2);
      gainReadjustment = (newSalary - salary).toFixed(2);
      percent = "4 %";
    }

    return {
      newSalary: newSalary,
      gainReadjustment: gainReadjustment,
      percent: percent,
    };
  }

  return percentageIncrease();
}

const objPercentageSalary = percentageSalary(salary);
const { newSalary, gainReadjustment, percent } = objPercentageSalary;

console.log(`Novo salario: ${newSalary}`)
console.log(`Reajuste ganho: ${gainReadjustment}`)
console.log(`Em percentual: ${percent}`);
