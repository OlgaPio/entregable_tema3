// proyecto de: Olga Lucia Muñoz Quintero

// Paso 1: Declaración de Variables
let num1 = 10; 
let num2 = 5;
let operacion = "suma"; 

// Paso 2: Función para realizar operaciones
function realizarOperacion(num1, num2, operacion) {
    if (operacion === "suma") {
        return num1 + num2;
    } else if (operacion === "resta") {
        return num1 - num2;
    } else if (operacion === "multiplicacion") {
        return num1 * num2;
    } else if (operacion === "division") {
        if (num2 !== 0) {
            return num1 / num2;
        } else {
            return "Error: No se puede dividir por cero.";
        }
    } else {
        return "Error: Operación no válida.";
    }
}

// Paso 4: Bucle para realizar múltiples operaciones
while (true) {
    operacion = prompt("Ingrese la operación a realizar (suma, resta, multiplicacion, division) o 'salir' para terminar:");

    if (operacion.toLowerCase() === "salir") {
        console.log("Gracias por usar la calculadora. ¡Hasta luego!");
        break;
    }

    num1 = parseFloat(prompt("Ingrese el primer número:"));
    num2 = parseFloat(prompt("Ingrese el segundo número:"));

    let resultado = realizarOperacion(num1, num2, operacion);
    console.log("Resultado:", resultado);
}