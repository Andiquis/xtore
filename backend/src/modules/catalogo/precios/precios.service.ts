import { BadRequestException, ConflictException, Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../../../core/database/prisma/prisma.service';
import { CreatePrecioDto } from './dto/create-precio.dto';
import { UpdatePrecioDto } from './dto/update-precio.dto';

@Injectable()
export class PreciosService {
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

  async create(createPrecioDto: CreatePrecioDto) {
    await this.checkPresentacion(createPrecioDto.id_presentacion);

    try {
      return await this.prisma.t_producto_precios.create({
        data: createPrecioDto,
        include: this.includeRelations,
      });
    } catch (error) {
      if (error.code === 'P2002') {
        throw new ConflictException('Esta presentación ya tiene un precio registrado.');
      }
      throw error;
    }
  }

  async findAll() {
    return await this.prisma.t_producto_precios.findMany({
      include: this.includeRelations,
      orderBy: { fecha_registro: 'desc' },
    });
  }

  async findOne(id: number) {
    const precio = await this.prisma.t_producto_precios.findUnique({
      where: { id_precio: id },
      include: this.includeRelations,
    });

    if (!precio) {
      throw new NotFoundException(`Precio con ID ${id} no encontrado.`);
    }

    return precio;
  }

  async update(id: number, updatePrecioDto: UpdatePrecioDto) {
    await this.findOne(id);

    if (updatePrecioDto.id_presentacion !== undefined) {
      await this.checkPresentacion(updatePrecioDto.id_presentacion);
    }

    try {
      return await this.prisma.t_producto_precios.update({
        where: { id_precio: id },
        data: {
          ...updatePrecioDto,
          fecha_modificacion: new Date(),
        },
        include: this.includeRelations,
      });
    } catch (error) {
      if (error.code === 'P2002') {
        throw new ConflictException('Esta presentación ya tiene un precio registrado.');
      }
      throw error;
    }
  }

  async remove(id: number) {
    await this.findOne(id);

    return await this.prisma.t_producto_precios.delete({
      where: { id_precio: id },
    });
  }
}
