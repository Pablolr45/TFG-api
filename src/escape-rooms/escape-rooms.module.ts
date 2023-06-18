import { Module } from '@nestjs/common';
import { EscapeRoomsController } from './escape-rooms.controller';
import { EscapeRoomsService } from './escape-rooms.service';
import { MongooseModule } from '@nestjs/mongoose';
import { EscapeRoomSchema } from './schemas/escape-room.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: 'escape-room',
        schema: EscapeRoomSchema,
        collection: 'escape-rooms',
      },
    ]),
  ],
  controllers: [EscapeRoomsController],
  providers: [EscapeRoomsService],
})
export class EscapeRoomsModule {}
