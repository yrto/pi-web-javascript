// operacoes

let som = (a, b) => a + b;
let sub = (a, b) => a - b;
let mul = (a, b) => a * b;
let div = (a, b) => a / b;

// alta ordem

function calcular(operacao, a, b) {
  return operacao(a, b);
}

// exemplo

console.log(calcular(som, 10, 20));