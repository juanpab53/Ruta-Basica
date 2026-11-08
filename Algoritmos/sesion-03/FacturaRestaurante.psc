Algoritmo FacturaRestaurante
    Algoritmo sin_titulo
	Definir subtotal, impuesto, propina Como Real
    subtotal <- LeerPedido()
    impuesto <- CalcularPorcentaje(subtotal, 8)
    propina <- CalcularPorcentaje(subtotal, 10)
    ImprimirFactura(subtotal, impuesto, propina)
FinAlgoritmo
SubProceso subTotalPedido <- LeerPedido
	Definir precio, cantidad, subTotalPedido Como Real
	subTotalPedido <- 0
	Escribir "Ingrese el precio del plato (0 para terminar):"
	Leer precio
	Mientras precio <> 0 Hacer
		Escribir "Ingrese la cantidad:"
		Leer cantidad
		subTotalPedido <- subTotalPedido + (precio * cantidad)
		Escribir "Ingrese el siguiente precio del plato (0 para terminar):"
		Leer precio
	FinMientras
FinSubProceso
SubProceso resultado <- CalcularPorcentaje(base, porcentaje)
	Definir resultado Como Real
	resultado <- (base * porcentaje) / 100
FinSubProceso
SubProceso ImprimirFactura(subtotal, impuesto, propina)
	Definir total Como Real
	total <- subtotal + impuesto + propina
	Escribir "Subtotal: $", subtotal
	Escribir "Impuesto (8%): $", impuesto
	Escribir "Propina (10%): $", propina
	Escribir "TOTAL A PAGAR: $", total
FinSubProceso

