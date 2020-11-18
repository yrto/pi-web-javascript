const input = require("readline-sync");

//

const calc_comp_circunferencia = function () {
  let raio = parseFloat(input.question("Digite o raio do círculo: "));
  let resultado = 2 * Math.PI * raio;
  console.log(resultado);
}

calc_comp_circunferencia();