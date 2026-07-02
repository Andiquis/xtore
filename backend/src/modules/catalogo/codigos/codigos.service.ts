import { BadRequestException, ConflictException, Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../../../core/database/prisma/prisma.service';
import { CreateCodigoDto } from './dto/create-codigo.dto';
import { UpdateCodigoDto } from './dto/update-codigo.dto';

@Injectable()
export class CodigosService {
  constructor(private readonly prisma: PrismaService) {}

  private readonly includeRelations = {
    presentacion: {
      include: {
        t_productos: {
          select: {
            id_producto: true,
            nombre_producto: true,
          },
        },
      },
    },
  };

  private async checkPresentacion(id_presentacion: number) {
    const presentacion = await this.prisma.t_producto_presentaciones.findUnique({
      where: { id_presentacion },
    });

    if (!presentacion) {
      throw new BadRequestException(`La presentación con ID ${id_presentacion} no existe.`);
    }
  }

  async create(createCodigoDto: CreateCodigoDto) {
    await this.checkPresentacion(createCodigoDto.id_presentacion);

    try {
      return await this.prisma.t_producto_codigos.create({
        data: createCodigoDto,
        include: this.includeRelations,
      });
    } catch (error) {
      if (error.code === 'P2002') {
        throw new ConflictException(`El código ${createCodigoDto.valor_codigo} ya está en uso.`);
      }
      throw error;
    }
  }

  async findAll() {
    return await this.prisma.t_producto_codigos.findMany({
      include: this.includeRelations,
      orderBy: { fecha_registro: 'desc' },
    });
  }

  async findOne(id: number) {
    const codigo = await this.prisma.t_producto_codigos.findUnique({
      where: { id_codigo: id },
      include: this.includeRelations,
    });

    if (!codigo) {
      throw new NotFoundException(`Código con ID ${id} no encontrado.`);
    }

    return codigo;
  }

  async update(id: number, updateCodigoDto: UpdateCodigoDto) {
    await this.findOne(id);

    if (updateCodigoDto.id_presentacion !== undefined) {
      await this.checkPresentacion(updateCodigoDto.id_presentacion);
    }

    try {
      return await this.prisma.t_producto_codigos.update({
        where: { id_codigo: id },
        data: {
          ...updateCodigoDto,
          fecha_modificacion: new Date(),
        },
        include: this.includeRelations,
      });
    } catch (error) {
      if (error.code === 'P2002') {
        throw new ConflictException(`El código ${updateCodigoDto.valor_codigo} ya está en uso.`);
      }
      throw error;
    }
  }

  async remove(id: number) {
    await this.findOne(id);

    return await this.prisma.t_producto_codigos.delete({
      where: { id_codigo: id },
    });
  }
}
