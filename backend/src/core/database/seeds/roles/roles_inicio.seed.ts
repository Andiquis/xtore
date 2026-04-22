import { Injectable, OnApplicationBootstrap } from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service';
import { ROLES_SEED } from './roles.seed.data';

@Injectable()
export class RolesInicioSeed implements OnApplicationBootstrap {
  constructor(private readonly prisma: PrismaService) {}

  async onApplicationBootstrap() {
    console.log('🌱 Verificando roles iniciales...');

    const existentes = await this.prisma.t_roles.findMany({
      select: { nombre_rol: true },
    });

    const nombresDB = new Set(existentes.map((r) => r.nombre_rol));

    const faltantes = ROLES_SEED.filter((r) => !nombresDB.has(r.nombre_rol));

    // 🟢 DB vacía → insertar todo
    if (existentes.length === 0) {
      await this.prisma.t_roles.createMany({
        data: ROLES_SEED,
      });

      console.log(`✅ Seed inicial ejecutado (${ROLES_SEED.length} roles)`);
      return;
    }

    // 🟡 DB con datos → solo validar consistencia
    if (faltantes.length > 0) {
      console.warn('⚠️ Faltan roles iniciales:');
      console.warn(faltantes.map((r) => r.nombre_rol).join(', '));
      console.warn('👉 Ejecuta: npm run seed');
      return;
    }

    console.log('✅ Roles iniciales completos');
  }
}
