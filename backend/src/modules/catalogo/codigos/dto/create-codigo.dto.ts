import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { IsBoolean, IsEnum, IsNumber, IsOptional, IsString, MaxLength } from 'class-validator';
import { t_estado_generico, t_tipo_codigo } from '@prisma/client';

export class CreateCodigoDto {
  @ApiProperty({ description: 'ID de la presentación', example: 1 })
  @IsNumber()
  id_presentacion: number;

  @ApiPropertyOptional({ description: 'Tipo de código', enum: t_tipo_codigo, default: t_tipo_codigo.EAN })
  @IsEnum(t_tipo_codigo)
  @IsOptional()
  tipo_codigo?: t_tipo_codigo;

  @ApiProperty({ description: 'Valor del código', example: '7751234567890' })
  @IsString()
  @MaxLength(100)
  valor_codigo: string;

  @ApiPropertyOptional({ description: 'Indica si es código principal', default: false })
  @IsBoolean()
  @IsOptional()
  es_principal?: boolean;

  @ApiPropertyOptional({ description: 'Estado del código', enum: t_estado_generico, default: t_estado_generico.activo })
  @IsEnum(t_estado_generico)
  @IsOptional()
  estado_codigo?: t_estado_generico;
}
