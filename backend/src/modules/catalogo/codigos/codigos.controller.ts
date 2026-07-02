import { Body, Controller, Delete, Get, Param, ParseIntPipe, Patch, Post } from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { CodigosService } from './codigos.service';
import { CreateCodigoDto } from './dto/create-codigo.dto';
import { UpdateCodigoDto } from './dto/update-codigo.dto';

@ApiTags('Códigos alternativos')
@Controller('catalogo/codigos')
export class CodigosController {
  constructor(private readonly codigosService: CodigosService) {}

  @Post()
  @ApiOperation({ summary: 'Crear código alternativo para una presentación' })
  @ApiResponse({ status: 201, description: 'El código ha sido creado exitosamente.' })
  create(@Body() createCodigoDto: CreateCodigoDto) {
    return this.codigosService.create(createCodigoDto);
  }

  @Get()
  @ApiOperation({ summary: 'Obtener todos los códigos alternativos' })
  findAll() {
    return this.codigosService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Obtener código por ID' })
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.codigosService.findOne(id);
  }

  @Patch(':id')
  @ApiOperation({ summary: 'Actualizar código alternativo' })
  update(@Param('id', ParseIntPipe) id: number, @Body() updateCodigoDto: UpdateCodigoDto) {
    return this.codigosService.update(id, updateCodigoDto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Eliminar código alternativo' })
  remove(@Param('id', ParseIntPipe) id: number) {
    return this.codigosService.remove(id);
  }
}
