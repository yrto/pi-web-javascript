const readline = require('readline-sync');

let raio = parseFloat(readline.question("Informe o raio do cículo: "));

let area = Math.PI * (raio ** 2)

console.log("A área do círculo é", area)