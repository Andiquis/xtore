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

# Paso 4: Instalar el APK en el dispositivo conectado
echo ""
echo "4. Instalando el APK en el dispositivo conectado..."

# Verificar si adb está disponible
if ! command -v adb &> /dev/null; then
    echo "❌ Error: La herramienta 'adb' no está instalada o no está en el PATH."
    echo "👉 Solución: Asegúrate de que el SDK de Android esté correctamente configurado y que 'platform-tools' esté en el PATH."
    echo "El APK se encuentra en: $ANDROID_DIR/app/build/outputs/apk/debug/app-debug.apk"
    exit 1
fi

# Verificar si hay un dispositivo conectado
DEVICE_CONNECTED=$(adb devices | grep -w "device" | wc -l)
if [ "$DEVICE_CONNECTED" -eq 0 ]; then
    echo "❌ Error: No se detectó ningún dispositivo conectado con depuración USB habilitada."
    echo "👉 Solución: Conecta un dispositivo Android y habilita la depuración USB en las opciones de desarrollador."
    echo "El APK se encuentra en: $ANDROID_DIR/app/build/outputs/apk/debug/app-debug.apk"
    exit 1
elif [ "$DEVICE_CONNECTED" -gt 1 ]; then
    echo "📱 Se detectaron múltiples dispositivos/emuladores:"
    
    # Obtener los IDs de los dispositivos conectados
    DEVICES=($(adb devices | grep -w "device" | awk '{print $1}'))
    
    echo "Por favor, selecciona un dispositivo para instalar el APK:"
    # Configurar el prompt para el comando select
    PS3="Introduce el número del dispositivo (o selecciona Cancelar): "
    select TARGET_DEVICE in "${DEVICES[@]}" "Cancelar"; do
        if [ "$TARGET_DEVICE" == "Cancelar" ]; then
            echo "Instalación cancelada por el usuario."
            echo "El APK se encuentra en: $ANDROID_DIR/app/build/outputs/apk/debug/app-debug.apk"
            exit 0
        elif [ -n "$TARGET_DEVICE" ]; then
            echo "Seleccionaste: $TARGET_DEVICE"
            break
        else
            echo "Opción inválida. Intenta de nuevo."
        fi
    done
    
    # Intentar instalar el APK en el dispositivo seleccionado
    adb -s "$TARGET_DEVICE" install -r "$ANDROID_DIR/app/build/outputs/apk/debug/app-debug.apk"
else
    # Intentar instalar el APK en el único dispositivo conectado
    adb install -r "$ANDROID_DIR/app/build/outputs/apk/debug/app-debug.apk"
fi

if [ $? -ne 0 ]; then
    echo "❌ Error: No se pudo instalar el APK en el dispositivo. Verifica los permisos y el estado del dispositivo."
    echo "El APK se encuentra en: $ANDROID_DIR/app/build/outputs/apk/debug/app-debug.apk"
    exit 1
fi

echo "✅ APK instalado exitosamente en el dispositivo."

# Debug final
echo "======================================="
echo "🔍 DEBUG FINAL"
echo "- Herramienta adb: $(command -v adb)"
echo "- Dispositivos conectados: $(adb devices | grep -w 'device')"
echo "- Ruta del APK: $ANDROID_DIR/app/build/outputs/apk/debug/app-debug.apk"
echo "======================================="

echo ""
echo "======================================="
echo "🎉 ¡BUILD E INSTALADOR COMPLETADOS CON ÉXITO!"
echo "======================================="
echo "Tu archivo APK listo para pruebas en Android se encuentra aquí:"
echo "👉 $ANDROID_DIR/app/build/outputs/apk/debug/app-debug.apk"
echo "======================================="
echo ""
