/* BEE 1047 - Tempo de Jogo com Minutos
Leia a hora inicial, minuto inicial, hora final e minuto final de um jogo. A seguir calcule a duração do jogo.

Obs: O jogo tem duração mínima de um (1) minuto e duração máxima de 24 horas.

Entrada
Quatro números inteiros representando a hora de início e fim do jogo.

Saída
Mostre a seguinte mensagem: “O JOGO DUROU XXX HORA(S) E YYY MINUTO(S)” .
*/

var input = require("fs").readFileSync("./dev/stdin", "utf8");
var lines = input.split(" ");

const [horaInicial, minutoInicial, horaFinal, minutoFinal] = lines.map((n) =>
  parseInt(n)
);

let durationHours = horaFinal - horaInicial;
let durationMinutes = minutoFinal - minutoInicial;
let zeroHours =
  horaFinal === horaInicial &&
  horaFinal > 0 &&
  horaInicial > 0 &&
  horaFinal - horaInicial === 0;

if (durationHours <= 0) {
  durationHours += 24;
}

if (durationMinutes < 0) {
  durationMinutes += 60;
  --durationHours;
}

if (zeroHours) {
  durationHours = 0;
}

console.log(
  `O JOGO DUROU ${durationHours} HORA(S) E ${durationMinutes} MINUTO(S)`
);
