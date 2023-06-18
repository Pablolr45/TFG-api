import { Prop, SchemaFactory } from '@nestjs/mongoose';
import { Location } from '../properties/Location';
export class Pomo implements Location {
  @Prop()
  x: number;
  @Prop()
  y: number;
  @Prop()
  z: number;
}
export const PomoSchema = SchemaFactory.createForClass(Pomo);
