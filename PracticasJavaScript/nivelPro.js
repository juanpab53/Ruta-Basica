/*
//EJERCICIO 1
Riwi necesita un reporte con el rendimiento de sus coders.
Calcula el promedio de notas de cada coder y agrégalo como una nueva propiedad.
Marca a cada coder como "Aprobado"(promedio de 3.5 o más) o "En riesgo".
Encuentra el mejor coder de cada clan.
Muestra cuántos coders hay en riesgo por clan.
*/

const coders = [
  { nombre: "Ana", clan: "Lovelace", notas: [4.5, 3.8, 4.2] },
  { nombre: "Luis", clan: "Turing", notas: [2.9, 3.1, 3.0] },
  { nombre: "Sofía", clan: "Lovelace", notas: [3.2, 3.0, 2.8] },
  { nombre: "Mateo", clan: "Turing", notas: [4.9, 4.7, 4.8] },
];

for (let i = 0; i < coders.length; i++) {
  let sumaNotas = 0;
  const notas = coders[i].notas;
  
  for (let j = 0; j < notas.length; j++) {
    sumaNotas += notas[j];
  }
  
  const promedio = sumaNotas / notas.length;
  coders[i].promedio = parseFloat(promedio.toFixed(2));
  
  if (coders[i].promedio >= 3.5) {
    coders[i].estado = "Aprobado";
  } else {
    coders[i].estado = "En riesgo";
}
}

const reporteClanes = {};

for (let i = 0; i < coders.length; i++) {
  const coder = coders[i];
  const clan = coder.clan;
  
  // Si el clan no existe aún en el reporte, lo inicializamos
  if (!reporteClanes[clan]) {
    reporteClanes[clan] = {
      mejorCoder: coder,
      codersEnRiesgo: 0,
    };
  }
  
  // Comprobar si el coder actual tiene mejor promedio que el registrado
  if (coder.promedio > reporteClanes[clan].mejorCoder.promedio) {
    reporteClanes[clan].mejorCoder = coder;
  }
  
  // Contar si está en riesgo
  if (coder.estado === "En riesgo") {
    reporteClanes[clan].codersEnRiesgo++;
  }
}

//console.log(reporteClanes);
//console.log(coders)

/*
// EJERCICIO 2
Una tienda tiene su inventario y una lista de pedidos pendientes por despachar.
Por cada pedido, busca el producto en el inventario.
Si no existe, muestra "Producto no encontrado".
Si no hay stock suficiente, rechaza el pedido e indica cuantas unidades faltan.
Si hay stock, descuéntalo y suma el valor a las ventas del dia.
Al final, muestra el total vendido y la lista de productos agotados.
*/

const inventario = [
  { id: 1, nombre: "Teclado", precio: 80000, stock: 5 },
  { id: 2, nombre: "Mouse", precio: 35000, stock: 0 },
  { id: 3, nombre: "Monitor", precio: 650000, stock: 2 },
];
const pedidos = [
  { idProducto: 1, cantidad: 2 },
  { idProducto: 2, cantidad: 1 },
  { idProducto: 3, cantidad: 3 },
  { idProducto: 9, cantidad: 1 },
];

let totalVenta = 0;
for (let i = 0; i < pedidos.length; i++) {
  const pedido = pedidos[ i ];
  let productoEncontrado = null;

  // Buscar el producto en el inventario
  for (let j = 0; j < inventario.length; j++) {
    if (inventario[ j ].id === pedido.idProducto) {
      productoEncontrado = inventario[ j ];
      break;
    }
  }

  //VALIDACIONES

  //Producto no encontrado
  if (!productoEncontrado) {
    console.log(`Pedido ${i + 1}: Producto no encontrado (ID: ${pedido.idProducto})`);
    continue;
  }

  //Producto sin stock
  if (productoEncontrado.stock < pedido.cantidad) {
    console.log(`Pedido ${i + 1}: Producto ${productoEncontrado.nombre} no disponible. Faltan ${pedido.cantidad - productoEncontrado.stock} unidades.`);
    continue;
  }

  // Realizar la venta
  productoEncontrado.stock -= pedido.cantidad;
  const venta = productoEncontrado.precio * pedido.cantidad;
  
  totalVenta += venta;

  console.log(`Pedido ${i + 1}: Venta exitosa de ${pedido.cantidad} ${productoEncontrado.nombre}`);
}

