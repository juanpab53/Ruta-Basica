Algoritmo Piramide
    Definir fila, i, j Como Entero

    Escribir "Ingrese la altura de la piramide:"
    Leer  i

    Para fila <- 1 Hasta i Hacer
        Para j<-1 Hasta i - fila Con Paso 1 Hacer
            Escribir Sin Saltar " "
        FinPara
        Para j<-1 Hasta 2 * fila - 1 Con Paso 1 Hacer
            Escribir Sin Saltar "*"
        FinPara
        Escribir ""
    FinPara
FinAlgoritmo