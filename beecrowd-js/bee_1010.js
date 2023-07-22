/* BEE 1010 - Cálculo Simples

Neste problema, deve-se ler o código de uma peça 1, o número de peças 1, o valor unitário de cada peça 1, o código de uma peça 2, o número de peças 2 e o valor unitário de cada peça 2. Após, calcule e mostre o valor a ser pago.

Entrada
O arquivo de entrada contém duas linhas de dados. Em cada linha haverá 3 valores, respectivamente dois inteiros e um valor com 2 casas decimais.

Saída
A saída deverá ser uma mensagem conforme o exemplo fornecido abaixo, lembrando de deixar um espaço após os dois pontos e um espaço após o "R$". O valor deverá ser apresentado com 2 casas após o ponto.

*/

var input = require("fs").readFileSync("./dev/stdin", "utf8");
var lines = input.split("\n");

let pieceOne = lines.shift().split(" ");
let pieceTwo = lines.shift().split(" ");

let numberPieceOne = parseInt(pieceOne[1]);
let numberPieceTwo = parseInt(pieceTwo[1]);

let pricePieceOne = parseFloat(pieceOne[2]);
let pricePieceTwo = parseFloat(pieceTwo[2]);

const SUM = numberPieceOne * pricePieceOne + numberPieceTwo * pricePieceTwo;

console.log(`VALOR A PAGAR: R$ ${SUM.toFixed(2)}`);
// const SUM = parseFloat(pieceOne[2] * pieceOne[1]) + parseFloat(pieceTwo[2] * pieceTwo[1]);
