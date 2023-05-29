let numero = prompt("Ingrese un numero:")
let num = Number(numero)
function primo(num) {
    let cPrimo = 0
    for (i = 0; i < num + 1; i++) {
        if (num % i == 0) {
            cPrimo = cPrimo + 1
        }
    }
    if (cPrimo == 2) {
        return "El numero es primo";
    } else {
        return "El numero NO es primo";
    }
}
console.log(primo(num))