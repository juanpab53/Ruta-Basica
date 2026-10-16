/**
 * @fileoverview Solución a los ejercicios de Nivel Bajo en JavaScript (Condicionales y Ciclos).
 * Contiene la lógica de cada ejercicio y la navegación del menú interactivo por consola.
 */

const readline = require('readline/promises');
const { stdin: input, stdout: output } = require('process');

// LÓGICA DE NEGOCIO DE LOS EJERCICIOS

/**
 * Clasifica una temperatura dada en grados Celsius y retorna una recomendación adecuada.
 *
 * @param {number} temperaturaEnGradosCelsius - Valor numérico de la temperatura a evaluar.
 * @returns {string} Mensaje con la recomendación o mensaje de error si el valor no es un número.
 */
function clasificarTemperatura(temperaturaEnGradosCelsius) {
    if (isNaN(temperaturaEnGradosCelsius)) {
        return "Error: El valor ingresado no es un número válido.";
    }

    if (temperaturaEnGradosCelsius < 10) {
        return "Hace frío, lleva chaqueta";
    } else if (temperaturaEnGradosCelsius <= 24) {
        return "Clima templado";
    } else {
        return "Hace calor, hidrátate";
    }
}

/**
 * Calcula el cobro total del parqueadero aplicando tarifas por horas y descuento para coders.
 *
 * @param {number} cantidadDeHorasParqueadero - Cantidad de horas que permaneció el vehículo.
 * @param {boolean} esUsuarioEstudianteCoder - Indica si el usuario pertenece a la comunidad Coder para aplicar descuento.
 * @returns {string} Texto formateado con el total a pagar o mensaje de error en caso de horas no válidas.
 */
function calcularParqueadero(cantidadDeHorasParqueadero, esUsuarioEstudianteCoder) {
    if (isNaN(cantidadDeHorasParqueadero) || cantidadDeHorasParqueadero <= 0) {
        return "Error: El número de horas ingresado no es válido.";
    }

    let tarifaTotalAPagar = 0;
    if (cantidadDeHorasParqueadero === 1) {
        tarifaTotalAPagar = 3000;
    } else {
        tarifaTotalAPagar = 3000 + (cantidadDeHorasParqueadero - 1) * 2000;
    }

    if (tarifaTotalAPagar > 20000) {
        tarifaTotalAPagar = 20000;
    }

    if (esUsuarioEstudianteCoder) {
        tarifaTotalAPagar = tarifaTotalAPagar * 0.85;
    }

    return `El total a pagar es: $${tarifaTotalAPagar.toLocaleString('es-CO')}`;
}

/**
 * Genera una secuencia numérica descendente desde N hasta 1 finalizando con un despegue.
 *
 * @param {number} numeroInicialCuentaRegresiva - Número entero inicial desde el cual iniciar la cuenta regresiva.
 * @returns {string} Cadena de texto formateada con la cuenta regresiva o mensaje de error si el número es inválido.
 */
function generarCuentaRegresiva(numeroInicialCuentaRegresiva) {
    if (isNaN(numeroInicialCuentaRegresiva) || numeroInicialCuentaRegresiva <= 0) {
        return "Número no válido";
    }

    let textoResultadoCuentaRegresiva = "";
    for (let numeroContadorActual = numeroInicialCuentaRegresiva; numeroContadorActual >= 1; numeroContadorActual--) {
        textoResultadoCuentaRegresiva += numeroContadorActual + "\n";
    }
    textoResultadoCuentaRegresiva += "¡Despegue!";
    return textoResultadoCuentaRegresiva;
}

/**
 * Genera la secuencia del juego RiwiCoder (FizzBuzz) desde 1 hasta el número límite ingresado.
 *
 * @param {number} numeroLimiteDeIteracion - Número entero límite superior de la secuencia.
 * @returns {string} Cadena de texto con las sustituciones de "Riwi", "Coder" o "RiwiCoder".
 */
function ejecutarRiwiCoder(numeroLimiteDeIteracion) {
    if (isNaN(numeroLimiteDeIteracion) || numeroLimiteDeIteracion <= 0) {
        return "Número no válido";
    }

    let cadenaTextoResultadoRiwiCoder = "";
    for (let numeroSecuenciaActual = 1; numeroSecuenciaActual <= numeroLimiteDeIteracion; numeroSecuenciaActual++) {
        if (numeroSecuenciaActual % 3 === 0 && numeroSecuenciaActual % 5 === 0) {
            cadenaTextoResultadoRiwiCoder += "RiwiCoder\n";
        } else if (numeroSecuenciaActual % 3 === 0) {
            cadenaTextoResultadoRiwiCoder += "Riwi\n";
        } else if (numeroSecuenciaActual % 5 === 0) {
            cadenaTextoResultadoRiwiCoder += "Coder\n";
        } else {
            cadenaTextoResultadoRiwiCoder += numeroSecuenciaActual + "\n";
        }
    }
    return cadenaTextoResultadoRiwiCoder.trimEnd();
}

