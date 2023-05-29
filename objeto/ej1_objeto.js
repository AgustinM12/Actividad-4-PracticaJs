let producto = {
    nombre: "manzana",
    cantidad: 4,
    precio: 80
}
function calcularTotal(producto) {
    return producto.cantidad * producto.precio
}
console.log("La cantidad a pagar por el producto " + producto.nombre + " es de: " + calcularTotal(producto))