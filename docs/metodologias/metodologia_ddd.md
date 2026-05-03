# Metodologia completa de programacion con Domain-Driven Design

## 1. Objetivo

Esta metodologia sirve para construir software usando Domain-Driven Design, tambien conocido como DDD, de forma practica y aplicable.

DDD se usa cuando el problema de negocio tiene reglas importantes, conceptos propios, procesos cambiantes o decisiones que no pueden quedar escondidas en controladores, consultas SQL o pantallas.

El objetivo no es crear muchas capas por formalidad. El objetivo es que el codigo represente el dominio real del negocio y pueda evolucionar sin volverse confuso.

Al aplicar esta metodologia, el desarrollador debe lograr:

- Entender el dominio antes de programar.
- Usar el mismo lenguaje que usan los expertos del negocio.
- Separar el sistema en contextos claros.
- Modelar reglas dentro del dominio, no dispersas por toda la aplicacion.
- Crear codigo mantenible, expresivo y facil de probar.
- Evitar que la base de datos o el framework controlen el diseno del negocio.

---

## 2. Cuando usar DDD

DDD conviene cuando:

- El negocio tiene reglas complejas.
- Hay muchos conceptos que se parecen, pero significan cosas distintas segun el area.
- El sistema crece por modulos.
- Los errores de negocio son costosos.
- Se necesita mantener el software por mucho tiempo.
- Hay varias areas con procesos diferentes.
- El codigo actual mezcla reglas, datos, UI y persistencia.

DDD puede ser excesivo cuando:

- El sistema es solo CRUD simple.
- No hay reglas importantes.
- El proyecto es pequeno y temporal.
- El dominio no cambia.
- La mayor complejidad esta en integraciones tecnicas, no en negocio.

Regla practica:

```txt
Si el problema dificil esta en las reglas del negocio, DDD ayuda.
Si el problema dificil esta solo en guardar y mostrar datos, DDD completo puede ser demasiado.
```

---

## 3. Principios base

### 3.1 El dominio manda

El centro del sistema no es la base de datos, el framework ni la interfaz. El centro es el dominio: las reglas, conceptos y procesos reales del negocio.

### 3.2 Lenguaje ubicuo

El equipo tecnico y el negocio deben usar las mismas palabras para hablar del sistema.

Si el negocio dice `pedido`, el codigo no deberia llamarlo `orden_tmp`, `registro`, `item_data` o `transaction_model` sin razon clara.

### 3.3 Separacion por contextos

Una palabra puede significar cosas distintas en partes diferentes del negocio.

Ejemplo:

```txt
Producto en ventas:
- nombre
- precio
- descuento
- disponibilidad

Producto en inventario:
- sku
- stock
- almacen
- movimientos
```

DDD evita forzar un solo modelo gigante para todo. En su lugar, separa el sistema en bounded contexts.

### 3.4 Modelo rico

Las entidades del dominio deben contener comportamiento, no solo datos.

Mal:

```txt
Venta.total = total_calculado_fuera
Venta.estado = "confirmada"
```

Bien:

```txt
venta.confirmar()
venta.calcular_total()
venta.agregar_producto(producto, cantidad)
```

### 3.5 Dependencias hacia el dominio

La infraestructura depende del dominio. El dominio no debe depender de la base de datos, HTTP, frameworks, colas, servicios externos ni detalles de UI.

---

## 4. Capas recomendadas

DDD suele funcionar mejor con una arquitectura por capas o arquitectura hexagonal.

```txt
Interfaz / Entrada
  -> Aplicacion
    -> Dominio
    -> Infraestructura
```

### 4.1 Capa de dominio

Contiene el conocimiento principal del negocio.

Incluye:

- Entidades.
- Value objects.
- Agregados.
- Domain services.
- Domain events.
- Reglas de negocio.
- Interfaces de repositorio.

No debe contener:

- SQL.
- HTTP.
- Serializacion de API.
- Frameworks.
- Acceso directo a archivos.
- Llamadas a servicios externos.

### 4.2 Capa de aplicacion

Coordina casos de uso.

Incluye:

- Application services.
- Commands.
- Queries.
- DTOs de entrada y salida.
- Manejo de transacciones.
- Orquestacion entre repositorios, dominio e infraestructura.

No debe contener reglas profundas del negocio. Debe decir que hacer, no definir por que una regla es valida.

### 4.3 Capa de infraestructura

Implementa detalles tecnicos.

Incluye:

