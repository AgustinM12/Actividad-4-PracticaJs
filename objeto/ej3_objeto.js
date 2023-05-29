let persona = {
    edad: 33
}
function esMayorEdad(persona) {
    if (persona.edad >= 18) {
        return true;
    } else {
        return false;
    }
}
console.log(esMayorEdad(persona))