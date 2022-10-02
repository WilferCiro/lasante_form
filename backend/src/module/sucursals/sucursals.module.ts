import { Sucursal } from '../sucursals/entities/sucursal.entity';
import { Module } from '@nestjs/common';
import { SucursalsService } from './sucursals.service';
import { SucursalsController } from './sucursals.controller';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([Sucursal])],
  controllers: [SucursalsController],
  providers: [SucursalsService],
})
export class SucursalsModule {}
