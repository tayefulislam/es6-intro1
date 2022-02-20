const sum1 = (num) => num;
console.log(sum1(1))
const sum2 = num1 => num1;
console.log(sum2(23))

const sum = (x, y) => {
    const multyply = x * y;
    const add = x + y;
    const div = x / y;

    return `
    multyply : ${multyply}
    add      : ${add}
    div      : ${div}
    `
}
console.log(sum(12, 6))