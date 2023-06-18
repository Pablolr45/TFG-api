import { Module } from '@nestjs/common';
import { UsuariosController } from './usuarios.controller';
import { UsuariosService } from './usuarios.service';
import { MongooseModule } from '@nestjs/mongoose';
import { UsuarioSchema } from './schemas/usuario.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'usuario', schema: UsuarioSchema }]),
  ],
  controllers: [UsuariosController],
  providers: [UsuariosService],
  exports: [UsuariosService],
})
export class UsuariosModule {}
