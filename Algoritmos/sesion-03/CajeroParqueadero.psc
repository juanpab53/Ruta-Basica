Algoritmo CajeroParqueadero
    Definir precio, total Como Real 
    Definir carros Como Entero

    total <- 0
    carros <- 0

    Escribir "Valor cobrado (0 para cerrar caja): "
    Leer precio

    Mientras precio <> 0 Hacer
        total <- total + precio
        carros <- carros + 1
        Escribir "Valor cobrado (0 para cerrar caja): "
        Leer precio
    FinMientras

    Escribir "Carros atendidos: ", carros
    Escribir "total recaudado: $", total

FinAlgoritmo