let people = [
  {
    name: "Angelina Jolie",
    age: 80,
    weight: 55,
    height: 1.79
  },
  {
    name: "Eric Jones",
    age: 28,
    weight: 100,
    height: 1.6
  },
  {
    name: "Paris Hilton",
    age: 34,
    weight: 79,
    height: 1.65
  },
  {
    name: "Kayne West",
    age: 26,
    weight: 83,
    height: 1.83
  },
  {
    name: "Bob Ziroll",
    age: 90,
    weight: 60,
    height: 1.65
  }
];

// Utilize a função map para adicionar outros dois campos ao objeto acima:
// bmi: que contém o IMC (Body Mass Index ou Índice de Massa Corporal) da pessoa (float)
// classification: uma classificação simples do IMC da pessoa. Insira a string 'fora da faixa Normal', caso a pessoa tenha um IMC abaixo de 18,5 ou acima de 25. Insira a string 'Normal', caso a pessoa tenha um IMC entre 18,5 e 25.

// "return ...person" retorna um objeto individual de determinado vetor

people = people.map(
  person => {
    const imc = parseFloat((person.weight / person.height ** 2).toFixed(2))
    return {
      ...person,
      imc,
      classificacao: 18.5 < imc && imc < 25 ? 'Normal' : 'Fora da faixa Normal'
    }
  }
)

console.log(people);