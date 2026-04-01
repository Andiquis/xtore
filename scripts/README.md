# 📜 Glosario de Scripts del Proyecto `xtore`

Este directorio contiene varios scripts de utilidad (Bash) creados para automatizar las tareas más comunes de desarrollo, compilación y control de versiones en el proyecto. 

Para ejecutar cualquiera de estos scripts, abre una terminal en la raíz de tu proyecto y asegúrate de tener permisos de ejecución (si no los tienen, ejecuta `chmod +x scripts/nombre_del_script.sh`).

---

## ☁️ Control de Versiones (Git)

### `git_upload.sh`
**Propósito:** Automatizar la subida de cambios a GitHub.
* Revisa si tienes modificaciones locales pendientes.
* Añade todos los cambios al "*stage*".
* Te pide un nombre para el commit y, si lo omites, genera uno automático con la fecha y hora.
* Intenta subir (push) al repositorio remoto hasta 3 veces en caso de errores de conexión.

### `git_update.sh`
**Propósito:** Descargar y actualizar tu código local con la última versión disponible en GitHub.
* Obtiene primero los cambios del servidor.
* Compara tu versión actual con la del servidor remoto.
* Realiza un pull automático si es factible. Si hay conflictos por cambios en tu PC, te arroja una alerta donde puedes elegir destruir los cambios locales y **forzar la sincronización (Force Pull)**.

### `git_revert.sh`
**Propósito:** Deshacer o revertir errores subidos a GitHub en commits anteriores.
* Te permite elegir la cantidad exacta de commits (`1, 2, 3...`) de los cuales te quieres arrepentir.
* Una vez confirmado, elimina dicho avance permenentemente en tu historial local.
* Realiza una subida forzada (Force Push) a GitHub para que en el servidor remoto también se borren por completo esos commits.

---

## 📦 Compilación y Distribución (Builds)

### `apk_ouput.sh`
**Propósito:** Compilación del proyecto móvil para Android.
* Compila la versión de producción del `frontend` (Angular).
* Utiliza **Capacitor** para sincronizar el código web encolado nativamente.
* Ejecuta **Gradle** para ensamblar el proyecto interno generando un instalador APK en la carpeta `/movil/android/app/build/...`.

### `desktop_output.sh`
**Propósito:** Compilación del proyecto de escritorio usando Electron.
* Compila la versión de producción del `frontend` (Angular).
* Sincroniza y transpila el código dentro de la carpeta `desktop/`.
* Dispara la compilación nativa de **Electron Builder**, generando instaladores tanto para Linux (`.deb`) como para Windows (`.exe`) listos para ser distribuidos.





**OJITO, EL SIGUIENTE PASO PARA ESTE GRUPO DE SCRIPT ES JUNTARLOS EN UN SOLO SCRIPT LA CUAL MUESTRE OPCIONES DE ACCIONES JAJA*

**AH Y CIERTO FALTA UN README.MD DEL PROYECTO PRINCIPAL, EN RESUMEN FALTA EL MD DE LA RAIZ*

**XXXDE*