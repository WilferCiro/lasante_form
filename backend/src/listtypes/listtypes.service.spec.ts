import { Test, TestingModule } from '@nestjs/testing';
import { ListtypesService } from './listtypes.service';

describe('ListtypesService', () => {
  let service: ListtypesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ListtypesService],
    }).compile();

    service = module.get<ListtypesService>(ListtypesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
