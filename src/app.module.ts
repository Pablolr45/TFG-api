import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { EscapeRoomsModule } from './escape-rooms/escape-rooms.module';
import { MongooseModule } from '@nestjs/mongoose';
import { UsuariosModule } from './usuarios/usuarios.module';
import { AuthModule } from './auth/auth.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot(),
    EscapeRoomsModule,
    MongooseModule.forRoot('mongodb://localhost/nest'),
    UsuariosModule,
    AuthModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
