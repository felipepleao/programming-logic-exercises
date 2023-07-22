/* BEE 1050 - DDD
Leia um número inteiro que representa um código de DDD para discagem interurbana. Em seguida, informe à qual cidade o DDD pertence, considerando a tabela abaixo:
*/

var input = require("fs").readFileSync("./dev/stdin", "utf8");
var lines = input.split("\n");

const DDD = parseInt(lines.shift());

function cityDDD(DDD) {
  if ((DDD === 61)) {
    console.log("Brasilia");
  } else if ((DDD === 71)) {
    return console.log("Salvador");
  } else if ((DDD === 11)) {
    return console.log("Sao Paulo");
  } else if ((DDD === 21)) {
    return console.log("Rio de Janeiro");
  } else if ((DDD === 32)) {
    return console.log("Juiz de Fora");
  } else if ((DDD === 19)) {
    return console.log("Campinas");
  } else if ((DDD === 27)) {
    return console.log("Vitoria");
  } else if ((DDD === 31)) {
    return console.log("Belo Horizonte");
  } else {
    console.log("DDD nao cadastrado");
  }
}

cityDDD(DDD);