const agotados = [];
for (let i = 0; i < inventario.length; i++) {
  if (inventario[i].stock === 0) {
    agotados.push(inventario[i].nombre);
  }
}

console.log("Total vendido: $" + totalVenta.toLocaleString('es-CO'))
console.log("Productos agotados: "+ agotados);

/*
//EJERCICIO 3
Gastos por categoría
Una app de finanzas personales quiere mostrarle al usuario en qué se le va el dinero.
Recorre los movimientos y agrupa el total gastado por categoría en un objeto.
Encuentra la categoría en la que más se gastó.
Si alguna categoría supera el 40% del gasto total, muestra una alerta.
Muestra el resumen final con el total de cada categoría.
*/

const movimientos = [
{ descripcion: "Mercado", categoria: "comida", valor: 180000 },
{ descripcion: "Bus", categoria: "transporte", valor: 3200 },
{ descripcion: "Cine", categoria: "ocio", valor: 25000 },
{ descripcion: "Almuerzo", categoria: "comida", valor: 22000 }
];

const gastosPorCategoria = {};
let gastoTotalGeneral = 0;

// 1. Agrupar total por categoría y calcular el gasto total general
for (let i = 0; i < movimientos.length; i++) {
  const mov = movimientos[i];
  gastoTotalGeneral += mov.valor;

  // Si la categoría no existe en el objeto, la inicializamos en 0
  if (!gastosPorCategoria[mov.categoria]) {
    gastosPorCategoria[mov.categoria] = 0;
  }

  gastosPorCategoria[mov.categoria] += mov.valor;
}

// 2. Encontrar la categoría con mayor gasto y validar la alerta del 40%
let categoriaMayorGasto = "";
let mayorMonto = 0;

for (const cat in gastosPorCategoria) {
  const monto = gastosPorCategoria[cat];

  // Encontrar la categoría con el gasto más alto
  if (monto > mayorMonto) {
    mayorMonto = monto;
    categoriaMayorGasto = cat;
  }

  // Calcular porcentaje sobre el total general
  const porcentaje = (monto / gastoTotalGeneral) * 100;
  if (porcentaje > 40) {
    console.log( 'ALERTAS DE GASTO', 'El gasto en '+cat+` representa el ${porcentaje.toFixed(2)}% del gasto total (supera el 40%).`);
  }
}

// 3. Resultados finales
console.log('Gastos: ', gastosPorCategoria);
console.log(`Categoría en la que más se gastó: ${categoriaMayorGasto} ($${mayorMonto})`);

/*
//EJERCICIO 4
Reserva de sillas en una sala
Una sala de cine se representa con una matriz donde true es silla ocupada y false es silla
libre.
Muestra cuántas sillas libres hay en total y en cada fila.
El usuario pide 2 sillas juntas: busca la primera pareja libre en la misma fila.
Si la encuentra, márcalas como ocupadas e indica fila y número de silla.
Si no hay ninguna pareja disponible, muestra "No hay sillas juntas disponibles".
*/

const sala = [
  [true, false, true, true],
  [false, true, false, false],
  [true, true, true, false]
];

let sillasTotalesLibres = 0;
let parejaEncontrada = false;

let filaReserva = -1;
let silla1 = -1;
let silla2 = -1;

