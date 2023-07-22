/* BEE 1044 - Múltiplos

Leia 2 valores inteiros (A e B). Após, o programa deve mostrar uma mensagem "Sao Multiplos" ou "Nao sao Multiplos", indicando se os valores lidos são múltiplos entre si.

Entrada
A entrada contém valores inteiros.

Saída
A saída deve conter uma das mensagens conforme descrito acima.

*/

var input = require("fs").readFileSync("./dev/stdin", "utf8");
var lines = input.split(" ");

// nx = k, onde k é múltiplo de n, se somente se, x pertencer aos inteiros (números inteiros.)

let A = parseInt(lines.shift());
let B = parseInt(lines.shift());

let isMultiple = B % A === 0 || A % B === 0;

isMultiple ? console.log("Sao Multiplos") : console.log("Nao sao Multiplos");