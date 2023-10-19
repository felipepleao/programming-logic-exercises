// 2798. Número de funcionários que cumpriram a meta

// Existem nfuncionários em uma empresa, numerados de 0a n - 1. Cada funcionário itrabalhou hours[i]horas na empresa.

// A empresa exige que cada funcionário trabalhe pelo menos target horas.

// Você recebe uma matriz indexada em 0 de números inteiros não negativos hoursde comprimento ne um número inteiro não negativo target.

// Retorne o número inteiro que indica o número de funcionários que trabalharam pelo menos target horas .

// Exemplo 1:

// Entrada: horas = [0,1,2,3,4], meta = 2
//  Saída: 3
//  Explicação: A empresa deseja que cada funcionário trabalhe pelo menos 2 horas.
// - O funcionário 0 trabalhou 0 horas e não cumpriu a meta.
// - O funcionário 1 trabalhou 1 hora e não cumpriu a meta.
// - O funcionário 2 trabalhou 2 horas e cumpriu a meta.
// - O funcionário 3 trabalhou 3 horas e cumpriu a meta.
// - O funcionário 4 trabalhou 4 horas e cumpriu a meta.
// São 3 funcionários que cumpriram a meta.
// Exemplo 2:

// Entrada: horas = [5,1,4,2,2], meta = 6
//  Saída: 0
//  Explicação: A empresa deseja que cada funcionário trabalhe pelo menos 6 horas.
// Existem 0 funcionários que atingiram a meta.

// Restrições:

// 1 <= n == hours.length <= 50
// 0 <= hours[i], target <= 105

const hours = [0, 1, 2, 3, 4];
let target = 2;
let employeeWhoReachedGoal = 0;

var numberOfEmployeesWhoMetTarget = function (hours, target) {
  for (let i = 0; i < hours.length; i++) {
    hours[i] >= target ? employeeWhoReachedGoal++ : null;
  }

  return employeeWhoReachedGoal
};

console.log(numberOfEmployeesWhoMetTarget(hours, target));
