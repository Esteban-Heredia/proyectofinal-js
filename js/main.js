let Nturno = [];
let TurnosDisp = [];
let Hturno = [];

const boton = document.querySelector(".boton");

boton.addEventListener("click",()=>{
    while (Nturno != "salir") {
        
        Nturno = prompt ("A nombre de quien te gustaria reservar el turno?");

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
        
        document.body.append ( " Guardado con exito el turno de " + Nturno + " el dia " + TurnosDisp + "a la hora " + Hturno + " Muchas gracias!")
        
        Nturno = prompt("Una vez registrado el turno escribir salir")
    }

});