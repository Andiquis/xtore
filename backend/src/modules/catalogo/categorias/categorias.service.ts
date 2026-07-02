import { Injectable, NotFoundException, ConflictException, BadRequestException } from '@nestjs/common';
import { PrismaService } from '../../../core/database/prisma/prisma.service';
import { CreateCategoriaDto } from './dto/create-categoria.dto';
import { UpdateCategoriaDto } from './dto/update-categoria.dto';

@Injectable()
export class CategoriasService {
  constructor(private readonly prisma: PrismaService) {}

  async create(createCategoriaDto: CreateCategoriaDto) {
    try {
      const categoria = await this.prisma.t_categorias.create({
        data: createCategoriaDto,
      });

      return this.findOne(Number(categoria.id_categoria));
    } catch (error) {
      if (error.code === 'P2002') {
        throw new ConflictException('Ya existe una categoría con este nombre en el mismo nivel jerárquico.');
      }
      throw error;
    }
  }

  async findAll() {
    return await this.prisma.t_categorias.findMany({
      include: {
        categoria_padre: true,
        _count: {
          select: {
            t_productos: true,
            subcategorias: true,
          },
        },
      },
      orderBy: { nombre_categoria: 'asc' },
    });
  }

  async findOne(id: number) {
    const categoria = await this.prisma.t_categorias.findUnique({
      where: { id_categoria: id },
      include: {
        categoria_padre: true,
        subcategorias: true,
        _count: {
          select: {
            t_productos: true,
            subcategorias: true,
          },
        },
      }
    });
    
    if (!categoria) {
      throw new NotFoundException(`Categoría con ID ${id} no encontrada`);
    }
    
    return categoria;
  }

  async update(id: number, updateCategoriaDto: UpdateCategoriaDto) {
    // Check if it exists
    await this.findOne(id);
    
    await this.assertValidParent(id, updateCategoriaDto.id_categoria_padre);
    
    try {
      await this.prisma.t_categorias.update({
        where: { id_categoria: id },
        data: {
          ...updateCategoriaDto,
          fecha_modificacion: new Date(),
        },
      });

      return this.findOne(id);
    } catch (error) {
      if (error.code === 'P2002') {
        throw new ConflictException('Ya existe una categoría con este nombre en el mismo nivel jerárquico.');
      }
      throw error;
    }
  }

  async remove(id: number) {
    // Check if it exists
    await this.findOne(id);
    
    return await this.prisma.t_categorias.delete({
      where: { id_categoria: id },
    });
  }

  private async assertValidParent(id: number, parentId?: number | null) {
    if (parentId === undefined || parentId === null) {
      return;
    }

    if (parentId === id) {
      throw new BadRequestException('Una categoría no puede ser su propia categoría padre.');
    }

    let currentParentId: bigint | number | null = BigInt(parentId);

    while (currentParentId !== null) {
      if (Number(currentParentId) === id) {
        throw new BadRequestException('Una categoría no puede depender de una de sus subcategorías.');
      }

      const parent = await this.prisma.t_categorias.findUnique({
        where: { id_categoria: currentParentId },
        select: { id_categoria_padre: true },
      });

      if (!parent) {
        throw new BadRequestException(`Categoría padre con ID ${parentId} no encontrada.`);
      }

      currentParentId = parent.id_categoria_padre;
    }
  }
}
