'use strict'

// Condicional IF
// Un Condicional es una estructura de control
// Si A es igual a B entonces hacer algo
// Nos permiten comparar 

// Ejemplo if y else con edades
//    var edad1 = 10;
//    var edad2 = 12;
//
//  // Si pasa esto
//    if (edad1 > edad2){
//            // Ejecuta esto
//            console.log("Edad1 es mayor que Edad2");
//
//    }else{
//        console.log("La Edad1 es inferior");
//    }   

/*
// Operadores Relacionales
Mayor: >
Menor: <
Mayor o igual: >=
Menor o igual: <=
Igual: ==
Diferente: !=

*/

var edad = 19;
var nombre = "David Suarez";

if (edad >= 18){
    // Es mayor de edad
    console.log(nombre+" tiene "+edad+" años, es mayor de edad");

    if(edad <= 33){
        console.log('Todavia eres millenial');
    }else if(edad >= 70){
        console.log('Eres anciano');
    }else{
        console.log('Ya no eres millenial');
    }
}else{
   // Es menor de edad
   console.log(nombre+" tiene "+edad+" años, es menor de edad");
}

 
/* 
// Operadores Logicos de 
AND(Y): && 
OR (O): ||
Negacion: !   
*/ 

// Negacion
var year = 2028;
if (year != 2016){
    console.log("El año no es 2016 realmente es: " + year);
}

// AND 
if (year >= 2000 && year <= 2020 && year != 2018){
    console.log("Estamos en la era actual");
}else{
    console.log("Estamos en la era post moderna");
}    
    
//OR 
if(year == 2008 || (year >= 2018 && year == 2028)){
    console.log("El año acaba en 8");   
}else{
    console.log("AÑO NO REGISTRADO"); 
}