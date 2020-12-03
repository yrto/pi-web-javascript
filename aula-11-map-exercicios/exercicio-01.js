// Durante a Black Friday uma loja declarou descontos em produtos do seu catálogo, de acordo com a regra abaixo:

// 5% para produtos abaixo de R$ 200,00
// 10% para produtos abaixo de R$ 400,00
// 15% para produtos abaixo de R$ 2000,00
// 20% para produtos acima de R$ 2000,00

// Com base nisso, crie um programa que recebe o preço normal dos 10 produtos mais adquiridos pelos clientes e guarde-os em um array.

const input = require("readline-sync");

let precos_produtos = [];

for (let i = 0; i < 10; i++) {
  let preco = parseInt(input.question(`Digite o preço do produto ${i + 1}/10: `));
  precos_produtos.push(preco);
}

console.log(precos_produtos);

// Em seguida, utilize a função "map" para aplicar o desconto nos preços e, com isso, criar um array com o preço após os descontos.

novos_precos_produtos = precos_produtos.map(
  preco => {
    if (preco <= 200) preco *= 0.95
    else if (preco <= 400) preco *= 0.90
    else if (preco <= 2000) preco *= 0.85
    else preco *= 0.8
    return preco
  }
);

console.log(novos_precos_produtos);