for (let i = 0; i < sala.length; i++) {
  const fila = sala[i];
  let sillasLibresFila = 0;

  for (let j = 0; j < fila.length; j++) {
    // 1. Contar sillas libres
    if (!fila[j]) {
      sillasLibresFila++;
      sillasTotalesLibres++;
    }

    // 2. Buscar la primera pareja disponible 
    // Se resta 1 al tamaño de la fila para no acceder a un índice que no existe
    if (!parejaEncontrada && j < fila.length - 1) {
      if (!fila[j] && !fila[j + 1]) {
        parejaEncontrada = true;
        filaReserva = i;
        silla1 = j;
        silla2 = j + 1;
      }
    }
  }

  console.log(`Fila ${i + 1}: ${sillasLibresFila} sillas libres`);
}

console.log(`Total de sillas libres: ${sillasTotalesLibres}`);

// 3. Procesar la reserva fuera del bucle
if (parejaEncontrada) {
  // Modificar la matriz correctamente
  sala[filaReserva][silla1] = true;
  sala[filaReserva][silla2] = true;
  console.log(`Sillas juntas reservadas en fila ${filaReserva + 1}, sillas ${silla1 + 1} y ${silla2 + 1}`);
} else {
  console.log("No hay sillas juntas disponibles");
}

/*
//EJERCICIO 5
Cajero automático
Simula un cajero que procesa una lista de operaciones sobre una cuenta.
Recorre las operaciones y usa un switch según el tipo.
Un depósito suma al saldo; un retiro solo se hace si hay saldo suficiente.
Los retiros deben ser múltiplos de $10.000.
Guarda cada operación en el historial indicando si fue exitosa o rechazada.
Para cada retiro exitoso, indica cuántos billetes de $100.000, $50.000, $20.000 y
$10.000 entrega.
*/

const cuenta = { titular: "Ana", saldo: 500000, historial: [] };
const operaciones = [
  { tipo: "retiro", monto: 180000 },
  { tipo: "deposito", monto: 50000 },
  { tipo: "retiro", monto: 600000 },
  { tipo: "retiro", monto: 35000 },
];

// Recorremos las operaciones
for (let i = 0; i < operaciones.length; i++) {
  const op = operaciones[i];

  switch (op.tipo) {
    case "deposito":
      cuenta.saldo += op.monto;
      cuenta.historial.push({
        tipo: op.tipo,
        monto: op.monto,
        estado: "Exitosa",
        mensaje: `Depósito realizado. Nuevo saldo: $${cuenta.saldo}`,
      });
      break;
      
      case "retiro":
        // 1. Validar si es múltiplo de 10.000
        if (op.monto % 10000 !== 0) {
          cuenta.historial.push({
            tipo: op.tipo,
            monto: op.monto,
            estado: "Rechazada",
            motivo: "El monto debe ser múltiplo de $10.000",
          });
          break;
        }
        
        // 2. Validar saldo suficiente
        if (op.monto > cuenta.saldo) {
          cuenta.historial.push({
            tipo: op.tipo,
            monto: op.monto,
            estado: "Rechazada",
            motivo: "Saldo insuficiente",
          });
          break;
        }
        
        // 3. Procesar el retiro
        cuenta.saldo -= op.monto;
        
        // Calcular la cantidad de billetes entregados
        let restante = op.monto;
        
        const billetes100k = Math.floor(restante / 100000);
        restante %= 100000;
        
        const billetes50k = Math.floor(restante / 50000);
        restante %= 50000;
        
        const billetes20k = Math.floor(restante / 20000);
        restante %= 20000;
        
        const billetes10k = Math.floor(restante / 10000);
        
        // Guardar en el historial con el desglose
        cuenta.historial.push({
          tipo: op.tipo,
          monto: op.monto,
          estado: "Exitosa",
          billetesEntregados: {
            "$100.000": billetes100k,
            "$50.000": billetes50k,
            "$20.000": billetes20k,
            "$10.000": billetes10k,
          },
        });
        break;
        
        default:
          cuenta.historial.push({
        tipo: op.tipo,
        monto: op.monto,
        estado: "Rechazada",
        motivo: "Tipo de operación no reconocido",
      });
      break;
    }
}

