Algoritmo Bisiesto
	Definir anio, diasFebrero Como Entero
    Definir esBisiesto Como Logico
	
    Escribir "Ingrese el año:"
    Leer anio
	
    Si anio < 1 Entonces
        Escribir "Error: el año debe ser mayor que 0"
    SiNo
        esBisiesto <- (anio MOD 4 = 0 Y anio MOD 100 <> 0) O (anio MOD 400 = 0)
		
        Si esBisiesto Entonces
            diasFebrero <- 29
            Escribir "El año ", anio, " es bisiesto"
        SiNo
            diasFebrero <- 28
            Escribir "El año ", anio, " no es bisiesto"
        FinSi
		
        Escribir "Febrero de ", anio, " tiene ", diasFebrero, " días"
    FinSi
FinAlgoritmo
