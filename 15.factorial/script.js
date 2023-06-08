let number = prompt("enter a number");
while (!number || isNaN(number)) {
    number = prompt("enter a number");
}

function factorial(num) {
    if (num <= 1) {
        return (num = 1);
    } else if (num > 1 && num < 22) {
        return num * factorial(num - 1);
    } else {
        return longFactorial(num);
    }
}

function longFactorial(number) {
    number = BigInt(number);
    let factorial = 1n;
    for (let i = 0n; i < number; i++) {
        factorial *= number - i;
    }
    return factorial;
}

alert(factorial(number));

//////////////////////// ver 2 //////////////////////

function fctrl(num) {
    let result = 1;
    for (let i = 1; i <= num; i += 1) {
        result *= i;
    }
    return result;
}

console.log(fctrl(5)); // 120;
console.log(fctrl(6)); // 720;

///////////// ver3 ////////////////

const fctrlRec = (num) => (num <= 1 ? 1 : num * fctrlRec(num - 1));
console.log(fctrlRec(5)); // 120
