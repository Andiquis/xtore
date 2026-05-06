import { Module } from '@nestjs/common';
import { MarcasModule } from './marcas/marcas.module';
import { CategoriasModule } from './categorias/categorias.module';
import { ProductosModule } from './productos/productos.module';
import { PresentacionesModule } from './presentaciones/presentaciones.module';
import { CodigosModule } from './codigos/codigos.module';
import { PreciosModule } from './precios/precios.module';

@Module({
  imports: [MarcasModule, CategoriasModule, ProductosModule, PresentacionesModule, CodigosModule, PreciosModule]
})
export class CatalogoModule {}
