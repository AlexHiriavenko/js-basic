//1. Generate a random number between two values:

const randNum = (max, min) => Math.round(Math.random() * (max - min) + min);

console.log(randNum(0, 10));

//2. Check if a number is an integer:

const isInteger = (n) => n % 1 === 0;

console.log(isInteger(4), isInteger(4.7));

//3. Check if a value is null or undefined:

const nullOrUnd = (n) => n ?? "default value";

console.log(nullOrUnd(null), nullOrUnd(4));

//4. Check if a value is a truthy value:

const isTruthy = (any) => !!any;

console.log(isTruthy("test"), isTruthy(0));

//5. Remove Duplicated from Array

const uniq = (arr) => [...new Set(arr)];

console.log(uniq([1, 2, 4, 5, 2, 3, 4, 6, 6, 8, 5])); // [1,2,4,5,3,6,8]

//6.Check if a string ends with a given suffix:

const checkEndSuffix = (str, suffix) => str.endsWith(suffix);

console.log(checkEndSuffix("some string", "ing"));
console.log(checkEndSuffix("some string", "eng"));

//7. Check if a string starts with a given prefix:

const checkStartSuffix = (str, suffix) => str.startsWith(suffix);

console.log(checkStartSuffix("some string", "som"));
console.log(checkStartSuffix("some string", "son"));

//8. Create an array of characters from a string:

const arr = [..."some string"] || "some string".split("");
console.log(arr);

//9. create an array of numbers from 1 to 10

const arr1to10 = [...Array(10).keys()].map((el) => el + 1);
// в ключах находятся индексы массива 0, 1, 2 и т.д.
console.log(arr1to10);