/**
 * Compara un número intentado por el usuario con respecto al número secreto para indicar la relación entre ellos.
 *
 * @param {number} numeroSecretoOculto - El número definido previamente que se debe adivinar.
 * @param {number} numeroIngresadoPorUsuario - El intento realizado por el usuario.
 * @returns {string} "IGUAL" si coinciden, "MAYOR" si el secreto es mayor, o "MENOR" si el secreto es menor.
 */
function comprobarIntentoAdivinanza(numeroSecretoOculto, numeroIngresadoPorUsuario) {
    if (numeroIngresadoPorUsuario === numeroSecretoOculto) {
        return "IGUAL";
    } else if (numeroSecretoOculto > numeroIngresadoPorUsuario) {
        return "MAYOR";
    } else {
        return "MENOR";
    }
}

/**
 * Evalúa los criterios de seguridad de una contraseña (longitud, presencia de números y letras mayúsculas).
 *
 * @param {string} cadenaTextoContrasena - La contraseña ingresada que será verificada.
 * @returns {string} Mensaje confirmando que es segura o el listado de razones por las cuales no cumple los criterios.
 */
function validarContrasenaSegura(cadenaTextoContrasena) {
    let tieneAlMenosUnNumero = false;
    let tieneAlMenosUnaLetraMayuscula = false;

    // Recorrido carácter por carácter con ciclo for
    for (let indiceCaracterActual = 0; indiceCaracterActual < cadenaTextoContrasena.length; indiceCaracterActual++) {
        let caracterEvaluarActual = cadenaTextoContrasena[indiceCaracterActual];
        if (caracterEvaluarActual >= '0' && caracterEvaluarActual <= '9') {
            tieneAlMenosUnNumero = true;
        } else if (caracterEvaluarActual >= 'A' && caracterEvaluarActual <= 'Z') {
            tieneAlMenosUnaLetraMayuscula = true;
        }
    }

    let listaDeErroresEncontrados = "";
    if (cadenaTextoContrasena.length < 8) {
        listaDeErroresEncontrados += "- Debe tener mínimo 8 caracteres.\n";
    }
    if (!tieneAlMenosUnNumero) {
        listaDeErroresEncontrados += "- Debe contener al menos un número.\n";
    }
    if (!tieneAlMenosUnaLetraMayuscula) {
        listaDeErroresEncontrados += "- Debe contener al menos una letra mayúscula.\n";
    }

    if (listaDeErroresEncontrados === "") {
        return "Contraseña segura";
    } else {
        return "La contraseña no es segura por las siguientes razones:\n" + listaDeErroresEncontrados.trimEnd();
    }
}

// NAVEGACIÓN Y VISTA EN CONSOLA

/**
 * Solicita una entrada de texto en consola al usuario y remueve espacios adicionales al inicio o final.
 *
 * @param {readline.Interface} interfazDeLecturaConsola - Instancia activa de la interfaz readline.
 * @param {string} mensajePrompt - Texto que se le solicitará en pantalla al usuario.
 * @returns {Promise<string>} Texto ingresado por el usuario.
 */
async function solicitarEntradaUsuario(interfazDeLecturaConsola, mensajePrompt = '') {
    const respuestaIngresada = await interfazDeLecturaConsola.question(mensajePrompt);
    return respuestaIngresada.trim();
}

/**
 * Muestra el menú principal de opciones en la consola.
 *
 * @returns {void}
 */
function mostrarMenuOpciones() {
    console.log("\n--- Condicionales y Ciclos - Nivel Bajo ---");
    console.log("1. Clasificador de temperatura");
    console.log("2. Cobro del parqueadero");
    console.log("3. Cuenta regresiva de lanzamiento");
    console.log("4. RiwiCoder");
    console.log("5. Adivina el número");
    console.log("6. Validar una contraseña segura");
    console.log("0. Salir");
    console.log("------------------------------------------");
}

/**
 * Ejecuta la interacción por consola del Ejercicio 1 (Clasificador de temperatura).
 *
 * @param {readline.Interface} interfazDeLecturaConsola - Instancia activa de la interfaz readline.
 * @returns {Promise<void>}
 */
