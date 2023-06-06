function filter (arr, dataType) {
const dataTypes = ["number", "bigint", "boolean", "string", "undefined", "function", "object", "symbol"]

    if (arguments.length < 1 || !Array.isArray(arr)) {
        return "функции переданы не корректные аргументы"
    } 
    else if (arguments.length === 1 && Array.isArray(arr)) { 
        return arr;
    }    
    else if (!dataTypes.find((el) => el === dataType)) {
        return "функции переданы не корректные аргументы"} 
    else {
        return arr.filter (el => typeof el !== dataType)
    }
}

let arr2 = [1, 2, "text1", true, null, {}, function(){}, 1n, "text2", false, NaN];

console.log(filter(arr2));
console.log(filter(arr2, "string"));
console.log(filter(arr2, "number"));
console.log(filter(arr2, "boolean"));
console.log(filter(arr2, "object"));

