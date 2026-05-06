import { BadRequestException, ConflictException, Injectable, Logger, NotFoundException } from '@nestjs/common';
import { existsSync, unlinkSync } from 'fs';
import { basename, join } from 'path';
import { PrismaService } from '../../../core/database/prisma/prisma.service';
import { CreateMarcaDto } from './dto/create-marca.dto';
import { UpdateMarcaDto } from './dto/update-marca.dto';

const marcasUploadPath = join(process.cwd(), 'src/uploads/marcas');

@Injectable()
export class MarcasService {
  private readonly logger = new Logger(MarcasService.name);

  constructor(private readonly prisma: PrismaService) {}

  async create(createMarcaDto: CreateMarcaDto) {
    try {
      const marca = await this.prisma.t_marcas.create({
        data: createMarcaDto,
      });

      return this.findOne(Number(marca.id_marca));
    } catch (error) {
      if (error.code === 'P2002') {
        throw new ConflictException(`La marca con el nombre ${createMarcaDto.nombre_marca} ya existe.`);
      }
      throw error;
    }
  }

  async findAll() {
    // Para simplificar, devolvemos todas las marcas. Se puede añadir paginación en el futuro.
    return await this.prisma.t_marcas.findMany({
      include: {
        _count: {
          select: { t_productos: true },
        },
      },
      orderBy: { nombre_marca: 'asc' },
    });
  }

  async findOne(id: number) {
    const marca = await this.prisma.t_marcas.findUnique({
      where: { id_marca: id },
      include: {
        _count: {
          select: { t_productos: true },
        },
      },
    });
    
    if (!marca) {
      throw new NotFoundException(`Marca con ID ${id} no encontrada`);
    }
    
    return marca;
  }

  async update(id: number, updateMarcaDto: UpdateMarcaDto) {
    // Check if it exists
    await this.findOne(id);
    
    try {
      await this.prisma.t_marcas.update({
        where: { id_marca: id },
        data: {
          ...updateMarcaDto,
          fecha_modificacion: new Date(),
        },
      });

      return this.findOne(id);
    } catch (error) {
      if (error.code === 'P2002') {
        throw new ConflictException(`La marca con el nombre ${updateMarcaDto.nombre_marca} ya existe.`);
      }
      throw error;
    }
  }

  async updateLogo(id: number, logoUrl: string) {
    const marca = await this.findOne(id);

    if (!logoUrl) {
      throw new BadRequestException('No se recibió una imagen válida para la marca.');
    }

    await this.prisma.t_marcas.update({
      where: { id_marca: id },
      data: {
        logo_url: logoUrl,
        fecha_modificacion: new Date(),
      },
    });

    this.deleteLocalLogoFile(marca.logo_url);

    return this.findOne(id);
  }

  async remove(id: number) {
    // Check if it exists
    const marca = await this.findOne(id);
    
    const deleted = await this.prisma.t_marcas.delete({
      where: { id_marca: id },
    });

    this.deleteLocalLogoFile(marca.logo_url);

    return deleted;
  }

  private deleteLocalLogoFile(logoUrl?: string | null): void {
    const fileName = this.getLocalLogoFileName(logoUrl);

    if (!fileName) {
      return;
    }

    const filePath = join(marcasUploadPath, fileName);

    try {
      if (!existsSync(filePath)) {
        return;
      }

      unlinkSync(filePath);
    } catch (error) {
      this.logger.warn(`No se pudo eliminar el logo fisico de marca: ${filePath}`);
    }
  }

  private getLocalLogoFileName(logoUrl?: string | null): string | null {
    if (!logoUrl) {
      return null;
    }

    if (logoUrl.startsWith('/uploads/marcas/')) {
      return basename(logoUrl);
    }

    try {
      const parsedUrl = new URL(logoUrl);
      return parsedUrl.pathname.startsWith('/uploads/marcas/')
        ? basename(parsedUrl.pathname)
        : null;
    } catch {
      return null;
    }
  }
}
