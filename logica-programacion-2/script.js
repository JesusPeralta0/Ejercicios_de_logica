// ---------- Pseudocódigo ----------
// INICIO
//   REPETIR
//     pedir temperatura en °C
//     SI el usuario cancela -> terminar programa
//     convertir el texto a número
//     SI no es un número válido -> mostrar error
//   HASTA que sea un número válido
//   fahrenheit = celsius * 9/5 + 32
//   kelvin = celsius + 273.15
//   mostrar resultados por consola y por el DOM
// FIN

// Convierte de Celsius a Fahrenheit
function celsiusAFahrenheit(celsius) {
  return (celsius * 9) / 5 + 32;
}

// Convierte de Celsius a Kelvin
function celsiusAKelvin(celsius) {
  return celsius + 273.15;
}

// Redondea para evitar errores de punto flotante (ej. 318.15000000000003)
function redondear(valor) {
  return Math.round(valor * 100) / 100;
}

// Valida que el texto ingresado sea un número
function esNumeroValido(texto) {
  if (texto === null) return false;
  const limpio = texto.trim();
  if (limpio === "") return false;
  const numero = Number(limpio);
  return typeof numero === "number" && Number.isFinite(numero);
}

// Solicita la temperatura hasta que el dato sea válido
function solicitarTemperatura() {
  let mensaje = "Ingresa la temperatura en grados Celsius:";

  while (true) {
    const entrada = prompt(mensaje);

    // El usuario presionó "Cancelar"
    if (entrada === null) return null;

    if (esNumeroValido(entrada)) {
      return Number(entrada.trim());
    }

    // Dato inválido: mostrar error y volver a solicitar
    alert("Error: debes ingresar un valor numérico.");
    console.error(`Entrada inválida: "${entrada}"`);
    mensaje = "Dato inválido. Ingresa un número (ej. 25 o -3.5):";
  }
}

// Programa principal
function main() {
  const celsius = solicitarTemperatura();
  const resultado = document.getElementById("resultado");

  if (celsius === null) {
    console.log("Operación cancelada por el usuario.");
    resultado.textContent = "Operación cancelada.";
    return;
  }

  const kelvin = redondear(celsiusAKelvin(celsius));
  const fahrenheit = redondear(celsiusAFahrenheit(celsius));

  // Salida por consola
  console.log(`Entrada: ${celsius} °C`);
  console.log(`Grados Kelvin: ${kelvin}`);
  console.log(`Grados Fahrenheit: ${fahrenheit}`);

  // Salida por el DOM
  resultado.innerHTML = `
    <p><strong>Entrada:</strong> ${celsius} °C</p>
    <p><strong>Grados Kelvin:</strong> ${kelvin}</p>
    <p><strong>Grados Fahrenheit:</strong> ${fahrenheit}</p>
  `;
}

// Se ejecuta al cargar la página y al presionar el botón
document.getElementById("btn").addEventListener("click", main);
main();
