import { NestFactory } from '@nestjs/core';
import { AppModule } from '../../../../app.module';
import { RolesRestoreSeed } from './roles_restore.seed';

async function bootstrap() {
  console.log('🌱 Iniciando restore de roles...');

  const app = await NestFactory.createApplicationContext(AppModule);

  try {
    const seed = app.get(RolesRestoreSeed);

    await seed.execute();

    console.log('✅ Proceso completado');
  } finally {
    await app.close();
  }
}

bootstrap();
