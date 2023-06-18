import { Test, TestingModule } from '@nestjs/testing';
import { EscapeRoomsController } from './escape-rooms.controller';

describe('EscapeRoomsController', () => {
  let controller: EscapeRoomsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [EscapeRoomsController],
    }).compile();

    controller = module.get<EscapeRoomsController>(EscapeRoomsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
