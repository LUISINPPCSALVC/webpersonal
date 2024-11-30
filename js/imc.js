function calcularIMC() {
    // Obtener los valores de los inputs
    const peso = parseFloat(document.getElementById("peso").value);
    const estatura = parseFloat(document.getElementById("estatura").value);
    const resultado = document.getElementById("resultado");

    resultado.classList.remove('error', 'normal', 'bajo-peso', 'sobrepeso', 'obesidad');

    // Verificar que ambos valores sean números válidos
    if (isNaN(peso) || isNaN(estatura) || peso <= 0 || estatura <= 0) {
        resultado.textContent = "Por favor ingrese valores válidos.";
        resultado.classList.add('error'); // Agregar la clase de error
        return;
    }

    // Calcular el IMC
    const imc = peso / (estatura * estatura);
    let clasificacion = "";
    let claseColor = "";

    // Determinar la clasificación según el IMC
    if (imc < 18.5) {
        clasificacion = "Bajo peso";
        claseColor = "bajo-peso";
    } else if (imc >= 18.5 && imc < 24.9) {
        clasificacion = "Normal";
        claseColor = "normal";
    } else if (imc >= 25 && imc < 29.9) {
        clasificacion = "Sobrepeso";
        claseColor = "sobrepeso";
    } else {
        clasificacion = "Obesidad";
        claseColor = "obesidad";
    }

    // Mostrar el resultado con el código de colores
    resultado.textContent = `Tu IMC es ${imc.toFixed(2)} - ${clasificacion}`;
    resultado.classList.add(claseColor); // Agregar la clase correspondiente al resultado
}