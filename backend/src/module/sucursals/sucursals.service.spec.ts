import { Test, TestingModule } from '@nestjs/testing';
import { SucursalsService } from './sucursals.service';

describe('SucursalsService', () => {
  let service: SucursalsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SucursalsService],
    }).compile();

    service = module.get<SucursalsService>(SucursalsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
