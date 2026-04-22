# 🧠 Guía rápida: `core/database/` (estructura clara y sin caos)

> *Aquí vive todo lo que conecta, construye y siembra datos.*

---

## 🌌 📁 Estructura recomendada

```txt
src/
 └── core/
      └── database/
           ├── prisma/
           │     ├── prisma.service.ts
           │     └── prisma.module.ts
           │
           ├── typeorm/
           │     ├── typeorm.module.ts
           │     ├── typeorm.config.ts
           │     └── migrations/
           │
           ├── seeds/
           │     ├── seed.ts
           │     ├── roles.seed.ts
           │     └── users.seed.ts
           │
           └── migrations/   (opcional si no usas TypeORM)
```

---

## 🧩 ¿Qué es `core/database`?

Es el **núcleo de acceso a datos**.

Contiene TODO lo que:

* 🔌 conecta con bases de datos
* 🧱 define estructura (migraciones)
* 🌱 inserta datos iniciales (seeds)

---

## 🔥 Regla de oro

```
¿Esto toca la base de datos?
   → Sí → database/
   → No → modules/
```

---

## 🧱 Qué va dentro

### 🔌 Conexión

* PrismaService
* TypeOrmModule
* Configuración de DB

---

### 🧱 Estructura

* Migraciones
* Scripts de esquema

---

### 🌱 Seeds

* Datos iniciales (roles, admin, catálogos)

```txt
seeds/
 ├── seed.ts          → orquestador
 ├── roles.seed.ts    → datos de roles
 └── users.seed.ts    → usuario inicial
```

---

## 🧬 Rol de cada parte

| Carpeta       | Función                  |
| ------------- | ------------------------ |
| `prisma/`     | Cliente y conexión       |
| `typeorm/`    | Configuración ORM        |
| `migrations/` | Crear/actualizar tablas  |
| `seeds/`      | Insertar datos iniciales |

---

## 🚫 Qué NO va aquí

* ❌ lógica de negocio
* ❌ controladores
* ❌ servicios de dominio
* ❌ features (auth, users, etc.)

Eso vive en:

```txt
src/modules/
```

---

## 🧠 Flujo mental

```txt
Controller
   ↓
Service (lógica)
   ↓
Database (Prisma / TypeORM)
   ↓
Base de datos
```

---

## ⚠️ Errores comunes

* ❌ mezclar seeds dentro de `prisma/`
* ❌ crear múltiples clientes de DB
* ❌ meter lógica en `database/`
* ❌ usar `seed.ts` gigante sin dividir

---

## 🧠 Frase final

> *“La base de datos se conecta, se construye… y se siembra.
> Todo en su lugar, o el caos llega.”*

---
