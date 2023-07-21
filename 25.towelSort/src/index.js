// You should implement your task here.

module.exports = function towelSort(matrix) {
    if (arguments.length < 1) {
        return [];
    }
    return matrix.reduce((acc, val, i) => {
        i % 2 === 0 ? acc.push(...val) : acc.push(...val.reverse());
        return acc;
    }, []);
};
