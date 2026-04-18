#!/bin/bash
# Script interactivo de Gestión COMPLETA para el repositorio Git
# Diseñado explícitamente para evitar clonar, subir o bajar de repositorios equivocados.

# ======================================================================
# 🛑 CONFIGURACIÓN ESTRICTA Y DINÁMICA DE RUTAS 🛑
# ======================================================================
# El script calcula dinámicamente la carpeta padre (raíz del proyecto)
LOCAL_REPO_DIR="$(cd "$(dirname "$0")/.." && pwd)"

# Nombre EXACTO que debe tener la carpeta de tu proyecto. 
EXPECTED_FOLDER_NAME="xtore"

# URL exacta del repositorio en GitHub al que pertenece este proyecto
GITHUB_REPO_URL="https://github.com/Andiquis/xtore.git"
# ======================================================================

# Configuración de Colores para la interfaz
GREEN='\033[0;32m'
RED='\033[0;31m'
YELLOW='\033[1;33m'
CYAN='\033[0;36m'
NC='\033[0m' # No Color

# Funciones de impresión estandarizadas
print_msg() { echo -e "${CYAN}➜ $1${NC}"; }
print_success() { echo -e "${GREEN}✅ $1${NC}"; }
print_error() { echo -e "${RED}❌ $1${NC}"; }
print_warn() { echo -e "${YELLOW}⚠️  $1${NC}"; }

# Validación de seguridad paranóica
CURRENT_FOLDER_NAME=$(basename "$LOCAL_REPO_DIR")
if [ "$CURRENT_FOLDER_NAME" != "$EXPECTED_FOLDER_NAME" ]; then
    print_error "ALERTA DE SEGURIDAD: Este script es exclusivo para el repositorio '$EXPECTED_FOLDER_NAME'."
    print_error "Estás intentando correrlo en una carpeta llamada '$CURRENT_FOLDER_NAME'."
    print_warn "Si copiaste este script a otro proyecto, edita EXPECTED_FOLDER_NAME y la URL primero."
    exit 1
fi

# Asegurar que la carpeta local exista al iniciar el script
mkdir -p "$LOCAL_REPO_DIR"

