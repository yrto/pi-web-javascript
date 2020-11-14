const readline = require("readline-sync");

let tempCelsius = parseFloat(readline.question("Digite a temperatura em ºC: "));

let tempFahrenheit = (1.8 * tempCelsius) + 32;

console.log(tempCelsius, "ºC são", tempFahrenheit, "ºF");