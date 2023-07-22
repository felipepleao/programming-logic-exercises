/* BEE 1072 - Intervalo 2
Leia um valor inteiro N. Este valor será a quantidade de valores inteiros X que serão lidos em seguida.
Mostre quantos destes valores X estão dentro do intervalo [10,20] e quantos estão fora do intervalo, mostrando essas informações.

Entrada
A primeira linha da entrada contém um valor inteiro N (N < 10000), que indica o número de casos de teste.
Cada caso de teste a seguir é um valor inteiro X (-107 < X <107).
 

Saída
Para cada caso, imprima quantos números estão dentro (in) e quantos valores estão fora (out) do intervalo.
*/

var input = require("fs").readFileSync("./dev/stdin", "utf8");
var lines = input.split("\n");

const arrayLines = Array.from(lines);
const arrayNumbers = arrayLines.map((item) => Number(item));

const valueRead = arrayNumbers.shift();
let countIn = 0;
let countOut = 0;

for (let i = 0; i < valueRead; i++) {
  if (arrayNumbers[i] >= 10 && arrayNumbers[i] <= 20) {
    countIn++;
  } else {
    countOut++;
  }
}

console.log(`${countIn} in`)
console.log(`${countOut} out`)