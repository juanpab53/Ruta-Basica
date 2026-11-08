Algoritmo OrdenarTresNumeros
    Definir a, b, c, aux Como Real
    Definir paso Como Entero

    Escribir "Ingresa 3 números para ordenarlos de menor a mayor."
    Escribir Sin Saltar "Número 1: "
    Leer a
    Escribir Sin Saltar "Número 2: "
    Leer b
    Escribir Sin Saltar "Número 3: "
    Leer c

    Escribir ""
    Escribir "Lista inicial: [", a, ", ", b, ", ", c, "]"
    Escribir ""

    paso <- 0

    Escribir "--- Pasada 1 ---"

    // Comparo la posición 1 con la 2
    Si a > b Entonces
        aux <- a
        a <- b
        b <- aux
        paso <- paso + 1
        Escribir "Paso ", paso, ": ", aux, " > ", a, ", se intercambian -> [", a, ", ", b, ", ", c, "]"
    SiNo
        Escribir "Comparo ", a, " y ", b, ": ya están en orden -> [", a, ", ", b, ", ", c, "]"
    FinSi

    // Comparo la posición 2 con la 3
    Si b > c Entonces
        aux <- b
        b <- c
        c <- aux
        paso <- paso + 1
        Escribir "Paso ", paso, ": ", aux, " > ", b, ", se intercambian -> [", a, ", ", b, ", ", c, "]"
    SiNo
        Escribir "Comparo ", b, " y ", c, ": ya están en orden -> [", a, ", ", b, ", ", c, "]"
    FinSi

    Escribir ""
    Escribir "--- Pasada 2 ---"

    // Comparo otra vez la posición 1 con la 2
    Si a > b Entonces
        aux <- a
        a <- b
        b <- aux
        paso <- paso + 1
        Escribir "Paso ", paso, ": ", aux, " > ", a, ", se intercambian -> [", a, ", ", b, ", ", c, "]"
    SiNo
        Escribir "Comparo ", a, " y ", b, ": ya están en orden -> [", a, ", ", b, ", ", c, "]"
    FinSi

    Escribir ""
    Escribir "Resultado final (menor a mayor): [", a, ", ", b, ", ", c, "]"
FinAlgoritmo