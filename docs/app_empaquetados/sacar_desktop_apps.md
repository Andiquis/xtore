# Generación de Instaladores (.deb y .exe) con Electron

Esta guía resume los pasos necesarios para empaquetar tu aplicación web en instaladores nativos de computadora para Windows (`.exe`) y Linux (`.deb`).

---

## 1. Mantener sincronizado el código web

Es idéntico al proceso que usaste en móvil. Antes de generar una nueva versión de escritorio, **primero debes tener la última versión de tu frontend**.

Compila el frontend en producción:
```bash
cd /home/andi/vXcode/xtore/frontend
pnpm run build
```

---

## 2. Construir los Instaladores (Terminal)

Ya he preparado el "motor" en la carpeta `/desktop` para que haga el trabajo automatizado por ti. ¡No necesitas mover manualmente los archivos de Angular!

Abre una terminal y dirígete al directorio de escritorio:
```bash
cd /home/andi/vXcode/xtore/desktop
```

### ✅ Para compilar el instalador Linux (`.deb`)
Este es el proceso más rápido si tu sistema local es Ubuntu/Debian:
```bash
pnpm run build:linux
```
> *(La terminal copiará tu frontend a la carpeta interna `frontend_dist` y luego electron-builder ensamblará el instalador completo).*

### ✅ Para compilar el instalador Windows (`.exe`)
Ejecuta el siguiente comando (puede demorar un poco más la primera vez mientras el empaquetador descarga las herramientas de compilación NSIS):
```bash
pnpm run build:win
```
> [!WARNING]
> Dado que estás programando desde el sistema operativo Linux, para poder empaquetar software cerrado de Windows (`.exe`), el motor requerirá el paquete `wine` nativo de ubuntu (versión 32 bits). Si lanza un error de "wine is required" o "wine32 is missing", instálalo corriendo en tu terminal: 
> `sudo dpkg --add-architecture i386 && sudo apt update && sudo apt install -y wine32:i386`

### ✅ Para compilar ambos a la vez
Si estás apurado y vas a lanzar una versión para los dos sistemas hoy mismo:
```bash
pnpm run build:all
```

---

## 📍 ¿Dónde encuentro el resultado?

Una vez terminado el proceso exitosamente, los instaladores (ej. `Xtore-1.0.0.exe` o `xtore-desktop_1.0.0_amd64.deb`) se almacenarán organizadamente adentro de tu proyecto en:

👉 `/home/andi/vXcode/xtore/desktop/dist_electron/`

A partir de ahí, solo tienes que distribuirlos a tus usuarios, hacerles doble clic en el futuro y tu panel se instalará y operará offline o consumiendo tu API local.