- Repositorios concretos.
- ORM.
- Consultas SQL.
- Clientes HTTP.
- Publicadores de eventos.
- Adaptadores de servicios externos.
- Implementaciones de almacenamiento.

### 4.4 Capa de interfaz

Recibe solicitudes y entrega respuestas.

Incluye:

- Controladores HTTP.
- CLI.
- Workers.
- Listeners.
- Resolvers GraphQL.
- Handlers de eventos externos.

---

## 5. Proceso completo para desarrollar con DDD

### Fase 1: Explorar el dominio

### Proposito

Entender el negocio antes de escribir codigo.

### Acciones

- Hablar con expertos del dominio.
- Revisar procesos reales.
- Identificar reglas, excepciones y estados.
- Detectar palabras importantes.
- Separar lo que es negocio de lo que es detalle tecnico.

### Preguntas clave

- Que problema resuelve este modulo?
- Que decisiones de negocio toma?
- Que conceptos son centrales?
- Que cosas pueden cambiar?
- Que errores no deben ocurrir?
- Quien tiene autoridad sobre cada dato?

### Entregable

Un glosario inicial:

```txt
Venta: operacion comercial confirmada por un cliente.
DetalleVenta: producto y cantidad incluidos en una venta.
Inventario: disponibilidad actual de productos.
MovimientoInventario: evento que explica un cambio de stock.
```

---

### Fase 2: Crear lenguaje ubicuo

### Proposito

Crear un vocabulario comun entre negocio, codigo, documentacion y pruebas.

### Acciones

- Elegir nombres oficiales para conceptos importantes.
- Evitar sinonimos innecesarios.
- Corregir nombres tecnicos que no expresan negocio.
- Usar los mismos nombres en clases, metodos, tests y documentacion.

### Reglas

- Una palabra importante debe tener una definicion.
- Una definicion debe ser valida dentro de un contexto.
- Si una palabra cambia de significado, probablemente hay otro bounded context.

### Ejemplo

```txt
Pedido en ventas:
- Solicitud de compra realizada por un cliente.

Pedido en compras:
- Solicitud enviada a un proveedor.
```

En este caso no conviene un unico modelo `Pedido` para todo el sistema.

---

### Fase 3: Identificar bounded contexts

### Proposito

Dividir el sistema segun areas de significado, no solo segun tablas.

Un bounded context es un limite donde un modelo tiene sentido propio y sus palabras tienen significado estable.

### Acciones

- Agrupar reglas que cambian juntas.
- Identificar equipos, areas o procesos independientes.
- Detectar palabras con significados diferentes.
- Definir relaciones entre contextos.

### Ejemplo

```txt
Contextos:
- Ventas
- Inventario
- Pagos
- Clientes
- Facturacion
- Reportes
```

### Plantilla

```txt
Bounded Context: [nombre]

Responsabilidad:
- ...

Conceptos principales:
- ...

No pertenece:
- ...

Se comunica con:
- ...
```

### Regla practica

No crees un modelo universal para todo el sistema. Crea modelos claros dentro de limites claros.

---

### Fase 4: Definir el context map

### Proposito

Explicar como se relacionan los contextos.

### Tipos de relacion utiles

- **Customer/Supplier:** un contexto depende de otro que le provee datos o capacidades.
- **Conformist:** un contexto acepta el modelo de otro sin transformarlo.
- **Anti-corruption layer:** un contexto traduce el modelo externo para no contaminar su dominio.
- **Shared kernel:** dos contextos comparten una parte pequena del modelo.
- **Published language:** los contextos se comunican mediante contratos publicados.

### Ejemplo

```txt
Ventas -> Inventario
Relacion: Customer/Supplier
Ventas necesita validar disponibilidad y descontar stock.

Ventas -> Pagos
Relacion: Published Language
Ventas solicita confirmacion usando un contrato definido.

Facturacion -> Ventas
Relacion: Anti-corruption Layer
Facturacion traduce ventas confirmadas a documentos fiscales.
```

### Regla practica

Todo contacto entre contextos debe tener contrato claro. Si un contexto conoce demasiados detalles internos de otro, hay acoplamiento.

---

### Fase 5: Modelar entidades

### Proposito

Representar objetos del dominio que tienen identidad y ciclo de vida.

Una entidad importa por quien es, no solo por sus atributos.

### Ejemplo

```txt
Cliente
- id
- nombre
- documento
- estado

Venta
- id
- cliente_id
- estado
- total
- fecha
```

