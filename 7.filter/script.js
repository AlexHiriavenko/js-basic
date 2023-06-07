let testArr = [1, 2, "text1", true, null, {}, function () {}, 1n, "text2", false, NaN];

function filter(arr, dataType) {
    const dataTypes = [
        "number",
        "bigint",
        "boolean",
        "string",
        "undefined",
        "function",
        "object",
        "symbol",
    ];

    if (arguments.length < 1 || !Array.isArray(arr)) {
        // если не массив - ошибка
        return "функции переданы не корректные аргументы";
    } else if (arguments.length === 1 && Array.isArray(arr)) {
        // если 2й атрибут не передан - вернуть оригинальный массив
        return arr;
    } else if (!dataTypes.includes(dataType)) {
        // функции должен приходить существующий в js тип данных
        return "функции переданы не корректные аргументы";
    } else {
        return arr.filter((el) => typeof el !== dataType); // фильтр - все кроме указанного типа данных
    }
}

console.log(filter(testArr));
console.log(filter(testArr, "string"));
console.log(filter(testArr, "number"));
console.log(filter(testArr, "boolean"));
console.log(filter(testArr, "object"));
console.log(filter([4], "number"));
