import { Test, TestingModule } from '@nestjs/testing';
import { ListproductsService } from './listproducts.service';

describe('ListproductsService', () => {
  let service: ListproductsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ListproductsService],
    }).compile();

    service = module.get<ListproductsService>(ListproductsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
