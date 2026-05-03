# Metodologia de desarrollo modular eficiente

## 1. Objetivo

Esta metodologia sirve para construir un solo modulo de software de forma clara, incremental y mantenible, sin intentar disenar todo el sistema al mismo tiempo.

El resultado esperado de aplicar esta guia es:

- Entender que debe hacer el modulo.
- Definir que queda dentro y fuera del alcance.
- Modelar los datos necesarios.
- Traducir el diseno a una estructura tecnica implementable.
- Construir una primera version funcional.
- Iterar sin perder control de la complejidad.

La regla base es simple: primero se construye el flujo principal del modulo; despues se agregan mejoras, excepciones y optimizaciones.

---

## 2. Principios

### 2.1 Abstraccion progresiva

No se empieza por carpetas, clases ni tablas. Se empieza por entender el problema en capas:

```txt
Proposito -> Flujo -> Datos -> Reglas -> Estructura tecnica -> Codigo
```

Cada capa debe responder preguntas concretas antes de pasar a la siguiente.

### 2.2 Separacion de responsabilidades

Cada pieza del modulo debe tener una responsabilidad clara:

- El controlador recibe entradas y devuelve respuestas.
- El servicio ejecuta reglas de negocio.
- El repositorio accede a los datos.
- Las entidades/modelos representan informacion del dominio.
- Los validadores verifican entradas y restricciones.

Si una funcion, clase o archivo hace demasiadas cosas, el modulo empieza a perder claridad.

### 2.3 Iteracion corta

No se busca la version perfecta desde el inicio. Se trabaja en ciclos pequenos:

1. Definir una parte minima.
2. Implementarla.
3. Validarla.
4. Ajustarla.
5. Avanzar a la siguiente parte.

### 2.4 Control de complejidad

Toda decision debe clasificarse en una de estas tres categorias:

- **Ahora:** necesario para que el modulo funcione.
- **Luego:** importante, pero no bloquea la primera version.
- **No entra:** pertenece a otro modulo o no aporta al objetivo actual.

Esta clasificacion evita sobreingenieria y mantiene el trabajo enfocado.

---

## 3. Fases de desarrollo del modulo

### Fase 1: Entender el modulo

### Proposito

Definir con precision que problema resuelve el modulo.

### Preguntas clave

- Que accion principal permite realizar?
- Quien usa este modulo?
- Que informacion recibe?
- Que resultado debe producir?
- Que otros modulos necesita consultar o modificar?

### Entregable

Una descripcion corta:

```txt
El modulo de [nombre] permite [accion principal] para [usuario/contexto],
usando [datos principales] y produciendo [resultado esperado].
```

### Ejemplo

```txt
El modulo de ventas permite registrar una venta para un cliente,
usando productos, cantidades y metodo de pago, y produciendo una venta confirmada
con descuento de inventario.
```

---

### Fase 2: Definir limites

### Proposito

Evitar que el modulo absorba responsabilidades de todo el sistema.

### Debe incluir

- Que hace el modulo.
- Que no hace.
- Que otros modulos toca.
- Que datos controla directamente.
- Que datos solo consulta.

### Plantilla

```txt
Modulo: [nombre]

Hace:
- ...

No hace:
- ...

Consulta:
- ...

Modifica:
- ...

Depende de:
- ...
```

### Regla practica

Si una responsabilidad puede vivir en otro modulo sin romper el flujo principal, no debe meterse aqui.

---

### Fase 3: Describir el flujo principal

### Proposito

Representar el camino normal del modulo sin casos especiales.

### Formato recomendado

```txt
1. Recibir solicitud.
2. Validar datos minimos.
3. Consultar informacion necesaria.
4. Aplicar reglas de negocio.
5. Guardar cambios.
6. Devolver resultado.
```

### Ejemplo: registrar venta

```txt
1. Recibir productos, cantidades, cliente y metodo de pago.
2. Validar que los productos existan.
3. Validar stock disponible.
4. Calcular total.
5. Crear venta.
6. Crear detalle de venta.
7. Descontar inventario.
8. Registrar movimiento de inventario.
9. Devolver venta confirmada.
```

### Regla practica

Si el flujo principal tiene mas de 10 pasos, probablemente estas mezclando responsabilidades o incluyendo casos borde antes de tiempo.

---

### Fase 4: Identificar reglas de negocio

### Proposito

Separar lo que el sistema debe cumplir de como sera implementado.

### Tipos de reglas

- Validaciones: que datos son obligatorios o invalidos.
- Restricciones: que condiciones impiden continuar.
- Calculos: totales, descuentos, saldos, estados.
- Transiciones: cambios permitidos de estado.
- Permisos: quien puede ejecutar la accion.

### Plantilla

```txt
Regla:
- Si [condicion], entonces [resultado].
- Si no se cumple, el modulo debe [rechazar / ajustar / registrar / avisar].
```

