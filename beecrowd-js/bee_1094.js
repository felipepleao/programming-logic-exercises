/* BEE 1094 - Experiências
Maria acabou de iniciar seu curso de graduação na faculdade de medicina e precisa de sua ajuda para organizar os experimentos de um laboratório o qual ela é responsável. Ela quer saber no final do ano, quantas cobaias foram utilizadas no laboratório e o percentual de cada tipo de cobaia utilizada.

Este laboratório em especial utiliza três tipos de cobaias: sapos, ratos e coelhos. Para obter estas informações, ela sabe exatamente o número de experimentos que foram realizados, o tipo de cobaia utilizada e a quantidade de cobaias utilizadas em cada experimento.

Entrada
A primeira linha de entrada contém um valor inteiro N que indica os vários casos de teste que vem a seguir. Cada caso de teste contém um inteiro Quantia (1 ≤ Quantia ≤ 15) que representa a quantidade de cobaias utilizadas e um caractere Tipo ('C', 'R' ou 'S'), indicando o tipo de cobaia (R:Rato S:Sapo C:Coelho).

Saída
Apresente o total de cobaias utilizadas, o total de cada tipo de cobaia utilizada e o percentual de cada uma em relação ao total de cobaias utilizadas, sendo que o percentual deve ser apresentado com dois dígitos após o ponto.
*/

var input = require("fs").readFileSync("./dev/stdin", "utf8");
var lines = input.split("\n");

const arrayLines = Array.from(lines);

let numberTest = arrayLines.shift()
let amountOfTest = 0;
let testAnimals = ''
let totalExperiment = 0;
let totalRabbits = 0;
let percentRabbits = 0;
let totalMouses = 0;
let percentMouses = 0;
let totalFrogs = 0;
let percentFrogs = 0;

for (let i = 0; i < numberTest; i++) {
  let arrayTest = arrayLines[i].split(' ')
  amountOfTest = Number(arrayTest.shift())
  testAnimals = arrayTest.shift().trim()
  amountOfTest
  testAnimals

  if (testAnimals == 'C') {
    totalRabbits += amountOfTest
  } else if (testAnimals == 'R') {
    totalMouses += amountOfTest
  } else if (testAnimals == 'S') {
    totalFrogs += amountOfTest
  }

  totalExperiment += amountOfTest
}

percentRabbits = (totalRabbits * 100 / totalExperiment).toFixed(2)
percentMouses = (totalMouses * 100 / totalExperiment).toFixed(2)
percentFrogs = (totalFrogs * 100 / totalExperiment).toFixed(2)

console.log(`Total: ${totalExperiment} cobaias`)
console.log(`Total de coelhos: ${totalRabbits}`)
console.log(`Total de ratos: ${totalMouses}`)
console.log(`Total de sapos: ${totalFrogs}`)
console.log(`Percentual de coelhos: ${percentRabbits} %`)
console.log(`Percentual de ratos: ${percentMouses} %`)
console.log(`Percentual de sapos: ${percentFrogs} %`)


// //arrayLines.forEach(test => {

//   let arrayTest = test.split(' ')
//   amountOfTest = Number(arrayTest.shift())
//   testAnimals = arrayTest.shift().trim()
//   amountOfTest
//   testAnimals

//   if (testAnimals == 'C') {
//     totalRabbits += amountOfTest
//   } else if (testAnimals == 'R') {
//     totalMouses += amountOfTest
//   } else if (testAnimals == 'S') {
//     totalFrogs += amountOfTest
//   }

//   totalExperiment += amountOfTest
// })






