import { Injectable, NotFoundException, ConflictException, BadRequestException } from '@nestjs/common';
import { PrismaService } from '../../../core/database/prisma/prisma.service';
import { CreateCategoriaDto } from './dto/create-categoria.dto';
import { UpdateCategoriaDto } from './dto/update-categoria.dto';

@Injectable()
export class CategoriasService {
  constructor(private readonly prisma: PrismaService) {}

  async create(createCategoriaDto: CreateCategoriaDto) {
    try {
      return await this.prisma.t_categorias.create({
        data: createCategoriaDto,
      });
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
        // subcategorias: true // Opcional, puede ser muy pesado si hay muchos niveles
      },
      orderBy: { nombre_categoria: 'asc' },
    });
  }

  async findOne(id: number) {
    const categoria = await this.prisma.t_categorias.findUnique({
      where: { id_categoria: id },
      include: {
        categoria_padre: true,
        subcategorias: true
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
    
    // Validate it's not trying to set itself as its own parent
    if (updateCategoriaDto.id_categoria_padre && updateCategoriaDto.id_categoria_padre === id) {
      throw new BadRequestException('Una categoría no puede ser su propia categoría padre.');
    }
    
    try {
      return await this.prisma.t_categorias.update({
        where: { id_categoria: id },
        data: updateCategoriaDto,
      });
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
}
