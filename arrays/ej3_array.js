const notasString = prompt("Ingrese una lista de notas separadas por comas: ");
const pesosString = prompt("Ingrese una lista de pesos separados por comas: ");
function obtenerPromedioPonderado(notas, pesos) {
    if (notas.length !== pesos.length) {
        throw new Error("Los arreglos deben tener la misma longitud.");
    }

    let sumaNotas = 0;
    let sumaPesos = 0;

    for (let i = 0; i < notas.length; i++) {
        sumaNotas += notas[i] * pesos[i];
        sumaPesos += pesos[i];
    }

    const promedioPonderado = sumaNotas / sumaPesos;
    return promedioPonderado;
}
const notas = notasString.split(",").map(nota => parseFloat(nota));
const pesos = pesosString.split(",").map(peso => parseFloat(peso));

console.log("Promedio ponderado:", obtenerPromedioPonderado(notas, pesos));