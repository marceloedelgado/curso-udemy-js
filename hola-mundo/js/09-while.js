'use strict'

// Bucle while

var year = 2018;

while (year != 1991) {
//while (year <= 2051) {
    // ejecuta esto
    console.log("Estamos en el año: " +year);
    if (year == 2000) {
        break;
    }
   // year++;
   year--;
}

// Do While Loop

var years = 30;

    do {
        alert("SOLO CUANDO SEA DIFERENTE A 20");
            years--;
    }while (years > 25)