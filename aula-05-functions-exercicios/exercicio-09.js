let lista_palavras = ["olá", "para", "você"];


function text_transform(palavras) {

  console.log(lista_palavras);

  for (let i in palavras) {
    palavras[i] = palavras[i].toUpperCase();
  }

  return palavras
}

console.log(text_transform(lista_palavras));