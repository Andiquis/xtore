import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { IsString, IsOptional, MaxLength, IsEnum } from 'class-validator';
import { t_estado_generico } from '@prisma/client';

export class CreateMarcaDto {
  @ApiProperty({ description: 'Nombre de la marca', example: 'Sony' })
  @IsString()
  @MaxLength(120)
  nombre_marca: string;

  @ApiPropertyOptional({ description: 'Descripción detallada de la marca', example: 'Marca japonesa de tecnología' })
  @IsString()
  @IsOptional()
  descripcion_marca?: string;

  @ApiPropertyOptional({ description: 'URL del logo de la marca', example: 'https://example.com/logo-sony.png' })
  @IsString()
  @IsOptional()
  @MaxLength(500)
  logo_url?: string;

  @ApiPropertyOptional({ description: 'Estado de la marca', enum: t_estado_generico, default: t_estado_generico.activo })
  @IsEnum(t_estado_generico)
  @IsOptional()
  estado_marca?: t_estado_generico;
}
