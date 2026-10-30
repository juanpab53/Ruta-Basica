Algoritmo ValidarRegistro
	Definir  edad Como Entero
	Definir respuesta Como Caracter
	
	Escribir  "¿Cuantos años tienes?"
	Leer edad
	
	Escribir "¿Aceptas los terminos? (S/N)" 
	Leer respuesta
	respuesta <- Minusculas(respuesta)
	
	si edad >= 14 y respuesta = "s" Entonces
		Escribir "Resgistro exitoso"
	SiNo
		Escribir "No puedes registrarte"
	FinSi
FinAlgoritmo
