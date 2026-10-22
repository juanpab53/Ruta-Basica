# Pruebas de escritorio

Se realizaron pruebas manuales siguiendo el orden de instrucciones de cada
algoritmo. En total se documentan dos casos por programa (ocho pruebas).

## `saludo.psc`

### Prueba 1

- **Entrada:** `Juan`
- **Recorrido:** se lee `nombre = "Juan"` y se concatena con el texto del saludo.
- **Salida esperada:** `Hola Juan feliz día!`
- **Resultado:** correcto.

### Prueba 2

- **Entrada:** `Ana`
- **Recorrido:** se lee `nombre = "Ana"` y se concatena con el texto del saludo.
- **Salida esperada:** `Hola Ana feliz día!`
- **Resultado:** correcto.

## `EdadEnDias.psc`

El algoritmo calcula los días multiplicando la edad por 365.

### Prueba 1

- **Entrada:** edad en años: `18`
- **Cálculo:** `18 × 365 = 6570`
- **Salida esperada:** `Su edad en días es aproximadamente: 6570 días.`
- **Resultado:** correcto.

### Prueba 2

- **Entrada:** edad en años: `42`
- **Cálculo:** `42 × 365 = 15330`
- **Salida esperada:** `Su edad en días es aproximadamente: 15330 días.`
- **Resultado:** correcto.

## `propinas.psc`

### Prueba 1

- **Entradas:** cuenta: `100000`; porcentaje de propina: `10`; personas: `4`
- **Recorrido:** propina: `100000 × 10 / 100 = 10000`; total: `100000 + 10000 = 110000`; por persona: `110000 / 4 = 27500`.
- **Salida esperada:** propina: `10000`; total: `110000`; cada uno paga: `27500`.
- **Resultado:** correcto.

### Prueba 2

- **Entradas:** cuenta: `85000`; porcentaje de propina: `15`; personas: `2`
- **Recorrido:** propina: `85000 × 15 / 100 = 12750`; total: `85000 + 12750 = 97750`; por persona: `97750 / 2 = 48875`.
- **Salida esperada:** propina: `12750`; total: `97750`; cada uno paga: `48875`.
- **Resultado:** correcto.

## `PromedioNotas.psc`

La variable `promedio` está declarada como `Real`, por lo que puede conservar
resultados decimales.

### Prueba 1

- **Entradas:** primera nota: `3`; segunda nota: `4`; tercera nota: `5`
- **Cálculo:** `(3 + 4 + 5) / 3 = 4`
- **Salida esperada:** `El promedio de las notas ingresadas es: 4`
- **Resultado:** correcto.

### Prueba 2

- **Entradas:** primera nota: `4`; segunda nota: `4.5`; tercera nota: `5`
- **Cálculo:** `(4 + 4.5 + 5) / 3 = 4.5`
- **Salida esperada:** `El promedio de las notas ingresadas es: 4.5`
- **Resultado:** correcto.