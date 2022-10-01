import { Test, TestingModule } from '@nestjs/testing';
import { ListtypesController } from './listtypes.controller';
import { ListtypesService } from './listtypes.service';

describe('ListtypesController', () => {
  let controller: ListtypesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ListtypesController],
      providers: [ListtypesService],
    }).compile();

    controller = module.get<ListtypesController>(ListtypesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
