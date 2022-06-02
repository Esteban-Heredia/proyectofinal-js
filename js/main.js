let nombres = parseInt ( prompt ("Cuantas personas son?"));
let num = 0;

for (let num = 1; num <= nombres ; num = num + 1) {
    console.log (num)
    
}

let personas = prompt ("ingresa los nombres");

while (personas != "salir") {
    console.log ("el nombre ingresado es " + personas);

    personas = prompt("ingresa los nombres o poner salir del programa escribir salir")
}