Algoritmo Parqueadero
    Definir horas, minutos, residuo Como Entero
    Definir factura, tipo Como Caracter
    Definir precio Como Real
	
    Escribir "¿Tipo de vehiculo? (carro/moto)"
    Leer tipo
    tipo <- Minusculas(tipo)
	
    Escribir "¿Cuantos minutos estuvo en el parqueadero?"
    Leer minutos
	
    Escribir "¿Tiene factura? (s/n)"
    Leer factura
    factura <- Minusculas(factura)
	
    Si minutos < 0 Entonces
        Escribir "Error: minutos negativos"
    SiNo
        Si tipo <> "carro" Y tipo <> "moto" Entonces
            Escribir "Error: tipo no válido"
        SiNo
            Si minutos <= 15 Entonces
                Escribir "El parqueadero es gratis"
            SiNo
                horas <- trunc(minutos/60)
                residuo <- minutos MOD 60
                Si residuo >= 1 Entonces
                    horas <- horas + 1
                FinSi
				
                Si tipo = "carro" Entonces
                    precio <- horas * 4000
                SiNo
                    precio <- horas * 2000
                FinSi
				
                Si precio > 30000 Entonces
                    precio <- 30000
                FinSi
				
                Si factura = "s" Entonces
                    precio <- precio / 2
                FinSi
				
                Escribir "El total a pagar es: ", precio
            FinSi
        FinSi
    FinSi
FinAlgoritmo