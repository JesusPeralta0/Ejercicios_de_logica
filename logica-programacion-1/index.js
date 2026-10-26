const resultado = document.getElementById("resultado");

// Convierte el texto del prompt a número (NaN si es inválido, vacío o cancelado)
function convertir(texto) {
  if (texto === null || texto.trim() === "") {
    return NaN;
  }
  return Number(texto);
}

// Muestra un mensaje por consola y por el DOM
function mostrar(mensaje) {
  console.log(mensaje);
  resultado.innerHTML += "<p>" + mensaje + "</p>";
}

// 1. Solicitar y convertir los números
const numero1 = convertir(prompt("Ingrese el primer número:"));
const numero2 = convertir(prompt("Ingrese el segundo número:"));
const numero3 = convertir(prompt("Ingrese el tercer número:"));

// 2. Validar
if (isNaN(numero1) || isNaN(numero2) || isNaN(numero3)) {
  mostrar("Error: debe ingresar solo números válidos.");

// 3. Los tres números son iguales
} else if (numero1 === numero2 && numero2 === numero3) {
  mostrar("Los números son iguales: " + numero1 + ", " + numero2 + ", " + numero3);

// 4. Analizar las combinaciones
} else {
  let mayor, centro, menor;

  if (numero1 >= numero2 && numero2 >= numero3) {
    mayor = numero1; centro = numero2; menor = numero3;
  } else if (numero1 >= numero3 && numero3 >= numero2) {
    mayor = numero1; centro = numero3; menor = numero2;
  } else if (numero2 >= numero1 && numero1 >= numero3) {
    mayor = numero2; centro = numero1; menor = numero3;
  } else if (numero2 >= numero3 && numero3 >= numero1) {
    mayor = numero2; centro = numero3; menor = numero1;
  } else if (numero3 >= numero1 && numero1 >= numero2) {
    mayor = numero3; centro = numero1; menor = numero2;
  } else {
    mayor = numero3; centro = numero2; menor = numero1;
  }

  // 5. Mostrar resultados
  mostrar("Número mayor: " + mayor);
  mostrar("Número del centro: " + centro);
  mostrar("Número menor: " + menor);
  mostrar("De mayor a menor: " + mayor + ", " + centro + ", " + menor);
  mostrar("De menor a mayor: " + menor + ", " + centro + ", " + mayor);
}