let array = [10, 43, 29, 15, 8, 16, 22];
function obtenerPares(array) {
    let pares = [];
    for (i = 0; i < array.length; i++) {
        if (array[i] % 2 === 0) {
            pares.push(array[i]);
        }
    }
    return pares;
}
console.log(obtenerPares(array));