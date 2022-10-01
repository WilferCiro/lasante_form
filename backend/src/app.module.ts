import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { HealtyModule } from './healty/healty.module';
import { ListsModule } from './lists/lists.module';
import { ListproductsModule } from './listproducts/listproducts.module';
import { PromotorsModule } from './promotors/promotors.module';
import { ListtypesModule } from './listtypes/listtypes.module';

@Module({
  imports: [UsersModule, HealtyModule, ListsModule, ListproductsModule, PromotorsModule, ListtypesModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
