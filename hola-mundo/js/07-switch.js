'use strict';

// Switch

var edad = 40;
var imprime = "";

switch (edad){
    case 18: 
        imprime = "Ha cumplido la mayoria de edad";
    break;
    case 25:
        imprime = "Ya eres un adulto";
    break;
    case 40:
        imprime = "Crisis de los 40";
    break;
    case 75:
        imprime = "Eres ya un anciano";
        break; 
    default:
        imprime = "Tu edad es neutral";
        break;               

}

console.log(edad);
console.log(imprime);