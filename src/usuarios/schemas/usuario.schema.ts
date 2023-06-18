import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type UsuarioDocument = HydratedDocument<Usuario>;

@Schema({ toJSON: { virtuals: true } })
export class Usuario {
  @Prop({ required: true })
  nombre: string;

  @Prop({ required: true })
  apellido1: string;

  @Prop({ required: true })
  apellido2: string;

  @Prop({ required: true })
  email: string;

  @Prop({ required: true, select: -1 })
  password: string;
}

export const UsuarioSchema = SchemaFactory.createForClass(Usuario);

UsuarioSchema.virtual('nombreCompleto').get(function (this) {
  return `${this.nombre} ${this.apellido1} ${this.apellido2}`;
});
