import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { ElementCanContains } from '../properties/ElementCanContains';
import { ElementPasive } from '../properties/ElementPasive';

@Schema()
export class CajaFuerte implements ElementPasive, ElementCanContains {
  @Prop()
  elements: any[];

  @Prop()
  elementActive: string;
}
export const CajaFuerteSchema = SchemaFactory.createForClass(CajaFuerte);
