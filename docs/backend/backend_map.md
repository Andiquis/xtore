# 🏪 Backend Map: Estructura por Dominio

## 📁 Estructura General

```
src/
│
├── core/                          # 🔧 Infraestructura global del sistema
├── shared/                        # 🧰 Utilidades reutilizables
├── modules/                       # 🧠 Dominio del negocio (el supermercado real)
├── integrations/                  # 🌐 Sistemas externos
└── main.ts
```

---

### 🔧 1. CORE (Núcleo del Sistema)

**Descripción:** Aquí vive lo que el sistema necesita para funcionar, pero no es negocio.

```
core/
  config/            # Configuración (env, app, db)
  database/          # Conexión a base de datos
  guards/            # Seguridad global (JWT, roles base)
  interceptors/      # Transformación de respuestas
  filters/           # Manejo de errores globales
  decorators/        # Decoradores personalizados
  exceptions/        # Errores globales
```

> 🧠 **Idea:** Esto no es el supermercado. Es la estructura del edificio.

---

### 🧰 2. SHARED (Compartido)

**Descripción:** Cosas pequeñas reutilizables que NO son negocio.

```
shared/
  utils/             # Funciones (fechas, cálculos, etc.)
  constants/         # Constantes del sistema
  validators/        # Validaciones genéricas
  base-classes/      # Clases base (ej: BaseEntity)
```

> 🧠 **Idea:** Herramientas, no reglas del negocio.

---

### 🧠 3. MODULES (Dominio del Negocio Real)

**Descripción:** Aquí está TODO lo importante del supermercado. Cada carpeta es una parte del negocio real.

#### 💰 VENTAS (Caja)

```
modules/sales/
  dominio/
    entidades/
      venta.entidad.ts
  aplicacion/
    casos-de-uso/
      crear-venta.ts
      cancelar-venta.ts
  infraestructura/
    prisma/
    mapeadores/
  presentacion/
    controladores/
      ventas.controlador.ts
  sales.module.ts
```

> 🧠 **Significado:**
>
> - **Dominio:** Qué es una venta.
> - **Aplicación:** Qué se puede hacer con una venta.
> - **Infraestructura:** Cómo se guarda en la base de datos.
> - **Presentación:** Cómo se expone por API.

#### 📦 INVENTARIO (Stock)

```
modules/inventory/
  dominio/
    entidades/
      producto.entidad.ts
      stock.entidad.ts
  aplicacion/
    casos-de-uso/
      agregar-stock.ts
      reducir-stock.ts
      verificar-stock.ts
  infraestructura/
    prisma/
  presentacion/
    controladores/
      inventario.controlador.ts
  inventory.module.ts
```

> 🧠 **Idea:** Todo lo que entra y sale del almacén.

#### 🛒 COMPRAS (A Proveedores)

```
modules/purchases/
  dominio/
    entidades/
      compra.entidad.ts
  aplicacion/
    casos-de-uso/
      crear-compra.ts
  infraestructura/
    prisma/
  presentacion/
    controladores/
      compras.controlador.ts
  purchases.module.ts
```

> 🧠 **Idea:** Cuando el supermercado compra mercancía.

#### 🚚 PROVEEDORES

```
modules/suppliers/
  dominio/
    entidades/
      proveedor.entidad.ts
  aplicacion/
    casos-de-uso/
  infraestructura/
    prisma/
  presentacion/
    controladores/
      proveedores.controlador.ts
  suppliers.module.ts
```

> 🧠 **Idea:** Quién abastece el supermercado.

#### 👤 CLIENTES

```
modules/customers/
  dominio/
    entidades/
      cliente.entidad.ts
  aplicacion/
    casos-de-uso/
  infraestructura/
    prisma/
  presentacion/
    controladores/
      clientes.controlador.ts
  customers.module.ts
```

#### 💳 PAGOS (Dinero)

```
modules/payments/
  dominio/
    entidades/
      pago.entidad.ts
  aplicacion/
    casos-de-uso/
      registrar-pago.ts
  infraestructura/
    prisma/
  presentacion/
    controladores/
      pagos.controlador.ts
  payments.module.ts
```

> 🧠 **Idea:** Todo movimiento de dinero.

#### 🔐 AUTENTICACIÓN (Login y Permisos)

```
modules/authentication/
  dominio/
  aplicacion/
  infraestructura/
  presentacion/
  auth.module.ts
```

> **Incluye:**
>
> - Login
> - Registro
> - Roles (cajero, admin, etc.)
> - Permisos

---

### 🌐 4. INTEGRACIONES (Mundo Externo)

**Descripción:** Todo lo que no controlas directamente.

```
integrations/
  pasarela-pagos/
  whatsapp-bot/
  sistema-fiscal/
```

---

### 🔥 5. FLUJO REAL DEL NEGOCIO

**Cuando se hace una venta:**

1. **Ventas (sales):** Crea venta.
2. **Inventario (inventory):** Descuenta stock.
3. **Pagos (payments):** Registra dinero.
4. **Clientes (customers):** Actualiza historial.

---

### 🧠 6. Lo Más Importante de Todo Esto

- **modules = EL NEGOCIO REAL:** No depende de pantallas.
- **presentacion = API:** Solo expone datos.
- **aplicacion = Lógica de Acciones:** Qué se puede hacer.
- **dominio = Reglas del Mundo Real:** Qué es cada cosa.
- **infraestructura = Tecnología:** Base de datos, Prisma, etc.

---

### ⚠️ 7. Qué Ganas con Esta Estructura

- Puedes hacer app web, móvil o kiosko sin cambiar backend.
- El sistema escala sin volverse caos.
- Cada cosa tiene un lugar lógico.
- Es fácil de mantener incluso con muchos desarrolladores.

---

### 🧭 8. Regla Final (Muy Importante)

> **El supermercado existe aunque no haya interfaz.**
