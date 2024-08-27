//ejercicio 1 Contar el número de caracteres de una cadena de texto
function contarCaracteres(cadena) {
    return cadena.length;
  }
  
  console.log(contarCaracteres("Hola Mundo")); // 10

//ejercicio 2 Recortar el texto según el número de caracteres indicados
  function recortarTexto(cadena, longitud) {
    return cadena.slice(0, longitud);
  }
  
  console.log(recortarTexto("Hola Mundo", 4)); // "Hola"

//ejercicio 3 Convertir una cadena en un array de textos separados por un carácter específico
  function convertirACadena(cadena, separador) {
    return cadena.split(separador);
  }
  
  console.log(convertirACadena('hola que tal', ' ')); // ['hola', 'que', 'tal']
  
//ejercicio 4 Repetir un texto X veces
function repetirTexto(texto, veces) {
    return texto.repeat(veces);
  }
  
  console.log(repetirTexto('Hola Mundo ', 3)); // "Hola Mundo Hola Mundo Hola Mundo "
  
//ejercicio 5 Invertir las palabras de una cadena de texto
  function invertirTexto(cadena) {
    return cadena.split('').reverse().join('');
  }
  
  console.log(invertirTexto("Hola Mundo")); // "odnuM aloH"

//ejercicio 6 Contar el número de veces que se repite una palabra en un texto largo
function contarPalabra(texto, palabra) {
    const regex = new RegExp(`\\b${palabra}\\b`, 'gi');
    return (texto.match(regex) || []).length;
  }
  
  console.log(contarPalabra("hola mundo adios mundo", "mundo")); // 2

//ejercicio 7 Validar si una palabra o frase es un palíndromo
function esPalindromo(texto) {
    const textoLimpio = texto.toLowerCase().replace(/[\W_]/g, '');
    const textoInvertido = textoLimpio.split('').reverse().join('');
    return textoLimpio === textoInvertido;
  }
  
  console.log(esPalindromo("Salas")); // true

//ejercicio 8 Eliminar cierto patrón de caracteres de un texto dado
function eliminarPatron(texto, patron) {
    const regex = new RegExp(patron, 'g');
    return texto.replace(regex, '').trim();
  }
  
  console.log(eliminarPatron("xyz1, xyz2, xyz3, xyz4 y xyz5", "xyz")); // "1, 2, 3, 4 y 5"
  
//ejercicio 9 Obtener un número aleatorio entre 501 y 600
function numeroAleatorioEntre501y600() {
    return Math.floor(Math.random() * 100) + 501;
  }
  
  console.log(numeroAleatorioEntre501y600()); // Un número aleatorio entre 501 y 600
  
  
//ejercicio 10 Evaluar si un número es capicúa
function esCapicua(numero) {
    const numeroStr = numero.toString();
    const numeroInvertido = numeroStr.split('').reverse().join('');
    return numeroStr === numeroInvertido;
  }
  
  console.log(esCapicua(2002)); // true
  
//ejercicio 11 Calcular el factorial de un número
function factorial(n) {
    if (n < 0) return undefined;
    if (n === 0 || n === 1) return 1;
    let resultado = 1;
    for (let i = n; i > 1; i--) {
      resultado *= i;
    }
    return resultado;
  }
  
  console.log(factorial(5)); // 120

//ejercicio 12 Determinar si un número es primo
  function esPrimo(numero) {
    if (numero <= 1) return false;
    for (let i = 2; i <= Math.sqrt(numero); i++) {
      if (numero % i === 0) return false;
    }
    return true;
  }
  
  console.log(esPrimo(7)); // true
  
//ejercicio 13 Determinar si un número es par o impar
  function esParOImpar(numero) {
    return numero % 2 === 0 ? "Par" : "Impar";
  }
  
  console.log(esParOImpar(29)); // "Impar"
  
//ejercicio 14 Convertir grados Celsius a Fahrenheit y viceversa
function convertirGrados(grados, tipo) {
    if (tipo === "C") {
      return `${(grados * 9/5) + 32}°F`;
    } else if (tipo === "F") {
      return `${((grados - 32) * 5/9)}°C`;
    } else {
      return "Tipo de conversión no válido";
    }
  }
  
  console.log(convertirGrados(0, "C")); // "32°F"

