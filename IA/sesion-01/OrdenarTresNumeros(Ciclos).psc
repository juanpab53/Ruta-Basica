Algoritmo OrdenarTresNumeros
    Definir numeros, aux Como Real
    Definir i, j, paso Como Entero
    Dimension numeros[3]

    Escribir "Ingresa 3 números para ordenarlos de menor a mayor."
    Para i <- 1 Hasta 3 Con Paso 1 Hacer
        Escribir Sin Saltar "Número ", i, ": "
        Leer numeros[i]
    FinPara

    Escribir ""
    Escribir "Lista inicial: [", numeros[1], ", ", numeros[2], ", ", numeros[3], "]"
    Escribir ""

    paso <- 0
    Para i <- 1 Hasta 2 Con Paso 1 Hacer
        Escribir "--- Pasada ", i, " ---"
        Para j <- 1 Hasta 3 - i Con Paso 1 Hacer
            Si numeros[j] > numeros[j+1] Entonces
                aux <- numeros[j]
                numeros[j] <- numeros[j+1]
                numeros[j+1] <- aux
                paso <- paso + 1
                Escribir "Paso ", paso, ": ", aux, " > ", numeros[j], ", se intercambian -> [", numeros[1], ", ", numeros[2], ", ", numeros[3], "]"
            SiNo
                Escribir "Comparo ", numeros[j], " y ", numeros[j+1], ": ya están en orden -> [", numeros[1], ", ", numeros[2], ", ", numeros[3], "]"
            FinSi
        FinPara
        Escribir ""
    FinPara

    Escribir "Resultado final (menor a mayor): [", numeros[1], ", ", numeros[2], ", ", numeros[3], "]"
FinAlgoritmo