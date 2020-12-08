const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

const new_numbers = ((numbers.map(num => num * 10)).filter(num => num % 2 === 0)).reduce((state, num) => state + num)

console.log(new_numbers)