/* BEE 1012 - Área

Escreva um programa que leia três valores com ponto flutuante de dupla precisão: A, B e C. Em seguida, calcule e mostre:
a) a área do triângulo retângulo que tem A por base e C por altura.
b) a área do círculo de raio C. (pi = 3.14159)
c) a área do trapézio que tem A e B por bases e C por altura.
d) a área do quadrado que tem lado B.
e) a área do retângulo que tem lados A e B.
Entrada
O arquivo de entrada contém três valores com um dígito após o ponto decimal.

Saída
O arquivo de saída deverá conter 5 linhas de dados. Cada linha corresponde a uma das áreas descritas acima, sempre com mensagem correspondente e um espaço entre os dois pontos e o valor. O valor calculado deve ser apresentado com 3 dígitos após o ponto decimal.

*/

var input = require("fs").readFileSync("./dev/stdin", "utf8");
var lines = input.split(" ");

let A, B, C, pi, triangle, circle, trapeze, square, rectangle;

A = parseFloat(lines.shift());
B = parseFloat(lines.shift());
C = parseFloat(lines.shift());
pi = 3.14159;

triangle = (A * C) / 2;
circle = pi * Math.pow(C, 2);
trapeze = ((A + B) * C) / 2;
square = Math.pow(B, 2);
rectangle = A * B;

console.log(
  `TRIANGULO: ${triangle.toFixed(3)}\nCIRCULO: ${circle.toFixed(
    3
  )}\nTRAPEZIO: ${trapeze.toFixed(3)}\nQUADRADO: ${square.toFixed(
    3
  )}\nRETANGULO: ${rectangle.toFixed(3)}`
);
