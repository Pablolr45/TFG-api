import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { UsuariosService } from './usuarios/usuarios.service';

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    private usuarioservice: UsuariosService,
  ) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
  @Get('setup')
  async setup() {
    return await this.usuarioservice.create({
      email: 'prueba@gmail.com',
      password: 'qwe',
      nombre: 'Pablo',
      apellido1: 'Lopez',
      apellido2: 'Roda',
    });
  }
}
