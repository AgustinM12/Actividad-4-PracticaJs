let cadena = "lol";
function esPalindromo(cadena) {
    let largo;
    largo = cadena.length
    for (i = 0; i < largo / 2;) {
        if (cadena[i] == cadena[largo - 1 - i]) {
            return true;
        } else {
            return false;
        }
    }
}
console.log(esPalindromo(cadena))