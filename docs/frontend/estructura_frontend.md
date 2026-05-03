src
│
├ app
│   │
│   ├ core
│   │   ├ guards
│   │   ├ interceptors
│   │   └ services
│   │
│   ├ shared
│   │   ├ components
│   │   ├ directives
│   │   └ pipes
│   │
│   ├ layouts
│   │   ├ auth-layout
│   │   ├ dashboard-layout
│   │
│   ├ features
│   │   ├ auth
│   │   ├ productos
│   │   ├ inventario
│   │   ├ ventas
│   │
│   ├ routes
│   │   app.routes.ts
│   │
│   ├ app.component.ts
│   └ app.config.ts
│
├ environment
│
├ index.html
├ main.ts
└ styles.scss




src/
│
├ core/                # servicios globales (singleton)
│   ├ services/
│   │   auth.service.ts
│   │   api.service.ts
│   │
│   ├ guards/
│   │   auth.guard.ts
│   │
│   ├ interceptors/
│   │   token.interceptor.ts
│   │
│   core.module.ts
│
├ shared/              # componentes reutilizables
│   ├ components/
│   │   button/
│   │   modal/
│   │   table/
│   │
│   ├ pipes/
│   ├ directives/
│   ├ shared.module.ts
│
├ layouts/             # estructuras visuales
│   ├ auth-layout/
│   ├ dashboard-layout/
│   ├ public-layout/
│
├ features/            # módulos funcionales (lo importante)
│   ├ auth/
│   │   pages/
│   │   components/
│   │   services/
│   │   auth.routes.ts
│   │
│   ├ productos/
│   │   pages/
│   │   components/
│   │   services/
│   │   productos.routes.ts
│   │
│   ├ inventario/
│   │
│   ├ ventas/
│
├ models/              # interfaces y tipos
│   producto.model.ts
│   usuario.model.ts
│
├ routes/              # rutas principales
│   app.routes.ts
│
├ environments/
│
├ app.component.ts
├ main.ts


ng generate component panel-layout

ng g c landing-layout \
--standalone \
--skip-tests