function convertirTemperatura() {
    const inputTemp = parseFloat(document.getElementById("input-temp").value);
    const inputScale = document.getElementById("input-scale").value;
    const outputScale = document.getElementById("output-scale").value;
    const resultadoo = document.getElementById("resultadoo");

    // Limpiar resultado previo
    resultado.classList.remove('error', 'cel', 'far', 'kel', 'ran');

    // Validar entrada
    if (isNaN(inputTemp)) {
        resultadoo.textContent = "Por favor ingrese un valor válido.";
        resultadoo.classList.add('error');
        return;
    }

    // Convertir la temperatura a Celsius como punto intermedio
    let tempCelsius;
    switch (inputScale) {
        case 'C':
            tempCelsius = inputTemp;
            break;
        case 'F':
            tempCelsius = (inputTemp - 32) * 5 / 9;
            break;
        case 'K':
            tempCelsius = inputTemp - 273.15;
            break;
        case 'R':
            tempCelsius = (inputTemp - 491.67) * 5 / 9;
            break;
        default:
            tempCelsius = 0;
    }

    // Convertir de Celsius a la escala de salida deseada
    let tempFinal;
    let clasificacion = "";
    let claseColor = "";

    switch (outputScale) {
        case 'C':
            tempFinal = tempCelsius;
            clasificacion = "Cel";
            claseColor = "cel";
            break;
        case 'F':
            tempFinal = (tempCelsius * 9 / 5) + 32; clasificacion = "Far";
            claseColor = "far";
            break;
        case 'K':
            tempFinal = tempCelsius + 273.15;
            clasificacion = "Kel";
            claseColor = "kel";
            break;
        case 'R':
            tempFinal = (tempCelsius * 9 / 5) + 491.67;
            clasificacion = "Ran";
            claseColor = "ran";
            break;
        default:
            tempFinal = 0;
    }

    // Mostrar resultado
    resultadoo.textContent = `La temperatura convertida es: ${tempFinal.toFixed(2)} °${outputScale}`;
    resultadoo.classList.add(claseColor); // Agregar la clase correspondiente al resultado
}
