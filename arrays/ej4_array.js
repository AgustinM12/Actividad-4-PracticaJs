let array = [5, 8, 22, 12, 33, 20, 9];
function mayorNum(array) {
    let mayor = 0;
    for (i = 0; i < array.length; i++) {
        if (array[i] > mayor) {
            mayor = array[i];
        }
    }
    return mayor;
}
console.log(mayorNum(array))