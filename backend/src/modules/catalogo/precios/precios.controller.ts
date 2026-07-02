import { Body, Controller, Delete, Get, Param, ParseIntPipe, Patch, Post } from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { PreciosService } from './precios.service';
import { CreatePrecioDto } from './dto/create-precio.dto';
import { UpdatePrecioDto } from './dto/update-precio.dto';

@ApiTags('Precios')
@Controller('catalogo/precios')
export class PreciosController {
  constructor(private readonly preciosService: PreciosService) {}

  @Post()
  @ApiOperation({ summary: 'Crear precio para una presentación' })
  @ApiResponse({ status: 201, description: 'El precio ha sido creado exitosamente.' })
  create(@Body() createPrecioDto: CreatePrecioDto) {
    return this.preciosService.create(createPrecioDto);
  }

  @Get()
  @ApiOperation({ summary: 'Obtener todos los precios vigentes' })
  findAll() {
    return this.preciosService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Obtener precio por ID' })
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.preciosService.findOne(id);
  }

  @Patch(':id')
  @ApiOperation({ summary: 'Actualizar precio' })
  update(@Param('id', ParseIntPipe) id: number, @Body() updatePrecioDto: UpdatePrecioDto) {
    return this.preciosService.update(id, updatePrecioDto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Eliminar precio' })
  remove(@Param('id', ParseIntPipe) id: number) {
    return this.preciosService.remove(id);
  }
}
