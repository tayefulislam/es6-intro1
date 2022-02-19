function add(num1, num2 = 0) {
    // funtion ar ei kahne num2 = 0 likhaar mane hochhce defualt funcion . defualt function perameter value = (equalt two dia likhete hoy).
    // jemon eikhane num2 = 0 daw hoiche jodi call korar time konon value na dia call kore tahole num2 = 0 hoi jabe.
    console.log(num1, num2);
    const sum = num1 + num2;
    return sum;
}
const result = add(14);
console.log(result);

function addName(first, last = "don") {
    const add = `${first} ${last}`;
    return add;
}

console.log(addName('sabbir', 'khan'))