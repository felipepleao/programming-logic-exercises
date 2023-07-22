// Kata Task
// I have a cat and a dog.

// I got them at the same time as kitten/puppy. That was humanYears years ago.

// Return their respective ages now as [humanYears,catYears,dogYears]

// NOTES:

// humanYears >= 1
// humanYears are whole numbers only
// Cat Years
// 15 cat years for first year
// +9 cat years for second year
// +4 cat years for each year after that
// Dog Years
// 15 dog years for first year
// +9 dog years for second year
// +5 dog years for each year after that

// const humanYearsCatYearsDogYears = (humanYears) => {
//   let catYears = [15, 9, 4];
//   let dogYears = [15, 9, 5];
//   if (humanYears === 1) {
//     return [humanYears, catYears[0], dogYears[0]];
//   } else if (humanYears === 2) {
//     return [humanYears, catYears[0] + catYears[1], dogYears[0] + dogYears[1]];
//   } else if (humanYears >= 3) {
//     let years = [
//       humanYears,
//       catYears[0] + catYears[1],
//       dogYears[0] + dogYears[1],
//     ];
//     for (let i = 0; i <= humanYears - 3; i++) {
//       years[1] += catYears[2];
//       years[2] += dogYears[2];
//     }
//     return years;
//   }
// };

// console.log(humanYearsCatYearsDogYears(5));

const humanYearsCatYearsDogYears = (y) => {
  return y == 1
    ? [1, 15, 15]
    : y == 2
    ? [2, 24, 24]
    : [y, (y - 2) * 4 + 24, (y - 2) * 5 + 24];
};
