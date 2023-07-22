// Create a function that looks through an array arr and returns the first element in it that passes a 'truth test'. This means that given an element x, the 'truth test' is passed if func(x) is true. If no element passes the test, return undefined.

// Crie uma função que olhe através do array arr e retorne o primeiro elemento dentro do array que passe pelo 'teste de verdade' ('truth test'). Isso significa que, dado um elemento x, o 'teste de verdade' é verdadeiro se func(x) é true. Se nenhum elemento passa no test, retorna undefined.

// function findElement(arr, func) {
//   let num = 0;

//   for (let i = 0; i < arr.length; i++) {
//     if (func(arr[i])) {
//       num = arr[i];
//       break;
//     } else {
//       num = undefined;
//     }
//   }
//   return num;
// }


// console.log(
//   findElement([1, 3, 5, 9], function (num) {
//     return num % 2 === 0;
//   })
// );
