/* BEE 1061 - Tempo de um Evento
Pedrinho está organizando um evento em sua Universidade. O evento deverá ser no mês de Abril, iniciando e terminando dentro do mês. O problema é que Pedrinho quer calcular o tempo que o evento vai durar, uma vez que ele sabe quando inicia e quando termina o evento.

Sabendo que o evento pode durar de poucos segundos a vários dias, você deverá ajudar Pedrinho a calcular a duração deste evento.

Entrada
Como entrada, na primeira linha vai haver a descrição “Dia”, seguido de um espaço e o dia do mês no qual o evento vai começar. Na linha seguinte, será informado o momento no qual o evento vai iniciar, no formato hh : mm : ss. Na terceira e quarta linha de entrada haverá outra informação no mesmo formato das duas primeiras linhas, indicando o término do evento.

Saída
Na saída, deve ser apresentada a duração do evento, no seguinte formato:

W dia(s)
X hora(s)
Y minuto(s)
Z segundo(s)

Obs: Considere que o evento do caso de teste para o problema tem duração mínima de 1 minuto.
*/

var input = require("fs").readFileSync("./dev/stdin", "utf8");
var lines = input.split("\n");

const arrayLines = Array.from(lines);

const arrayNumbers = arrayLines.map((item) => item.trim());
[startDate, startTime, finalDate, endTime] = arrayNumbers

let newStartDate = startDate.replace('Dia', '')
let newFinalDate = finalDate.replace('Dia', '')
let arrayStartTime = startTime.split(' : ')
let arrayFinalTime = endTime.split(' : ')

let [startHour, startMinute, startSecond] = arrayStartTime
let [finalHour, finalMinute, finalSecond] = arrayFinalTime

let date = newFinalDate - newStartDate
let hour = finalHour - startHour
let minute = finalMinute - startMinute
let seconds = finalSecond - startSecond

if (date < 0) {
  date = 0
}

if (hour == 0 && date > 0) {
  hour = 23
  --date
}

if (hour < 0) {
  hour += 24
  --date
}

if (minute < 0) {
  --hour
  minute += 60
}

if (seconds < 0) {
  --minute
  seconds += 60
}

console.log(`${date} dia(s)`)
console.log(`${hour} hora(s)`)
console.log(`${minute} minuto(s)`)
console.log(`${seconds} segundo(s)`)





