import { Prop, SchemaFactory } from '@nestjs/mongoose';
import { Location } from '../properties/Location';
export class Palanca implements Location {
  @Prop()
  x: number;
  @Prop()
  y: number;
  @Prop()
  z: number;
}
export const PalancaSchema = SchemaFactory.createForClass(Palanca);
