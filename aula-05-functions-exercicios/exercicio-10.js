let vetorPrimario = [1, 5, 18, 28, 95];
let vetorSecundario = [25, 32, 41, 46, 84];

function somaVetores(primario, secundario) {
  let novoVetor = [];
  for (let i = 0; i < primario.length; i++) {
    novoVetor.push(primario[i] + secundario[i]);
  }
  return novoVetor;
}

console.log(somaVetores(vetorPrimario, vetorSecundario));