Algoritmo Semaforo
	Definir unidades Como Entero
	
	Escribir "Ingrese la cantidad de unidades del inventario: "
	Leer unidades
	
	si unidades < 0 Entonces
		Escribir "Error: unidades negativas"
	SiNo
		si unidades = 0 Entonces
			Escribir "Rojo: Agotado"
		SiNo
			si unidades <= 10 Entonces
				Escribir "Amarillo: Pedir"
			SiNo
				Escribir "Verde: Todo bien"
			FinSi
		FinSi
	FinSi
FinAlgoritmo
