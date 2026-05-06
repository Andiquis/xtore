import { Module } from '@nestjs/common';
import { CodigosController } from './codigos.controller';
import { CodigosService } from './codigos.service';

@Module({
  controllers: [CodigosController],
  providers: [CodigosService]
})
export class CodigosModule {}
