'use strict'
//PRUEBAS CON LET y VAR

// Prueba con var
var numero = 40;
console.log(numero); // valor 40

if(true) {
    var numero = 50;
    console.log(numero); // valor 50
}

console.log(numero); // valor 50

// Prueba con Let
var texto = "Curso JS UDEMY"
console.log(texto); // Valor es ""

if (true) {
    let texto = "Curso Laravel 5 UDEMY"
    console.log(texto); // Valor es laravel 5
}

console.log(texto); // Valor es JS
