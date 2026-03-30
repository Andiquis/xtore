#!/bin/bash

echo "======================================================"
echo "    COMPILADOR DE APLICACIONES NATIVAS (ELECTRON)     "
echo "               Linux (.deb) y Windows (.exe)           "
echo "======================================================"

# 1. Compilar el frontend en Angular por si hubo cambios
echo -e "\n[1/3] Generando última versión de Angular Frontend en producción..."
cd ../frontend
pnpm run build
if [ $? -ne 0 ]; then
    echo "❌ Error construyendo el frontend. Deteniendo todo."
    exit 1
fi

# 2. Entrar a Desktop y copiar assets de frontend
echo -e "\n[2/3] Moviendose al entorno Desktop y sincronizando paquete web..."
cd ../desktop
# Aunque package.json tiene el "prebuild", esta es la forma segura y explícita
rm -rf frontend_dist
cp -r ../frontend/dist/frontend/browser frontend_dist

# 3. Compilamos mediante Electron Builder
echo -e "\n[3/3] Compilando instaladores con Electron Builder (NSIS Windows y Debian Linux)..."
# Esto es equivalente a 'pnpm run build:all' del package.json interno
pnpm run build:all

if [ $? -eq 0 ]; then
    echo -e "\n======================================================"
    echo "✅ COMPILACIÓN EXITOSA"
    echo "Tus instaladores .exe y .deb están listos en:"
    echo "👉 /home/andi/vXcode/xtore/desktop/dist_electron/"
    echo "======================================================"
else
    echo -e "\n❌ Falló el empaquetado final de Electron Builder."
fi
