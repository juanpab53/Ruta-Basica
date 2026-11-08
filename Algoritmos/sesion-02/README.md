# Sesión 02 - Tablas de verdad

Tablas de verdad de las expresiones lógicas utilizadas en cada algoritmo `.psc` de esta carpeta.

---

## Bisiesto.psc

Expresión evaluada:

```text
esBisiesto <- (anio MOD 4 = 0 Y anio MOD 100 <> 0) O (anio MOD 400 = 0)
```

Definiciones:

- **A** = `anio MOD 4 = 0`
- **B** = `anio MOD 100 <> 0`
- **C** = `anio MOD 400 = 0`

| A | B | C | A Y B | (A Y B) O C | esBisiesto |
|:-:|:-:|:-:|:-----:|:-----------:|:----------:|
| V | V | V |   V   |      V      |     V      |
| V | V | F |   V   |      V      |     V      |
| V | F | V |   F   |      V      |     V      |
| V | F | F |   F   |      F      |     F      |
| F | V | V |   F   |      V      |     V      |
| F | V | F |   F   |      F      |     F      |
| F | F | V |   F   |      V      |     V      |
| F | F | F |   F   |      F      |     F      |

---

### Pruebas
```
2024 -> bisiesto
1900 -> No es bisiesto
2000 -> bisiesto
2026 -> No es bisiesto
```

## Parqueadero.psc

### Validación del tipo de vehículo

Expresión: `tipo <> "carro" Y tipo <> "moto"` (si es verdadera, se muestra error).

| tipo  | tipo <> "carro" | tipo <> "moto" | tipo <> "carro" Y tipo <> "moto" | Resultado        |
|:-----:|:---------------:|:--------------:|:---------------------------------:|:----------------:|
| carro |        F        |       V        |                 F                 | Continúa         |
| moto  |        V        |       F        |                 F                 | Continúa         |
| otro  |        V        |       V        |                 V                 | Error de tipo    |

### Condiciones de cobro

| Condición           | Significado                              |
|:-------------------:|:----------------------------------------:|
| `minutos <= 15`     | Parqueadero gratis                       |
| `residuo >= 1`      | Se cobra una hora adicional              |
| `tipo = "carro"`    | Precio por hora de \$4000                |
| `precio > 30000`    | Se aplica el tope de \$30000             |
| `factura = "s"`     | Se aplica el 50% de descuento            |

#### Hora adicional (`residuo >= 1`)

| residuo >= 1 | Acción                          |
|:------------:|:-------------------------------:|
| V            | `horas <- horas + 1`            |
| F            | No se suma hora adicional       |

#### Precio base según el tipo (`tipo = "carro"`)

| tipo  | tipo = "carro" | Precio por hora |
|:-----:|:--------------:|:---------------:|
| carro |       V        | \$4000          |
| moto  |       F        | \$2000          |

#### Tope del cobro (`precio > 30000`)

| precio > 30000 | Acción              |
|:--------------:|:-------------------:|
| V              | `precio <- 30000`   |
| F              | Conserva el precio  |

#### Descuento por factura (`factura = "s"`)

| factura | factura = "s" | Acción                  |
|:-------:|:-------------:|:-----------------------:|
| s       |       V       | `precio <- precio / 2`  |
| n       |       F       | Sin descuento           |

---

### Pruebas
```
carro 15 n -> El parqueadero es gratis
carro 16 n -> El total a pagar es $4000
carro 60 n -> El total a pagar es $4000
carro 61 n -> El total a pagar es $8000
moto 61 s -> El total a pagar es $2000
carro 600 n -> El total a pagar es $30000
carro 600 s -> El total a pagar es $15000
3 30 n -> Error: tipo no válido
carro -5 n -> Error: minutos negativos
```

## Semaforo.psc

| Condición        | Significado                    |
|:----------------:|:------------------------------:|
| `unidades < 0`   | Error: unidades negativas      |
| `unidades = 0`   | Rojo: Agotado                  |
| `unidades <= 10` | Amarillo: Pedir                |
| `unidades > 10`  | Verde: Todo bien               |

| Rango de unidades | unidades < 0 | unidades = 0 | unidades <= 10 | Mensaje            |
|:-----------------:|:------------:|:------------:|:--------------:|:------------------:|
| unidades < 0      |      V       |      F       |       V        | Error              |
| unidades = 0      |      F       |      V       |       V        | Rojo: Agotado      |
| 1 a 10            |      F       |      F       |       V        | Amarillo: Pedir    |
| mayor a 10        |      F       |      F       |       F        | Verde: Todo bien   |

---

### Pruebas 
```
-1 -> Error: unidades negativas
0 -> Rojo: Agotado
1 -> Amarillo: Pedir
10 -> Amarillo: Pedir
11 -> Verde: Todo bien
```

## ValidarEdad.psc

Expresión: `edad < 0 O edad > 120`

Definiciones:

- **A** = `edad < 0`
- **B** = `edad > 120`

| A | B | A O B | Resultado       |
|:-:|:-:|:-----:|:---------------:|
| V | V |   V   | Edad invalida   |
| V | F |   V   | Edad invalida   |
| F | V |   V   | Edad invalida   |
| F | F |   F   | Edad valida     |

> Nota: `edad < 0` y `edad > 120` no pueden ser verdaderas al mismo tiempo, por lo que la primera fila es teórica.

---

### Pruebas
```
-1 -> Edad invalida
0 -> Edad valida
120 -> Edad valida
121 -> Edad invalida
```

## ValidarRegistro.psc

Expresión: `edad >= 14 Y respuesta = "s"`

Definiciones:

- **A** = `edad >= 14`
- **B** = `respuesta = "s"`

| A | B | A Y B | Resultado            |
|:-:|:-:|:-----:|:--------------------:|
| V | V |   V   | Registro exitoso     |
| V | F |   F   | No puedes registrarte|
| F | V |   F   | No puedes registrarte|
| F | F |   F   | No puedes registrarte|

### Pruebas
```
13s -> No puedes registrarte
14s -> Registro exitoso
30n -> No puedes registrarte
```