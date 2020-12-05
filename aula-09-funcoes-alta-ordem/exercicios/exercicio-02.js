// desconto factory

function desconto(percentual) {
  return function (valor) {
    return valor - (valor * (percentual / 100));
  }
}

// funcoes especializadas

const desconto_10 = desconto(10);
const desconto_15 = desconto(15);

// exemplos

console.log(desconto_10(1090))
console.log(desconto_15(1050))