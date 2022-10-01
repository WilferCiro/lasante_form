import { Module } from '@nestjs/common';
import { ListproductsService } from './listproducts.service';
import { ListproductsController } from './listproducts.controller';

@Module({
  controllers: [ListproductsController],
  providers: [ListproductsService]
})
export class ListproductsModule {}
