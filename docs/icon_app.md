# Configuración de Ícono y Splash Screen (Fondo de Inicio) en Capacitor

Esta guía detalla cómo actualizar de forma automática los íconos de la aplicación y la pantalla de carga (splash screen) para Android utilizando la herramienta oficial `@capacitor/assets`.

---

## 1. Preparar las Imágenes Fuente

Para que Capacitor pueda generar todas las resoluciones necesarias para los distintos tamaños de pantalla (desde celulares antiguos hasta tablets Ultra HD), necesitas proveer archivos base en alta resolución.

Coloca dos imágenes en la raíz de la carpeta de tu proyecto móvil (`/home/andi/vXcode/xtore/movil`):

1.  **`icon.png`** (o `icon.jpeg`): Será el ícono de la aplicación (el logo).
    *   *Resolución recomendada*: `1024x1024 px` (cuadrado perfecto).
2.  **`splash.png`** (o `fondo.jpeg`): Será la imagen de carga a pantalla completa.
    *   *Resolución recomendada*: `2732x2732 px` (para evitar cortes al rotar pantalla).

> [!TIP]
> Se recomienda usar el formato `.png` sin transparencias para el splash screen y `.png` con transparencia (opcional) para el ícono.

---

## 2. Ejecutar la Generación de Recursos (Assets)

Una vez que tengas tus imágenes bases (`icon` y `fondo`) en la carpeta `movil/`, abre la terminal y usa el paquete oficial de automatización de Capacitor.

Ejecuta el siguiente comando para procesar las imágenes e inyectarlas en el código nativo de Android:

```bash
cd /home/andi/vXcode/xtore/movil
npx @capacitor/assets generate --android
```

### ¿Qué hace exactamente este comando?
Al pulsar *Enter*, la herramienta tomará tus dos imágenes y producirá matemáticamente **más de 80 variaciones de recortes e íconos** (redondos, cuadrados, fondo transparente, landscape, portrait, carpetas `mdpi`, `xhdpi`, `xxhdpi`, etc.). 

Todos estos nuevos archivos gráficos se escupen directamente en las "tripas" de Android de tu proyecto, específicamente en la ruta oculta:
👉 `/movil/android/app/src/main/res/`

---

## 3. Empaquetar el APK con los nuevos logos

¡Listo! Para que estos cambios se vean reflejados en un celular Android real, debes seguir el proceso habitual de compilación detallado en tu documento principal.

1. Sincroniza el proyeto por seguridad:
   ```bash
   npx cap sync android
   ```
2. Compila el nuevo APK en terminal (o mediante el script):
   ```bash
   cd android
   ./gradlew assembleDebug
   ```

El APK resultante ya incluirá y mostrará a los usuarios tu nuevo Ícono y Pantalla de Carga cada vez que instalen o abran tu aplicación.
