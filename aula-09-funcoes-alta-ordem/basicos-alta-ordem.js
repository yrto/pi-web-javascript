function sum(a, b) {
  return a + b;
}

function apply(operation, a, b) {
  return operation(a, b);
}

function sum_x(x) {
  return function (a) {
    return a + x;
  }
}

const sum5 = sum_x(5);
const sum10 = sum_x(10);

console.log(apply(sum, 1, 5));

console.log(sum5(10));
console.log(sum10(10));