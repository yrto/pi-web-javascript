const readline = require('readline-sync');

let nota01 = parseFloat(readline.question("Informe a nota 1: "));
let nota02 = parseFloat(readline.question("Informe a nota 2: "));
let nota03 = parseFloat(readline.question("Informe a nota 3: "));
let nota04 = parseFloat(readline.question("Informe a nota 4: "));

console.log("Sua média foi", (nota01 + nota02 + nota03 + nota04) / 4);