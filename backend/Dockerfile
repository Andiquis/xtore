FROM node:20-slim

# Instalar OpenSSL requerido por Prisma en node:slim
RUN apt-get update && apt-get install -y openssl && rm -rf /var/lib/apt/lists/*

ENV PNPM_HOME="/pnpm"
ENV PATH="$PNPM_HOME:$PATH"
RUN corepack enable

WORKDIR /app

COPY package.json pnpm-lock.yaml ./
RUN pnpm install

COPY . .

# Generar cliente de Prisma para que esté disponible en el contenedor
RUN pnpm prisma generate --schema prisma/schema

EXPOSE 3000

CMD ["pnpm", "run", "start:dev"]
