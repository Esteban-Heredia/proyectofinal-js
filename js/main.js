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


// let Nturno = prompt ("A nombre de quien te gustaria reservar el turno?");

// console.log ("El turno de " + Nturno + " fue agendado con exito");

// let costoturn = parseInt(prompt("¿Cuanto te costo el turno?"));
// const costoapp = 150;
// let costofinal = 0;

// function sumacosto (costoturn,costoapp){
//     costofinal = costoturn + costoapp;
// } 

// sumacosto (costoturn, costoapp)

// console.log ("El costo total del turno seria " + costofinal)

// sigo comentando codigo para cuando junte todo en la segunda entrega final que mas o menos ya le voy viendo como combiar todo gracias a los arrays 

let Nturno = prompt ("A nombre de quien te gustaria reservar el turno?");
let Hturno = prompt ("En que hoario te gustaria el turno?");

const InfoTurno = [Nturno + " " + Hturno];
const TurnosDisp = [];

console.log ("Eturno de " + InfoTurno + " fue agendado con exito");

TurnosDisp.push(InfoTurno);

console.log (TurnosDisp);

//lo que no se me ocurre como puede ser como darle un espacio definido al array, onda de los 30 dias del calendario 24 estan disponibles y una vez que el usuario haya elegido quede cargado ya ese arrays y todos los demas libres... o sino crear 24 arrays con id para que cuando selecione une ya quede cargado ese arrays con todos los datos. nose si me explico.