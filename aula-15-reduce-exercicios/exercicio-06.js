// Dado um vetor de eleitores em potencial, retorne um objeto representando quantos votaram por faixa etária.
// Agrupar as idades 18-25, 26-35, 36-55 e as demais idades.

const voters = [
  { name: 'Bob', age: 30, voted: true },
  { name: 'Jake', age: 32, voted: true },
  { name: 'Kate', age: 25, voted: false },
  { name: 'Sam', age: 20, voted: false },
  { name: 'Phil', age: 21, voted: true },
  { name: 'Ed', age: 55, voted: true },
  { name: 'Tami', age: 54, voted: true },
  { name: 'Mary', age: 31, voted: false },
  { name: 'Becky', age: 43, voted: false },
  { name: 'Joey', age: 41, voted: true },
  { name: 'Jeff', age: 30, voted: true },
  { name: 'Zack', age: 19, voted: false }
]

/* Resultado:
{
  numYoungVotes: 1,
  numYoungPeople: 4,
  numMidVotesPeople: 3,
  numMidsPeople: 4,
  numOldVotesPeople: 3,
  numOldsPeople: 4
}
*/

const resultado = voters.reduce((state, voter) => {

  if (voter.age >= 18 && voter.age <= 25) {
    if (voter.voted) state['numYoungVotes']++
    state['numYoungPeople']++
  }
  else if (voter.age <= 35) {
    if (voter.voted) state['numMidVotesPeople']++
    state['numMidsPeople']++
  }
  else if (voter.age <= 55) {
    if (voter.voted) state['numOldVotesPeople']++
    state['numOldsPeople']++
  }

  return state

},
  {
    numYoungVotes: 0,
    numYoungPeople: 0,
    numMidVotesPeople: 0,
    numMidsPeople: 0,
    numOldVotesPeople: 0,
    numOldsPeople: 0
  }
)

console.log(resultado)