Aunque dos ventas tengan los mismos datos, son ventas distintas porque tienen identidades distintas.

### Reglas para entidades

- Deben proteger sus invariantes.
- Deben exponer metodos con lenguaje del negocio.
- No deben permitir cambios invalidos desde afuera.
- No deben depender de infraestructura.

### Ejemplo de comportamiento

```txt
venta.agregar_item(producto, cantidad)
venta.confirmar()
venta.cancelar(motivo)
```

---

### Fase 6: Modelar value objects

### Proposito

Representar conceptos que no tienen identidad propia y se comparan por valor.

### Ejemplos

```txt
Dinero
- monto
- moneda

RangoFecha
- inicio
- fin

Direccion
- ciudad
- calle
- referencia
```

### Reglas para value objects

- Deben ser inmutables cuando sea posible.
- Deben validar su propia consistencia.
- Deben compararse por valor.
- Deben evitar valores primitivos dispersos.

### Ejemplo

Mal:

```txt
precio = 10
moneda = "PEN"
```

Bien:

```txt
precio = Dinero(10, "PEN")
```

---

### Fase 7: Definir agregados

### Proposito

Agrupar entidades y value objects que deben mantenerse consistentes como una unidad.

Un agregado tiene una raiz, llamada aggregate root. Todo cambio importante debe pasar por esa raiz.

### Ejemplo

```txt
Aggregate Root: Venta

Contiene:
- DetalleVenta
- Totales
- EstadoVenta

Reglas:
- No puede confirmarse sin items.
- No puede modificarse si ya esta anulada.
- El total debe coincidir con la suma de detalles.
```

### Reglas para agregados

- Un agregado debe ser lo mas pequeno posible.
- La raiz protege las reglas internas.
- Otros objetos no deben modificar entidades internas directamente.
- Las transacciones fuertes deben ocurrir dentro del agregado.
- Entre agregados, preferir consistencia eventual cuando sea razonable.

### Error comun

Crear un agregado gigante:

```txt
Empresa -> Sucursales -> Usuarios -> Productos -> Inventario -> Ventas -> Pagos
```

Esto produce acoplamiento, transacciones pesadas y codigo dificil de cambiar.

---

### Fase 8: Definir repositorios

### Proposito

Proveer una forma de obtener y guardar agregados sin que el dominio conozca la base de datos.

### Reglas

- Normalmente se crea un repositorio por aggregate root.
- El repositorio trabaja con objetos del dominio.
- La interfaz del repositorio pertenece al dominio o aplicacion.
- La implementacion concreta pertenece a infraestructura.

### Ejemplo

```txt
VentaRepository
- find_by_id(venta_id)
- save(venta)
- next_identity()
```

### Evitar

```txt
VentaRepository.update_total_sql()
VentaRepository.get_raw_join_for_report()
VentaRepository.change_status_without_domain()
```

Los repositorios no deben saltarse reglas del agregado.

---

### Fase 9: Definir servicios de dominio

### Proposito

Representar reglas de negocio que no pertenecen naturalmente a una sola entidad o value object.

### Cuando usar un domain service

Usalo si:

- La regla involucra varias entidades o agregados.
- La operacion es claramente de negocio.
- Ponerla dentro de una entidad la haria artificial.

### Ejemplo

```txt
CalculadorPrecio
- calcular_total(items, cliente, promociones)

PoliticaDescuento
- obtener_descuento(cliente, producto, fecha)
```

### Regla practica

No uses domain services como lugar para meter todo. Si una regla pertenece claramente a una entidad, debe quedarse en la entidad.

---

### Fase 10: Definir application services

### Proposito

Coordinar un caso de uso completo.

Un application service recibe una intencion externa, carga agregados, ejecuta reglas del dominio, guarda cambios y devuelve una respuesta.

### Ejemplo

```txt
RegistrarVentaService
1. Recibe RegistrarVentaCommand.
2. Carga productos necesarios.
3. Crea Venta.
4. Agrega items.
5. Confirma venta.
6. Guarda venta.
7. Publica eventos.
8. Devuelve resultado.
```

### Reglas

- Puede manejar transacciones.
- Puede llamar repositorios.
- Puede llamar servicios de dominio.
- No debe contener reglas profundas que pertenezcan al dominio.
- No debe depender de controladores.

---

### Fase 11: Definir domain events

### Proposito

Representar algo importante que ocurrio en el dominio.

Los eventos permiten desacoplar reacciones secundarias.

