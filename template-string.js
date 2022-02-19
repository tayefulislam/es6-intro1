// use of back quart
// make radmon code 



function code() {
    const code = Math.round(Math.random() * 10000)
    return code;
}
console.log(code)

const rolls = [123, 23, 45,];
const english = 100;
const bangla = 80;
const math = 90;

for (let roll of rolls) {

    const result = `Name : Tayeful Islam Tushar ${roll}
    English Mark = ${english}
    Banglar Mark = ${bangla}
    Math Mark = ${math}
    `
    console.log(result)

}

// const result = `Name : Tayeful Islam Tushar
// English Mark = ${english}
// Banglar Mark = ${bangla}
// Math Mark = ${math}
// `
// console.log(result)