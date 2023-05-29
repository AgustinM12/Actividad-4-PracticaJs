let num = prompt("Ingrese los grados que desee convertir:");
let unidad = prompt("Ingrese la unidad a la que la desee convertir: 1=Celsius, 2=Faranheit");
num = Number(num);
function convertirGrados(num, unidad) {
    if (unidad == 1) {
        return "Se convertiran " + num + "° Celsius a Faranheit, siendo " + (num * (9 / 5) + 32) + "° el resultado.";
    } else if (unidad == 2) {
        return "Se convertiran " + num + "° Faranheit a Celsius, siendo " + (num - 32) * (5 / 9) + "° el resultado.";
    }
}
console.log(convertirGrados(num, unidad));