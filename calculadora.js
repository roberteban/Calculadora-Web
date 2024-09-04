// Función para mostrar el resultado en el campo de texto correspondiente
function mostrarResultado(resultado) {
    document.getElementById("resultado").value = resultado;
}

// Función para obtener el valor de un campo de entrada y convertirlo a número
function obtenerValor(idCampo) {
    let valor = document.getElementById(idCampo).value;
    // Devuelve el valor convertido a número o NaN si el campo está vacío
    return valor ? parseFloat(valor) : NaN;
}

// Función para validar que todas las entradas son números válidos
function validarEntrada(...numeros) {
    for (let numero of numeros) {
        if (isNaN(numero)) {  // Verifica si el valor no es un número
            alert("Por favor ingrese números válidos.");
            return false;
        }
    }
    return true;  // Retorna true si todas las entradas son válidas
}

// Función para realizar la suma de dos números
function suma() {
    let numero1 = obtenerValor("campo1");
    let numero2 = obtenerValor("campo2");
    if (validarEntrada(numero1, numero2)) {  // Valida las entradas antes de proceder
        mostrarResultado(numero1 + numero2);
    }
}

// Función para realizar la resta de dos números
function resta() {
    let numero1 = obtenerValor("campo1");
    let numero2 = obtenerValor("campo2");
    if (validarEntrada(numero1, numero2)) {
        mostrarResultado(numero1 - numero2);
    }
}

// Función para multiplicar dos números
function multiplicacion() {
    let numero1 = obtenerValor("campo1");
    let numero2 = obtenerValor("campo2");
    if (validarEntrada(numero1, numero2)) {
        mostrarResultado(numero1 * numero2);
    }
}

// Función para dividir dos números, con verificación de división por cero
function division() {
    let numero1 = obtenerValor("campo1");
    let numero2 = obtenerValor("campo2");
    if (validarEntrada(numero1, numero2)) {
        if (numero2 === 0) {  // Verifica si el divisor es cero
            alert("No se puede dividir por cero.");
        } else {
            mostrarResultado(numero1 / numero2);
        }
    }
}

// Función para calcular la raíz cuadrada de un número
function raiz() {
    let numero = obtenerValor("campo2");
    if (validarEntrada(numero)) {
        mostrarResultado(Math.sqrt(numero));
    }
}

// Función para calcular la potencia de un número elevado a otro
function potencia() {
    let numero1 = obtenerValor("campo1");
    let numero2 = obtenerValor("campo2");
    if (validarEntrada(numero1, numero2)) {
        mostrarResultado(Math.pow(numero1, numero2));
    }
}

// Función para calcular el valor absoluto de un número
function absoluto() {
    let numero = obtenerValor("campo2");
    if (validarEntrada(numero)) {
        mostrarResultado(Math.abs(numero));
    }
}

// Función para generar un número aleatorio entre dos valores dados
function aleatorio() {
    let minimo = obtenerValor("campo1");
    let maximo = obtenerValor("campo2");
    if (validarEntrada(minimo, maximo) && minimo <= maximo) {  // Verifica que mínimo es menor o igual a máximo
        maximo = maximo + 1;  // Ajusta el máximo para que sea inclusivo
        mostrarResultado(Math.floor(Math.random() * (maximo - minimo) + minimo));
    } else {
        alert("Por favor asegúrese de que el mínimo es menor o igual que el máximo.");
    }
}

// Función para redondear el número al entero más cercano
function redondeo() {
    let resultado = obtenerValor("resultado");
    if (validarEntrada(resultado)) {
        mostrarResultado(Math.round(resultado));
    }
}

// Función para redondear hacia arriba (techo)
function techo() {
    let resultado = obtenerValor("resultado");
    if (validarEntrada(resultado)) {
        mostrarResultado(Math.ceil(resultado));
    }
}

// Función para redondear hacia abajo (piso)
function piso() {
    let resultado = obtenerValor("resultado");
    if (validarEntrada(resultado)) {
        mostrarResultado(Math.floor(resultado));
    }
}
