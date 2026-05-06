import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { IsString, IsOptional, MaxLength, IsNumber, IsBoolean, IsEnum } from 'class-validator';
import { t_estado_producto } from '@prisma/client';

export class CreatePresentacionDto {
  @ApiProperty({ description: 'ID del producto al que pertenece la presentación', example: 1 })
  @IsNumber()
  id_producto: number;

  @ApiProperty({ description: 'Nombre de la presentación', example: 'Caja x 12 Unidades' })
  @IsString()
  @MaxLength(160)
  nombre_presentacion: string;

  @ApiProperty({ description: 'Código SKU (Stock Keeping Unit) único', example: 'SKU-12345' })
  @IsString()
  @MaxLength(80)
  sku: string;

  @ApiPropertyOptional({ description: 'Código de barras de la presentación', example: '1234567890123' })
  @IsString()
  @MaxLength(100)
  @IsOptional()
  codigo_barras?: string;

  @ApiPropertyOptional({ description: 'Unidad de medida (ej. NIU, CAJ)', default: 'NIU' })
  @IsString()
  @MaxLength(20)
  @IsOptional()
  unidad_medida?: string;

  @ApiPropertyOptional({ description: 'Factor de conversión respecto a la unidad base', example: 12.0000 })
  @IsNumber()
  @IsOptional()
  factor_conversion?: number;

  @ApiPropertyOptional({ description: 'Indica si esta presentación controla stock', default: true })
  @IsBoolean()
  @IsOptional()
  controla_stock?: boolean;

  @ApiPropertyOptional({ description: 'Estado de la presentación', enum: t_estado_producto, default: t_estado_producto.activo })
  @IsEnum(t_estado_producto)
  @IsOptional()
  estado_presentacion?: t_estado_producto;
}
