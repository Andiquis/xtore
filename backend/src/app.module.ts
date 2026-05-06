import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';

import { PrismaModule } from './core/database/prisma/prisma.module';
import { SeedsModule } from './core/database/seeds/seeds.module';
import { CatalogoModule } from './modules/catalogo/catalogo.module';

@Module({
  imports: [PrismaModule, SeedsModule, CatalogoModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
