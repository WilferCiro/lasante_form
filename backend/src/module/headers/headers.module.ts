import { HeaderProduct } from './entities/header_product.entity';
import { Module } from '@nestjs/common';
import { HeadersService } from './headers.service';
import { HeadersController } from './headers.controller';
import { Header } from './entities/header.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([Header, HeaderProduct])],
  controllers: [HeadersController],
  providers: [HeadersService],
})
export class HeadersModule {}
