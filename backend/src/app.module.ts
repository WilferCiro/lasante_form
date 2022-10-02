import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './module/users/users.module';
import { HealtyModule } from './module/healty/healty.module';
import { PromotorsModule } from './module/promotors/promotors.module';
import { DistributorsModule } from './module/distributors/distributors.module';
import { ProductsModule } from './module/products/products.module';
import { BranchOfficeModule } from './module/branch_office/branch_office.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import config from './common/database/config';
import { AuthModule } from './module/auth/auth.module';
import { ClientsModule } from './module/clients/clients.module';

@Module({
  imports: [
    UsersModule,
    HealtyModule,
    PromotorsModule,
    DistributorsModule,
    ProductsModule,
    BranchOfficeModule,
    ClientsModule,
    TypeOrmModule.forRoot({ ...config, autoLoadEntities: true }),
    AuthModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
