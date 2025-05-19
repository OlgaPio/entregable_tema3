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