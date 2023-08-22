console.log(lastName); // undefined
// console.log(name); // ReferenceError

let developer;
const name = "Alex";
var lastName = "Hiriavenko";
developer = name;

var test;
console.log(test + 5); //NaN
test = 10;
console.log(test + 5); // 15

console.log(developer);
console.log(lastName);

var age = 30;

function getAge() {
    console.log(age); // нет доступа к переменной age
    var age = 40;
    console.log(age);
}

getAge();

var i = 4;

for (i; i < 6; i++) {
    // есть доступ к переменной i
    console.log(i);
}

const days = parseInt(prompt("згідно з Біблією за скільки днів Бог створив світ?"));
const seconds = days * 24 * 60 * 60;

if (isNaN(days)) {
    console.log("ви ввели казна-що, а не число");
} else {
    console.log(`якщо вы надали вірну відповідь - Бог створив світ за ${seconds} секунд`);
}
