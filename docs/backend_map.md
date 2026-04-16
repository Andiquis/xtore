backend
src/
│
├── main.ts              🚀 Punto de arranque
├── app.module.ts        🧩 Módulo raíz
│
├── auth/                🔐 Autenticación
│   ├── auth.controller.ts
│   ├── auth.service.ts
│   ├── auth.module.ts
│   ├── strategies/
│   └── guards/
│
├── users/               👤 Usuarios
│   ├── users.controller.ts
│   ├── users.service.ts
│   ├── users.module.ts
│   └── entities/
│
├── common/              🧱 Reutilizable
│   ├── guards/
│   ├── interceptors/
│   ├── decorators/
│   └── filters/
│
├── config/              ⚙️ Configuración
├── database/            🗄️ Conexión DB
└── shared/              ♻️ Código compartido