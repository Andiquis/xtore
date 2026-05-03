# Metodologia de abstraccion para disenar software sin perderse

## Indice

1. [Objetivo](#objetivo)
2. [Principios de trabajo](#principios-de-trabajo)
3. [Orden recomendado](#orden-recomendado)
4. [Fase 1: definir el alcance](#fase-1-definir-el-alcance)
5. [Fase 2: crear el mapa general](#fase-2-crear-el-mapa-general)
6. [Fase 3: describir el flujo principal](#fase-3-describir-el-flujo-principal)
7. [Fase 4: identificar entidades](#fase-4-identificar-entidades)
8. [Fase 5: separar estado e historial](#fase-5-separar-estado-e-historial)
9. [Fase 6: detectar casos borde](#fase-6-detectar-casos-borde)
10. [Fase 7: encapsular modulos](#fase-7-encapsular-modulos)
11. [Fase 8: iterar sin sobrecomplicar](#fase-8-iterar-sin-sobrecomplicar)
12. [Preguntas base](#preguntas-base)
13. [Metodo anti-caos](#metodo-anti-caos)
14. [Plantilla de modulo](#plantilla-de-modulo)
15. [Criterios de una buena decision](#criterios-de-una-buena-decision)
16. [Senales de alerta](#senales-de-alerta)
17. [Ejemplo completo](#ejemplo-completo)
18. [Regla final](#regla-final)

---

## Objetivo

Esta metodologia sirve para analizar, modelar y disenar software sin perder la vision general ni colapsar por complejidad.

No busca perfeccion inmediata. Busca:

- Claridad para entender que se esta construyendo.
- Control para decidir que entra ahora y que puede esperar.
- Evolucion progresiva para mejorar el sistema por capas.

La idea central es simple: primero se entiende el sistema, luego se modela y finalmente se implementa por partes pequenas.

---

## Principios de trabajo

### 1. No disenar todo en la cabeza

La mente razona. El sistema se escribe.

Si no esta documentado, no esta disenado.

Un diseno que solo existe en la cabeza es dificil de revisar, explicar, corregir y mantener. Por eso cada decision importante debe quedar escrita, aunque sea en una version simple.

### 2. Separar presente y futuro

No todo problema posible debe resolverse en la primera version.

El trabajo correcto consiste en:

- Resolver lo necesario para que el sistema funcione hoy.
- Registrar lo que puede esperar.
- Evitar decisiones que bloqueen el crecimiento futuro.

### 3. Pensar en capas

No entiendes un sistema completo de golpe. Lo construyes por capas:

```txt
Mapa -> Flujo -> Datos -> Problemas -> Mejora
```

---

## Orden recomendado

Usa este orden cuando vayas a disenar o documentar un modulo nuevo:

1. Definir el objetivo actual.
2. Identificar los modulos principales.
3. Describir el flujo principal.
4. Identificar entidades.
5. Separar estado e historial.
6. Detectar casos borde.
7. Encapsular responsabilidades.
8. Separar pendientes futuros.
9. Implementar una version simple.
10. Iterar.

---

## Fase 1: definir el alcance

Antes de modelar todo el sistema, define que problema se va a resolver ahora.

### Ejemplo

**Objetivo actual:** registrar una venta simple.

**Incluye:**

- Seleccionar producto.
- Validar stock.
- Crear venta.
- Registrar detalle.
- Descontar inventario.

**No incluye todavia:**

- Devoluciones.
- Promociones.
- Multiples almacenes.
- Reportes avanzados.
- Facturacion compleja.

Esta separacion evita que una tarea pequena se convierta en un diseno demasiado grande.

---

## Fase 2: crear el mapa general

El mapa general muestra las piezas principales del sistema sin entrar en detalles internos.

Ejemplo de modulos:

```txt
Auth
Usuarios
Productos
Variantes
Inventario
Ventas
Pagos
Reportes
```

El mapa responde:

- Que partes grandes existen?
- Que modulos parecen independientes?
- Que areas del sistema se comunican entre si?

En esta fase no se definen tablas, campos ni reglas avanzadas.

---

## Fase 3: describir el flujo principal

El flujo principal describe el camino normal del proceso. Debe ser directo, sin casos especiales al inicio.

### Ejemplo: registrar una venta

1. Seleccionar producto.
2. Validar stock.
3. Crear venta.
4. Crear detalle.
5. Descontar inventario.
6. Registrar movimiento.

Este flujo permite ver que modulos participan y que datos deben existir para que el proceso funcione.

---

## Fase 4: identificar entidades

Las entidades representan los datos importantes del sistema. Conviene clasificarlas para no mezclar datos principales, catalogos e historial.

### Entidades principales

Son el centro del negocio o del proceso.

- Producto.
- Venta.
- Cliente.
- Inventario.
- Usuario.

### Entidades secundarias

Apoyan o clasifican a las principales.

- Marca.
- Categoria.
- Presentacion.
- Unidad.
- MetodoPago.

### Entidades historicas

Registran eventos, movimientos o cambios pasados.

- MovimientoInventario.
- DetalleVenta.
- HistorialPrecio.
- Logs.

Esta clasificacion ayuda a decidir que tablas cambian, cuales solo describen y cuales guardan trazabilidad.

---

## Fase 5: separar estado e historial

Una regla importante es separar lo que representa el estado actual de lo que registra eventos pasados.

### Estado actual

```txt
Inventario:
- stock_actual
```

El estado actual responde: como esta el sistema ahora?

### Historial

```txt
MovimientoInventario:
- producto_id
- tipo
- cantidad
- fecha
```

El historial responde: que paso antes para llegar al estado actual?

Regla practica:

- El estado se actualiza.
- El historial se registra.
- El historial no debe depender de recordar manualmente lo que ocurrio.

---

## Fase 6: detectar casos borde

Los casos borde son situaciones que pueden romper el flujo normal.

Ejemplos:

- Sin stock.
- Cancelacion.
- Devolucion.
- Precio cambiado.
- Concurrencia.
- Producto desactivado.
- Metodo de pago rechazado.

No todos se resuelven en la primera version. Primero se identifican y luego se decide:

- Cuales entran ahora?
- Cuales van al backlog?
- Cuales bloquean decisiones tecnicas importantes?

---

## Fase 7: encapsular modulos

Cada modulo debe tener una responsabilidad clara.

### Ejemplo: modulo de inventario

**Hace:**

- Controlar stock.
- Registrar movimientos.
- Responder si hay disponibilidad.

**No hace:**

- Procesar pagos.
- Administrar clientes.
- Generar reportes financieros.

### Evitar acoplamiento total

Malo:

```txt
Todo depende de todo.
```

Bueno:

```txt
Ventas -> pide validacion a Inventario
Inventario -> responde
Ventas -> registra venta
Inventario -> registra salida
```

Cada modulo debe colaborar con los demas sin absorber responsabilidades que no le corresponden.

---

## Fase 8: iterar sin sobrecomplicar

No saltes directamente a la version mas compleja.

```txt
Problema
-> version simple
-> version funcional
-> version robusta
-> version escalable
```

Ejemplo:

```txt
Inventario v1 -> stock simple
Inventario v2 -> entradas/salidas
Inventario v3 -> historial
Inventario v4 -> multi-almacen
```

La version simple no significa una version descuidada. Significa una version con alcance controlado.

---

## Preguntas base

Usa estas preguntas para ordenar el analisis:

1. Cual es el proceso real?
2. Que datos intervienen?
3. Que cambia con el tiempo?
4. Que necesita historial?
5. Que modulos existen?
6. Que depende de que?
7. Que casos borde importan ahora?
8. Que puede esperar?
9. Que puede romperse?
10. Que bloquea el futuro?

---

## Metodo anti-caos

Cuando te pierdas, responde:

1. Que estoy resolviendo?
2. Esto aplica ahora?
3. Bloquea el sistema?
4. Puede esperar?

Si puede esperar, va al backlog.

### Backlog controlado

No ignores lo futuro. Postergalo con control.

Ejemplos de pendientes:

- Devoluciones.
- Multiples almacenes.
- Promociones.
- Vencimientos.
- Facturacion.

---

## Plantilla de modulo

Usa esta plantilla para documentar cada modulo importante.

```md
## Nombre

Nombre del modulo.

## Responsabilidad

Que problema resuelve y cual es su limite.

## Datos

Datos principales que maneja.

## Tablas

Tablas o colecciones relacionadas.

## Procesos

Flujos principales donde participa.

## Casos borde

Problemas posibles que debe manejar o delegar.

## No debe hacer

Responsabilidades que pertenecen a otros modulos.

## Pendientes

Cosas que se implementaran despues.
```

---

## Criterios de una buena decision

Una decision correcta:

- Funciona hoy.
- No rompe datos.
- Permite cambios razonables.
- No sobrecomplica el diseno.
- Tiene un limite claro.

---

## Senales de alerta

Vuelve al objetivo cuando aparezcan estas senales:

- Demasiados casos futuros.
- Demasiadas tablas.
- Pierdes el objetivo.
- Modulos mezclados.
- Nada parece suficiente.
- Un cambio pequeno obliga a tocar todo.
- No puedes explicar el flujo en pasos simples.

---

## Ejemplo completo

### Objetivo

Gestionar productos y stock basico.

### Alcance inicial

Incluye:

- Crear productos.
- Crear variantes.
- Registrar entradas de stock.
- Registrar salidas de stock por venta.

No incluye todavia:

- Multiples almacenes.
- Lotes.
- Vencimientos.
- Reservas de stock.

### Modulos

- Productos.
- Variantes.
- Inventario.
- Movimientos.
- Categorias.
- Marcas.
- Presentaciones.

### Entidades

- Producto.
- Marca.
- Categoria.
- Presentacion.
- VarianteProducto.
- Inventario.
- MovimientoInventario.

### Flujo de entrada

1. Seleccionar variante.
2. Ingresar cantidad.
3. Crear movimiento de entrada.
4. Aumentar stock actual.

### Flujo de salida

1. Registrar venta.
2. Validar stock.
3. Crear venta.
4. Crear detalle.
5. Crear movimiento de salida.
6. Reducir stock actual.

### Casos borde iniciales

- Stock insuficiente.
- Variante inexistente.
- Cantidad invalida.
- Movimiento duplicado.

### Pendientes controlados

- Multi-almacen.
- Historial de precios.
- Devoluciones.
- Ajustes manuales de inventario.

---

## Regla final

No construyas una catedral para vender caramelos.

Tu mente no es un servidor. Es una linterna.

Apunta bien y el sistema se revela.
