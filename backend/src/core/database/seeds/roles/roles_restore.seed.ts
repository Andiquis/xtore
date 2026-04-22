import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service';
import { ROLES_SEED } from './roles.seed.data';

@Injectable()
export class RolesRestoreSeed {
  constructor(private readonly prisma: PrismaService) {}

  private normalize(value: string) {
    return value.trim().toLowerCase();
  }

  async execute() {
    console.log('🧩 Restaurando roles faltantes...');

    const existentes = await this.prisma.t_roles.findMany({
      select: { nombre_rol: true },
    });

    // ⚡ normalizamos DB
    const nombresDB = new Set(
      existentes.map((r) => this.normalize(r.nombre_rol)),
    );

    // ⚡ normalizamos seed y filtramos faltantes reales
    const faltantes = ROLES_SEED.filter(
      (r) => !nombresDB.has(this.normalize(r.nombre_rol)),
    );

    if (faltantes.length === 0) {
      console.log('✅ No hay roles faltantes');
      return;
    }

    // ⚡ insert seguro
    await this.prisma.t_roles.createMany({
      data: faltantes,
      skipDuplicates: true,
    });

    console.log(
      `🌱 Restaurados ${faltantes.length} roles:`,
      faltantes.map((r) => r.nombre_rol).join(', '),
    );
  }
}
