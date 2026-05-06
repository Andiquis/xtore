import { Injectable, NotFoundException, ConflictException, BadRequestException } from '@nestjs/common';
import { PrismaService } from '../../../core/database/prisma/prisma.service';
import { CreatePresentacionDto } from './dto/create-presentacion.dto';
import { UpdatePresentacionDto } from './dto/update-presentacion.dto';

@Injectable()
export class PresentacionesService {
  constructor(private readonly prisma: PrismaService) {}

  private async checkProducto(id_producto: number) {
    const producto = await this.prisma.t_productos.findUnique({
      where: { id_producto },
    });
    if (!producto) {
      throw new BadRequestException(`El producto con ID ${id_producto} no existe.`);
    }
  }

  async create(createPresentacionDto: CreatePresentacionDto) {
    await this.checkProducto(createPresentacionDto.id_producto);

    try {
      return await this.prisma.t_producto_presentaciones.create({
        data: createPresentacionDto,
      });
    } catch (error) {
      if (error.code === 'P2002') {
        throw new ConflictException(`El SKU ${createPresentacionDto.sku} ya está en uso.`);
      }
      throw error;
    }
  }

  async findAll() {
    return await this.prisma.t_producto_presentaciones.findMany({
      include: {
        t_productos: {
          select: { nombre_producto: true }
        }
      },
      orderBy: { nombre_presentacion: 'asc' },
    });
  }

  async findOne(id: number) {
    const presentacion = await this.prisma.t_producto_presentaciones.findUnique({
      where: { id_presentacion: id },
      include: {
        t_productos: true,
        codigos_alternativos: true,
        precio: true,
      },
    });

    if (!presentacion) {
      throw new NotFoundException(`Presentación con ID ${id} no encontrada.`);
    }

    return presentacion;
  }

  async update(id: number, updatePresentacionDto: UpdatePresentacionDto) {
    await this.findOne(id); // Verifica si existe la presentación

    if (updatePresentacionDto.id_producto !== undefined) {
      await this.checkProducto(updatePresentacionDto.id_producto);
    }

    try {
      return await this.prisma.t_producto_presentaciones.update({
        where: { id_presentacion: id },
        data: updatePresentacionDto,
      });
    } catch (error) {
      if (error.code === 'P2002') {
        throw new ConflictException(`El SKU ${updatePresentacionDto.sku} ya está en uso.`);
      }
      throw error;
    }
  }

  async remove(id: number) {
    await this.findOne(id);

    return await this.prisma.t_producto_presentaciones.delete({
      where: { id_presentacion: id },
    });
  }
}
