// Utilize o método filter para determinar quais restaurantes estão abertos no horário atual.

const restaurantes = [
  {
    nome: 'Pizzaria do Mario',
    horario_abertura: 14,
    horario_fechamento: 23
  },
  {
    nome: 'Churrascaria do Ronaldo',
    horario_abertura: 11,
    horario_fechamento: 14,
  },
  {
    nome: 'Bar do Zeca',
    horario_abertura: 12,
    horario_fechamento: 2,
  },
  {
    nome: 'Doceria da Mara',
    horario_abertura: 8,
    horario_fechamento: 20,
  },
]

const restaurantes_abertos = restaurantes.filter(
  restaurante => {
    (new Date()).getHours() >= restaurante.horario_abertura && (new Date()).getHours() <= restaurante.horario_fechamento
  }
)

console.log(restaurantes_abertos)