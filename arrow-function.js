// //  function declaration

// function sum1(num1, num2) {
//     return num1 + num2;
// }

// // function expresion
// const sum2 = function sum2(num1, num2) {
//     return num1 + num2;
// }

// // function exprestion (anonymonus function function ar nam nei)
// const sum3 = function (num1, num2) {
//     return num1 + num2;
// }

// // arrow function 
// const add4 = (num1, num2) => num1 + num2;
// // arrow fucntion ar a varial dilerce kore function na likhe direc () drecket dia perameter gulo ke pass kore dile hoy

// const add1 = sum1(15, 25);
// const add2 = sum2(15, 25);
// const add3 = sum3(15, 25);
// console.log(add1, add2, add3);

// get random code using arrrow function with no argument
//If a function doesn't take any argument, then you should use empty parentheses. For example,
const code2 = () => Math.round(Math.random() * 1000)
console.log(code2())