const ISO6391 = require("iso-639-1")
const axios = require("axios")
const input = require("readline-sync")

async function main() {

  let paises = await get_countries()

  const get_text = (texto_inicial, pais) => texto_inicial + `${pais.name} in ${pais.region} with ${pais.population}\n`

  let text = paises.reduce(get_text, "\n")

  let selecao
  const menu = () => {
    console.log("1. Filtrar por população")
    console.log("2. Filtrar por região")
    console.log("3. Total de falantes")
    console.log("4. Nova busca")
    console.log("0. Sair")
    console.log("")
  }

  console.log(text)

  do {

    selecao = input.question(menu())

    if (selecao == "1") {
      const population = parseInt(input.question("Somente países com mais de: "))
      text = paises
        .filter(pais => pais.population > population)
        .reduce(get_text, "\n")
      console.log(text)
    }
    else if (selecao == "2") {
      const region = input.question("Somente países da região: ")
      text = paises
        .filter(pais => pais.region.toLowerCase() === region.toLowerCase())
        .reduce(get_text, "\n")
      console.log(text)
    }
    else if (selecao == "3") {
      const populacao_total_falante = paises.reduce((populacao_parcial, pais) => populacao_parcial + pais.population, 0)
      console.log(`\nTotal de falantes é ${populacao_total_falante}\n`)
    }

  } while (selecao != "0")

}

async function get_countries() {

  let code

  do {
    let language = input.question("Buscar país por idioma: ")
    code = ISO6391.getCode(language)
  } while (code === "")

  let paises = await axios.get(`https://restcountries.eu/rest/v2/lang/${code}`)
    .then(resposta_recebida => resposta_recebida.data)
    .then(
      dados_recebidos => dados_recebidos.map(
        pais_recebido => ({
          name: pais_recebido.name,
          region: pais_recebido.region,
          population: pais_recebido.population
        })
      )
    )
    .catch(erro => console.log(erro))

  return paises

}

main()