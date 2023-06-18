import { Prop, SchemaFactory } from '@nestjs/mongoose';
import { ElementActive } from '../properties/ElementActive';

export class Llave implements ElementActive {
  @Prop()
  elementPasive: string;
}

export const LlaveSchema = SchemaFactory.createForClass(Llave);
