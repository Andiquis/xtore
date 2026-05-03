# 📦 Reinstalar una aplicación `.deb` desde cero (Linux)

Guía paso a paso para eliminar completamente una aplicación instalada mediante `.deb` y reinstalar su nueva versión de forma limpia.

---

## 🧭 1. Identificar el nombre del paquete

El nombre del archivo `.deb` no siempre coincide con el nombre interno del paquete.

```bash
dpkg-deb -f xtore-desktop_1.0.0_amd64.deb Package
```

**Salida esperada:**

```bash
xtore-desktop
```

---

## 🔍 2. Verificar si está instalado

```bash
dpkg -l | grep xtore-desktop
```

**Posibles resultados:**

* `ii` → instalado
* `rc` → eliminado parcialmente (quedan configs)
* (sin salida) → no está instalado

---

## 🧹 3. Desinstalar completamente

```bash
sudo apt purge xtore-desktop
```

Esto elimina:

* binarios
* accesos directos
* configuraciones del sistema

---

## 🧼 4. Limpiar dependencias residuales

```bash
sudo apt autoremove
```

---

## 🔍 5. Verificar eliminación total

```bash
dpkg -l | grep xtore-desktop
```

Si aparece `rc`, ejecutar nuevamente:

```bash
sudo apt purge xtore-desktop
```

---

## 📦 6. Instalar nueva versión del `.deb`

Ubicado en la carpeta del archivo:

```bash
sudo apt install ./xtore-desktop_1.0.0_amd64.deb
```

---

## 🧪 7. Verificar instalación

```bash
dpkg -l | grep xtore-desktop
```

**Salida esperada:**

```bash
ii  xtore-desktop  1.0.0 ...
```

---

## 🚀 8. Ejecutar la aplicación

```bash
xtore-desktop
```

O buscarla en el menú de aplicaciones del sistema.

---

## ⚠️ Nota importante sobre versiones

Linux usa el número de versión para gestionar instalaciones.

Si recompilas tu aplicación:

```json
"version": "1.0.1"
```

👉 Cambiar la versión es obligatorio para que el sistema detecte una actualización real.

---

## 🧠 Concepto clave

* `purge` → elimina completamente el paquete
* `autoremove` → limpia dependencias innecesarias
* `install` → instala el paquete desde cero
* `version` → controla el ciclo de vida del software

---

## 🧩 Flujo resumido

```bash
sudo apt purge xtore-desktop
sudo apt autoremove
sudo apt install ./xtore-desktop_1.0.0_amd64.deb
```

---

Fin. Sin magia. Solo control.
