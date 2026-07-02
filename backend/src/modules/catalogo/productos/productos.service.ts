import { Injectable, NotFoundException, BadRequestException } from '@nestjs/common';
import { PrismaService } from '../../../core/database/prisma/prisma.service';
import { CreateProductoDto } from './dto/create-producto.dto';
import { UpdateProductoDto } from './dto/update-producto.dto';

@Injectable()
export class ProductosService {
  constructor(private readonly prisma: PrismaService) {}

  private async checkRelaciones(id_categoria: number, id_marca?: number | null) {
    // Validar categoría
    const categoria = await this.prisma.t_categorias.findUnique({
      where: { id_categoria },
    });
    if (!categoria) {
      throw new BadRequestException(`La categoría con ID ${id_categoria} no existe.`);
    }

    // Validar marca si se proporciona
    if (id_marca) {
      const marca = await this.prisma.t_marcas.findUnique({
        where: { id_marca },
      });
      if (!marca) {
        throw new BadRequestException(`La marca con ID ${id_marca} no existe.`);
      }
    }
  }

  async create(createProductoDto: CreateProductoDto) {
    await this.checkRelaciones(createProductoDto.id_categoria, createProductoDto.id_marca);

    const producto = await this.prisma.t_productos.create({
      data: createProductoDto,
    });

    return this.findOne(Number(producto.id_producto));
  }

  async findAll() {
    return await this.prisma.t_productos.findMany({
      include: {
        t_marcas: true,
        t_categorias: true,
        _count: {
          select: { presentaciones: true },
        },
      },
      orderBy: { nombre_producto: 'asc' },
    });
  }

  async findOne(id: number) {
    const producto = await this.prisma.t_productos.findUnique({
      where: { id_producto: id },
      include: {
        t_marcas: true,
        t_categorias: true,
        presentaciones: true, // Incluimos sus presentaciones para dar una vista completa
        _count: {
          select: { presentaciones: true },
        },
      },
    });

    if (!producto) {
      throw new NotFoundException(`Producto con ID ${id} no encontrado.`);
    }

    return producto;
  }

  async update(id: number, updateProductoDto: UpdateProductoDto) {
    const producto = await this.findOne(id);

    // Validar relaciones si es que se están intentando actualizar
    const id_categoria = updateProductoDto.id_categoria ?? Number(producto.id_categoria);
    const id_marca = updateProductoDto.id_marca !== undefined ? updateProductoDto.id_marca : (producto.id_marca ? Number(producto.id_marca) : undefined);
    
    if (updateProductoDto.id_categoria !== undefined || updateProductoDto.id_marca !== undefined) {
      await this.checkRelaciones(id_categoria, id_marca);
    }

    await this.prisma.t_productos.update({
      where: { id_producto: id },
      data: {
        ...updateProductoDto,
        fecha_modificacion: new Date(),
      },
    });

    return this.findOne(id);
  }

  async remove(id: number) {
    await this.findOne(id);

    return await this.prisma.t_productos.delete({
      where: { id_producto: id },
    });
  }
}