### Ejemplo

```txt
Si la cantidad solicitada es mayor al stock disponible,
la venta debe rechazarse antes de crear registros.
```

---

### Fase 5: Modelar datos

### Proposito

Definir las entidades necesarias para que el modulo funcione sin duplicar ni mezclar informacion.

### 5.1 Entidades principales

Representan el nucleo del modulo.

Ejemplo:

```txt
Venta
- id
- cliente_id
- total
- estado
- fecha
```

### 5.2 Entidades detalle

Representan informacion dependiente de una entidad principal.

```txt
DetalleVenta
- id
- venta_id
- producto_id
- cantidad
- precio_unitario
- subtotal
```

### 5.3 Entidades de estado

Representan la situacion actual.

```txt
Inventario
- producto_id
- stock_actual
```

### 5.4 Entidades de historial

Representan eventos pasados o trazabilidad.

```txt
MovimientoInventario
- id
- producto_id
- tipo
- cantidad
- referencia
- fecha
```

### Regla estado vs historial

- El estado responde: como esta ahora?
- El historial responde: que paso?
- El estado puede actualizarse.
- El historial debe agregarse, no reemplazarse.

---

### Fase 6: Disenar la estructura tecnica

### Proposito

Convertir el diseno en una base de codigo ordenada.

La estructura puede adaptarse a cualquier framework, pero debe conservar responsabilidades claras.

```txt
modulo/
  controllers/
    modulo_controller
  services/
    crear_modulo_service
    actualizar_modulo_service
  repositories/
    modulo_repository
  models/
    modulo
    modulo_detalle
  validators/
    crear_modulo_validator
  dto/
    crear_modulo_input
    modulo_output
  tests/
    modulo_service_test
```

### Responsabilidades

- **Controller:** adapta HTTP, CLI, eventos o UI hacia el caso de uso.
- **Service:** contiene el flujo de negocio.
- **Repository:** consulta y persiste datos.
- **Model/Entity:** define estructura y comportamiento propio de los datos.
- **Validator:** valida entrada externa antes de ejecutar negocio.
- **DTO/Input/Output:** define contratos de entrada y salida.
- **Tests:** protegen reglas, errores y flujo principal.

### Regla practica

El servicio no debe saber detalles de transporte. El controlador no debe contener reglas de negocio. El repositorio no debe decidir reglas del dominio.

---

### Fase 7: Implementar version minima

### Proposito

Construir una primera version funcional del modulo.

### Orden recomendado

1. Crear modelos o entidades minimas.
2. Crear migraciones o estructuras de persistencia.
3. Crear repositorios con operaciones basicas.
4. Crear servicio del flujo principal.
5. Crear validadores de entrada.
6. Crear controlador o punto de entrada.
7. Crear tests del flujo principal.
8. Probar manualmente el caso normal.

### Regla de enfoque

No implementes configuraciones avanzadas, reportes, filtros complejos, automatizaciones ni optimizaciones hasta que el flujo principal funcione completo.

---

### Fase 8: Agregar casos borde

### Proposito

Cubrir los escenarios que pueden romper el modulo sin convertirlo en una solucion gigante.

### Clasificacion

- **Critico ahora:** rompe datos, seguridad, dinero, inventario o permisos.
- **Importante luego:** afecta experiencia, pero tiene solucion manual o no bloquea.
- **Fuera del modulo:** pertenece a otro flujo.

### Ejemplos criticos

- Datos obligatorios faltantes.
- Registro duplicado.
- Estado invalido.
- Stock insuficiente.
- Usuario sin permisos.
- Operacion parcial que deja datos inconsistentes.
- Reintento de una operacion ya procesada.

### Regla practica

Resuelve ahora los casos que pueden dejar datos corruptos. Documenta los demas como pendientes.

---

### Fase 9: Validar e iterar

### Proposito

Mejorar el modulo despues de tener una base funcionando.

### Revisar

- El flujo principal funciona de inicio a fin?
- Las reglas importantes estan en servicios o dominio?
- Los errores son claros?
- Las operaciones criticas son atomicas?
- Las dependencias con otros modulos estan bien delimitadas?
- Los tests cubren el caso normal y los errores criticos?

### Iteraciones posibles

- Dividir servicios demasiado grandes.
- Extraer validaciones repetidas.
- Agregar eventos o integraciones.
- Mejorar nombres.
- Agregar indices o mejoras de rendimiento.
- Cubrir nuevos casos borde.

---

## 4. Guia paso a paso

Usa esta lista cada vez que construyas un modulo.

### Paso 1: Escribir el objetivo

```txt
Este modulo permite...
```

Debe caber en una o dos lineas.

### Paso 2: Definir alcance

Escribe tres listas:

```txt
Entra ahora:
- ...

Se posterga:
- ...

No pertenece al modulo:
- ...
```

