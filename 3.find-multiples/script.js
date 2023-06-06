// вивести всі числа кратні 5 у заданому діапазоні.

let num = prompt("enter any number");

while (num === "" || num === null || isNaN(num) || !Number.isInteger(+num) || num <= 0) {
    num = prompt("enter any number, it must any integer except 0");
}

let numberDivFive = "";
let i;

for (i = 1; i <= num; i++) {
    if (i % 5 === 0) {
        console.log(i);
        numberDivFive += i + ", ";
        continue;
    }
}

if (i < 6) {
    console.log("Sorry, no numbers");
} else {
    //.slice убирает в конце не нужную часть строки ", "
    console.log(`Numbers: ${numberDivFive.slice(0, numberDivFive.length - 2)}.`);
}
