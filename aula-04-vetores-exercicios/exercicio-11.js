const vetor = [83, 39, 21, 43, 99, 42, 50, 29, 45, 76];

console.log(vetor);

let a = [];
let b = [];
let c = [];
let d = [];
let e = [];
let f = [];
let g = [];

a = vetor.slice(0, 4);
b = vetor.slice(-5);

for (let i of vetor) {
  if (i % 2 === 0) {
    c.push(i);
  }
  else {
    d.push(i);
  }
}

for (let i of vetor) {
  e.unshift(i)
}

f = e.slice(0, 5);
g = e.slice(-5);

console.log("A:", a);
console.log("B:", b);
console.log("C:", c);
console.log("D:", d);
console.log("E:", e);
console.log("F:", f);
console.log("G:", g);