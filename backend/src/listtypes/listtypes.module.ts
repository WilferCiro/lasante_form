import { Module } from '@nestjs/common';
import { ListtypesService } from './listtypes.service';
import { ListtypesController } from './listtypes.controller';

@Module({
  controllers: [ListtypesController],
  providers: [ListtypesService]
})
export class ListtypesModule {}
