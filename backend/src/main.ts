import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { setupSwagger } from './core/config/swagger.config';
import { NestExpressApplication } from '@nestjs/platform-express';
import { join } from 'path';
import 'dotenv/config';

async function bootstrap() {
  // Fix para serialización de BigInt de Prisma
  (BigInt.prototype as any).toJSON = function () {
    return this.toString();
  };

  const app = await NestFactory.create<NestExpressApplication>(AppModule);
  const port = Number(process.env.PORT ?? 3000);
  const apiPrefix = process.env.API_PREFIX ?? 'api';
  const corsOrigin = process.env.CORS_ORIGIN?.split(',').map((origin) =>
    origin.trim(),
  ) ?? [
    'http://localhost:4200',
    'http://localhost:4201',
    'http://127.0.0.1:4200',
    'http://127.0.0.1:4201',
  ];

  app.setGlobalPrefix(apiPrefix);
  app.useStaticAssets(join(process.cwd(), 'src/uploads'), {
    prefix: '/uploads',
  });
  app.enableCors({
    origin: corsOrigin,
    methods: ['GET', 'POST', 'PATCH', 'DELETE', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization'],
    credentials: true,
  });

  setupSwagger(app);
  await app.listen(port, '0.0.0.0');
  console.log(`XTORE API running at http://localhost:${port}/${apiPrefix}`);
}
bootstrap();
