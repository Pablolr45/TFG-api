import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { ElementCanContains } from '../properties/ElementCanContains';

@Schema()
export class Fusible implements ElementCanContains {
  @Prop()
  elements: any[];
}
export const FusibleSchema = SchemaFactory.createForClass(Fusible);
