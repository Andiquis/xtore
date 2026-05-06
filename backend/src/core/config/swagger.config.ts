import { INestApplication } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

export function setupSwagger(app: INestApplication): void {
  const config = new DocumentBuilder()
    .setTitle('xtore API')
    .setDescription(
      'Documentación oficial de la API para el ecosistema xtore. Incluye módulos de administración, productos y usuarios.',
    )
    .setVersion('1.0')
    // Pre-registracion de Tags principales para mantener un orden
    .addTag('App', 'Endpoints principales de la aplicación')
    .addTag('Usuarios', 'Operaciones relacionadas con cuentas, roles y seguridad')
    .addTag('Productos', 'Gestión de productos base')
    .addTag('Presentaciones', 'Gestión de formas de venta, SKUs y unidades')
    .addTag('Categorías', 'Organización y jerarquía de productos')
    .addTag('Marcas', 'Marcas y fabricantes')
    .addTag('Ventas', 'Transacciones de caja y ventas')
    .addBearerAuth(
      {
        type: 'http',
        scheme: 'bearer',
        bearerFormat: 'JWT',
        name: 'Authorization',
        description: 'Token JWT para usuarios, admins y cajeros',
        in: 'header',
      },
      'access-token', // Default bearer auth
    )
    .build();

  const document = SwaggerModule.createDocument(app, config);
  
  // Exponer en la ruta /api/docs para que coincida con oAuth
  SwaggerModule.setup('api/docs', app, document, {
    swaggerOptions: {
      persistAuthorization: true,
      displayRequestDuration: true,
      filter: true, // Habilita una barra de búsqueda para filtrar endpoints
    },
    customSiteTitle: 'xtore - API Docs',
    customfavIcon: 'https://nestjs.com/img/logo-small.svg',
    customCss: '.swagger-ui .topbar { display: none }',
  });
}
