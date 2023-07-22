// Return an array consisting of the largest number from each provided sub-array. For simplicity, the provided array will contain exactly 4 sub-arrays.

// Remember, you can iterate through an array with a simple for loop, and access each member with array syntax arr[i].

// function largestOfFour(arr) {
//   let arrayLargest = [];
//   let largestNumber = 0;

//   for (let atual = 0; atual < arr.length; atual++) {
//     if (arrayStr[atual].length > maiorString) {
//       maiorString = arrayStr[atual].length;
//     }
//   }

//   return arr;
// }

// largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);

// function largestOfFour(array) {
//   const arrayParametro = array
//   const numerosMaiores = []
//   let maiorNumero;
//   arrayParametro.forEach(array => {
//     maiorNumero = array[0]
//     for (let atual = 0; atual < array.length; atual++) {
//       if (array[atual] > maiorNumero) {
//           maiorNumero = array[atual]
//       } 
        
//   }
//   numerosMaiores.push(maiorNumero)
//   maiorNumero = 0
//   })
//   return numerosMaiores;
// }

console.log(largestOfFour([[17, 23, 25, 12], [25, 7, 34, 48], [4, -10, 18, 21], [-72, -3, -17, -10]]))

function largestOfFour(array) {
  const arrayNumbers = array
  let arrayMaxNumbers = []
  arrayNumbers.forEach(array => {
    let maxNumber = Math.max(...array)
    arrayMaxNumbers.push(maxNumber)
  })
  return arrayMaxNumbers
}