#!/bin/bash
# Script para actualizar el directorio local con el contenido de GitHub

# Moverse a la raíz del proyecto para asegurar que git funcione bien
cd "$(dirname "$0")/.." || exit 1

echo "📡 Conectando con GitHub para buscar cambios..."

# Obtener los datos sin modificar los archivos
git fetch origin

# Verificar estado
LOCAL=$(git rev-parse @ 2>/dev/null || echo "")
REMOTE=$(git rev-parse origin/main 2>/dev/null || echo "")

if [ -z "$LOCAL" ] || [ -z "$REMOTE" ]; then
    echo "❌ Error: No se pudo obtener la información desde origen. Revisa tu conexión de red o la configuración del repositorio."
    exit 1
fi

if [ "$LOCAL" = "$REMOTE" ]; then
    echo "✅ ¡Tu repositorio local ya está completamente sincronizado con GitHub!"
else
    echo "⬇️  Hay versiones más recientes en GitHub. Descargando y aplicando cambios..."
    # Realizar pull
    if git pull origin main; then
        echo "✅ ¡Actualización local completada correctamente!"
    else
        echo "⚠️  ¡ALERTA! Hubo conflictos porque tienes modificaciones locales que chocan con GitHub."
        echo "-------------------------------------"
        read -p "¿Deseas SOBRESCRIBIR y DESTRUIR por completo tus cambios locales con la versión exacta de GitHub? (s/n): " force_dl
        if [[ "$force_dl" == "s" || "$force_dl" == "S" ]]; then
            echo "🗑️  Destruyendo cambios locales no confirmados y forzando descarga..."
            git fetch --all
            git reset --hard origin/main
            echo "✅ ¡Descarga forzada y limpia completada! Tu PC ahora tiene exactamente lo mismo que GitHub."
        else
            echo "❌ Operación cancelada. Tendrás que resolver los conflictos o hacer 'git stash' manualmente."
            exit 1
        fi
    fi
fi
