import { Module } from '@nestjs/common';
import { HealtyService } from './healty.service';
import { HealtyController } from './healty.controller';

@Module({
  controllers: [HealtyController],
  providers: [HealtyService]
})
export class HealtyModule {}
