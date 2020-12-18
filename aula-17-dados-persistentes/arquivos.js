const fs = require("fs")

// let dados = { nome: "Ayrton", idade: 29 }

let dados = JSON.parse(fs.readFileSync("dados.json").toString())

fs.writeFileSync("dados.json", JSON.stringify(dados))

console.log(dados)