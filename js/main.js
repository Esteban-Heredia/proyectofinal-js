// let nombres = parseInt ( prompt ("Cuantas personas son?"));
// let num = 0;

// for (let num = 1; num <= nombres ; num = num + 1) {
//     console.log (num)
    
// }

// let personas = prompt ("ingresa los nombres");

// while (personas != "salir") {
//     console.log ("el nombre ingresado es " + personas);

//     personas = prompt("ingresa los nombres o poner salir del programa escribir salir")
// }

//dejo comentado esto para cuando este mas avanzado use todo


let Nturno = prompt ("A nombre de quien te gustaria reservar el turno?");

console.log ("El turno de " + Nturno + " fue agendado con exito");

let costoturn = parseInt(prompt("¿Cuanto te costo el turno?"));
const costoapp = 150;
let costofinal = 0;

function sumacosto (costoturn,costoapp){
    costofinal = costoturn + costoapp;
} 

sumacosto (costoturn, costoapp)

console.log ("El costo total del turno seria " + costofinal)

 