import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UsuariosService } from 'src/usuarios/usuarios.service';
import * as bcrypt from 'bcrypt';
@Injectable()
export class AuthService {
  constructor(
    private usuariosService: UsuariosService,
    private jwtService: JwtService,
  ) {}

  async signIn(email: string, pass: string): Promise<any> {
    const user = await this.usuariosService.findOne(email);
    if (!user) throw new UnauthorizedException();
    const isValid = await bcrypt.compare(pass, user.password);
    if (!isValid) {
      throw new UnauthorizedException();
    }
    const payload = {
      id: user._id,
      email: user.email,
      nombre: user.nombre,
      apellido1: user.apellido1,
      apellido2: user.apellido2,
    };
    return {
      access_token: await this.jwtService.signAsync(payload, {
        secret: process.env.JWT_SECRET,
      }),
    };
  }
}
