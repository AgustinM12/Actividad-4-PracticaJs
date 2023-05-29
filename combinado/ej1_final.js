let num = prompt("Ingrese un numero:");
let numero = Number(num);
function tipoNum(numero) {
    if (numero > 0) {
        return "El numero es positivo";
    } else if (numero < 0) {
        return "El numero es negativo";
    } else {
        return "El numero es 0";
    }
}
console.log(tipoNum(numero))