while true; do
    echo ""
    echo "========================================================="
    echo "     🚀 GITHUB MANAGER - SUITE COMPLETA DE GIT (V2)      "
    echo "========================================================="
    echo -e "Directorio seguro:  ${YELLOW}$LOCAL_REPO_DIR${NC}"
    echo -e "Repositorio remoto: ${YELLOW}$GITHUB_REPO_URL${NC}"
    echo "---------------------------------------------------------"
    echo "🔹 Opciones Iniciales:"
    echo "  1) 📥 Clonar repositorio (Descarga inicial en carpeta vacía)"
    echo "  2) ⚙️  Inicializar entorno (Enlazar código ya existente a GitHub)"
    echo "---------------------------------------------------------"
    echo "🔹 Operaciones Diarias:"
    echo "  3) ⬆️  Subir mis cambios (Local -> Remoto) [git push]"
    echo "  4) ⬇️  Bajar cambios sin romper local (Remoto -> Local) [git pull]"
    echo "  5) 📊 Ver estado de mis archivos modificados [git status]"
    echo "---------------------------------------------------------"
    echo "🔹 Opciones de Emergencia Avanzadas:"
    echo "  6) 🔄 SOBRESCRIBIR local forzosamente con GitHub [Hard Reset]"
    echo "  7) 🔙 Eliminar/Revertir últimos commits del tiempo [Hard Revert]"
    echo "  8) 🚪 Salir del Gestor"
    echo "========================================================="
    read -p "Ingresa una opción (1-8): " opcion

    case $opcion in
        1)
            echo ""
            print_msg "Opción 1: Clonar repositorio..."
            
            if [ -d "$LOCAL_REPO_DIR/.git" ]; then
                print_error "El directorio ya es un repositorio Git activo. Usa las opciones 3, 4 o 6."
            else
                if [ "$(ls -A "$LOCAL_REPO_DIR" 2>/dev/null)" ]; then
                    print_error "El directorio NO ESTA VACÍO. Git no puede clonar encima de archivos existentes."
                    print_warn "Usa la 'Opción 2' primero si lo que buscas es configurar para subir estos archivos."
                else
                    print_msg "Clonando desde GitHub..."
                    git clone "$GITHUB_REPO_URL" "$LOCAL_REPO_DIR"
                    if [ $? -eq 0 ]; then 
                        print_success "Clonación Existosa en $LOCAL_REPO_DIR."
                    else 
                        print_error "Fallo crítico al clonar."
                    fi
                fi
            fi
            ;;
            
        2)
            echo ""
            print_msg "Opción 2: Inicializar repositorio Git y enlazar URL..."
            cd "$LOCAL_REPO_DIR" || exit 1
            
            if [ ! -d ".git" ]; then
                git init
                print_success "Entorno Git (.git) inicializado."
            fi

            git remote remove origin 2>/dev/null
            git remote add origin "$GITHUB_REPO_URL"
            git branch -M main 2>/dev/null || git checkout -b main
            
            print_success "Remoto 'origin' blindado hacia: $GITHUB_REPO_URL"
            print_msg "¡Directorio forzado y listo para subir cambios!"
            ;;
            
        3)
            echo ""
            print_msg "Opción 3: Subiendo cambios a GitHub..."
            cd "$LOCAL_REPO_DIR" || exit 1
            
            if [[ -z $(git status -s) ]]; then
                print_warn "No hay cambios pendientes por subir (Everything is clean)."
                continue
            fi
            
            git add .
            print_success "Archivos cacheados a la nube."
            
            read -p "Introduce el mensaje del commit (O presiona Enter para usar texto generico): " commit_msg
            if [[ -z "$commit_msg" ]]; then 
                commit_msg="Auto-update: $(date +'%Y-%m-%d %H:%M:%S')"
            fi
            git commit -m "$commit_msg"
            
            print_msg "🚀 Elevando a GitHub..."
            if git push origin main; then
                print_success "¡Subida exitosa de tu código completada!"
            else
                print_error "Fallo al subir los cambios a origin."
                print_warn "El remoto podría tener cambios más recientes. Intenta usar la 'Opción 4' para bajar e integrar primero."
            fi
            ;;
            
        4)
            echo ""
            print_msg "Opción 4: Descargando y Actualizando (Merge Pacífico)..."
            cd "$LOCAL_REPO_DIR" || exit 1
            
            # Obtener registros pasivamente
            git fetch origin
            
            if git pull origin main; then
                print_success "¡Carpeta en tu PC actualizada correctamente con lo último de GitHub!"
            else
                print_error "⚠️  Hubo CONFLICTOS de archivos (Merge Fail)."
                print_error "Tus avances locales entran en colisión con un código que ya estaba subido en GitHub."
                print_warn "Necesitas resolverlos a mano, o bien usar la 'Opción 6' (Destructora) si no te interesan tus archivos locales."
            fi
            ;;
            
        5)
            echo ""
            print_msg "Opción 5: Analizando Estado Visual (Git Status)..."
            cd "$LOCAL_REPO_DIR" || exit 1
            echo "---------------------------------------------------------"
            git status
            echo "---------------------------------------------------------"
            ;;

        6)
            echo ""
            print_warn "Opción 6: Sobrescribir local forzosamente (Modo Purga)"
            cd "$LOCAL_REPO_DIR" || exit 1
            
            if [ ! -d ".git" ]; then
                print_error "Antes de purgar debes usar la Opción 2 para iniciar."
            else
                read -p "¿Estás 100% SEGURO de DESTRUIR tus avances locales no guardados y remplazar por la copia de nube? (s/n): " force_dl
                if [[ "$force_dl" == "s" || "$force_dl" == "S" ]]; then
                    print_msg "Borrando local y forzando sincronía con MAIN..."
                    git fetch --all
                    git reset --hard origin/main
                    if [ $? -eq 0 ]; then
                        print_success "¡Reset destructivo completado! Ahora cuentas con la copia idéntica a GitHub."
                    else
                        print_error "La sincronización falló por problemas de red o conexión."
                    fi
                else
                    print_warn "Descarga de emergencia cancelada por decisión propia."
                fi
            fi
            ;;
            
        7)
            echo ""
            print_warn "Opción 7: Revertir Historia (Eliminar Commits en ambos lados)"
            cd "$LOCAL_REPO_DIR" || exit 1
            
            read -p "¿Cuántos commits hacia atrás deseas eliminar del universo? (Ej de número: 1, 2...): " n_commits
            if ! [[ "$n_commits" =~ ^[1-9][0-9]*$ ]]; then
                print_error "Número inválido. Debe ser de 1 en adelante."
                continue
            fi
            
            print_warn "ESTO BORRARÁ EL CÓDIGO HECHO HACE $n_commits DE TU PC Y EL PANEL DE GITHUB."
            read -p "¿Realmente seguro de amputar historial? (s/n): " confirm
            
            if [[ "$confirm" == "s" || "$confirm" == "S" ]]; then
                # Retroceder localmente rompiendo el commit original
                git reset --hard "HEAD~$n_commits"
                
                # Exigir a GitHub que modifique su realidad obligatoriamente
                print_msg "Coaccionando y Forzando a GitHub a aceptar el retroceso..."
                if git push --force origin main; then
                    print_success "¡Éxito Temporal! Has retrocedido tu PC y Nube unos $n_commits commits de vida."
                else
                    print_error "Hubo un error forzando el empuje."
                    print_warn "La RAM retrocedió en tu PC local, pero Github denegó el borrado de nubes (quizás falta permiso config)."
                fi
            else
                print_warn "Operación Termina. El tiempo sigue su curso Normal."
            fi
            ;;

        8)
            echo ""
            print_success "Saliendo limpiamente del Suite Git V2..."
            exit 0
            ;;
            
        *)
            echo ""
            print_error "Por favor, ingresa un número de teclado del 1 al 8."
            ;;
    esac
done
