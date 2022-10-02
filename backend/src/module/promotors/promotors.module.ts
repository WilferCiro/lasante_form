import { Promotor } from './entities/promotor.entity';
import { Module } from '@nestjs/common';
import { PromotorsService } from './promotors.service';
import { PromotorsController } from './promotors.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
@Module({
  imports: [TypeOrmModule.forFeature([Promotor])],
  controllers: [PromotorsController],
  providers: [PromotorsService],
})
export class PromotorsModule {}
