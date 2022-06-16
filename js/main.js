let Nturno = prompt ("A nombre de quien te gustaria reservar el turno?");

let TurnosDisp = [{dia: "lunes", id: 1 },{dia: "martes" , id: 2 },{dia: "miercoles" , id: 3 },{dia: "jueves", id: 4 },{dia: "viernes" , id: 5}];

let Hturno = [];

while (Nturno != "salir") {
    
    TurnosDisp = prompt ("¿De lunes a viernes que dia te gustaria el turno?")

    Hturno = prompt ("¿En que hoario te gustaria el turno?")

    let costoturn = parseInt(prompt("¿Cuanto te costo el turno?"));
    
    // funcion para el costo del turno
    function sumacosto (costoturn,costoapp){
        costofinal = costoturn + costoapp;
    }

    let costofinal = 0;
    const costoapp = 150;
    
    sumacosto (costoturn, costoapp)
    
    console.log ( "Turno para: " + Nturno);
    console.log ( "Dia: " + TurnosDisp);
    console.log ( "Hora: " + Hturno);
    console.log ( "Costo total: " + costofinal)
    
    alert ("Guardado con exito el turno de " + Nturno + " el dia " + TurnosDisp + "a la hora " + Hturno + " Muchas gracias!")
    
    Nturno = prompt("Una vez registrado el turno escribir salir")
}

// const DiaTurno = [];

// let Hturno = prompt ("En que hoario te gustaria el turno?");

// const InfoTurno = [Nturno + " a las " + Hturno];

// console.log ("El turno de " + InfoTurno + " fue agendado con exito");

// TurnosDisp.push(InfoTurno);

// console.log (TurnosDisp);




// let entrada = prompt ("En que horario te gustaria el turno: 1- Mañana 2- Siesta 3- Tarde") ;
// while (entrada != "esc") {
//     switch (entrada) {
//         case "1":
//             alert("Mañana");
//             break;
//         case "2":
//             alert("Siesta");
//             break;
//         case "3":
//             alert("Tarde");
//             break;
//         default:
//             alert ("error");
//             break;
//     entrada = prompt ("seleciones producto del 1 al 4")
//     }
// }