### Paso 3: Dibujar el flujo principal

Escribe el camino feliz en pasos numerados. No agregues excepciones todavia.

### Paso 4: Identificar datos

Define:

- Entidades principales.
- Entidades detalle.
- Estado actual.
- Historial.
- Relaciones.

### Paso 5: Escribir reglas de negocio

Cada regla debe poder convertirse en codigo o test.

Mal:

```txt
El sistema debe manejar bien el inventario.
```

Bien:

```txt
No se puede confirmar una venta si algun producto no tiene stock suficiente.
```

### Paso 6: Elegir estructura tecnica

Crea solo las piezas necesarias para el flujo actual.

Minimo recomendado:

```txt
controller
service
repository
model/entity
validator
tests
```

### Paso 7: Implementar de adentro hacia afuera

Orden sugerido:

```txt
Datos -> Repositorio -> Servicio -> Controlador -> Tests de integracion ligera
```

El servicio debe ser el centro del modulo porque concentra el caso de uso.

### Paso 8: Probar el caso normal

Verifica que el modulo haga lo prometido sin casos raros.

### Paso 9: Probar errores criticos

Agrega pruebas para los errores que pueden romper datos o reglas importantes.

### Paso 10: Registrar pendientes

Todo lo que no entra ahora debe quedar escrito:

```txt
Pendientes:
- Soportar devoluciones.
- Agregar multiples almacenes.
- Permitir descuentos por campana.
```

No dejar pendientes en la cabeza.

---

## 5. Criterios de calidad

Un modulo esta bien disenado cuando cumple estas condiciones:

- Tiene un objetivo claro y corto.
- Sus limites estan definidos.
- El flujo principal se puede explicar sin revisar todo el sistema.
- Las reglas de negocio no estan escondidas en controladores o vistas.
- Los datos separan estado actual e historial cuando aplica.
- Las dependencias externas son explicitas.
- Los errores criticos estan controlados.
- Las operaciones que deben ser atomicas no quedan partidas.
- Los nombres reflejan el negocio, no solo detalles tecnicos.
- Se puede probar el servicio principal sin levantar toda la aplicacion.
- Agregar un caso nuevo no obliga a reescribir todo el modulo.

### Checklist rapido antes de cerrar

```txt
[ ] El modulo tiene objetivo definido.
[ ] Hay lista de lo que entra y lo que no entra.
[ ] El flujo principal esta documentado.
[ ] Las entidades principales estan claras.
[ ] Estado e historial estan separados si aplica.
[ ] La estructura tecnica respeta responsabilidades.
[ ] El caso normal funciona.
[ ] Los casos criticos tienen validacion o test.
[ ] Los pendientes estan documentados.
```

---

## 6. Errores comunes

### 6.1 Disenar todo el sistema antes del modulo

Problema:

```txt
Intentar resolver ventas, inventario, pagos, reportes y devoluciones al mismo tiempo.
```

Correccion:

```txt
Definir el modulo actual y registrar lo demas como pendiente o modulo separado.
```

### 6.2 Meter reglas de negocio en el controlador

Problema:

```txt
El controlador valida stock, calcula total, crea registros y decide estados.
```

Correccion:

```txt
El controlador recibe la solicitud. El servicio ejecuta el caso de uso.
```

### 6.3 Crear abstracciones antes de necesitarlas

Problema:

```txt
Crear interfaces, factories, eventos, adapters y capas extra sin uso real.
```

Correccion:

```txt
Crear una abstraccion solo cuando reduzca duplicacion, aisle una dependencia real o aclare una regla importante.
```

### 6.4 Mezclar estado e historial

Problema:

```txt
Usar una sola tabla para saber el stock actual y tambien reconstruir movimientos.
```

Correccion:

```txt
Separar stock actual de movimientos historicos.
```

### 6.5 Implementar casos raros antes del flujo principal

Problema:

```txt
Disenar devoluciones, anulaciones y multiples escenarios antes de registrar una venta simple.
```

Correccion:

```txt
Primero terminar el camino feliz. Luego cubrir los casos criticos.
```

### 6.6 No escribir decisiones

Problema:

```txt
Las reglas quedan en conversaciones o memoria.
```

Correccion:

```txt
Toda regla importante debe estar documentada, implementada o probada.
```

### 6.7 Acoplar modulos directamente

Problema:

```txt
Un modulo modifica internamente datos de otro modulo sin contrato claro.
```

Correccion:

```txt
Usar servicios, repositorios, eventos o interfaces definidos como puntos de contacto.
```

---

## 7. Regla final

Construye el modulo mas pequeno que resuelva correctamente el flujo principal, con limites claros, datos bien definidos y errores criticos controlados.

No disenes todo el sistema. No ignores el futuro. Documenta lo que se posterga y avanza por iteraciones.

Una buena metodologia no aumenta la complejidad: la ordena.