### Ejemplos

```txt
VentaConfirmada
StockDescontado
PagoAprobado
ClienteRegistrado
ProductoDesactivado
```

### Reglas

- El nombre debe estar en pasado.
- Debe representar algo que ya ocurrio.
- Debe contener datos necesarios para reaccionar.
- No debe exponer detalles internos innecesarios.
- No debe reemplazar reglas que deben cumplirse dentro del agregado.

### Ejemplo de uso

```txt
Cuando ocurre VentaConfirmada:
- Inventario descuenta stock.
- Facturacion prepara comprobante.
- Reportes actualiza metricas.
```

---

### Fase 12: Disenar comandos y consultas

### Proposito

Separar acciones que cambian el sistema de lecturas que solo consultan informacion.

### Commands

Representan una intencion de cambio.

```txt
RegistrarVentaCommand
- cliente_id
- items
- metodo_pago
```

### Queries

Representan una consulta.

```txt
BuscarVentasQuery
- fecha_inicio
- fecha_fin
- estado
```

### Regla practica

Los comandos deben pasar por reglas del dominio. Las consultas pueden usar modelos de lectura optimizados, siempre que no modifiquen el dominio.

---

### Fase 13: Implementar infraestructura

### Proposito

Conectar el dominio con persistencia, servicios externos y tecnologia concreta.

### Acciones

- Implementar repositorios concretos.
- Mapear entidades del dominio a tablas o documentos.
- Implementar publicadores de eventos.
- Implementar adaptadores externos.
- Mantener el dominio libre de detalles tecnicos.

### Ejemplo de estructura

```txt
ventas/
  domain/
    entities/
    value_objects/
    aggregates/
    events/
    repositories/
    services/
  application/
    commands/
    queries/
    services/
    dto/
  infrastructure/
    persistence/
    repositories/
    event_bus/
    external/
  interface/
    controllers/
    handlers/
```

---

### Fase 14: Probar el modelo

### Proposito

Verificar reglas del negocio sin depender de toda la aplicacion.

### Tests prioritarios

- Tests de entidades.
- Tests de value objects.
- Tests de agregados.
- Tests de domain services.
- Tests de application services.
- Tests de integracion para repositorios.

### Ejemplos de pruebas

```txt
- Una venta no puede confirmarse sin items.
- Una venta anulada no puede modificarse.
- Un precio no puede tener monto negativo.
- Un descuento no puede superar el total.
- Confirmar una venta genera VentaConfirmada.
```

### Regla practica

Las reglas de negocio importantes deben poder probarse sin servidor HTTP, sin UI y preferiblemente sin base de datos real.

---

## 6. Flujo recomendado de implementacion

Usa este orden para desarrollar un modulo con DDD:

1. Definir bounded context.
2. Crear glosario del lenguaje ubicuo.
3. Identificar casos de uso principales.
4. Modelar entidades y value objects.
5. Definir agregados y aggregate roots.
6. Escribir reglas e invariantes.
7. Crear eventos de dominio necesarios.
8. Definir interfaces de repositorio.
9. Crear application services.
10. Implementar infraestructura.
11. Crear controladores o puntos de entrada.
12. Probar dominio.
13. Probar aplicacion.
14. Probar integracion tecnica.
15. Iterar nombres, limites y responsabilidades.

---

## 7. Plantilla para un modulo DDD

```txt
Modulo / Bounded Context:

Responsabilidad:
- ...

Lenguaje ubicuo:
- Concepto:
- Definicion:

Casos de uso:
- ...

Entidades:
- ...

Value Objects:
- ...

Agregados:
- Aggregate Root:
- Entidades internas:
- Invariantes:

Repositorios:
- ...

Servicios de dominio:
- ...

Eventos de dominio:
- ...

Application Services:
- ...

Dependencias externas:
- ...

Casos borde criticos:
- ...

Pendientes:
- ...
```

---

## 8. Ejemplo resumido: modulo de ventas

### Bounded context

```txt
Ventas
```

### Responsabilidad

Registrar ventas, calcular totales, controlar estados comerciales y emitir eventos cuando una venta se confirma o anula.

### No pertenece

- Control exacto de stock.
- Procesamiento interno del pago.
- Emision fiscal detallada.
- Reportes analiticos.

### Lenguaje ubicuo

```txt
Venta: operacion comercial creada a partir de items comprados por un cliente.
ItemVenta: producto, cantidad y precio aplicado dentro de una venta.
VentaConfirmada: evento que indica que la venta ya fue aceptada.
VentaAnulada: evento que indica que la venta fue cancelada.
```

