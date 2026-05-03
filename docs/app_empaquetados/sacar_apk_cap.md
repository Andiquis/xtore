# Generación de APK con Capacitor

Esta guía resume los pasos y comandos necesarios para actualizar y generar un archivo APK instalable de tu aplicación web, usando Android Studio y Capacitor mediante la consola.

---

## 1. Mantener sincronizado el código web

Cada vez que realices cambios en tu frontend (ej. un nuevo componente en Angular o una nueva página) debes asegurarte de cumplir estos dos pasos en orden:

1. **Compilar el frontend en producción** (para generar los minificados JS y HTML):
   ```bash
   cd /home/andi/vXcode/xtore/frontend
   pnpm run build
   ```

2. **Sincronizar el compilado con Capacitor** (para inyectar esos archivos dentro del código nativo de Android):
   ```bash
   cd /home/andi/vXcode/xtore/movil
   npx cap sync android
   ```

---

## 2. Variables de Entorno y Preparación

Dado que Android Studio y el SDK se instalaron manualmente (ej. desde un `.tar.gz` en tu carpeta de `Descargas`), debes decirle a la terminal dónde están Java y el Android SDK antes de intentar compilar código de Android.

Si vas a compilar por terminal, exporta las ubicaciones exactas:

```bash
export ANDROID_HOME=/home/andi/Android/Sdk
export JAVA_HOME=/home/andi/Descargas/android-studio/jbr
export CAPACITOR_ANDROID_STUDIO_PATH=/home/andi/Descargas/android-studio/bin/studio.sh

# Esto permite acceder herramientas adicionales si las necesitas:
export PATH=$PATH:$ANDROID_HOME/tools:$ANDROID_HOME/platform-tools:$JAVA_HOME/bin
```
> **Tip:** Puedes colocar estas líneas `export` directamente al final de tu archivo `~/.bashrc` (oculto en tu carpeta personal). De esta manera, cada vez que abras una consola, ya estarán cargadas por siempre.

---

## 3. Construir el archivo `.apk` (Opción Terminal)

Estando dentro de la carpeta nativa `android` del proyecto capacitor, y habiendo seteado las variables de entorno, ordenaremos la compilación usando **Gradle** (el sistema oficial de build de Android).

```bash
cd /home/andi/vXcode/xtore/movil/android
./gradlew assembleDebug
```

> *(La primera vez que compiles podría demorar intentando descargar dependencias Gradle, las siguientes veces será muy rápido y dirá **BUILD SUCCESSFUL**).*

### ¿Dónde encuentro el resultado?

Una vez terminado el proceso exitosamente, encontrarás el `.apk` compilado para probar en tu celular en la siguiente ruta:

👉 `/home/andi/vXcode/xtore/movil/android/app/build/outputs/apk/debug/app-debug.apk`

*(Ese archivo se puede enviar por Telegram, WhatsApp, o nube directo a un teléfono Android para instalarlo).*

## (Alternativa) Construir visualmente con Android Studio

Si escanear código en consola se te complica, Capacitor permite abrir directamente la interfaz del motor de Android en tu pantalla:

```bash
cd /home/andi/vXcode/xtore/movil
npx cap open android
```
*(Se abrirá el IDE de Android Studio).* Solo debes esperar en la parte inferior derecha a que termine el estado *"Gradle Syncing..."* y luego dirigirte arriba en el menú a: **Build** -> **Build Bundle(s) / APK(s)** -> **Build APK(s)**.
