"use strict";

// Отримати два числа, m і n. Вивести в консоль усі прості числа в діапазоні від m до n.
// Якщо хоча б одне з чисел не відповідає умовам валідації, зазначеним вище,
// вивести повідомлення про помилку і запитати обидва числа знову.

let x = prompt("enter any integer number");
let y = prompt("enter any integer number bigger than the previous one");

while (
    x === null ||
    y === null ||
    x === "" ||
    y === "" ||
    isNaN(x) ||
    isNaN(y) ||
    !Number.isInteger(+x) ||
    !Number.isInteger(+y)
) {
    x = prompt("enter any integer number");
    y = prompt("enter any integer number bigger than the previous one");
}

while (+y <= +x) {
    alert(`error x = ${x} y = ${y}`);
    x = prompt("enter any integer number");
    y = prompt("enter any integer number bigger than the previous one");
}

let n, m;
m = +x;
n = +y;
let primeNumbers = "";

for (let i = m; i <= n; i++) {
    for (let j = 2; j <= i; j++) {
        if (i % j === 0 && j < i) {
            break;
        } else if (j === i) {
            console.log(i);
            primeNumbers += i + ", ";
        }
    }
}

console.log(`prime numbers list: ${primeNumbers.slice(0, primeNumbers.length - 2)}`);