//ejercicio 15 Convertir números de base binaria a decimal y viceversa
  function convertirBase(numero, base) {
    if (base === 2) {
      return parseInt(numero, 2);
    } else if (base === 10) {
      return numero.toString(2);
    } else {
      return "Base no soportada";
    }
  }
  
  console.log(convertirBase(100, 2)); // 4
  
//ejercicio 16 Calcular el monto final después de aplicar un descuento
function aplicarDescuento(monto, descuento) {
    return monto - (monto * (descuento / 100));
  }
  
  console.log(aplicarDescuento(1000, 20)); // 800

//ejercicio 17 Calcular los años transcurridos desde una fecha dada
  function calcularAnios(fecha) {
    const hoy = new Date();
    const anioActual = hoy.getFullYear();
    const anioFecha = fecha.getFullYear();
    let diferencia = anioActual - anioFecha;
    if (hoy.getMonth() < fecha.getMonth() || (hoy.getMonth() === fecha.getMonth() && hoy.getDate() < fecha.getDate())) {
      diferencia--;
    }
    return diferencia;
  }
  
  console.log(calcularAnios(new Date(1984, 4, 23))); // Calcula la diferencia en años
  
//ejercicio 18 Contar el número de vocales y consonantes en un texto
function contarVocalesConsonantes(texto) {
    let vocales = 0;
    let consonantes = 0;
    const textoLimpio = texto.toLowerCase().replace(/[^a-z]/g, '');
    for (let letra of textoLimpio) {
      if ('aeiou'.includes(letra)) {
        vocales++;
      } else {
        consonantes++;
      }
    }
    return { vocales, consonantes };
  }
  
  console.log(contarVocalesConsonantes("Hola Mundo")); // { vocales: 4, consonantes: 5 }

//ejercicio 19 Validar que un texto sea un nombre válido
function esNombreValido(nombre) {
    const regex = /^[A-Za-zÁÉÍÓÚáéíóúñÑ ]+$/;
    return regex.test(nombre);
  }
  
  console.log(esNombreValido("Jonathan MirCha")); // true

//ejercicio 20 Validar que un texto sea un email válido
function esEmailValido(email) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  }
  
  console.log(esEmailValido("jonmircha@gmail.com")); // true

//ejercicio 21 Elevar los números de un array al cuadrado
function elevarAlCuadrado(array) {
    return array.map(numero => numero ** 2);
  }
  
  console.log(elevarAlCuadrado([1, 4, 5])); // [1, 16, 25]

//ejercicio 22 Obtener el número más alto y más bajo de un array
  function numeroMasAltoYMasBajo(array) {
    const maximo = Math.max(...array);
    const minimo = Math.min(...array);
    return [maximo, minimo];
  }
  
  console.log(numeroMasAltoYMasBajo([1, 4, 5, 99, -60])); // [99, -60]
  
//ejercicio 23 Separar números pares e impares en un objeto
function separarParesImpares(array) {
    const pares = array.filter(numero => numero % 2 === 0);
    const impares = array.filter(numero => numero % 2 !== 0);
    return { pares, impares };
  }
  
  console.log(separarParesImpares([1,2,3,4,5,6,7,8,9,0])); // { pares: [2,4,6,8,0], impares: [1,3,5,7,9] }

//ejercicio 24 Ordenar un array en forma ascendente y descendiente
function ordenarArray(array) {
    const asc = [...array].sort((a, b) => a - b);
    const desc = [...array].sort((a, b) => b - a);
    return { asc, desc };
  }
  
  console.log(ordenarArray([7, 5, 7, 8, 6])); // { asc: [5,6,7,7,8], desc: [8,7,7,6,5] }

//ejercicio 25 Eliminar duplicados de un array
function eliminarDuplicados(array) {
    return [...new Set(array)];
  }
  
  console.log(eliminarDuplicados(["x", 10, "x", 2, "10", 10, true, true])); // ["x", 10, 2, "10", true]

//ejercicio 26 Calcular el promedio de un array de números
function calcularPromedio(array) {
    const suma = array.reduce((acc, num) => acc + num, 0);
    return suma / array.length;
  }
  
  console.log(calcularPromedio([9,8,7,6,5,4,3,2,1,0])); // 4.5  