import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { IsString, IsOptional, MaxLength, IsEnum, IsNumber, IsBoolean } from 'class-validator';
import { t_estado_producto, t_tipo_producto } from '@prisma/client';

export class CreateProductoDto {
  @ApiProperty({ description: 'Nombre del producto', example: 'Laptop ThinkPad T14' })
  @IsString()
  @MaxLength(200)
  nombre_producto: string;

  @ApiPropertyOptional({ description: 'Descripción del producto', example: 'Laptop empresarial de 14 pulgadas' })
  @IsString()
  @IsOptional()
  descripcion_producto?: string;

  @ApiPropertyOptional({ description: 'ID de la marca', example: 1 })
  @IsNumber()
  @IsOptional()
  id_marca?: number;

  @ApiProperty({ description: 'ID de la categoría a la que pertenece', example: 5 })
  @IsNumber()
  id_categoria: number;

  @ApiPropertyOptional({ description: 'Tipo de producto', enum: t_tipo_producto, default: t_tipo_producto.producto })
  @IsEnum(t_tipo_producto)
  @IsOptional()
  tipo_producto?: t_tipo_producto;

  @ApiPropertyOptional({ description: 'Indica si el producto es perecible', default: false })
  @IsBoolean()
  @IsOptional()
  es_perecible?: boolean;

  @ApiPropertyOptional({ description: 'Indica si requiere control por lote', default: false })
  @IsBoolean()
  @IsOptional()
  requiere_lote?: boolean;

  @ApiPropertyOptional({ description: 'Estado del producto', enum: t_estado_producto, default: t_estado_producto.activo })
  @IsEnum(t_estado_producto)
  @IsOptional()
  estado_producto?: t_estado_producto;

  @ApiPropertyOptional({ description: 'URL de la imagen representativa del producto', example: 'https://example.com/laptop.jpg' })
  @IsString()
  @MaxLength(500)
  @IsOptional()
  imagen_url?: string;
}
