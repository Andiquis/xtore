#!/bin/bash
# Script para subir cambios a GitHub automáticamente

echo "Iniciando proceso de subida..."

# Moverse a la raíz del proyecto para asegurar que git funcione bien
cd "$(dirname "$0")/.." || exit 1

# Verificar si hay cambios
if [[ -z $(git status -s) ]]; then
  echo "✅ No hay cambios pendientes por subir."
  exit 0
fi

# Añadir todos los cambios
git add .

# Pedir mensaje de commit (opcional)
read -p "Introduce el mensaje del commit (dejar vacío para generar uno automático): " commit_msg
if [[ -z "$commit_msg" ]]; then
  commit_msg="Auto-update: $(date +'%Y-%m-%d %H:%M:%S')"
fi

# Realizar el commit
git commit -m "$commit_msg" || echo "Aviso: No se pudo hacer commit (quizás solo eran cambios ignorados)."

# Empujar cambios a GitHub (reintentos automáticos en caso de fallo de red)
max_retries=3
attempt=1

while [ $attempt -le $max_retries ]; do
    echo "🚀 Intentando subir a GitHub (Intento $attempt de $max_retries)..."
    if git push origin main; then
        echo "✅ ¡Subida exitosa y completada!"
        break
    else
        echo "⚠️ Ocurrió un error al subir..."
        attempt=$((attempt+1))
        if [ $attempt -le $max_retries ]; then
            echo "Reintentando en 3 segundos..."
            sleep 3
        else
            echo "❌ Fallo al subir después de $max_retries intentos. Por favor, revisa tu conexión a internet o los permisos de git."
            exit 1
        fi
    fi
done
