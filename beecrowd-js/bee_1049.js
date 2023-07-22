/* BEE 1049 - Animal
Neste problema, você deverá ler 3 palavras que definem o tipo de animal possível segundo o esquema abaixo, da esquerda para a direita.  Em seguida conclua qual dos animais seguintes foi escolhido, através das três palavras fornecidas.
*/

var input = require("fs").readFileSync("./dev/stdin", "utf8");
var lines = input.split("\n");

const arrayLines = Array.from(lines);
const animalSpecification = arrayLines.map((item) => item.trim());

const animals = {
  aguia: ["vertebrado", "ave", "carnivoro"],
  pomba: ["vertebrado", "ave", "onivoro"],
  homem: ["vertebrado", "mamifero", "onivoro"],
  vaca: ["vertebrado", "mamifero", "herbivoro"],
  pulga: ["invertebrado", "inseto", "hematofago"],
  lagarta: ["invertebrado", "inseto", "herbivoro"],
  sanguessuga: ["invertebrado", "anelideo", "hematofago"],
  minhoca: ["invertebrado", "anelideo", "onivoro"],
};

const { aguia, pomba, homem, vaca, pulga, lagarta, sanguessuga, minhoca } =
  animals;

const isAguia = aguia.every((element, index) => {
  return element === animalSpecification[index];
});
const isPomba = pomba.every((element, index) => {
  return element === animalSpecification[index];
});
const isHomem = homem.every((element, index) => {
  return element === animalSpecification[index];
});
const isVaca = vaca.every((element, index) => {
  return element === animalSpecification[index];
});
const isPulga = pulga.every((element, index) => {
  return element === animalSpecification[index];
});
const isLagarta = lagarta.every((element, index) => {
  return element === animalSpecification[index];
});
const isSanguessuga = sanguessuga.every((element, index) => {
  return element === animalSpecification[index];
});
const isMinhoca = minhoca.every((element, index) => {
  return element === animalSpecification[index];
});

isAguia ? console.log("aguia") : null;
isPomba ? console.log("pomba") : null;
isHomem ? console.log("homem") : null;
isVaca ? console.log("vaca") : null;
isPulga ? console.log("pulga") : null;
isLagarta ? console.log("lagarta") : null;
isSanguessuga ? console.log("sanguessuga") : null;
isMinhoca ? console.log("minhoca") : null;
