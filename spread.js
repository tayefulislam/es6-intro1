const numbers = [12, 34, 5, 64, 64, 4, 6, 5];
// console.log(numbers);
// //[12, 34, 5, 64, 64, 4, 6, 5]
// //ussing spread oparator
// console.log(...numbers)
// // 12 34 5 64 64 4 6 5
// console.log(Math.max(numbers))
// //NaN
// console.log(Math.max(...numbers))
// //64

const newArray = [...numbers, 787];
console.log(...newArray);
