import { Module } from '@nestjs/common';
import { MarcasController } from './marcas.controller';
import { MarcasService } from './marcas.service';

@Module({
  controllers: [MarcasController],
  providers: [MarcasService]
})
export class MarcasModule {}
