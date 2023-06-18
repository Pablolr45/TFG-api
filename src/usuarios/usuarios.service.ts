import { Injectable } from '@nestjs/common';
import { Usuario, UsuarioDocument } from './schemas/usuario.schema';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import * as bcrypt from 'bcrypt';
@Injectable()
export class UsuariosService {
  constructor(
    @InjectModel('usuario') private usuariosModel: Model<UsuarioDocument>,
  ) {}

  async getAll(): Promise<UsuarioDocument[]> {
    return await this.usuariosModel.find();
  }
  async findOne(email: string): Promise<UsuarioDocument> {
    return await this.usuariosModel.findOne({ email }).select('+password');
  }
  async create(usuario: Usuario & { _id?: string }): Promise<UsuarioDocument> {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { _id, password, ...newUsuario } = usuario;
    const newPassword = await bcrypt.hash(password, 10);
    return await this.usuariosModel.create({
      ...newUsuario,
      password: newPassword,
    });
  }
}
