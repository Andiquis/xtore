import { PartialType } from '@nestjs/swagger';
import { CreatePresentacionDto } from './create-presentacion.dto';

export class UpdatePresentacionDto extends PartialType(CreatePresentacionDto) {}
