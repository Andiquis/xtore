#!/bin/bash

# ==========================================
# Script Automático: Build Dist y APK
# Proyecto: xtore (Angular + Capacitor)
# ==========================================

# Rutas principales del proyecto
PROJECT_ROOT="/home/andi/vXcode/xtore"
FRONTEND_DIR="$PROJECT_ROOT/frontend"
MOVIL_DIR="$PROJECT_ROOT/movil"
ANDROID_DIR="$MOVIL_DIR/android"

# Configuración del entorno de Android (Adaptado a tu sistema local)
export ANDROID_HOME="/home/andi/Android/Sdk"
export JAVA_HOME="/home/andi/Descargas/android-studio/jbr"
export CAPACITOR_ANDROID_STUDIO_PATH="/home/andi/Descargas/android-studio/bin/studio.sh"

export PATH="$PATH:$ANDROID_HOME/tools:$ANDROID_HOME/platform-tools:$JAVA_HOME/bin"

echo "======================================="
echo "🚀 INICIANDO BUILD DE PRODUCCIÓN"
echo "======================================="

# Paso 1: Compilar produccion del frontend angular
echo ""
echo "1. Compilando el frontend (Angular)..."
cd "$FRONTEND_DIR" || exit
pnpm run build

if [ $? -ne 0 ]; then
    echo "❌ Error: Fallo la compilación del frontend Angular. Abortando script."
    exit 1
fi
echo "✅ Frontend compilado exitosamente."

# Paso 2: Copiar archivos minificados al proyecto nativo
echo ""
echo "2. Sincronizando código web con aplicación Capacitor Android..."
cd "$MOVIL_DIR" || exit
npx cap sync android

if [ $? -ne 0 ]; then
    echo "❌ Error: La sincronización web a nativo con capacitor ha fallado. Abortando script."
    exit 1
fi
echo "✅ Sincronización exitosa."

# Paso 3: Generar Instalador final del telefono
echo ""
echo "3. Generando el archivo fuente APK con Gradle..."
cd "$ANDROID_DIR" || exit
./gradlew assembleDebug

if [ $? -ne 0 ]; then
    echo "❌ Error: El motor Gradle no pudo ensamblar y firmar el APK. Revisa los logs de arriba."
    exit 1
fi

echo ""
echo "======================================="
echo "🎉 ¡BUILD E INSTALADOR COMPLETADOS CON ÉXITO!"
echo "======================================="
echo "Tu archivo APK listo para pruebas en Android se encuentra aquí:"
echo "👉 $ANDROID_DIR/app/build/outputs/apk/debug/app-debug.apk"
echo "======================================="
echo ""
