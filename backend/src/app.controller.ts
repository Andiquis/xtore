import { Controller, Get } from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { AppService } from './app.service';

@ApiTags('App')
@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  @ApiOperation({ summary: 'Prueba de conexión básica', description: 'Verifica que el backend esté levantado correctamente respondiendo con un saludo.' })
  getHello(): string {
    return this.appService.getHello();
  }
}
