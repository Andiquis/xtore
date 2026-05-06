import { Module } from '@nestjs/common';
import { PreciosController } from './precios.controller';
import { PreciosService } from './precios.service';

@Module({
  controllers: [PreciosController],
  providers: [PreciosService]
})
export class PreciosModule {}