async function ejecutarEjercicioTemperatura(interfazDeLecturaConsola) {
    console.log("\n--- 1. Clasificador de temperatura ---");
    const entradaTemperatura = await solicitarEntradaUsuario(interfazDeLecturaConsola, "Ingrese la temperatura en °C: ");
    const temperaturaEnGradosCelsius = parseFloat(entradaTemperatura);

    const mensajeResultadoTemperatura = clasificarTemperatura(temperaturaEnGradosCelsius);
    console.log("--> Resultado:", mensajeResultadoTemperatura);
}

/**
 * Ejecuta la interacción por consola del Ejercicio 2 (Cobro del parqueadero).
 *
 * @param {readline.Interface} interfazDeLecturaConsola - Instancia activa de la interfaz readline.
 * @returns {Promise<void>}
 */
async function ejecutarEjercicioParqueadero(interfazDeLecturaConsola) {
    console.log("\n--- 2. Cobro del parqueadero ---");
    const entradaHorasParqueadero = await solicitarEntradaUsuario(interfazDeLecturaConsola, "Ingrese el número de horas: ");
    const cantidadDeHorasParqueadero = parseInt(entradaHorasParqueadero, 10);

    const respuestaPerteneceACoder = await solicitarEntradaUsuario(interfazDeLecturaConsola, "¿Es coder de Riwi? (si/no): ");
    const esUsuarioEstudianteCoder = respuestaPerteneceACoder.toLowerCase() === 'si';

    const mensajeResultadoParqueadero = calcularParqueadero(cantidadDeHorasParqueadero, esUsuarioEstudianteCoder);
    console.log("--> Resultado:", mensajeResultadoParqueadero);
}

/**
 * Ejecuta la interacción por consola del Ejercicio 3 (Cuenta regresiva).
 *
 * @param {readline.Interface} interfazDeLecturaConsola - Instancia activa de la interfaz readline.
 * @returns {Promise<void>}
 */
async function ejecutarEjercicioCuentaRegresiva(interfazDeLecturaConsola) {
    console.log("\n--- 3. Cuenta regresiva de lanzamiento ---");
    const entradaNumeroLimite = await solicitarEntradaUsuario(interfazDeLecturaConsola, "Ingrese un número entero N: ");
    const numeroInicialCuentaRegresiva = parseInt(entradaNumeroLimite, 10);

    const mensajeResultadoCuentaRegresiva = generarCuentaRegresiva(numeroInicialCuentaRegresiva);
    console.log("--> Resultado:");
    console.log(mensajeResultadoCuentaRegresiva);
}

/**
 * Ejecuta la interacción por consola del Ejercicio 4 (RiwiCoder).
 *
 * @param {readline.Interface} interfazDeLecturaConsola - Instancia activa de la interfaz readline.
 * @returns {Promise<void>}
 */
async function ejecutarEjercicioRiwiCoder(interfazDeLecturaConsola) {
    console.log("\n--- 4. RiwiCoder ---");
    const entradaNumeroLimite = await solicitarEntradaUsuario(interfazDeLecturaConsola, "Ingrese un número entero N: ");
    const numeroLimiteDeIteracion = parseInt(entradaNumeroLimite, 10);

    const mensajeResultadoRiwiCoder = ejecutarRiwiCoder(numeroLimiteDeIteracion);
    console.log("--> Resultado:");
    console.log(mensajeResultadoRiwiCoder);
}

/**
 * Ejecuta la interacción por consola del Ejercicio 5 (Adivina el número).
 *
 * @param {readline.Interface} interfazDeLecturaConsola - Instancia activa de la interfaz readline.
 * @returns {Promise<void>}
 */
