import { Test, TestingModule } from '@nestjs/testing';
import { ListproductsController } from './listproducts.controller';
import { ListproductsService } from './listproducts.service';

describe('ListproductsController', () => {
  let controller: ListproductsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ListproductsController],
      providers: [ListproductsService],
    }).compile();

    controller = module.get<ListproductsController>(ListproductsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
