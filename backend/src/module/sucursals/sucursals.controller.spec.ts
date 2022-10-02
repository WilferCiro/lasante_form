import { Test, TestingModule } from '@nestjs/testing';
import { SucursalsController } from './sucursals.controller';
import { SucursalsService } from './sucursals.service';

describe('SucursalsController', () => {
  let controller: SucursalsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [SucursalsController],
      providers: [SucursalsService],
    }).compile();

    controller = module.get<SucursalsController>(SucursalsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
