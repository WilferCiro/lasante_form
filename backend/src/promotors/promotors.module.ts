import { Module } from '@nestjs/common';
import { PromotorsService } from './promotors.service';
import { PromotorsController } from './promotors.controller';

@Module({
  controllers: [PromotorsController],
  providers: [PromotorsService]
})
export class PromotorsModule {}
