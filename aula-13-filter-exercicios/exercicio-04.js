// Dado um vetor de objetos que representam pessoas, filtre as pessoas que não fazem parte do clube.

const people = [
  { name: "Angelina Jolie", member: true },
  { name: "Eric Jones", member: false },
  { name: "Paris Hilton", member: true },
  { name: "Kayne West", member: false },
  { name: "Bob Ziroll", member: true }
]

let club_only = people.filter(person => person.member === true)

console.log(club_only)