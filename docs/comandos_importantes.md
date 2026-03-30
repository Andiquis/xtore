# Consolidado de Comandos y Referencias del Proyecto

Este documento sirve como un manual de supervivencia rápido o *Cheat Sheet* para la operación integral del sistema **Xtore** (Móvil, Web y Desktop). Recopila todos los comandos técnicos fundamentales y los trucos configurados durante el ciclo de desarrollo para compilar y solucionar problemas ambientales en Linux.

---

## 1. Referencias Clave de Documentación (Wiki)

Guías paso a paso detalladas que hemos redactado previamente para no olvidar procesos largos:
*   [📄 `docs/sacar_apk_cap.md`](file:///home/andi/vXcode/xtore/docs/sacar_apk_cap.md): Guía maestra para generar las aplicaciones móviles de Android nativo (`.apk`) utilizando Capacitor.
*   [📄 `docs/icon_app.md`](file:///home/andi/vXcode/xtore/docs/icon_app.md): Reglas e instrucciones gráficas para la automatización e inyección correcta de Logotipos (Iconos) y Pantallas de Carga (Splash Screens) en los dispositivos.
*   [📄 `docs/sacar_desktop_apps.md`](file:///home/andi/vXcode/xtore/docs/sacar_desktop_apps.md): Instrucciones completas del entorno de Electron para empaquetar software nativo de escritorio para Windows (`.exe`) y Debian GNU/Linux (`.deb`).

## 2. Herramientas Automatizadas (Scripts)

Archivos `Bash` con un solo clic que auto-sincronizan la lógica web con los compiladores nativos sin necesidad de pasos intermedios. Deben ejecutarse desde la terminal en su ruta correspondiente.
*   [⚙️ `scripts/apk_ouput.sh`](file:///home/andi/vXcode/xtore/scripts/apk_ouput.sh): Enruta el frontend en producción y dispara a Capacitor/Gradle para extraer un APK final limpio.
*   [⚙️ `scripts/desktop_output.sh`](file:///home/andi/vXcode/xtore/scripts/desktop_output.sh): Compila la SPA localmente en la carpeta del backend de Electron para lanzar de golpe tanto el ejecutable `.exe` como el `.deb`.

---

## 3. Comandos Importantes de Terminal (Linux)

### 3.1. Pruebas Directas del Entorno Desktop
Abre la aplicación nativa en formato maximizado (sin menús y auto-cargada) para validar el diseño en tiempo real, puenteando las trabas de seguridad Chrome-Sandbox.
```bash
# Estando en la carpeta /home/andi/vXcode/xtore/desktop
pnpm start
```

### 3.2. Instalación de Motor Wine multiplataforma
Indispensable para que tu Linux pueda construir herramientas para Windows (como agregarle el logo personalizado `.ico` al software cerrado `.exe`):
```bash
sudo apt update && sudo apt install -y wine
# Activar el núcleo de 32 bits (Estricta dependencia de Electron Builder para los iconos de windows):
sudo dpkg --add-architecture i386 && sudo apt-get update && sudo apt-get install -y wine32:i386
```

### 3.3. Arreglo de Emulador Wine Corrupto (kernel32.dll Error)
Si al momento de compilar el EXE te lanza errores fatales sobre el núcleo (kernel) de Windows, significa que los registros previos fallidos corrompieron el "prefix". Este comando reinicia y limpia en 20 segundos el emulador simulado:
```bash
rm -rf ~/.wine && WINEARCH=win32 wineboot -u
```

### 3.4. Probar .exe temporalmente desde la terminal de Ubuntu
Wine te permite previsualizar tu mismo instalador Windows directamente en Linux para comprobar qué vería tu cliente.
```bash
# Emular ejecución suelta:
wine dist_electron/win-unpacked/Xtore.exe

# Emular Instalador Wizard Clásico (Siguiente > Siguiente):
wine "dist_electron/Xtore Setup 1.0.0.exe"
```
*(Opcional: Si recibes formato erróneo "Bad EXE format", simplemente intercede con `WINEPREFIX=~/.wine64 WINEARCH=win64 wine64 ...` o instala software de gestión como "Bottles")*

### 3.5. Instalación del Formato Nativo Linux (.deb)
Comandos base de distribuciones Debian/Ubuntu para la desinstalación e instalación completa del programa ya finalizado:
```bash
# Estando en la carpeta /home/andi/vXcode/xtore/desktop/dist_electron/

# 1. Desinstalar una versión anterior
sudo apt remove xtore-desktop

# 2. Instalar el paquete nuevo especificando ruta de archivo local ("./")
sudo apt install ./xtore-desktop_1.0.0_amd64.deb
```
