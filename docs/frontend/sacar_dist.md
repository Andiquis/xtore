# Generación de Build de Producción en Angular

Esta guía resume los pasos y configuraciones necesarias para preparar tu aplicación Angular para producción, incluyendo el manejo de environments (variables de entorno).

---

## 1. Configurar Entornos (`environments`)

Asegúrate de tener tus archivos de entorno dentro de tu carpeta `src/`. Por lo general, se ven así:

```text
src/
└── environment/
    ├── environment.ts        # Entorno base y desarrollo
    └── environment.prod.ts   # Producción
```

### Ejemplo de Contenido Básico

**`src/environment/environment.ts`** (Local/Desarrollo):
```typescript
export const environment = {
  production: false,
  apiUrl: 'http://localhost:3000/api' // URL de tu backend local
};
```

**`src/environment/environment.prod.ts`** (Producción):
```typescript
export const environment = {
  production: true,
  apiUrl: 'https://mi-dominio.com/api' // URL de tu backend de producción
};
```

---

## 2. Configuración en `angular.json`

Para asegurar que tu código toma las variables de producción al compilar, es necesario decirle a Angular que reemplace `environment.ts` por `environment.prod.ts` al construir en modo producción.

Abre tu archivo `angular.json` y localiza la ruta:
`projects` -> `frontend` -> `architect` -> `build` -> `configurations` -> `production`.

Añade el arreglo `"fileReplacements"`:

```json
"production": {
  "fileReplacements": [
    {
      "replace": "src/environment/environment.ts",
      "with": "src/environment/environment.prod.ts"
    }
  ],
  "budgets": [
    {
      "type": "initial",
      "maximumWarning": "500kB",
      "maximumError": "1MB"
    },
    {
      "type": "anyComponentStyle",
      "maximumWarning": "30kB", // <-- Incrementado para evitar errores si usas muchas fuentes web pesadas
      "maximumError": "50kB"
    }
  ],
  "outputHashing": "all"
}
```

> **Nota sobre budgets**: Se ha modificado el valor de `anyComponentStyle` (Originalmente 4kB y 8kB) a 30kB y 50kB porque las fuentes online o los estilos SCSS recargados hacían fallar el build superando el presupuesto original.

---

## 3. Generar el Compilado para Producción

En el directorio raíz de la carpeta base del proyecto Angular (donde se encuentra `package.json`), ejecuta el comando de construcción:

```bash
pnpm run build
```
*(Si usas directamente Angular CLI es equivalente a ejecutar `ng build`)*.

En las versiones modernas de Angular, construir el proyecto genera automáticamente el *bundle* en modo producción (usando las configuraciones de producción que acabamos de poner en tu `angular.json`).

### Resultado Final

Al terminar con un "Exit code 0", el código compilado, optimizado, y listo para el servidor, se generará en la siguiente ruta:

👉 `/home/andi/vXcode/xtore/frontend/dist/frontend/browser/`

Ya solo tienes que subir todo el contenido de esa carpeta a tu servicio de hospedaje web (cPanel, Nginx, Vercel, Firebase Hosting, Netlify, etc.).
