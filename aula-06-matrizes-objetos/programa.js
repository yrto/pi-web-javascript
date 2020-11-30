const input = require("readline-sync");

// create read update delete

let lanches = [
  {
    nome: 'Bolonhesa',
    pao: 'francês',
    recheio: ['carne', 'tomate']
  },
  {
    nome: 'Marguerita',
    pao: 'baguete',
    recheio: ['queijo', 'tomate', 'orégano']
  },
  {
    nome: 'Atum',
    pao: 'forma',
    recheio: ['atum', 'maionese']
  }
]

// funções

function menu() {
  console.log("");
  console.log("==============");
  console.log("~ Let's Food ~");
  console.log("==============");
  console.log("");
  console.log("1. Ver lanches");
  console.log("2. Criar lanche");
  console.log("3. Remover lanche");
  console.log("4. Alterar lanche");
  console.log("0. Sair");
  console.log("");
}

function menu_lanches() {
  let contador = 1;
  for (let i in lanches) {
    console.log(`${contador}. ${lanches[i].nome}`);
    contador++;
  }
  console.log("0. Voltar");
}

// main loop

while (true) {

  menu();

  select = parseInt(input.question("Escolha uma opção: "));

  if (select === 1) {
    console.log("");
    console.log("===========");
    console.log("~ Lanches ~");
    console.log("===========");
    console.log("");

    menu_lanches();

    let select_lanche = 0;
    while (select_lanche !== -1) {
      console.log("")
      select_lanche = parseInt(input.question("Escolha uma opção: ")) - 1;
      console.log("")

      if (select_lanche === -1) {
        console.log("Voltando...");
      }
      else if (select_lanche < lanches.length) {
        console.log(`O lanche ${lanches[select_lanche].nome} é feito com pão tipo ${lanches[select_lanche].pao} e tem recheio de ${lanches[select_lanche].recheio.join(", ")}.`);
      }
      else {
        console.log("Lanche inválido...")
      }
    }
  }

  else if (select === 2) {
    console.log("");
    console.log("================");
    console.log("~ Criar lanche ~");
    console.log("================");
    console.log("");

    let nome = input.question("Qual o nome do lanche: ");
    let pao = input.question("Qual o tipo de pão: ");
    let recheio = [];
    let sair = "";

    while (sair !== "n" && sair !== "N") {
      console.log("")
      ingrediente = input.question("Digite um ingrediente para o recheio: ");
      recheio.push(ingrediente);
      console.log("")
      console.log(`*** Recheio: ${recheio.join(", ")}`);
      console.log("")
      sair = input.question("Adicionar mais ingredientes? (s/n): ");
    }

    let lanche = { nome: nome, pao: pao, recheio: recheio };
    lanches.push(lanche);
    console.log("");
    console.log(`*** Lanche "${nome}" adicionado com sucesso!`);
  }

  if (select === 3) {
    console.log("");
    console.log("==================");
    console.log("~ Remover lanche ~");
    console.log("==================");
    console.log("");

    menu_lanches();

    let select_lanche = 0;
    while (select_lanche !== -1) {
      console.log("")
      select_lanche = parseInt(input.question("Escolha um lanche para remover: ")) - 1;
      console.log("")

      if (select_lanche === -1) {
        console.log("Voltando...");
      }
      else if (select_lanche < lanches.length) {
        console.log(`*** O lanche ${lanches[select_lanche].nome} é foi removido.`);
        lanches.splice(select_lanche, 1);
      }
      else {
        console.log("Lanche inválido...");
      }
    }
  }

  if (select === 4) {
    console.log("");
    console.log("==================");
    console.log("~ Alterar lanche ~");
    console.log("==================");
    console.log("");

    menu_lanches();

    let select_lanche = 0;
    while (select_lanche !== -1) {
      console.log("");
      select_lanche = parseInt(input.question("Escolha um lanche para alterar: ")) - 1;
      console.log("");

      if (select_lanche === -1) {
        console.log("Voltando...");
      }
      else if (select_lanche < lanches.length) {
        console.log("========================");
        console.log(`~ Alterar propriedades ~`);
        console.log("========================");
        console.log("");
        console.log(`Propriedades de "${lanches[select_lanche].nome}":`);
        console.log("");

        let contador = 1;
        let contador_propriedes = 0;
        let propriedades_lanche = Object.keys(lanches[select_lanche]);
        let propriedades_lanche_consolidado = [];

        for (let i in lanches[select_lanche]) {
          propriedades_lanche_consolidado.push(propriedades_lanche[contador_propriedes] + ": " + lanches[select_lanche][i]);
          contador_propriedes++;
        }
        for (let i = 0; i < propriedades_lanche_consolidado.length; i++) {
          console.log(`${contador}. Alterar ${propriedades_lanche_consolidado[i]}`);
          contador++;
        }
        console.log("0. Voltar");

        let select_propriedade = 0;
        while (select_propriedade !== -1) {
          console.log("");
          select_propriedade = parseInt(input.question("Escolha uma opção: ")) - 1;
          console.log("");

          if (select_propriedade === -1) {
            console.log("Voltando...");
            console.log("");
            console.log("==================");
            console.log("~ Alterar lanche ~");
            console.log("==================");
            console.log("");

            menu_lanches();
          }
          else if (select_propriedade < propriedades_lanche.length) {
            let valores_propriedades = Object.values(lanches[select_lanche]);
            if (typeof valores_propriedades[select_propriedade] === "string") {
              novo_valor = input.question(`Escolha um novo valor para "${propriedades_lanche[select_propriedade]}": `);
              for (i in lanches[select_lanche]) {
                if (i = propriedades_lanche[select_propriedade]) {
                  lanches[select_lanche][i] = novo_valor;
                }
              }
            }
            else if (typeof valores_propriedades[select_propriedade] === "object") {
              console.log(valores_propriedades[select_propriedade]);

              let novo_valor = [];
              let sair = "";

              while (sair !== "n" && sair !== "N") {
                console.log("")
                ingrediente = input.question(`Escolha um novo valor para "${propriedades_lanche[select_propriedade]}: `);
                novo_valor.push(ingrediente);
                console.log("")
                console.log(`*** Recheio: ${novo_valor.join(", ")}`);
                console.log("")
                sair = input.question("Adicionar mais valores? (s/n): ");
              }
              for (i in lanches[select_lanche]) {
                if (i = propriedades_lanche[select_propriedade]) {
                  lanches[select_lanche][i] = novo_valor;
                }
              }
            }
            else {
              console.log("Chave inválida...");
            }
          }
          else {
            console.log("Propriedade inválida...");
          }
        }

      }
      else {
        console.log("Lanche inválido...");
      }
    }
  }

  else if (select < 0 || select > 4) {
    console.log("");
    console.log("!!! Opção inválida !!!");
  }

  else if (select === 0) {
    console.log("");
    console.log("Saindo...");
    break;
  }
}

// console.log(lanches);