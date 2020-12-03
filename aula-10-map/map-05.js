let employees = [
  { role: 'Desenvolvedor', salary: 1000 },
  { role: 'Designer', salary: 800 },
  { role: 'Vendedor', salary: 700 },
  { role: 'Professor', salary: 800 }
]

// percorrendo objetos

employees = employees.map(
  employee => {
    return { ...employee, salary: employee.salary + 300 }
  }
)

console.log(employees);