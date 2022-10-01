import { Test, TestingModule } from '@nestjs/testing';
import { PromotorsService } from './promotors.service';

describe('PromotorsService', () => {
  let service: PromotorsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PromotorsService],
    }).compile();

    service = module.get<PromotorsService>(PromotorsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
