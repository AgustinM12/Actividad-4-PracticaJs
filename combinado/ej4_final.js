let cantidadProductos = [];
let precio;

do {
    precio = prompt("Ingrese el precio del producto (o escriba 'total' para finalizar):");
    if (precio !== "total") {
        cantidadProductos.push(Number(precio));
    }
} while (precio !== "total");


function valorTotal(cantidadProductos) {
    let totalPrecio = 0;
    for (let i = 0; i < cantidadProductos.length; i++) {
        totalPrecio = totalPrecio + cantidadProductos[i];
    }
    return "El total a pagar es de: " + totalPrecio
}
console.log(valorTotal(cantidadProductos));