import { Test, TestingModule } from '@nestjs/testing';
import { HealtyController } from './healty.controller';
import { HealtyService } from './healty.service';

describe('HealtyController', () => {
  let controller: HealtyController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [HealtyController],
      providers: [HealtyService],
    }).compile();

    controller = module.get<HealtyController>(HealtyController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
