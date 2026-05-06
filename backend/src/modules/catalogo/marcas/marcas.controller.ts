import {
  BadRequestException,
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Patch,
  Post,
  UploadedFile,
  UseInterceptors,
} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { ApiBody, ApiConsumes, ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { extname, join } from 'path';
import { existsSync, mkdirSync } from 'fs';
import { MarcasService } from './marcas.service';
import { CreateMarcaDto } from './dto/create-marca.dto';
import { UpdateMarcaDto } from './dto/update-marca.dto';

const { diskStorage } = require('multer');
const marcasUploadPath = join(process.cwd(), 'src/uploads/marcas');
const allowedImageMimes = ['image/jpeg', 'image/png', 'image/webp', 'image/svg+xml'];

const marcaLogoStorage = diskStorage({
  destination: (_req, _file, callback) => {
    if (!existsSync(marcasUploadPath)) {
      mkdirSync(marcasUploadPath, { recursive: true });
    }

    callback(null, marcasUploadPath);
  },
  filename: (_req, file, callback) => {
    const safeName = file.originalname
      .replace(extname(file.originalname), '')
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/(^-|-$)/g, '')
      .slice(0, 50) || 'logo-marca';
    const uniqueSuffix = `${Date.now()}-${Math.round(Math.random() * 1e9)}`;

    callback(null, `${safeName}-${uniqueSuffix}${extname(file.originalname).toLowerCase()}`);
  },
});

const marcaLogoFileFilter = (_req: unknown, file: any, callback: (error: Error | null, acceptFile: boolean) => void) => {
  if (!allowedImageMimes.includes(file.mimetype)) {
    callback(new BadRequestException('El logo debe ser una imagen JPG, PNG, WEBP o SVG.'), false);
    return;
  }

  callback(null, true);
};

@ApiTags('Marcas')
@Controller('catalogo/marcas')
export class MarcasController {
  constructor(private readonly marcasService: MarcasService) {}

  @Post()
  @ApiOperation({ summary: 'Crear una nueva marca' })
  @ApiResponse({ status: 201, description: 'La marca ha sido creada exitosamente.' })
  @ApiResponse({ status: 409, description: 'La marca ya existe.' })
  create(@Body() createMarcaDto: CreateMarcaDto) {
    return this.marcasService.create(createMarcaDto);
  }

  @Get()
  @ApiOperation({ summary: 'Obtener todas las marcas' })
  findAll() {
    return this.marcasService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Obtener una marca por su ID' })
  @ApiResponse({ status: 200, description: 'La marca ha sido encontrada.' })
  @ApiResponse({ status: 404, description: 'La marca no existe.' })
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.marcasService.findOne(id);
  }

  @Patch(':id')
  @ApiOperation({ summary: 'Actualizar una marca' })
  update(@Param('id', ParseIntPipe) id: number, @Body() updateMarcaDto: UpdateMarcaDto) {
    return this.marcasService.update(id, updateMarcaDto);
  }

  @Post(':id/logo')
  @UseInterceptors(
    FileInterceptor('logo', {
      storage: marcaLogoStorage,
      fileFilter: marcaLogoFileFilter,
      limits: { fileSize: 2 * 1024 * 1024 },
    }),
  )
  @ApiOperation({ summary: 'Subir o reemplazar el logo de una marca' })
  @ApiConsumes('multipart/form-data')
  @ApiBody({
    schema: {
      type: 'object',
      properties: {
        logo: {
          type: 'string',
          format: 'binary',
        },
      },
      required: ['logo'],
    },
  })
  uploadLogo(@Param('id', ParseIntPipe) id: number, @UploadedFile() file: any) {
    if (!file) {
      throw new BadRequestException('Selecciona una imagen para el logo de la marca.');
    }

    return this.marcasService.updateLogo(id, `/uploads/marcas/${file.filename}`);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Eliminar una marca' })
  remove(@Param('id', ParseIntPipe) id: number) {
    return this.marcasService.remove(id);
  }
}
