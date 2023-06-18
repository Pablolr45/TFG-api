import { Prop, SchemaFactory } from '@nestjs/mongoose';

export class Ordenador {
  @Prop()
  claveActivacion: string;

  @Prop()
  url: string;
}

export const OrdenadorSchema = SchemaFactory.createForClass(Ordenador);
