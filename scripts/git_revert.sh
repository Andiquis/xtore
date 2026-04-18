#!/bin/bash
# Script para revertir commits tanto localmente como en GitHub

# Moverse a la raíz del proyecto para asegurar que git funcione bien
cd "$(dirname "$0")/.." || exit 1

# Verificar que git y origin estén configurados
git status >/dev/null 2>&1 || { echo "❌ No estás en un repositorio Git o hubo un error."; exit 1; }

echo "======================================"
echo "    REVERTIR COMMITS PERMANENTEMENTE"
echo "======================================"
read -p "¿Cuántos commits hacia atrás deseas revertir? (Ej: 1, 2, 3...): " n_commits

if ! [[ "$n_commits" =~ ^[1-9][0-9]*$ ]]; then
    echo "❌ Error: Debes ingresar un número entero válido mayor a 0."
    exit 1
fi

echo "⚠️  ¡ATENCIÓN! Esto eliminará permanentemente de tu historial los últimos $n_commits commits de tu PC y de GitHub."
read -p "¿Estás completamente seguro de continuar? (escribe 's' para confirmar): " confirm

if [[ "$confirm" != "s" && "$confirm" != "S" ]]; then
    echo "❌ Operación cancelada por el usuario."
    exit 0
fi

echo "🔄 Revirtiendo localmente $n_commits commits..."
# Revertir localmente los commits descartando cambios permanentemente
git reset --hard "HEAD~$n_commits"

echo "☁️ Forzando la actualización en GitHub para que coincida con tu PC..."
# Forzar la subida a GitHub para que también se borre de allá
if git push --force origin main; then
    echo "✅ ¡Reversión exitosa! Has retrocedido $n_commits commits en tu PC y GitHub."
else
    echo "❌ Hubo un error al forzar la subida a GitHub. Tu código local ha retrocedido pero GitHub no."
    exit 1
fi
