import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { HydratedDocument } from 'mongoose';
import { CajaFuerte } from '../elements/CajaFuerte';
import { Llave } from '../elements/Llave';
import { Ordenador } from '../elements/Ordenador';
import { PadLock } from '../elements/PadLock';
import { Palanca } from '../elements/Palanca';
import { Pomo } from '../elements/Pomo';
import { Fusible } from '../elements/Fusible';

@Schema()
class Presentacion {
  @Prop()
  url: string;

  @Prop()
  tipo: 'Imagen' | 'Video';
}
const PresentacionSchema = SchemaFactory.createForClass(Presentacion);

export type EscapeRoomDocument = HydratedDocument<EscapeRoom>;
@Schema()
export class EscapeRoom {
  @Prop({ required: true })
  titulo: string;

  @Prop()
  subtitulo: string;

  @Prop()
  sala: string;

  @Prop()
  cuentaAtras: boolean;

  @Prop()
  puntuacion: boolean;

  @Prop()
  restaPista: number;

  @Prop()
  minutos: number;

  @Prop({ type: PresentacionSchema })
  presentacionInicial: Presentacion;

  @Prop({ type: PresentacionSchema })
  presentacionFinal: Presentacion;

  @Prop({
    type: [mongoose.Schema.Types.Mixed],
  })
  elements: Array<
    CajaFuerte | Llave | Ordenador | PadLock | Pomo | Palanca | Fusible
  >;
}

export const EscapeRoomSchema = SchemaFactory.createForClass(EscapeRoom);
