import { Module } from '@nestjs/common';
import { RolesInicioSeed } from './roles/roles_inicio.seed';
import { RolesRestoreSeed } from './roles/roles_restore.seed';


@Module({
  providers: [RolesInicioSeed, RolesRestoreSeed],
})
export class SeedsModule {}
 