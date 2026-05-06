import { Module } from '@nestjs/common';
import { PresentacionesController } from './presentaciones.controller';
import { PresentacionesService } from './presentaciones.service';

@Module({
  controllers: [PresentacionesController],
  providers: [PresentacionesService]
})
export class PresentacionesModule {}
