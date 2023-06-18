import { Body, Controller, Get, Post } from '@nestjs/common';
import { UsuariosService } from './usuarios.service';
import { Usuario, UsuarioDocument } from './schemas/usuario.schema';

@Controller('usuarios')
export class UsuariosController {
  constructor(private usruariosService: UsuariosService) {}

  @Get()
  async getAll(): Promise<UsuarioDocument[]> {
    return await this.usruariosService.getAll();
  }

  @Post()
  async create(@Body() usuario: Usuario & { _id?: string }): Promise<any> {
    return await this.usruariosService.create(usuario);
  }
}
