function generarNumeroAleatorio() {
    let num
    num = Math.random() * 100
    return Math.floor(num);
}
console.log(generarNumeroAleatorio())