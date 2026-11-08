Algoritmo Calificaciones

    Definir summatoria, may, men, nota Como Real
    Definir i, cantidadAprovados Como Entero
    Definir alguienPerdio Como Logico

    may <- 0 
    men <- 5 
    nota <- 0
    alguienPerdio <- Falso

    Para i <- 1 Hasta 5 Hacer
        Escribir "Nota del estudiante ", i, ":"
        Leer nota

        sumatoria <- sumatoria + nota
        si nota >= 3.0 Entonces
            cantidadAprovados <- cantidadAprovados + 1
        SiNo
            alguienPerdio <- Verdadero
        FinSi

        si nota > may Entonces
            may <- nota
        FinSi

        si nota < men Entonces
            men <- nota
        FinSi
    FinPara

    Escribir "Promedio: ", sumatoria/5
    Escribir "Nota mas alta: ", may
    Escribir "Nota mas baja: ", men 
    Escribir "Aprobados: ", cantidadAprovados

    si alguienPerdio Entonces
        Escribir "Hay estudiantes en refuerzo"
    FinSi
FinAlgoritmo