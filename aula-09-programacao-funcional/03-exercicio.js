// short form

const desconto = percentual => function (valor) { return valor * (1 - (percentual / 100)) };

// shorter form

const desconto_shorter = percentual => valor => valor * (1 - (percentual / 100));

// funcoes especializadas

const desconto_10 = desconto_shorter(10);
const desconto_15 = desconto_shorter(15);

// exemplos

console.log(desconto_10(1000));
console.log(desconto_15(1000));