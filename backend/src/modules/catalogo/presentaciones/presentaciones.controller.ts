import { Controller, Get, Post, Body, Patch, Param, Delete, ParseIntPipe } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';
import { PresentacionesService } from './presentaciones.service';
import { CreatePresentacionDto } from './dto/create-presentacion.dto';
import { UpdatePresentacionDto } from './dto/update-presentacion.dto';

@ApiTags('Presentaciones')
@Controller('catalogo/presentaciones')
export class PresentacionesController {
  constructor(private readonly presentacionesService: PresentacionesService) {}

  @Post()
  @ApiOperation({ summary: 'Crear una nueva presentación' })
  @ApiResponse({ status: 201, description: 'La presentación ha sido creada exitosamente.' })
  @ApiResponse({ status: 400, description: 'El producto asociado no existe.' })
  @ApiResponse({ status: 409, description: 'El SKU proporcionado ya está en uso.' })
  create(@Body() createPresentacionDto: CreatePresentacionDto) {
    return this.presentacionesService.create(createPresentacionDto);
  }

  @Get()
  @ApiOperation({ summary: 'Obtener todas las presentaciones' })
  findAll() {
    return this.presentacionesService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Obtener una presentación por su ID' })
  @ApiResponse({ status: 200, description: 'La presentación ha sido encontrada.' })
  @ApiResponse({ status: 404, description: 'La presentación no existe.' })
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.presentacionesService.findOne(id);
  }

  @Patch(':id')
  @ApiOperation({ summary: 'Actualizar una presentación' })
  update(@Param('id', ParseIntPipe) id: number, @Body() updatePresentacionDto: UpdatePresentacionDto) {
    return this.presentacionesService.update(id, updatePresentacionDto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Eliminar una presentación' })
  remove(@Param('id', ParseIntPipe) id: number) {
    return this.presentacionesService.remove(id);
  }
}
