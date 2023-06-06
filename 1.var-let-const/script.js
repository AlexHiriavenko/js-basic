console.log(lastName); // undefined
// console.log(name); // ReferenceError

let developer;
const name = "Alex";
var lastName = "Hiriavenko";
developer = name;

console.log(developer);
console.log(lastName);

const days = parseInt(prompt("згідно з Біблією за скільки днів Бог створив світ?"));
const seconds = days * 24 * 60 * 60;

if (isNaN(days)) {
    console.log("ви ввели казна-що, а не число");
} else {
    console.log(`якщо вы надали вірну відповідь - Бог створив світ за ${seconds} секунд`);
}
