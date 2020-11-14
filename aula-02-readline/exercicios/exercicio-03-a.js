const readline = require("readline-sync");

let tempFahrenheit = parseFloat(readline.question("Digite a temperatura em ºF: "));

let tempCelsius = (5 * (tempFahrenheit - 32)) / 9;

console.log(tempFahrenheit, "ºF são", tempCelsius, "ºC");