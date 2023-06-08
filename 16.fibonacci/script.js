// числовой ряд фибоначчи
("0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377, 610, 987, 1597, 2584, 4181, 6765, 10946, 17711, …");
// формула фибоначчи
("Fn = Fn-1 + Fn-2 "); // следующее число получается как сумма двух предыдущих.
// 0 + 1 = 1; 1 + 1 = 2; 1 + 2 =3; 2 + 3 = 5; 3 + 5 = 8; 5 + 8 = 13; и т.д.

// найти число которое соответствует порядковому номеру последовательности Фибоначчи

function fibonacciSimple(serialNum) {
    let a = 0;
    let b = 1;
    let c = 0;
    // т.к. по дефолту первых 2 числа последовательности это 0 и 1, то начинаем счетчик с 2
    for (let i = 2; i <= serialNum; i += 1) {
        c = a + b;
        a = b;
        b = c;
    }
    return c;
}
console.log(fibonacciSimple(10)); // 55

// сократим с 3х до 2х переменных - что немножко сэкономит память

function fibonacciShort(serialNum) {
    let a = 0;
    let b = 1;
    for (let i = 2; i <= serialNum; i += 1) {
        b += a;
        a = b - a;
    }
    return b;
}

console.log(fibonacciShort(10)); // 55

// найти число последовательности фибоначчи по порядковому номеру и 2м заданным числам

const num1 = 3;
const num2 = 6;
const indexFib = 4;

function findFibNums(F0, F1, n) {
    let a = F0;
    let b = F1;
    for (let i = 2; i <= n; i++) {
        b += a;
        a = b - a;
    }
    return b;
}
console.log(findFibNums(num1, num2, indexFib)); // 24

// Рекурсивно найти число, которое соответствует порядковому номеру последовательности ряда Фибоначчи;

const fibRec = (serialNum) =>
    serialNum <= 1 ? serialNum : fibRec(serialNum - 1) + fibRec(serialNum - 2);

console.log(fibRec(10));

//Основная проблема этой функции в том, что одни и те же значения в ней вычисляются заново несколько раз.
// Например, для вычисления f(45) нужно один раз вычислить f(44), два раза — f(43),
// три раза — f(42), пять раз — f(41), и так далее.

// применим мемоизацию

function memoize(f) {
    const cache = {};
    return (arg) => cache[arg] || (cache[arg] = fibRec(arg));
}

const fibRecOpt = memoize(fibRec);

console.log(fibRecOpt(10)); // 55

// Рекурсивно найти число последовательности фибоначчи по порядковому номеру и 2м заданным числам

function findFibNums2(F0, F1, n) {
    if (n === 0) {
        return F0;
    }
    if (n === 1) {
        return F1;
    }
    return findFibNums2(F0, F1, n - 1) + findFibNums2(F0, F1, n - 2);
}

console.log(findFibNums2(3, 6, 4));

// А вот ниже я не понял что происходит, вот объяснение но для меня все равно тяжело:
// Данный код использует рекурсию и деструктуризацию массива для эффективного вычисления чисел Фибоначчи.
// Функция fib2 рекурсивно вычисляет пары чисел Фибоначчи до заданного номера n.
//Если n равно 0, функция возвращает[0, 1].В противном случае, она рекурсивно вызывает саму себя с аргументом n - 1,
// получает предыдущую пару чисел[prev, next] и возвращает новую пару чисел[next, prev + next],
// где prev - предыдущее число Фибоначчи, а next - следующее число Фибоначчи.
// Функция fib вызывает функцию fib2 для заданного номера n и возвращает только первый элемент полученного массива,
// который представляет число Фибоначчи для номера n.
// В данном случае, вызов fib(10) вернет число Фибоначчи с порядковым номером 10, которым является 55.

const fib2 = (n) => {
    if (n == 0) {
        return [0, 1];
    } else {
        const [prev, next] = fib2(n - 1);
        return [next, prev + next];
    }
};
const fib = (n) => fib2(n)[0];
console.log(fib(10));

// мемоизация еще раз на закрепление

const oldFib = (n) => {
    if (n <= 1) {
        return n;
    } else {
        return oldFib(n - 1) + oldFib(n - 2);
    }
};

const memoize1 = (f) => {
    const cache = {};
    return (arg) => cache[arg] || (cache[arg] = f(arg));
};

const newFib = memoize1(oldFib);
console.log(newFib(10));

//функция fib имеет через замыкание доступ к объекту cache. Если её вызывают с аргументом,
//который ранее не встречался, вычисленное значение сохраняется в cache. При новых вызовах
//функции с тем же аргументом значение не придётся вычислять заново, оно будет просто взято из кэша.

// сумма всех натуральных чисел через рекурсию
function sumRecursion(n) {
    if (n === 1) {
        return n;
    }
    return n + sumRecursion(n - 1);
}
console.log(sumRecursion(10)); // 55

// сумма всех натуральных чисел
const sum = (num) => (num === 0 ? 0 : num + sum(num - 1));

console.log(sum(10)); // 55

const memoize2 = (f) => {
    const cache = {};
    return (arg) => cache[arg] || (cache[arg] = f(arg));
};

const newSum = memoize2(sum);

console.log(newSum(10));

//////////////////////////////////////////////

const add = (n) => {
    console.log("func add is worked!");
    return n + 2;
};

const memo = (add) => {
    const cache = {};
    return (arg) => cache[arg] || (cache[arg] = add(arg));
};

const newAdd = memo(add);

console.log(newAdd(12));
console.log(newAdd(12));
console.log(newAdd(14));
console.log(newAdd(14));
