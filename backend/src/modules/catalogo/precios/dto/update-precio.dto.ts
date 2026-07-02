import { PartialType } from '@nestjs/swagger';
import { CreatePrecioDto } from './create-precio.dto';

export class UpdatePrecioDto extends PartialType(CreatePrecioDto) {}