### Aggregate root

```txt
Venta
```

### Entidades internas

```txt
ItemVenta
```

### Value objects

```txt
Dinero
Cantidad
EstadoVenta
```

### Invariantes

```txt
- Una venta debe tener al menos un item para confirmarse.
- Una cantidad debe ser mayor que cero.
- El total debe ser igual a la suma de subtotales.
- Una venta confirmada no puede volver a borrador.
- Una venta anulada no puede modificarse.
```

### Repositorio

```txt
VentaRepository
- find_by_id(id)
- save(venta)
- next_identity()
```

### Application service

```txt
RegistrarVentaService
- recibe RegistrarVentaCommand
- crea Venta
- agrega items
- confirma Venta
- guarda Venta
- publica VentaConfirmada
```

### Eventos

```txt
VentaConfirmada
VentaAnulada
```

---

## 9. Criterios de calidad

Un modulo DDD esta bien construido cuando:

- El dominio se entiende leyendo el codigo.
- Los nombres coinciden con el lenguaje del negocio.
- Las reglas importantes estan en entidades, agregados o servicios de dominio.
- Los controladores no contienen reglas de negocio.
- La persistencia no decide estados ni salta invariantes.
- Los agregados son pequenos y tienen limites claros.
- Cada bounded context tiene responsabilidad definida.
- La comunicacion entre contextos tiene contratos claros.
- Las reglas criticas tienen tests.
- Los value objects evitan datos primitivos ambiguos.
- Los eventos representan hechos reales del negocio.
- La infraestructura puede cambiar sin reescribir el dominio.

---

## 10. Errores comunes

### 10.1 Creer que DDD es solo carpetas

Problema:

```txt
Crear domain/, application/ e infrastructure/ sin modelar el negocio.
```

Correccion:

```txt
Empezar por lenguaje ubicuo, reglas, contextos y agregados.
```

### 10.2 Crear entidades anemicas

Problema:

```txt
Las entidades solo tienen getters y setters. Las reglas viven en servicios gigantes.
```

Correccion:

```txt
Mover comportamiento e invariantes al modelo de dominio.
```

### 10.3 Hacer agregados gigantes

Problema:

```txt
Un agregado contiene medio sistema.
```

Correccion:

```txt
Crear agregados pequenos y coordinar procesos entre agregados desde aplicacion o eventos.
```

### 10.4 Dejar que el ORM disene el dominio

Problema:

```txt
Las clases existen solo porque hay tablas.
```

Correccion:

```txt
Modelar primero reglas y comportamiento. Luego mapear a persistencia.
```

### 10.5 Usar eventos para todo

Problema:

```txt
Cada cambio pequeno genera eventos innecesarios.
```

Correccion:

```txt
Crear eventos solo para hechos importantes que otros procesos necesitan conocer.
```

### 10.6 Confundir application service con domain service

Problema:

```txt
El application service calcula reglas profundas del negocio.
```

Correccion:

```txt
El application service coordina. El dominio decide.
```

### 10.7 Compartir modelos entre contextos

Problema:

```txt
Ventas, inventario y facturacion usan la misma clase Producto para todo.
```

Correccion:

```txt
Cada bounded context puede tener su propio modelo de Producto segun su significado.
```

---

## 11. Checklist de implementacion DDD

```txt
[ ] El bounded context esta definido.
[ ] Existe lenguaje ubicuo documentado.
[ ] Los casos de uso principales estan claros.
[ ] Las entidades tienen identidad y comportamiento.
[ ] Los value objects validan conceptos importantes.
[ ] Los agregados protegen invariantes.
[ ] Hay repositorios por aggregate root.
[ ] Los application services coordinan casos de uso.
[ ] Las reglas complejas estan en dominio.
[ ] Los eventos representan hechos importantes.
[ ] La infraestructura no contamina el dominio.
[ ] Los controladores son delgados.
[ ] Las pruebas cubren reglas criticas.
[ ] La comunicacion con otros contextos tiene contrato claro.
```

---

## 12. Regla final

DDD no consiste en escribir mas codigo. Consiste en poner el conocimiento del negocio en el lugar correcto.

Empieza por el lenguaje, define limites claros, modela reglas reales y deja que la tecnologia sea un detalle externo al dominio.

Si una persona puede leer el modelo y entender como funciona el negocio, vas por buen camino.
