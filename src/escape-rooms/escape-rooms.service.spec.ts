import { Test, TestingModule } from '@nestjs/testing';
import { EscapeRoomsService } from './escape-rooms.service';

describe('EscapeRoomsService', () => {
  let service: EscapeRoomsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [EscapeRoomsService],
    }).compile();

    service = module.get<EscapeRoomsService>(EscapeRoomsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
