/* BEE 1019 - Conversão de Tempo

Leia um valor inteiro, que é o tempo de duração em segundos de um determinado evento em uma fábrica, e informe-o expresso no formato horas:minutos:segundos.

Entrada
O arquivo de entrada contém um valor inteiro N.

Saída
Imprima o tempo lido no arquivo de entrada (segundos), convertido para horas:minutos:segundos, conforme exemplo fornecido.

*/

var input = require("fs").readFileSync("./dev/stdin", "utf8");
var lines = input.split(" ");

let seconds = parseInt(lines.shift());

let hours = seconds / (60 * 60);
let minutes = (hours - Math.trunc(hours)) * 60;
seconds = (minutes - Math.trunc(minutes)) * 60;

hours = Math.trunc(hours);
minutes = Math.trunc(minutes);
seconds = seconds.toFixed(0);

console.log(`${hours}:${minutes}:${seconds}`);
