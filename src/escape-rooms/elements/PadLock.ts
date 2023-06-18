import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { ElementActive } from '../properties/ElementActive';

@Schema()
export class PadLock implements ElementActive {
  @Prop()
  code: string;

  @Prop()
  elementPasive: string;
}
export const PadLockSchema = SchemaFactory.createForClass(PadLock);