async function ejecutarEjercicioAdivinaElNumero(interfazDeLecturaConsola) {
    console.log("\n--- 5. Adivina el número ---");
    const numeroSecretoOculto = 14;
    const cantidadMaximaDeIntentos = 5;
    let usuarioLogroAdivinar = false;

    console.log("He pensado un número secreto entre 1 y 20. Tienes 5 intentos.");

    for (let numeroIntentoActual = 1; numeroIntentoActual <= cantidadMaximaDeIntentos; numeroIntentoActual++) {
        const entradaIntentoUsuario = await solicitarEntradaUsuario(
            interfazDeLecturaConsola,
            `\nIntento ${numeroIntentoActual}/${cantidadMaximaDeIntentos} Ingresa un número: `
        );
        const numeroIngresadoPorUsuario = parseInt(entradaIntentoUsuario, 10);

        if (isNaN(numeroIngresadoPorUsuario) || numeroIngresadoPorUsuario < 1 || numeroIngresadoPorUsuario > 20) {
            console.log("Por favor ingresa un número válido entre 1 y 20.");
            continue;
        }

        const resultadoComparacion = comprobarIntentoAdivinanza(numeroSecretoOculto, numeroIngresadoPorUsuario);

        if (resultadoComparacion === "IGUAL") {
            console.log(`--> ¡Ganaste en ${numeroIntentoActual} intentos!`);
            usuarioLogroAdivinar = true;
            break;
        } else if (resultadoComparacion === "MAYOR") {
            console.log("--> El número secreto es MAYOR.");
        } else if (resultadoComparacion === "MENOR") {
            console.log("--> El número secreto es MENOR.");
        }
    }

    if (!usuarioLogroAdivinar) {
        console.log(`\n--> Perdiste, el número era ${numeroSecretoOculto}`);
    }
}

/**
 * Ejecuta la interacción por consola del Ejercicio 6 (Validar contraseña segura).
 *
 * @param {readline.Interface} interfazDeLecturaConsola - Instancia activa de la interfaz readline.
 * @returns {Promise<void>}
 */
async function ejecutarEjercicioValidarContrasena(interfazDeLecturaConsola) {
    console.log("\n--- 6. Validar una contraseña segura ---");
    const cadenaTextoContrasena = await solicitarEntradaUsuario(interfazDeLecturaConsola, "Ingrese la contraseña a verificar: ");

    const mensajeResultadoValidacion = validarContrasenaSegura(cadenaTextoContrasena);
    console.log("--> Resultado:");
    console.log(mensajeResultadoValidacion);
}

/**
 * Procesa la opción numérica elegida por el usuario e invoca el ejercicio correspondiente.
 *
 * @param {number} numeroOpcionSeleccionada - Opción elegida en el menú principal.
 * @param {readline.Interface} interfazDeLecturaConsola - Instancia activa de la interfaz readline.
 * @returns {Promise<boolean>} Devuelve true si el programa debe continuar, false si el usuario decide salir.
 */
async function procesarOpcionSeleccionada(numeroOpcionSeleccionada, interfazDeLecturaConsola) {
    switch (numeroOpcionSeleccionada) {
        case 0:
            console.log("¡Hasta luego!");
            return false;

        case 1:
            await ejecutarEjercicioTemperatura(interfazDeLecturaConsola);
            break;

        case 2:
            await ejecutarEjercicioParqueadero(interfazDeLecturaConsola);
            break;

        case 3:
            await ejecutarEjercicioCuentaRegresiva(interfazDeLecturaConsola);
            break;

        case 4:
            await ejecutarEjercicioRiwiCoder(interfazDeLecturaConsola);
            break;

        case 5:
            await ejecutarEjercicioAdivinaElNumero(interfazDeLecturaConsola);
            break;

        case 6:
            await ejecutarEjercicioValidarContrasena(interfazDeLecturaConsola);
            break;

        default:
            console.log("Opción no válida. Intente de nuevo.");
            break;
    }
    return true;
}

/**
 * Punto de entrada principal que inicializa el ciclo de vida de la aplicación.
 *
 * @returns {Promise<void>}
 */
async function iniciarAplicacion() {
    const interfazDeLecturaConsola = readline.createInterface({ input, output });
    let continuarEjecucionDelPrograma = true;

    do {
        mostrarMenuOpciones();
        const entradaOpcionUsuario = await solicitarEntradaUsuario(interfazDeLecturaConsola, "Digite la opción deseada: ");

        try {
            const numeroOpcionSeleccionada = parseInt(entradaOpcionUsuario, 10);
            if (isNaN(numeroOpcionSeleccionada)) {
                console.log("Error: Por favor, ingrese un número válido.");
            } else {
                continuarEjecucionDelPrograma = await procesarOpcionSeleccionada(numeroOpcionSeleccionada, interfazDeLecturaConsola);
            }
        } catch (errorDeEjecucion) {
            console.log("Error: Ocurrió un fallo procesando la opción.");
        }

        if (continuarEjecucionDelPrograma) {
            await solicitarEntradaUsuario(interfazDeLecturaConsola, "\nPresione Enter para continuar...");
        }
    } while (continuarEjecucionDelPrograma);

    interfazDeLecturaConsola.close();
}

// Ejecución del programa
iniciarAplicacion();