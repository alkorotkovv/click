// Функция подсчета n-ого члена рядя Фибоначчи
function fib(n) {
  let a = 1;
  let b = 1;
  for (let i = 3; i <= n; i++) {
    let c = a + b;
    a = b;
    b = c;
  }
  return b;
}

let n = 3;
// Итоговая сумма всех четных чисел не превышающих 7млн
let sum = 0;
while (fib(n) < 7000000) {
  console.log("текущее число " + fib(n));
  fib(n) % 2 === 0 ? sum += fib(n) : sum += 0;
  console.log("сумма " + sum);
  n += 1;
}