// Resultados
console.log("ESTADO DE LA CUENTA");
console.log(`Titular: ${cuenta.titular}`);
console.log(`Saldo final: $${cuenta.saldo}`);

console.log("HISTORIAL DE OPERACIONES");
console.log(cuenta.historial);

/*
//EJERCICIO 6

En el torneo de fútbol de Riwi se jugaron varios partidos y hay que armar la tabla.
Recorre los partidos y construye un objeto con los puntos de cada equipo.
Victoria = 3 puntos, empate = 1 punto, derrota = 0 puntos.
Lleva también los goles a favor y en contra de cada equipo.
Ordena la tabla de mayor a menor puntaje sin usar sort().
Si dos equipos empatan en puntos, gana el que tenga mejor diferencia de gol.
*/

const partidos = [
  { local: "Lovelace", visitante: "Turing", golesLocal: 2, golesVisitante: 1 },
  { local: "Hopper", visitante: "Lovelace", golesLocal: 0, golesVisitante: 0 },
  { local: "Turing", visitante: "Hopper", golesLocal: 3, golesVisitante: 1 },
];

const equipos = {};

// 1. Acumular estadísticas de cada equipo
for (let i = 0; i < partidos.length; i++) {
  const p = partidos[ i ];

  // Inicializar equipo local si no existe
  if (!equipos[p.local]) {
    equipos[p.local] = { equipo: p.local, puntos: 0, gf: 0, gc: 0, dg:0};
  }
  // Inicializar equipo visitante si no existe
  if (!equipos[p.visitante]) {
    equipos[p.visitante] = { equipo: p.visitante, puntos: 0, gc: 0, gf: 0, dg:0 };
  }

  // Sumar goles a favor y en contra
  equipos[p.local].gf += p.golesLocal;
  equipos[p.local].gc += p.golesVisitante;

  equipos[p.visitante].gf += p.golesVisitante;
  equipos[p.visitante].gc += p.golesLocal;

  // Asignar puntos según el resultado
  if (p.golesLocal > p.golesVisitante) {
    equipos[p.local].puntos += 3;
  } else if (p.golesLocal < p.golesVisitante) {
    equipos[p.visitante].puntos += 3;
  } else {
    equipos[p.local].puntos += 1;
    equipos[p.visitante].puntos += 1;
  }
}

console.log(equipos)
// 2. Convertir el objeto a un arreglo y calcular la diferencia de gol (dg)
const tabla = [];
for (const nombreEquipo in equipos) {
  equipos[nombreEquipo].dg = equipos[nombreEquipo].gf - equipos[nombreEquipo].gc;
  tabla.push(equipos[nombreEquipo]);
}

// 3. Ordenar manualmente la tabla sin usar .sort() (Algoritmo de Burbuja / Selección)
for (let i = 0; i < tabla.length; i++) {
  for (let j = i + 1; j < tabla.length; j++) {
    let debeIntercambiar = false;

    // Criterio 1: Mayor puntaje
    if (tabla[j].puntos > tabla[i].puntos) {
      debeIntercambiar = true;
    }
    // Criterio 2: Desempate por mejor diferencia de gol
    else if (tabla[j].puntos === tabla[i].puntos && tabla[j].dg > tabla[i].dg) {
      debeIntercambiar = true;
    }

    // Intercambio de posiciones en el arreglo
    if (debeIntercambiar) {
      const temporal = tabla[i];
      tabla[i] = tabla[j];
      tabla[j] = temporal;
    }
  }
}

// 4. Mostrar la tabla de posiciones
console.log("TABLA DE POSICIONES");
for (let i = 0; i < tabla.length; i++) {
  const eq = tabla[i];
  console.log(`${i + 1}. ${eq.equipo} | Pts: ${eq.puntos} | GF: ${eq.gf} | GC: ${eq.gc} | DG: ${eq.dg}`);
}
