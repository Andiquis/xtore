import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { IsBoolean, IsNumber, IsOptional, IsString, MaxLength } from 'class-validator';

export class CreatePrecioDto {
  @ApiProperty({ description: 'ID de la presentación', example: 1 })
  @IsNumber()
  id_presentacion: number;

  @ApiPropertyOptional({ description: 'Precio de compra referencial', example: 7.5 })
  @IsNumber()
  @IsOptional()
  precio_compra?: number;

  @ApiProperty({ description: 'Precio de venta al público', example: 10 })
  @IsNumber()
  precio_venta: number;

  @ApiPropertyOptional({ description: 'Precio mayorista', example: 8.9 })
  @IsNumber()
  @IsOptional()
  precio_mayorista?: number;

  @ApiPropertyOptional({ description: 'Cantidad mínima mayorista', example: 12 })
  @IsNumber()
  @IsOptional()
  cantidad_minima_mayorista?: number;

  @ApiPropertyOptional({ description: 'Moneda ISO', default: 'PEN' })
  @IsString()
  @MaxLength(3)
  @IsOptional()
  moneda?: string;

  @ApiPropertyOptional({ description: 'Indica si incluye IGV', default: true })
  @IsBoolean()
  @IsOptional()
  incluye_igv?: boolean;
}
