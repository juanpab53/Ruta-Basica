Algoritmo propinas
	Definir cuenta, porPropina, propina, porPersona, total Como Real
	Definir personas Como Entero
	Escribir 'Ingrese el valor de la cuenta sin propina: '
	Leer cuenta
	Escribir 'Ingrese el porcentaje de la propina: '
	Leer porPropina
	Escribir 'Ingrese la cantidad de personas que van a pagar: '
	Leer personas
	propina <- cuenta*porPropina/100
	total <- cuenta+propina
	porPersona <- total/personas
	Escribir 'Propina: ', propina
	Escribir 'Total: ', total
	Escribir 'Cada uno paga: ', porPersona
FinAlgoritmo
