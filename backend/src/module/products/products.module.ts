import { Product } from './entities/product.entity';
import { Module } from '@nestjs/common';
import { ProductsService } from './products.service';
import { ProductsController } from './products.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ListaDetalle } from './entities/listadetalle.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Product, ListaDetalle])],
  controllers: [ProductsController],
  providers: [ProductsService],
})
export class ProductsModule {}
