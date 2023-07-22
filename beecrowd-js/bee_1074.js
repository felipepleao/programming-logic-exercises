/* BEE 1074 - Par ou Ímpar
Leia um valor inteiro N. Este valor será a quantidade de valores que serão lidos em seguida. Para cada valor lido, mostre uma mensagem em inglês dizendo se este valor lido é par (EVEN), ímpar (ODD), positivo (POSITIVE) ou negativo (NEGATIVE). No caso do valor ser igual a zero (0), embora a descrição correta seja (EVEN NULL), pois por definição zero é par, seu programa deverá imprimir apenas NULL.

Entrada
A primeira linha da entrada contém um valor inteiro N(N < 10000) que indica o número de casos de teste. Cada caso de teste a seguir é um valor inteiro X (-107 < X <107).

Saída
Para cada caso, imprima uma mensagem correspondente, de acordo com o exemplo abaixo. Todas as letras deverão ser maiúsculas e sempre deverá haver um espaço entre duas palavras impressas na mesma linha.
*/

var input = require("fs").readFileSync("./dev/stdin", "utf8");
var lines = input.split("\n");

const arrayLines = Array.from(lines);
const arrayNumbers = arrayLines.map((item) => Number(item));
let isEven;
let numberEven = 0;
let numberOdd = 0;

const valueRead = arrayNumbers.shift();

for (let i = 0; i < valueRead; i++) {

  if (arrayNumbers[i] > 0 || arrayNumbers[i] < 0 ) {
    isEven = arrayNumbers[i] % 2 === 0;
  } else {
    console.log("NULL")
  }

  isEven ? (numberEven = arrayNumbers[i]) : (numberOdd = arrayNumbers[i]);

  if (numberEven > 0) {
    console.log("EVEN POSITIVE");
  } else if (numberEven < 0) {
    console.log("EVEN NEGATIVE");
  } else if (numberOdd > 0) {
    console.log("ODD POSITIVE");
  } else if (numberOdd < 0) {
    console.log("ODD NEGATIVE");
  }

  numberEven = 0;
  numberOdd = 0;
}
