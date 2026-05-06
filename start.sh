#!/bin/bash

# ==========================================
# Script de Inicio Amigable para xtore
# ==========================================

# Colores para la terminal
GREEN='\033[0;32m'
BLUE='\033[0;34m'
YELLOW='\033[1;33m'
RED='\033[0;31m'
NC='\033[0m' # No Color

echo -e "${BLUE}==========================================${NC}"
echo -e "${BLUE}🚀 INICIANDO ENTORNO XTORE CON DOCKER 🚀${NC}"
echo -e "${BLUE}==========================================${NC}"
echo ""

# 1. Verificar si Docker está corriendo
if ! docker info > /dev/null 2>&1; then
  echo -e "${RED}❌ ERROR: Docker no está en ejecución.${NC}"
  echo -e "Por favor inicia Docker Desktop o el servicio de Docker e intenta nuevamente."
  exit 1
fi

echo -e "${GREEN}✅ Docker está en ejecución.${NC}"

# 2. Reconstruir y levantar en modo "detached" (segundo plano)
echo -e "${YELLOW}⏳ Construyendo y levantando contenedores... (esto puede tomar un momento)${NC}"
docker compose up --build -d

if [ $? -ne 0 ]; then
    echo -e "${RED}❌ Ocurrió un error al intentar levantar los contenedores.${NC}"
    exit 1
fi

# 3. Esperar unos segundos para que los servicios inicialicen
echo -e "${YELLOW}⏳ Esperando 5 segundos a que los servicios inicialicen...${NC}"
sleep 5

echo ""
echo -e "${BLUE}==========================================${NC}"
echo -e "${BLUE}📊 REPORTE DE ESTADO DE LOS SERVICIOS 📊${NC}"
echo -e "${BLUE}==========================================${NC}"

# 4. Obtener el estado real de los contenedores
BACKEND_STATUS=$(docker inspect -f '{{.State.Status}}' xtore_backend 2>/dev/null)
FRONTEND_STATUS=$(docker inspect -f '{{.State.Status}}' xtore_frontend 2>/dev/null)

# Imprimir reporte Backend
if [ "$BACKEND_STATUS" == "running" ]; then
    echo -e "🟢 ${GREEN}BACKEND (NestJS):${NC}  Corriendo en el puerto ${YELLOW}3000${NC}"
    echo -e "   📚 Swagger Docs:    http://localhost:3000/api/docs"
    echo -e "   🔌 API Endpoint:    http://localhost:3000/api"
else
    echo -e "🔴 ${RED}BACKEND:${NC}           Detenido o falló al iniciar. Verifica los logs."
fi

# Imprimir reporte Frontend
if [ "$FRONTEND_STATUS" == "running" ]; then
    echo -e "🟢 ${GREEN}FRONTEND (Angular):${NC} Corriendo en el puerto ${YELLOW}4200${NC}"
    echo -e "   🌐 Acceso Local:    http://localhost:4200"
else
    echo -e "🔴 ${RED}FRONTEND:${NC}          Detenido o falló al iniciar. Verifica los logs."
fi

echo -e "${BLUE}==========================================${NC}"
echo ""

# Si algún servicio falló, mostrar sugerencia
if [ "$BACKEND_STATUS" != "running" ] || [ "$FRONTEND_STATUS" != "running" ]; then
    echo -e "${YELLOW}⚠️ NOTA: Al menos un servicio no inició correctamente.${NC}"
    echo -e "Si ves errores de permisos en el Frontend ('EACCES rmdir .angular'), ejecuta:"
    echo -e "${RED}sudo rm -rf frontend/.angular${NC}"
    echo ""
fi

# 5. Finalizar con limpieza
echo -e "${GREEN}✨ ¡Todo listo! El reporte se queda en tu pantalla. Usa 'docker compose logs -f' si necesitas ver los logs. ${NC}"
echo ""
