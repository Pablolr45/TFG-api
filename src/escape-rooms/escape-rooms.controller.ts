import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  UseGuards,
} from '@nestjs/common';
import { EscapeRoomsService } from './escape-rooms.service';
import { EscapeRoomDocument } from './schemas/escape-room.schema';
import { AuthGuard } from 'src/auth/auth.guard';

@UseGuards(AuthGuard)
@Controller('escape-rooms')
export class EscapeRoomsController {
  constructor(private escapeRoomService: EscapeRoomsService) {}

  @Get()
  async getAll(): Promise<EscapeRoomDocument[]> {
    return await this.escapeRoomService.getAll();
  }
  @Post()
  async create(@Body() escapeRoom: EscapeRoomDocument): Promise<any> {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    return await this.escapeRoomService.create(escapeRoom);
  }
  @Post(':id')
  async update(
    @Param('id') id,
    @Body() escapeRoom: EscapeRoomDocument,
  ): Promise<any> {
    return await this.escapeRoomService.update(id, escapeRoom);
  }

  @Get(':id')
  async getById(@Param('id') id: string): Promise<EscapeRoomDocument> {
    return await this.escapeRoomService.getById(id);
  }

  @Delete(':id')
  async delete(@Param('id') id): Promise<EscapeRoomDocument> {
    return await this.escapeRoomService.delete(id);
  }
}
