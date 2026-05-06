import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { IsString, IsOptional, MaxLength, IsEnum, IsNumber } from 'class-validator';
import { t_estado_generico } from '@prisma/client';

export class CreateCategoriaDto {
  @ApiProperty({ description: 'Nombre de la categoría', example: 'Electrónica' })
  @IsString()
  @MaxLength(120)
  nombre_categoria: string;

  @ApiPropertyOptional({ description: 'ID de la categoría padre (si aplica)', example: 1 })
  @IsNumber()
  @IsOptional()
  id_categoria_padre?: number;

  @ApiPropertyOptional({ description: 'Estado de la categoría', enum: t_estado_generico, default: t_estado_generico.activo })
  @IsEnum(t_estado_generico)
  @IsOptional()
  estado_categoria?: t_estado_generico;
}
