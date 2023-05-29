let persona = {
    nombre: "Nikola Tesla",
    edad: 32,
    profesion: "ingeniero"
}
function presentarPersona(persona) {
    return "Hola! mi nombre es, " + persona.nombre + " tengo " + persona.edad + " años y soy un gran " + persona.profesion;
}
console.log(presentarPersona(persona))