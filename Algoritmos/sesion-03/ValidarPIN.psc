Algoritmo ValidarPIN
    Definir pin,intentos como Entero
    Definir acceso Como Logico

    intentos <- 0
    acceso <- Falso

    Repetir
        Escribir  "Ingrese el PIN:"
        leer pin

        intentos <- intentos + 1

        si pin = 2580 Entonces
            acceso <- Verdadero
        FinSi

    Hasta Que acceso O intentos = 3

    si acceso Entonces
        Escribir "Bienvenido"
    SiNo
        Escribir "Tarjeta Bloqueada"
    FinSi
FinAlgoritmo