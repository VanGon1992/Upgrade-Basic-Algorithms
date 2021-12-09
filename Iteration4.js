// Funcion anonima

/*let sumar = function(a, b) {
    return a + b;
}
let resultado = sumar(3, 2);
console.log(resultado);


// Funcion auto invocada

(function() {
    alert("hola!");
}());


let sum_total = (a, b) => a * b;

console.log(sum_total(4, 6));
*/

function attackPokemonWithParams(name, attack = defaultAttack()) {
    // defaultAttack() solo se ejecuta si attack no fué asignado
    // su resultado se convierte en el valor de texto
    alert(name + attack);
}

function defaultAttack() {
    return "Ataque area"
}
attackPokemonWithParams('perro ', 'latigazo')