import { Test, TestingModule } from '@nestjs/testing';
import { PromotorsController } from './promotors.controller';
import { PromotorsService } from './promotors.service';

describe('PromotorsController', () => {
  let controller: PromotorsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PromotorsController],
      providers: [PromotorsService],
    }).compile();

    controller = module.get<PromotorsController>(PromotorsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
