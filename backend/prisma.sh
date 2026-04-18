#!/bin/bash

clear

# Colores
GREEN="\e[32m"
YELLOW="\e[33m"
RED="\e[31m"
CYAN="\e[36m"
RESET="\e[0m"

function menu() {
  echo -e "${CYAN}"
  echo "======================================"
  echo "        🚀 Prisma CLI Manager"
  echo "======================================"
  echo -e "${RESET}"
  echo "1) 🔧 Inicializar Prisma"
  echo "2) 📦 Crear migración (guardar cambios schema)"
  echo "3) 🔄 Resetear base de datos (BORRA TODO)"
  echo "4) 📥 DB → Schema (db pull)"
  echo "5) 📤 Schema → DB (db push)"
  echo "6) 🧬 Generar cliente Prisma"
  echo "7) 🧪 Abrir Prisma Studio"
  echo "8) 🧹 Eliminar carpeta prisma"
  echo "9) 📖 Info de comandos"
  echo "0) 🚪 Salir"
  echo ""
  read -p "Selecciona una opción: " option
}

function info() {
  clear
  echo -e "${CYAN}📖 GUÍA DE COMANDOS PRISMA${RESET}"
  echo "--------------------------------------"

  echo -e "${GREEN}1) Inicializar Prisma${RESET}"
  echo "Crea la estructura inicial:"
  echo "- carpeta prisma/"
  echo "- schema.prisma"
  echo "- archivo .env"
  echo "👉 Solo se usa una vez al inicio del proyecto"
  echo ""

  echo -e "${GREEN}2) Crear migración${RESET}"
  echo "Guarda cambios del schema en la base de datos:"
  echo "- crea migraciones versionadas"
  echo "- actualiza la DB"
  echo "- genera cliente Prisma"
  echo "👉 ESTE es el comando principal en desarrollo"
  echo ""

  echo -e "${GREEN}3) Resetear DB${RESET}"
  echo "⚠ Borra TODA la base de datos:"
  echo "- elimina tablas"
  echo "- aplica migraciones desde cero"
  echo "👉 Útil cuando hay errores o pruebas"
  echo ""

  echo -e "${GREEN}4) DB → Schema (db pull)${RESET}"
  echo "Lee la base de datos existente:"
  echo "- genera schema.prisma automáticamente"
  echo "👉 Útil si tienes DB previa"
  echo ""

  echo -e "${GREEN}5) Schema → DB (db push)${RESET}"
  echo "Aplica cambios SIN migraciones:"
  echo "- rápido"
  echo "- NO versiona cambios"
  echo "👉 Solo para prototipos"
  echo ""

  echo -e "${GREEN}6) Generar cliente${RESET}"
  echo "Regenera Prisma Client:"
  echo "- necesario si cambias schema sin migrar"
  echo ""

  echo -e "${GREEN}7) Prisma Studio${RESET}"
  echo "Abre interfaz web para ver datos:"
  echo "- editar registros"
  echo "- ver tablas"
  echo "👉 Ideal para debug"
  echo ""

  echo -e "${GREEN}8) Eliminar carpeta prisma${RESET}"
  echo "Borra configuración de Prisma:"
  echo "👉 Solo si quieres reiniciar desde cero"
  echo ""

  echo -e "${YELLOW}🧠 CONSEJO PRO:${RESET}"
  echo "Usa SIEMPRE migrate dev en proyectos reales"
  echo "Evita db push en producción"
  echo ""

  read -p "Presiona Enter para volver al menú..."
}

function run_option() {
  case $option in

    1)
      echo -e "${GREEN}Inicializando Prisma...${RESET}"
      pnpm dlx prisma init
      ;;

    2)
      read -p "Nombre de la migración: " name
      pnpm prisma migrate dev --name "$name"
      ;;

    3)
      echo -e "${RED}⚠ Esto borrará TODA la base de datos${RESET}"
      read -p "¿Seguro? (y/n): " confirm
      if [ "$confirm" = "y" ]; then
        pnpm prisma migrate reset
      else
        echo "Cancelado."
      fi
      ;;

    4)
      pnpm prisma db pull
      ;;

    5)
      pnpm prisma db push
      ;;

    6)
      pnpm prisma generate
      ;;

    7)
      pnpm prisma studio
      ;;

    8)
      echo -e "${RED}⚠ Eliminando carpeta prisma...${RESET}"
      read -p "¿Seguro? (y/n): " confirm
      if [ "$confirm" = "y" ]; then
        rm -rf prisma
        echo "Carpeta prisma eliminada."
      else
        echo "Cancelado."
      fi
      ;;

    9)
      info
      ;;

    0)
      exit 0
      ;;

    *)
      echo -e "${RED}Opción inválida${RESET}"
      ;;
  esac
}

while true; do
  menu
  run_option
  clear
done